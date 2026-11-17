import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes a plain HTML/CSS/JS site to `out/`
  // that any host (Hostinger, Cloudflare Pages, GitHub Pages…) can serve.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
