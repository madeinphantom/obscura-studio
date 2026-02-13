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

          <div className="max-w-xl mx-auto mb-10 text-left space-y-6">
            <div className="flex gap-4">
               <span className="text-[#b7d1ea] font-mono">01</span>
               <p className="text-white/80 font-light">We extract your brand DNA and goals in a 30-minute deep dive.</p>
            </div>
            <div className="flex gap-4">
               <span className="text-[#b7d1ea] font-mono">02</span>
               <p className="text-white/80 font-light">Our pipeline generates, filters, and refines your assets.</p>
            </div>
            <div className="flex gap-4">
               <span className="text-[#b7d1ea] font-mono">03</span>
               <p className="text-white/80 font-light">You receive studio-grade creative. Ready to launch.</p>
            </div>
          </div>

          <button 
            onClick={() => scrollToSection('creative-booking')}
            className="px-8 py-4 bg-white text-black font-semibold text-sm tracking-wide uppercase hover:bg-[#b7d1ea] transition-colors duration-300 rounded-full"
          >
            Let&apos;s Build 
          </button>
          <p className="mt-6 text-xs text-white/30 uppercase tracking-widest">
            Premium Design. AI Speed.
          </p>

        </motion.div>

      </div>
    </section>
  );
}
