import GlassHeader from "@/components/GlassHeader";
import GlassFooter from "@/components/GlassFooter";
import FirmHero from "@/components/firm/FirmHero";
import FirmWhyObscura from "@/components/firm/FirmWhyObscura";
import FirmAnchor from "@/components/firm/FirmAnchor";
import FirmAuthority from "@/components/firm/FirmAuthority";
import FirmCaseStudy from "@/components/firm/FirmCaseStudy";
import FirmSystem from "@/components/firm/FirmSystem";
import FirmRiskReversal from "@/components/firm/FirmRiskReversal";
import FirmServices from "@/components/firm/FirmServices";
import FirmBooking from "@/components/firm/FirmBooking";

export default function Home() {
  return (
    <main className="min-h-screen">
      <GlassHeader />
      <FirmHero />
      <FirmWhyObscura />
      <FirmAnchor />
      <FirmAuthority />
      <FirmCaseStudy />
      <FirmSystem />
      <FirmRiskReversal />
      <FirmServices />
      <FirmBooking />
      <GlassFooter />
    </main>
  );
}
