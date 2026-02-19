import React from "react";
import { Search, FileText, Bot } from "lucide-react";
import GlassCard from "@/components/GlassCard";

export default function FirmWhyObscura() {
  const points = [
    {
      icon: <Search className="w-8 h-8 text-[#b7d1ea]" />,
      title: "Research takes days or weeks.",
      description: "Competitive intel. Market analysis. Deal research. Your team spends 40+ hours per week gathering what AI can surface at lightning speed."
    },
    {
      icon: <FileText className="w-8 h-8 text-[#b7d1ea]" />,
      title: "Your data is buried in PDFs.",
      description: "Contracts, filings, reports: scattered across systems nobody searches. We extract, structure, and surface the intelligence you're already sitting on."
    },
    {
      icon: <Bot className="w-8 h-8 text-[#b7d1ea]" />,
      title: "Hiring might not solve this.",
      description: "Adding headcount means months to onboard, $200k+ per hire, and the same manual bottlenecks at a higher cost."
    }
  ];

  return (
    <section id="why-obscura" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">The Problem</span>
          </div>
          <p className="text-sm font-bold tracking-widest text-[#b7d1ea]/60 uppercase mb-4">
            Your systems weren&apos;t built for how fast you move.
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            You want to join the AI race,<br />but don&apos;t know how.
          </h2>
          <p className="text-xl text-white/60 font-light leading-relaxed">
            Most leaders and firms know AI can transform how they operate. But the gap between knowing and doing is where time and money disappear. You need systems, not experiments.
            <br /><br />
            <span className="text-[#b7d1ea]">That&apos;s what we build.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {points.map((point, index) => (
            <GlassCard key={index} className="flex flex-col items-start space-y-4 p-8 group h-full hover:bg-white/[0.02] transition-colors duration-300">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#b7d1ea]/30 transition-colors duration-300">
                {React.cloneElement(point.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8 text-[#b7d1ea] group-hover:scale-110 transition-transform duration-300" })}
              </div>
              <h3 className="text-xl font-semibold text-white tracking-wide mt-4">{point.title}</h3>
              <p className="text-white/60 font-light leading-relaxed">
                {point.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
