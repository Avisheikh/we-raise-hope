import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Allow phones/laptops on the LAN to load Next.js dev assets (HMR, /_next/*)
  allowedDevOrigins: [
    "192.168.*.*",
    "10.*.*.*",
    "172.*.*.*",
    "*.local",
  ],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
