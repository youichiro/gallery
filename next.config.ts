import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 defaults images.qualities to [75]; the hero and lightbox
  // images use quality={100}, so the allowed list must include it.
  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;
