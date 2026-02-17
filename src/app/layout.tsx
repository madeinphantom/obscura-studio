import type { Metadata } from "next";
import { Libre_Baskerville, Fraunces } from "next/font/google";
import "./globals.css";
import Beams from "@/components/Beams";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://obscura.xyz"),
  title: "OBSCURA XYZ | AI-Native Firm",
  description:
    "AI-native firm building intelligent infrastructure for the modern firm.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "OBSCURA XYZ | AI-Native Firm",
    description:
      "AI-native firm building intelligent infrastructure for the modern firm.",
    url: "https://obscura.xyz/",
    siteName: "OBSCURA XYZ",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OBSCURA XYZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OBSCURA XYZ | AI-Native Firm",
    description:
      "AI-native firm building intelligent infrastructure for the modern firm.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  // Fraunces is a variable font, so we don't strictly need weights, 
  // but we can specify if needed. Default is usually fine for variable.
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${libreBaskerville.variable} ${fraunces.variable} font-serif antialiased bg-black text-white`}
      >
        <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
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
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
