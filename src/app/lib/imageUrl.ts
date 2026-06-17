// 画像の配信元 URL を前置する。画像は Cloudflare R2 に置き、
// NEXT_PUBLIC_IMAGE_BASE_URL（R2 の公開 URL）から配信する。
const base = (process.env.NEXT_PUBLIC_IMAGE_BASE_URL ?? "").replace(/\/$/, "");

if (!base) {
  throw new Error(
    "NEXT_PUBLIC_IMAGE_BASE_URL is not set. Images are served from Cloudflare R2, so it must be configured (.env locally / Vercel project env).",
  );
}

export const imageUrl = (path: string) => `${base}${path}`;
