'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Building2, FileSearch, Cpu } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import GlassCTA from '@/components/GlassCTA';

export default function FirmCaseStudy() {
  const manualStack = [
    "3-4 freelancers coordinated over Slack",
    "Average revision cycles: 4-6 per asset",
    "Time to first deliverable: 8-14 days",
    "Variation capacity: whatever the human can produce"
  ];

  const obscura = [
    "Single brief → automated pipeline",
    "Infinite variations generated in parallel",
    "First asset: under 48 hour",
    "Every iteration brand-locked by default"
  ];

  const outcomes = [
    {
      icon: <Building2 className="w-6 h-6 text-[#b7d1ea]" />,
      label: "Deal Research System",
      headline: "200+ Deal Memos. One Morning.",
      description: "Property investors need to evaluate opportunities across multiple markets. Our system ingests listings, flags risks, and delivers a daily briefing. What took a team of analysts a week now runs before breakfast."
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
    <section id="case-study" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">The Transformation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
            Manual vs Obscura.
          </h2>
        </div>

        {/* Two-Column Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Before: The Manual Stack */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-white/60 mb-6 uppercase tracking-wide">
              The Manual Stack
            </h3>
            <div className="space-y-4">
              {manualStack.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-white/40 shrink-0 mt-0.5" />
                  <p className="text-white/50 font-light leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* After: Obscura */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-[#b7d1ea]/20 bg-[#b7d1ea]/[0.05] backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-[#b7d1ea] mb-6 uppercase tracking-wide">
              Obscura
            </h3>
            <div className="space-y-4">
              {obscura.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#b7d1ea] shrink-0 mt-0.5" />
                  <p className="text-white/80 font-light leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Outcomes Section */}
        <div className="mt-24">
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Real outcomes for your operations.
            </h3>
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

        <GlassCTA className="mt-16" />
      </div>
    </section>
  );
}
