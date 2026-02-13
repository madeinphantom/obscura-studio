import React from "react";
import { Phone, FileText, Code, Rocket, Settings, Lightbulb, GitFork, ShieldAlert, Brain, Scan } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import GlassCTA from "@/components/GlassCTA";
import SectionHeader from "@/components/shared/SectionHeader";
import FrameworkGrid from "@/components/shared/FrameworkGrid";

export default function FirmSystem() {
  const steps = [
    {
      icon: <Phone className="w-6 h-6 text-black" />,
      step: "01",
      title: "Discovery",
      description: "30 minutes. We identify high-value friction points where intelligence systems yield the highest ROI. No pitch. Just problem solving."
    },
    {
      icon: <FileText className="w-6 h-6 text-black" />,
      step: "02",
      title: "Scope",
      description: "Fixed price. Fixed timeline. No surprises. You get a clear roadmap of exactly what we're building and why."
    },
    {
      icon: <Code className="w-6 h-6 text-black" />,
      step: "03",
      title: "Build",
      description: "Rapid development. We deploy your system in a private sandbox within 7-14 days. Iterate fast, ship faster."
    },
    {
      icon: <Rocket className="w-6 h-6 text-black" />,
      step: "04",
      title: "Deploy",
      description: "Production-ready integration. We handle the handover, documentation, and team training. It's yours."
    },
    {
      icon: <Settings className="w-6 h-6 text-black" />,
      step: "05",
      title: "Refine",
      description: "30-day tuning period included. We monitor, optimise, and adjust. Then retainer begins for ongoing support."
    }
  ];

  const frameworks = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "First Principles",
      description: "Strip to fundamentals. Rebuild from truth, not assumption."
    },
    {
      icon: <GitFork className="w-6 h-6" />,
      title: "Second-Order Effects",
      description: "What happens after what happens? We map the chain reactions others miss."
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "Inversion",
      description: "What would make this fail? We stress-test every thesis before you act on it."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Psychological Models",
      description: "What biases are at play? What's driving behaviour? We surface the human layer."
    },
    {
      icon: <Scan className="w-6 h-6" />,
      title: "Pattern Recognition",
      description: "What does this look like across similar situations, markets, and outcomes?"
    }
  ];

  return (
    <section id="the-system" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* How It Works Section */}
        <div className="mb-32">
          <SectionHeader
            badge="The System"
            title={<>From first call to fully deployed.<br />&apos;s the process.</>}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
            
            {steps.map((item, index) => (
               <GlassCard key={index} className="p-6 flex flex-col items-start relative z-10 h-full group hover:bg-white/[0.02] transition-colors duration-300">
                 <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center mb-6 border border-white/10 shadow-lg group-hover:bg-[#b7d1ea]/10 group-hover:border-[#b7d1ea]/30 transition-all duration-300">
                   {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6 text-white group-hover:text-[#b7d1ea] transition-colors duration-300" })}
                 </div>
                 <span className="text-xs font-bold tracking-[0.2em] text-[#b7d1ea] mb-2 opacity-80">STEP {item.step}</span>
                 <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#b7d1ea] transition-colors duration-300">{item.title}</h3>
                 <p className="text-sm text-white/60 leading-relaxed font-light">
                   {item.description}
                 </p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Thinking Layer Section */}
        <div>
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
              The Thinking Layer.
            </h2>
            <p className="text-lg text-white/50 font-light max-w-2xl leading-relaxed">
              Most AI just retrieves data. We build systems that reason with it.<br />
              Using <span className="text-[#b7d1ea]">mental models</span>, not just prompts.
            </p>
          </div>

          <FrameworkGrid frameworks={frameworks} columns={5} />
        </div>

        <GlassCTA className="mt-16" />
      </div>
    </section>
  );
}
