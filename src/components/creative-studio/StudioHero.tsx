'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function StudioHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">
            OBSCURA / STUDIO
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white mb-6 max-w-5xl mx-auto"
        >
          The New Standard for
          <br />
          <span style={{ color: '#b7d1ea' }}>
            Creative Velocity.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          For the founders and brands who refuse to wait. Studio-grade assets, delivered at the speed of thought.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button 
            onClick={() => scrollToSection('creative-booking')}
            className="px-8 py-4 bg-white text-black font-semibold text-sm tracking-wide uppercase hover:bg-[#b7d1ea] transition-colors duration-300 rounded-full"
          >
            Book a Creative Brief Call
          </button>
        </motion.div>

      </div>
    </section>
  );
}
