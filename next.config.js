/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "default", // You can use this if you're using local images.
    domains: ["utfs.io", "upload.wikimedia.org", "equestrian-web.web.app"], // Add remote domains if necessary.
    unoptimized: true,
  },
};

module.exports = nextConfig;
