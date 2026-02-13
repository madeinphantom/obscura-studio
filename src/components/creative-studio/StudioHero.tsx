'use client';

import React from 'react';

export default function StudioHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="flex flex-col items-start justify-end min-h-screen px-6 pb-24 md:px-12 md:pb-32 text-left max-w-[100vw] overflow-hidden relative">
      
      {/* Badge */}
      <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
        <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">
          OBSCURA / CREATIVE STUDIO
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.9] text-white mb-6 max-w-5xl">
        The Creative Engine For
        <br />
        High-Velocity Brands.

      </h1>

      {/* Subheadline */}
      <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed font-light">
        Product mockups, ad creatives, and programmatic video: delivered instantly. No agencies. No retainers. No waiting.
      </p>

      {/* CTA */}
      <button 
        onClick={() => scrollToSection('creative-booking')}
        className="px-8 py-4 bg-white text-black font-semibold text-sm tracking-wide uppercase hover:bg-[#b7d1ea] transition-colors duration-300"
      >
        Book Free Creative Brief
      </button>

    </section>
  );
}
