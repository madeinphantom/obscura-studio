'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface GlassCTAProps {
  className?: string;
  text?: string;
  subtext?: string;
  href?: string;
}

export default function GlassCTA({ 
  className = '', 
  text = "Ready to deploy?",
  subtext = "Limited engagements available. We work with 3 new clients per month.",
  href = "#booking" 
}: GlassCTAProps) {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {subtext && (
        <p className="text-sm text-white/40 font-light tracking-wide text-center">
          {subtext}
        </p>
      )}
      <Link 
        href={href}
        className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#b7d1ea]/80 backdrop-blur-sm border border-white/70 hover:bg-[#b7d1ea]/20 hover:border-white/20 transition-all duration-300"
      >
        <span className="text-sm font-bold tracking-widest text-black uppercase">
          {text}
        </span>
        <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform duration-300" />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-[#b7d1ea]/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
      </Link>
    </div>
  );
}
