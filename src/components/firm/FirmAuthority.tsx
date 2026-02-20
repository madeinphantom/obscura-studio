'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Rocket, Shield } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import IconCard from '@/components/shared/IconCard';

export default function FirmAuthority() {
  const metrics = [
    {
      icon: <Zap className="w-8 h-8 text-[#b7d1ea]" />,
      stat: "10,000+",
      unit: "iterations/hour",
      description: "Scenario analysis at scale. Explore options in minutes, not weeks."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#b7d1ea]" />,
      stat: "Sub-second",
      unit: "latency",
      description: "Instant answers. Intelligence on demand, not delayed reporting."
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#b7d1ea]" />,
      stat: "Day 1",
      unit: "deployment",
      description: "Operational impact immediately. No months of setup or training."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#b7d1ea]" />,
      stat: "99.9%",
      unit: "uptime SLA",
      description: "24/7 monitoring never stops. Critical alerts never missed."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        <SectionHeader
          badge="The Infrastructure"
          title="Built for scale."
        />

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.05] hover:border-[#b7d1ea]/20 transition-all duration-300"
            >
              <IconCard
                icon={metric.icon}
                title={metric.description}
                description=""
                variant="metric"
                stat={metric.stat}
                unit={metric.unit}
                className="p-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
