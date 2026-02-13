import React from "react";
import { Phone, FileText, Code, Rocket, Settings } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import GlassCTA from "@/components/GlassCTA";

export default function FirmHowItWorks() {
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

  return (
    <section id="how-it-works" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">From first call to fully deployed.<br />Here&apos;s the process.</h2>
        </div>
        
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

        <GlassCTA className="mt-16" />
      </div>
    </section>
  );
}
