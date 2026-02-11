'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    label: "The Download",
    description: "We extract your brand DNA, goals, and constraints in a 30-minute deep dive. You speak; we structure.",
    number: "01"
  },
  {
    label: "The Synthesis",
    description: "Our pipeline generates, filters, and refines. No stock assets. No hallucinations. Just engineered creativity.",
    number: "02"
  },
  {
    label: "The Launch",
    description: "Assets delivered in 24 hours. Optimized for platform. Calibrated for conversion. Ready to ship.",
    number: "03"
  }
];

export default function StudioHowItWorks() {
  return (
    <section className="py-24 relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-2">
            <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">Protocol</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
            From brief to reality in 24 hours.
          </h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-px bg-white/10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col md:items-center md:text-center text-left"
              >
                
                {/* Number Circle */}
                <div className="w-20 h-20 rounded-full bg-black border border-white/10 flex items-center justify-center text-xl font-bold text-white mb-6 z-10 relative group hover:border-white/30 transition-colors">
                  <span className="text-[#b7d1ea]">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {step.label}
                </h3>
                
                <p className="text-white/60 leading-relaxed max-w-xs font-light">
                  {step.description}
                </p>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
