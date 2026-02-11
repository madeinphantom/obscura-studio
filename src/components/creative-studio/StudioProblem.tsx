'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function StudioProblem() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">The Bottleneck</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white tracking-tighter">
             The old way is too slow for<br />
             the speed of your ambition.
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-white/60 leading-relaxed font-light">
            <p>
              You don&apos;t need another meeting. You need assets that ship.
              Traditional agencies are built for billing hours, not for velocity.
            </p>
            <p className="text-white">
              We stripped away the account managers, the weeks of back-and-forth, 
              and the bloat. What&apos;s left is pure creative horsepower.
            </p>
          </div>
        </motion.div>

      </div>
      
      {/* Subtle Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
