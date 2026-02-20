import type { Metadata } from "next";
import GlassHeader from "@/components/GlassHeader";
import GlassFooter from "@/components/GlassFooter";
import FirmHero from "@/components/firm/FirmHero";
import FirmLanes from "@/components/firm/FirmLanes";
import FirmWhyObscura from "@/components/firm/FirmWhyObscura";
import FirmAnchor from "@/components/firm/FirmAnchor";
import FirmAuthority from "@/components/firm/FirmAuthority";
import FirmCaseStudy from "@/components/firm/FirmCaseStudy";
import FirmSystem from "@/components/firm/FirmSystem";
import FirmRiskReversal from "@/components/firm/FirmRiskReversal";
import FirmServices from "@/components/firm/FirmServices";
import FirmFAQ from "@/components/firm/FirmFAQ";
import FirmBooking from "@/components/firm/FirmBooking";

export const metadata: Metadata = {
  title: "Private AI Infrastructure for the Modern Firm & Its Leaders",
  alternates: {
    canonical: "https://obscuraai.xyz",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <GlassHeader />
      <FirmHero />
      <FirmLanes />
      <FirmWhyObscura />
      <FirmAnchor />
      <FirmAuthority />
      <FirmCaseStudy />
      <FirmSystem />
      <FirmRiskReversal />
      <FirmServices />
      <FirmBooking />
      <FirmFAQ />
      <GlassFooter />
    </main>
  );
}
