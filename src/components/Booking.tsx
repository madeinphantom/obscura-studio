'use client';

import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import GlassCard from "@/components/GlassCard";

export default function Booking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"discovery-call"});
      cal("ui", {"theme":"dark","cssVarsPerTheme":{"light":{"cal-brand":"#b7d1ea"},"dark":{"cal-brand":"#b7d1ea"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <section id="booking" className="py-24 px-6 md:px-12 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl mx-auto space-y-8 mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">Let&apos;s Talk</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">Ready to see what AI can do for you?</h2>
        <p className="text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
          Book a free 30-minute discovery call. We&apos;ll talk about your business, identify quick wins, and give you an honest assessment of where AI fits. No commitment. No pressure.
        </p>
      </div>
      
      {/* Appointment Booking Embed */}
      <GlassCard className="w-full max-w-4xl h-[700px] p-0 md:p-4 overflow-hidden shadow-2xl shadow-black/50">
        <div className="w-full h-full rounded-2xl overflow-hidden bg-black/20">
          <Cal 
            namespace="discovery-call"
            calLink="prince-adza-sirlwt/discovery-call"
            style={{width:"100%",height:"100%",overflow:"scroll"}}
            config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}}
          />
        </div>
      </GlassCard>
    </section>
  );
}
