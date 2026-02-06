import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Beams from "@/components/Beams";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Obscura AI Studio — AI Workflows & Automation for Your Business",
  description:
    "We build custom AI workflows, automations, and dashboards for businesses. Book a free discovery call today.",
  openGraph: {
    title: "Obscura AI Studio — AI Workflows & Automation for Your Business",
    description:
      "We build custom AI workflows, automations, and dashboards for businesses. Book a free discovery call today.",
    url: "https://obscuraai.studio",
    siteName: "Obscura AI Studio",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obscura AI Studio — AI Workflows & Automation for Your Business",
    description:
      "We build custom AI workflows, automations, and dashboards for businesses. Book a free discovery call today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${libreBaskerville.variable} font-serif antialiased bg-black text-white`}>
        <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
          {/* @ts-ignore - Beams is a jsx component */}
          <Beams
            beamWidth={2.5}
            beamHeight={20}
            beamNumber={11}
            lightColor="#b7d1ea"
            speed={1}
            noiseIntensity={1}
            scale={0.2}
            rotation={45}
          />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}

