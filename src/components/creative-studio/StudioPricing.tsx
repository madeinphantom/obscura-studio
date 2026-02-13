'use client';

import React from 'react';

const pricingData = [
  { service: "The Infinite Studio", price: "£1,000", unit: "/batch", delivery: "24 hours" },
  { service: "Performance Architecture", price: "£1,500", unit: "/project", delivery: "48 hours" },
  { service: "Motion at Scale", price: "£2,000", unit: "/project", delivery: "72 hours" },
];

export default function StudioPricing() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-2">
            <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">Investment</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
            Simple Pricing. Infinite Leverage.
          </h2>
        </div>

        {/* Pricing Table/Grid */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden mb-12">
          
          {/* Header Row (Desktop) */}
          <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-white/10 bg-white/5 text-sm font-semibold text-white/40 uppercase tracking-wider">
            <div className="col-span-6">Capability</div>
            <div className="col-span-3">Starting At</div>
            <div className="col-span-3 text-right">Velocity</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/5">
            {pricingData.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection('creative-booking')}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 items-center hover:bg-white/[0.03] transition-all cursor-pointer w-full text-left border-l-2 border-transparent hover:border-[#b7d1ea]/50 group"
              >
                
                {/* Service Name */}
                <div className="col-span-1 md:col-span-6">
                  <span className="text-lg font-medium text-white block tracking-wide group-hover:text-[#b7d1ea] transition-colors">{item.service}</span>
                </div>

                {/* Price */}
                <div className="col-span-1 md:col-span-3 flex items-baseline gap-1">
                  <span className="md:hidden text-white/40 mr-2 text-sm uppercase tracking-wide">Starting at:</span>
                  <span className="text-xl font-bold text-[#b7d1ea]">{item.price}</span>
                  <span className="text-sm text-white/40">{item.unit}</span>
                </div>

                {/* Delivery */}
                <div className="col-span-1 md:col-span-3 md:text-right">
                  <span className="md:hidden text-white/40 mr-2 text-sm uppercase tracking-wide">Velocity:</span>
                  <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/80 text-sm font-medium group-hover:bg-[#b7d1ea]/20 group-hover:border-[#b7d1ea]/50 transition-colors">
                    {item.delivery}
                  </span>
                </div>

              </button>
            ))}
          </div>

        </div>

        {/* Subscription Callout */}
        <div className="relative p-[1px] rounded-3xl overflow-hidden group">
          <div className="absolute inset-0 bg-white/10 opacity-50 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative bg-[#0A0A0A] rounded-[23px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="text-center md:text-left">
               <h3 className="text-xl font-semibold text-white mb-2">
                 Need a relentless creative partner?
               </h3>
                <p className="text-white/60 max-w-xl font-light">
                  An entire creative studio for less than the cost of one hire. <span className="text-white font-medium">£1,250/month subscription</span> gives you unlimited creative capacity. No overhead. No management. Just flow.
                </p>
             </div>

             <button 
               onClick={() => scrollToSection('creative-booking')}
               className="whitespace-nowrap px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-[#b7d1ea] transition-colors uppercase text-sm tracking-wide"
             >
               Initialize Studio
             </button>
          </div>
        </div>

      </div>
    </section>
  );
}
