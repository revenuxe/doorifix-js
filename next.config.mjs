import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/bengaluru/:path*", destination: "/bangalore/:path*", permanent: true }];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default (phase) => ({
  ...nextConfig,
  // Keep production builds from overwriting a running dev server's chunks.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
});
