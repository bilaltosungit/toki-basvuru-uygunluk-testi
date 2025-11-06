import type { NextConfig } from "next";

// GitHub Pages için repo adını otomatik algıla
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const basePath = process.env.NODE_ENV === 'production' && repoName ? `/${repoName}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: basePath,
};

export default nextConfig;
