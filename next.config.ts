import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Imagery is pre-optimised to WebP in /public/media, so we serve it as-is.
  images: { unoptimized: true },
  poweredByHeader: false,
  // Let browsers and CDNs reuse media for 30 days instead of re-checking on every visit.
  async headers() {
    return [
      {
        source: "/media/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
    ];
  },
};

export default nextConfig;
