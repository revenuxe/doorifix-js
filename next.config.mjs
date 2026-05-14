/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: "/_next/static/chunks/:path*",
          destination: "/stale-next-chunk.js",
        },
      ],
    };
  },
};

export default nextConfig;
