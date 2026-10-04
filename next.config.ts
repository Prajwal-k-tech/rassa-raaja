import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  ...(isGitHubPages && {
    output: "export",
    basePath: "/rassa-raaja",
    assetPrefix: "/rassa-raaja/",
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
