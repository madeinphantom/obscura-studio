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
  title: "Obscura AI — Research Intelligence, Deployed",
  description:
    "We build intelligence systems that research, extract, and reason — so you don't have to. Document processing. Deal research. Agent systems.",
  openGraph: {
    title: "Obscura AI — Research Intelligence, Deployed",
    description:
      "Intelligence systems that research, extract, and reason. Document processing. Deal research. Agent systems.",
    url: "https://obscuraai.studio",
    siteName: "Obscura AI",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obscura AI — Research Intelligence, Deployed",
    description:
      "Intelligence systems that research, extract, and reason. Document processing. Deal research. Agent systems.",
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
