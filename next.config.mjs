/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.happyscribe.com",
      },
    ],
  },
};

export default nextConfig;
