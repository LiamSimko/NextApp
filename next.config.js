/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "marketplace.canva.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
