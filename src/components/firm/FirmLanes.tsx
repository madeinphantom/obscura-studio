'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function FirmLanes() {
  const router = useRouter();

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 relative">

          {/* Dashed Divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-[#b7d1ea]/20" />

          {/* For Leaders — elevated treatment */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:pr-12 flex flex-col justify-between h-full space-y-8"
          >
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#b7d1ea]">
                For Leaders
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white leading-tight">
                A private intelligence layer<br />
                <span className="font-fraunces italic font-light">across your entire world.</span>
              </h2>
              <p className="text-lg text-white/60 font-light leading-relaxed max-w-md">
                Runs on your hardware. Messages you on WhatsApp. Knows every entity, deal, and deadline — across all your businesses, simultaneously. It never sleeps. Nothing touches third-party servers.
              </p>
              <ul className="space-y-3">
                {[
                  'Portfolio monitoring across all entities',
                  'Daily briefings via WhatsApp or Telegram',
                  'Alerts only when something actually matters',
                  'Runs on your hardware — total data sovereignty',
                  'Learns your preferences over time',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b7d1ea] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={scrollToBooking}
              className="self-start px-8 py-4 bg-[#b7d1ea] text-black font-semibold text-sm tracking-wide uppercase hover:bg-[#b7d1ea]/80 transition-colors duration-300"
            >
              Request Private Access
            </button>
          </motion.div>

          {/* For Firms — subdued treatment */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:pl-12 flex flex-col justify-between h-full space-y-8 lg:border-l-0"
          >
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/40">
                For Firms
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white/80 leading-tight">
                Full-system AI architecture<br />
                <span className="font-fraunces italic font-light text-white/60">deployed in weeks.</span>
              </h2>
              <p className="text-lg text-white/50 font-light leading-relaxed max-w-md">
                Deal research pipelines. Document intelligence. Agent orchestration. We architect and deploy the full infra: purpose-built for how your firm operates.
              </p>
              <ul className="space-y-3">
                {[
                  'Advanced AI system architecture',
                  'Deal research & competitive intelligence',
                  'Document processing pipelines',
                  'Spin up an army of custom AI employees',
                  'Agent orchestration & automation',
                  'Managed operations & ongoing support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={scrollToBooking}
              className="self-start px-8 py-4 border border-white/20 text-black font-semibold text-sm tracking-wide uppercase hover:bg-white/10 hover:text-white transition-colors duration-300 bg-white/80"
            >
              Request Private Access
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
