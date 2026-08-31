/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Real Figma assets can be swapped in here later (local files in /public
    // or a remote CDN pattern once the backend serves them).
    remotePatterns: [],
  },
};

export default nextConfig;
