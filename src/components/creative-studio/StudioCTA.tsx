'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function StudioCTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            Your unfair advantage awaits.
          </h2>

          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            One brief. Same-day delivery. Assets that actually convert.
          </p>

          <button 
            onClick={() => scrollToSection('creative-booking')}
            className="px-8 py-4 bg-white text-black font-semibold text-sm tracking-wide uppercase hover:bg-[#b7d1ea] transition-colors duration-300 rounded-full"
          >
            Start the Brief
          </button>

        </motion.div>

      </div>
    </section>
  );
}
