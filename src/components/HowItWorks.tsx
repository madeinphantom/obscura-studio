import React from "react";
import { Phone, Code, Rocket } from "lucide-react";
import GlassCard from "@/components/GlassCard";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Phone className="w-6 h-6 text-black" />,
      step: "01",
      title: "Discovery Call",
      description: "30 minutes. No pitch, no pressure. We learn about your business, your pain points, and where AI can make the biggest impact. You walk away with a clear plan, whether you hire us or not."
    },
    {
      icon: <Code className="w-6 h-6 text-black" />,
      step: "02",
      title: "Build Day",
      description: "We show up, remotely or in person, and build your custom AI system in a single focused session. By the end of the day, it's live and working."
    },
    {
      icon: <Rocket className="w-6 h-6 text-black" />,
      step: "03",
      title: "Launch & Support",
      description: "We hand over everything. Walk you through how it works. And if you want ongoing support, we're a message away."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">From first call to fully built.<br />Here's how it works.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) - Adjusted for dark mode */}
          <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
          
          {steps.map((item, index) => (
            <GlassCard key={index} className="p-8 flex flex-col items-start relative z-10 h-full group hover:bg-white/[0.02] transition-colors duration-300">
               <div className="w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center mb-8 border border-white/10 shadow-lg group-hover:bg-[#b7d1ea]/10 group-hover:border-[#b7d1ea]/30 transition-all duration-300">
                 {/* @ts-expect-error - Lucide icons pass props but TS is strict about ReactElement */}
                 {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8 text-white group-hover:text-[#b7d1ea] transition-colors duration-300" })}
               </div>
               <span className="text-xs font-bold tracking-[0.2em] text-[#b7d1ea] mb-3 opacity-80">STEP {item.step}</span>
               <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#b7d1ea] transition-colors duration-300">{item.title}</h3>
               <p className="text-white/60 leading-relaxed font-light">
                 {item.description}
               </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
