import type { Metadata } from "next";
import GlassHeader from "@/components/GlassHeader";
import GlassFooter from "@/components/GlassFooter";
import StudioHero from "@/components/creative-studio/StudioHero";
import StudioProblem from "@/components/creative-studio/StudioProblem";
import StudioServices from "@/components/creative-studio/StudioServices";
import StudioHowItWorks from "@/components/creative-studio/StudioHowItWorks";
import StudioPricing from "@/components/creative-studio/StudioPricing";
import StudioCTA from "@/components/creative-studio/StudioCTA";
import StudioBooking from "@/components/creative-studio/StudioBooking";

export const metadata: Metadata = {
  title: "AI Creative Studio | Obscura",
  description: "Studio-quality product mockups, ad creatives, and video ads — delivered in hours using AI. No agencies. No waiting.",
  openGraph: {
    title: "AI Creative Studio — Obscura",
    description: "Product mockups, ad creatives, and video ads. Delivered same-day. Powered by AI.",
  },
};

export default function CreativeStudioPage() {
  return (
    <main className="min-h-screen">
      <GlassHeader />
      <StudioHero />
      <StudioProblem />
      <StudioServices />
      <StudioHowItWorks />
      <StudioPricing />
      <StudioCTA />
      <StudioBooking />
      <GlassFooter />
    </main>
  );
}
