// ギャラリーの画像一覧を自動生成する。
// - R2 の認証情報があれば R2 を一覧して src/app/data/images.json を生成（prebuild で実行）
// - 認証情報が無ければ既存の images.json を温存（デプロイを壊さない）
//
// 各画像の「向き」は実寸（EXIF回転込み）から、並びは EXIF 撮影日時から自動決定する。
import "dotenv/config";
import { promises as fs } from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";
import exifr from "exifr";

const OUT = path.join("src", "app", "data", "images.json");
const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;
const YEAR_RE = /^images\/(\d{4})\//; // images/2025/... の 4桁を年として扱う（images/top/ は対象外）
const RANGE_BYTES = 512 * 1024;
const CONCURRENCY = 8;

const env = process.env;
const base = (env.NEXT_PUBLIC_IMAGE_BASE_URL ?? "").replace(/\/$/, "");
const r2 = {
  accountId: env.R2_ACCOUNT_ID,
  accessKeyId: env.R2_ACCESS_KEY_ID,
  secretAccessKey: env.R2_SECRET_ACCESS_KEY,
  bucket: env.R2_BUCKET,
};
const hasR2 = base && r2.accountId && r2.accessKeyId && r2.secretAccessKey && r2.bucket;

const isRotated = (o) => o >= 5 && o <= 8;

async function analyze(buf, fallbackMs) {
  const dim = imageSize(buf);
  let exif = null;
  try {
    exif = await exifr.parse(buf, {
      translateValues: false,
      pick: ["Orientation", "DateTimeOriginal", "CreateDate"],
    });
  } catch {
    // EXIF が無い/壊れていても続行
  }
  const orientation = exif?.Orientation ?? 1;
  const [w, h] = isRotated(orientation) ? [dim.height, dim.width] : [dim.width, dim.height];
  const vertical = h > w;
  const raw = exif?.DateTimeOriginal ?? exif?.CreateDate ?? null;
  const dateMs = raw ? new Date(raw).getTime() : (fallbackMs ?? 0);
  return { vertical, dateMs };
}

async function mapLimit(items, limit, fn) {
  const out = new Array(items.length);
  let i = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++;
      out[idx] = await fn(items[idx], idx);
    }
  });
  await Promise.all(workers);
  return out;
}

// R2 を一覧し {key, fallbackMs, getBuffer} の配列を返す
async function listFromR2() {
  const { S3Client, ListObjectsV2Command } = await import("@aws-sdk/client-s3");
  const s3 = new S3Client({
    region: "auto",
    endpoint: `https://${r2.accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: r2.accessKeyId, secretAccessKey: r2.secretAccessKey },
  });
  const items = [];
  let ContinuationToken;
  do {
    const res = await s3.send(
      new ListObjectsV2Command({ Bucket: r2.bucket, Prefix: "images/", ContinuationToken }),
    );
    for (const o of res.Contents ?? []) {
      if (!YEAR_RE.test(o.Key) || !IMAGE_EXT.test(o.Key)) continue;
      items.push({
        key: o.Key,
        fallbackMs: o.LastModified ? new Date(o.LastModified).getTime() : 0,
        getBuffer: async () => {
          const r = await fetch(`${base}/${o.Key}`, { headers: { Range: `bytes=0-${RANGE_BYTES - 1}` } });
          if (!r.ok) throw new Error(`HTTP ${r.status} fetching ${o.Key}`);
          return Buffer.from(await r.arrayBuffer());
        },
      });
    }
    ContinuationToken = res.IsTruncated ? res.NextContinuationToken : undefined;
  } while (ContinuationToken);
  return items;
}

async function main() {
  if (!hasR2) {
    const missing = [
      !base && "NEXT_PUBLIC_IMAGE_BASE_URL",
      !r2.accountId && "R2_ACCOUNT_ID",
      !r2.accessKeyId && "R2_ACCESS_KEY_ID",
      !r2.secretAccessKey && "R2_SECRET_ACCESS_KEY",
      !r2.bucket && "R2_BUCKET",
    ].filter(Boolean);
    console.warn(`[manifest] missing env: ${missing.join(", ")}; keeping existing images.json`);
    return;
  }
  console.log("[manifest] source: R2 (ListObjectsV2)");
  const items = await listFromR2();

  if (items.length === 0) {
    console.warn("[manifest] no images found in R2; keeping existing images.json");
    return;
  }

  const analyzed = await mapLimit(items, CONCURRENCY, async (it) => {
    try {
      const buf = await it.getBuffer();
      const { vertical, dateMs } = await analyze(buf, it.fallbackMs);
      const year = it.key.match(YEAR_RE)[1];
      return { year, src: `/${it.key}`, vertical, dateMs };
    } catch (e) {
      console.warn(`[manifest] skip ${it.key}: ${e.message}`);
      return null;
    }
  });

  const byYear = {};
  for (const a of analyzed.filter(Boolean)) {
    (byYear[a.year] ??= []).push(a);
  }
  for (const year of Object.keys(byYear)) {
    byYear[year].sort((x, y) => x.dateMs - y.dateMs); // 撮影日時の古い順
    byYear[year] = byYear[year].map(({ src, vertical }) => ({ src, vertical }));
  }

  await fs.writeFile(OUT, JSON.stringify(byYear, null, 2) + "\n");
  const total = Object.values(byYear).reduce((n, a) => n + a.length, 0);
  console.log(`[manifest] wrote ${OUT}: ${total} images across ${Object.keys(byYear).length} year(s)`);
}

main().catch((e) => {
  console.error("[manifest] failed:", e);
  process.exit(1);
});
