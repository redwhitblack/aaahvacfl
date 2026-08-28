import type { NextConfig } from "next";

const isStatic =
  process.env.STATIC_EXPORT === "1" ||
  process.env.CF_PAGES === "1" ||
  process.env.GITHUB_ACTIONS === "1";

const nextConfig: NextConfig = {
  ...(isStatic
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
