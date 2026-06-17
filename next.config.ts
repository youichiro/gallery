import type { NextConfig } from "next";

const imageBase = process.env.NEXT_PUBLIC_IMAGE_BASE_URL?.trim();

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 defaults images.qualities to [75]; the hero and lightbox
    // images use quality={100}, so the allowed list must include it.
    qualities: [75, 100],
    // 画像を R2 などの外部ホストに置く場合、その host からの最適化を許可する。
    remotePatterns: imageBase
      ? [{ protocol: "https", hostname: new URL(imageBase).hostname }]
      : [],
  },
};

export default nextConfig;
