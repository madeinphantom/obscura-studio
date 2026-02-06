import GlassHeader from "@/components/GlassHeader";
import GlassFooter from "@/components/GlassFooter";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Booking from "@/components/Booking";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <main className="min-h-screen">
      <GlassHeader />
      <Hero />
      <PainPoints />
      <Services />
      <HowItWorks />
      <SocialProof />
      <Booking />
      <GlassFooter />
    </main>
  );
}
