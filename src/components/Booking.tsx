import React from "react";

export default function Booking() {
  return (
    <section id="booking" className="py-32 px-6 md:px-12 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl mx-auto space-y-8 mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">Let&apos;s Talk</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">Ready to see what AI can do for you?</h2>
        <p className="text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
          Book a free 30-minute discovery call. We&apos;ll talk about your business, identify quick wins, and give you an honest assessment of where AI fits. No commitment. No pressure.
        </p>
      </div>
      
      {/* Appointment Booking Embed Placeholder */}
      <div className="w-full max-w-4xl bg-white rounded-xl h-[700px] overflow-hidden shadow-2xl shadow-black/50 border border-white/10 relative flex items-center justify-center bg-black/40 backdrop-blur-sm">
         <div className="text-center p-8">
            <p className="text-white/40 mb-4">[Cal.com embed here]</p>
            <p className="text-sm text-white/20">Go to cal.com/embed to get your snippet</p>
            
            {/* Fallback visual for dev/demo */}
            <a href="https://cal.com" target="_blank" rel="noreferrer" className="mt-8 inline-block px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-[#b7d1ea] transition-colors uppercase tracking-wide text-sm">
              Book Your Free Call
            </a>
            
            <p className="mt-8 text-white/40 text-sm">Prefer email? Reach us at <a href="mailto:hello@obscuraai.xyz" className="text-[#b7d1ea] hover:underline">hello@obscuraai.xyz</a></p>
         </div>
      </div>
    </section>
  );
}
