"use client";

import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import GlassCard from "@/components/GlassCard";
import { creativeStudioCalConfig } from "@/lib/config/cal";

export default function StudioBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: creativeStudioCalConfig.namespace });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": creativeStudioCalConfig.brand.light },
          dark: { "cal-brand": creativeStudioCalConfig.brand.dark },
        },
        hideEventTypeDetails: creativeStudioCalConfig.ui.hideEventTypeDetails,
        layout: creativeStudioCalConfig.ui.layout,
      });
    })();
  }, []);

  return (
    <section
      id="creative-booking"
      className="py-24 px-6 md:px-12 flex flex-col items-center justify-center text-center border-t border-white/5"
    >
      <div className="max-w-3xl mx-auto space-y-8 mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-2">
          <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">
            Get Started
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
          Initialize Studio.
        </h2>
        <p className="text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
          Book your 30-minute creative brief call. We&apos;ll clarify your needs and
          start building immediately.
        </p>
      </div>

      {/* Appointment Booking Embed */}
      <GlassCard className="w-full max-w-4xl h-[500px] p-0 md:p-4 overflow-hidden shadow-2xl shadow-black/50 border-white/10">
        <div className="w-full h-full rounded-2xl overflow-hidden bg-black/20">
          <Cal
            namespace={creativeStudioCalConfig.namespace}
            calLink={creativeStudioCalConfig.calLink}
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: creativeStudioCalConfig.ui.layout, useSlotsViewOnSmallScreen: "true" }}
          />
        </div>
      </GlassCard>
    </section>
  );
}
