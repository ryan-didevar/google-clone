/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
    LOOKUP_API_KEY: process.env.LOOKUP_API_KEY,
    GO_API_KEY: process.env.GO_API_KEY,
    GO_CONTEXT_KEY: process.env.GO_CONTEXT_KEY,
  },
  images: {
    domains: ["*"],
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
