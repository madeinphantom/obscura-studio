'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface GlassCTAProps {
  className?: string;
  text?: string;
  href?: string;
}

export default function GlassCTA({ 
  className = '', 
  text = "Book a Discovery Call", 
  href = "#booking" 
}: GlassCTAProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <Link 
        href={href}
        className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#b7d1ea]/80 backdrop-blur-sm border border-white/70 hover:bg-[#b7d1ea]/20 hover:border-white/20 transition-all duration-300"
      >
        <span className="text-sm font-bold tracking-widest text-white uppercase">
          {text}
        </span>
        <ArrowRight className="w-4 h-4 text-[#b7d1ea] group-hover:translate-x-1 transition-transform duration-300" />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-[#b7d1ea]/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
      </Link>
    </div>
  );
}
