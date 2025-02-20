import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
    images: {
        domains: ["cdn.rebrickable.com"],
    },
    distDir: 'build',
}

export default nextConfig;
