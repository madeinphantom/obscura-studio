import type { Metadata } from "next";
import GlassHeader from "@/components/GlassHeader";
import GlassFooter from "@/components/GlassFooter";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Booking from "@/components/Booking";
import SocialProof from "@/components/SocialProof";

export const metadata: Metadata = {
  title: "Concierge Services | Obscura AI",
  description:
    "AI sprints, system builds, and managed support. Visible pricing. Fast turnaround. Book now.",
  openGraph: {
    title: "Concierge Services — Obscura AI",
    description:
      "AI sprints, system builds, and managed support. Visible pricing. Fast turnaround.",
  },
};

export default function ConciergePage() {
  return (
    <main className="min-h-screen">
      <GlassHeader />
      <Hero />
      <PainPoints />
      <SocialProof />
      <Services />
      <HowItWorks />
      <Booking />
      <GlassFooter />
    </main>
  );
}
