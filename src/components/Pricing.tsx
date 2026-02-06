import React from "react";

const TIERS = [
  { name: "Starter", price: "0", desc: "For experimentation.", button: "Begin" },
  { name: "Pro", price: "49", desc: "For serious workflows.", button: "Upgrade" },
  { name: "Enterprise", price: "Custom", desc: "For neural scaling.", button: "Contact" },
];

export default function Pricing() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">
        {TIERS.map((tier, i) => (
          <div key={i} className="bg-[#050505] p-12 flex flex-col items-start hover:bg-[#0A0A0A] transition-colors duration-300 select-none">
             <span className="font-['Array'] text-xs text-white/40 uppercase tracking-widest mb-4">
               Tier_0{i+1}
             </span>
             <h3 className="text-3xl font-medium text-white mb-2">{tier.name}</h3>
             <p className="text-[#666] mb-8 h-10">{tier.desc}</p>
             
             <div className="text-5xl font-semibold text-white mb-10 tracking-tight">
               {tier.price === "Custom" ? "Custom" : `$${tier.price}`}
               {tier.price !== "Custom" && <span className="text-lg text-white/30 font-normal ml-1">/mo</span>}
             </div>
             
             <button className="w-full py-4 rounded-xl border border-white/10 text-white hover:bg-white hover:border-transparent hover:text-black transition-all duration-300 font-medium">
               {tier.button}
             </button>
          </div>
        ))}
      </div>
    </section>
  );
}
