import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rassa-raaja",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
