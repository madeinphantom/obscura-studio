'use client';

import React from 'react';
import GlassCard from '@/components/GlassCard';
import { Quote } from 'lucide-react';
import GlassCTA from '@/components/GlassCTA';

export default function SocialProof() {
  const testimonials = [
    {
      quote: "We were drowning in customer support tickets. Obscura built us an AI triage system that cut response time by 60%. Shipped in a day.",
      author: "Jennifer Klou",
      role: "Founder",
      company: "Money Mindful",
      location: "London"
    },
    {
      quote: "Needed our research docs searchable and queryable. They built a custom AI assistant that actually understands our domain. No more digging through 100+ PDFs.",
      author: "Naphtali Walz",
      role: "CTO",
      company: "NEXUS AI",
      location: "Hamburg"
    }
  ];

  return (
    <section id="social-proof" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">Early Adopters</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Built for people who move fast.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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

        <GlassCTA />
      </div>
    </section>
  );
}
