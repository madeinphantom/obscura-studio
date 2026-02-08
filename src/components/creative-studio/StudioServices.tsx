'use client';

import React from 'react';
import PortalCard from '@/components/PortalCard';
import { motion } from 'framer-motion';

const services = [
  {
    title: "The Infinite Studio",
    tagline: "Never rent a studio again.",
    description: "Send us your product photos. We generate studio-grade mockups across any environment. Lifestyle, editorial, seasonal. Your brand, multiplied.",
    price: "Starting at £500",
    layer: "RAPID"
  },
  {
    title: "Performance Architecture",
    tagline: "Engineered for conversion.",
    description: "Static ads and carousels built on proven frameworks. We reverse-engineer what works, swap in your brand, and ship variants that stop the scroll.",
    price: "Starting at £1,000",
    layer: "SCALABLE"
  },
  {
    title: "Motion at Scale",
    tagline: "Volume without compromise.",
    description: "Short-form video ads (15-30s) built programmatically. Product showcases, kinetic typography, motion graphics. Broadcast quality, internet speed.",
    price: "Starting at £1,500",
    layer: "HIGH IMPACT"
  }
];

export default function StudioServices() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-2">
            <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
            Your unfair advantage.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <PortalCard
                title={service.title}
                description={service.description}
                price={service.price}
                layer={service.layer}
                className="h-full min-h-[400px]"
                gradient="from-white/5 to-white/5"
              >
                <div className="mb-6">
                  <p className="text-sm font-medium text-[#b7d1ea]">{service.tagline}</p>
                </div>
              </PortalCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
