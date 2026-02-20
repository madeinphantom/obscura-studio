import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fix Turbopack workspace root inference — correct key for Next.js 15+
  turbopack: {
    root: ".",
  },

  async redirects() {
    return [
      // CREATIVE STUDIO SHUTDOWN — 2026-02-19
      // Service paused. Page preserved at src/app/creative-studio.
      // To reactivate: remove this redirect entry.
      {
        source: "/creative-studio",
        destination: "/404",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
