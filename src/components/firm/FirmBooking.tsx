'use client';

import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import GlassCard from "@/components/GlassCard";
import { calConfig } from "@/lib/config/cal";

export default function FirmBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: calConfig.namespace });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": calConfig.brand.light },
          dark: { "cal-brand": calConfig.brand.dark },
        },
        hideEventTypeDetails: calConfig.ui.hideEventTypeDetails,
        layout: calConfig.ui.layout,
      });
    })();
  }, []);

  return (
    <section id="booking" className="py-24 px-6 md:px-12 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl mx-auto space-y-8 mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">Let&apos;s Talk</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">Ready to deploy intelligence?</h2>
        <p className="text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
          Book a complimentary strategy session. We&apos;ll audit your current workflow and map out exactly where AI adds the most leverage. Actionable roadmap, guaranteed.
        </p>
      </div>
      
      {/* Appointment Booking Embed */}
      <GlassCard className="w-full max-w-4xl h-[500px] p-0 md:p-4 overflow-hidden shadow-2xl shadow-black/50">
        <div className="w-full h-full rounded-2xl overflow-hidden bg-black/20">
          <Cal 
            namespace={calConfig.namespace}
            calLink={calConfig.calLink}
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: calConfig.ui.layout, useSlotsViewOnSmallScreen: "true" }}
          />
        </div>
      </GlassCard>
    </section>
  );
}
