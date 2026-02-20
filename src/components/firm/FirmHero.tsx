"use client";

import React from "react";

export default function FirmHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="flex flex-col items-start justify-end min-h-screen px-6 pb-24 md:px-12 md:pb-32 text-left max-w-[100vw] overflow-hidden relative">
      <div className="max-w-4xl space-y-8 z-10">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-2">
          <span className="text-sm font-bold tracking-widest text-[#b7d1ea] uppercase">AI-Native Firm</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#b7d1ea] leading-[1.1]">
          Private AI Infrastructure For<br />
          <span className="font-fraunces italic font-light text-[#b7d1ea]">The Modern Firm.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-xl font-light leading-relaxed">
          Intelligence that never sleeps, for firms and the leaders behind them. <span className="text-white font-medium">10x efficiency</span> across research, reasoning and execution.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
           <button 
             onClick={() => scrollToSection('booking')}
             className="px-8 py-4 bg-[#b7d1ea]/80 text-black font-semibold text-sm tracking-wide uppercase hover:bg-violet-200/40 transition-colors duration-300"
           >
             Request Private Access
           </button>
           <button 
             onClick={() => scrollToSection('services')}
             className="px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold text-sm tracking-wide uppercase transition-colors duration-300"
           >
             What We Build
           </button>
        </div>
      </div>
    </section>
  );
}
