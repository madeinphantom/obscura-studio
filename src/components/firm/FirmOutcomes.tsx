import React from "react";
import { Building2, FileSearch, Cpu } from "lucide-react";
import GlassCard from "@/components/GlassCard";

export default function FirmOutcomes() {
  const outcomes = [
    {
      icon: <Building2 className="w-6 h-6 text-[#b7d1ea]" />,
      label: "Deal Research System",
      headline: "200+ Deal Memos. One Morning.",
      description: "A property investor needed to evaluate opportunities across 3 markets. Our system ingests listings rankings, flags risks, and delivers a daily briefing. What took a team of analysts a week now runs before breakfast."
    },
    {
      icon: <FileSearch className="w-6 h-6 text-[#b7d1ea]" />,
      label: "Document Intelligence",
      headline: "Instant Recall. 4 Years of Data.",
      description: "A consulting firm had thousands of client reports buried in PDFs. We built a pipeline that extracts key metrics, surfaces trends, and answers natural language questions across the entire archive instantly."
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#b7d1ea]" />,
      label: "Agent System",
      headline: "Zero Manual Research. 100% Signal.",
      description: "A professional services firm replaced manual pre-call research with an autonomous briefing agent. It runs every morning — pulling context, summaries, and flagging opportunities. Zero manual input."
    }
  ];

  return (
    <section id="outcomes" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">What This Looks Like</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            Real outcomes.<br />Not feature lists.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <GlassCard key={index} className="flex flex-col items-start p-8 group h-full hover:bg-white/[0.02] transition-colors duration-300">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#b7d1ea]/30 transition-colors duration-300 mb-4">
                {React.cloneElement(outcome.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6 text-[#b7d1ea] group-hover:scale-110 transition-transform duration-300" })}
              </div>
              <span className="text-xs font-bold tracking-widest text-[#b7d1ea]/60 uppercase mb-3">{outcome.label}</span>
              <h3 className="text-xl font-semibold text-white tracking-wide mb-4">{outcome.headline}</h3>
              <p className="text-white/50 font-light leading-relaxed text-sm">
                {outcome.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
