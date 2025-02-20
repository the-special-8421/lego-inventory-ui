import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    distDir: 'build',

};

module.exports = {
    images: {
        domains: ["cdn.rebrickable.com"],
    },
}

export default nextConfig;
