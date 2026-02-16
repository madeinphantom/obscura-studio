'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import GlassCTA from '@/components/GlassCTA';

export default function FirmAnchor() {
  const [count, setCount] = useState(0);
  const targetAmount = 200000;

  useEffect(() => {
    const duration = 4000; // 4 seconds
    const steps = 120;
    const increment = targetAmount / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetAmount) {
        setCount(targetAmount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const socialProof = [
    "Skipped a $150k hire. ROI in month one.",
    "Streamlined research from 2 days to 2 hours.",
    "Saved 15 hours/week across the team.",
    "Deployed in 48 hours. Zero training needed.",
    "Reclaimed $10k/month in lost capacity."
  ];

  const testimonials = [
    {
      quote: "We were drowning in customer support tickets. Obscura built us an AI triage system that cut response time by 60%. Shipped in a day.",
      author: "Jennifer Klou",
      role: "Founder",
      company: "Money Mindful",
      location: "London"
    },
    {
      quote: "Needed our research docs searchable and queryable. They built a custom AI assistant that actually understands our domain. We stopped digging through 100+ PDFs.",
      author: "Naphtali Walz",
      role: "CTO",
      company: "NEXUS AI",
      location: "Hamburg"
    }
  ];

  return (
    <section id="economics" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">The Economics</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            Build vs <span className="font-fraunces italic font-light">Deploy.</span>
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 relative">
          
          {/* Dashed Vertical Divider (hidden on mobile) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-[#b7d1ea]/20" />

          {/* Left Column: The Anchor */}
          <div className="lg:pr-12">
            <div className="space-y-12">
              
              {/* Build Internally */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white/60 uppercase tracking-wide">Build Internally / Hire</h3>
                <div className="space-y-2">
                  <div className="text-5xl md:text-6xl font-bold text-white/90">
                    ${count.toLocaleString()}<span className="text-2xl text-white/40">/year</span>
                  </div>
                  <div className="text-xl text-white/50">6 months</div>
                </div>
              </div>

              {/* Deploy Obscura */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-[#b7d1ea] uppercase tracking-wide">Deploy Obscura</h3>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-[#b7d1ea]">
                    A fraction of the cost
                  </div>
                  <div className="text-xl text-[#b7d1ea]/80">Week 1</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Social Proof Stream */}
          <div className="lg:pl-12">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white/40 uppercase tracking-wide mb-6">What clients are saying</h3>
              
              {socialProof.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.05] hover:border-[#b7d1ea]/20 transition-colors duration-300 cursor-default"
                >
                  <p className="text-white/70 font-light leading-relaxed">{message}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Testimonials */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <GlassCard key={index} className="p-10 h-full bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300">
               <div className="flex flex-col justify-between h-full">
                 <div>
                   <Quote className="w-10 h-10 text-[#b7d1ea] opacity-50 mb-6" />
                   <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-8 italic">
                     &quot;{item.quote}&quot;
                   </p>
                 </div>
                 <div className="flex items-center gap-4 mt-auto">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#b7d1ea]/20 to-blue-600/20 border border-white/10 shrink-0" />
                   <div>
                     <p className="text-white font-semibold">{item.author}</p>
                     <p className="text-sm text-white/60 line-clamp-1">
                       {item.role}, {item.company} <span className="text-white/30 mx-1">•</span> {item.location}
                     </p>
                   </div>
                 </div>
               </div>
            </GlassCard>
          ))}
        </div>

        <GlassCTA className="mt-16" />
      </div>
    </section>
  );
}
