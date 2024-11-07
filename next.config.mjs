/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    dynamicIO: true,
  },
};

export default nextConfig;
