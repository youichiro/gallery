// 画像の配信元を切り替える。NEXT_PUBLIC_IMAGE_BASE_URL が未設定なら public/ から、
// 設定すれば R2 などの CDN から配信する。パス文字列はそのまま使うので、
// Gallery の向き判定（includes("vertical")）はこれまでどおり動く。
const base = (process.env.NEXT_PUBLIC_IMAGE_BASE_URL ?? "").replace(/\/$/, "");

export const imageUrl = (path: string) => `${base}${path}`;
