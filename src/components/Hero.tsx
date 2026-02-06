"use client";

import React from "react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="flex flex-col items-start justify-end min-h-screen px-6 pb-24 md:px-12 md:pb-32 text-left max-w-[100vw] overflow-hidden relative">
      {/* Background elements can be added here if needed, keeping it clean for now as per PRD "Subtle animated gradient orb or mesh background" - assuming layout handles the main background */}
      
      <div className="max-w-4xl space-y-8 z-10">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-2">
          <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">AI Concierge Studio</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]" style={{ color: '#b7d1ea' }}>
          We build your AI.<br />
          You get your time back<br />
          & save money.
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-xl font-light leading-relaxed">
          Obscura is a premium AI studio that builds custom workflows, automations, and tools for your business and personal life. In a single day. No complexity. Just results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
           <button 
             onClick={() => scrollToSection('booking')}
             className="px-8 py-4 bg-white text-black font-semibold text-sm tracking-wide uppercase hover:bg-[#b7d1ea] transition-colors duration-300"
           >
             Book a Free Discovery Call
           </button>
           <button 
             onClick={() => scrollToSection('how-it-works')}
             className="px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold text-sm tracking-wide uppercase transition-colors duration-300"
           >
             See How It Works
           </button>
        </div>
      </div>
    </section>
  );
}
