# youichiro's gallery

個人の写真ギャラリー。Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4。Vercel にデプロイし、画像は Cloudflare R2 から配信する。

ルート構成: `/` はトップページ（全画面ヒーロー画像 + ギャラリーへの導線）、`/gallery` が写真ギャラリー本体。

## 開発

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 本番ビルド
npm run lint
```

## 写真を追加する

画像一覧・向き・並び・年タブは、ビルド時に R2 を走査して自動生成されます（`scripts/generate-image-manifest.mjs` → `src/app/data/images.json`）。コードを手で編集する必要はありません。

1. **R2 にアップロード** — Cloudflare R2 の `gallery/images/{年}/` に画像を置く（例: `gallery/images/2026/foo.jpg`）。
   - `landscape` / `vertical` のフォルダ分けは不要（向きは実寸から自動判定）。
   - 並びは EXIF の撮影日時順。年タブは `gallery/images/{年}/` から自動生成。
   - ギャラリーのヒーロー画像は `gallery/images/top/`（`top.jpg` = PC 用、`top_mobile.jpg` = モバイル用）。
   - トップページ（`/`）のヒーロー画像は `top/images/`（`top.jpg` = PC 用、`top_mobile.jpg` = モバイル用）。
2. **再デプロイ** — Vercel の Deployments → Redeploy（または Deploy Hook を叩く）。
   - ⚠️ アップロードしただけでは反映されません。再デプロイ時に R2 を再走査して反映されます。

ローカルで反映を確認したい場合は `npm run manifest` で `images.json` を再生成できます。

## 環境変数

Vercel（および手元で `npm run manifest` を使う場合は `.env`）に設定する。

| 変数 | 用途 |
|---|---|
| `NEXT_PUBLIC_IMAGE_BASE_URL` | R2 の公開 URL（配信元）。例: `https://pub-xxxx.r2.dev` |
| `R2_ACCOUNT_ID` | ビルド時に R2 を一覧（S3 API）するための認証情報 |
| `R2_ACCESS_KEY_ID` | 〃 |
| `R2_SECRET_ACCESS_KEY` | 〃 |
| `R2_BUCKET` | バケット名（`youichiro-me`） |
