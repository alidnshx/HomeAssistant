import type { NextConfig } from "next";

// Set by the GitHub Actions workflow to "/<repo-name>" so the site works
// correctly as a project page at https://<owner>.github.io/<repo-name>/.
// Left empty for local development and any other hosting target.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
