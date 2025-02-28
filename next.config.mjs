/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "assets.aceternity.com",
      },
      {
        hostname: "personal-website-bay-sigma.vercel.app",
      },
    ],
  },
};

export default nextConfig;
