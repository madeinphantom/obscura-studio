'use client';

import React from "react";
import { Check } from "lucide-react";
import PortalCard from "@/components/PortalCard";
import ServiceDeepDive from "@/components/ServiceDeepDive";
import GlassCTA from "@/components/GlassCTA";

export default function Services() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Workflow Automation",
      tagline: "Stop doing what a machine can do for you.",
      price: "From $5,000",
      description: "We audit how you work and build AI-powered automations that handle the repetitive stuff: email triage, scheduling, data entry, client follow-ups, and reporting.",
      layer: "STARTER",
      details: [
        "Email triage & drafting",
        "Automated scheduling", 
        "Data entry & sync",
        "Client follow-ups"
      ]
    },
    {
      title: "Document & Data Intelligence",
      tagline: "Your files, finally organised and searchable.",
      price: "From $5,000",
      layer: "INTERMEDIATE",
      details: [
        "Structured knowledge base",
        "Chat with your docs",
        "Automated analysis",
        "Instant retrieval"
      ]
    },
    {
      title: "Custom AI Tools",
      tagline: "Built for your business. By us. In a week or less.",
      price: "From $7,500",
      layer: "MOST POPULAR",
      details: [
        "Custom dashboards",
        "Internal team tools",
        "Client-facing apps",
        "Full deployment"
      ]
    }
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto space-y-20">
        <div className="space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-2">
            <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">Three ways we put AI to work for you.</h2>
          <p className="text-white/60 text-lg font-light max-w-2xl">
            Click any service to start your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <PortalCard
              key={index}
              title={service.title}
              price={service.price}
              description="" 
              layer={service.layer}
              className="h-full min-h-[600px]"
              gradient={index === 1 ? "from-blue-400/50 to-indigo-600/20" : "from-[#b7d1ea]/55 to-[#b7d1ea]/55"}
              actionIcon={<Check className="w-5 h-5" />}
              onClick={scrollToBooking}
            >
              <div className="mb-6">
                <p className="text-sm font-medium text-[#b7d1ea]">{service.tagline}</p>
              </div>
              <ul className="space-y-3">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-sm text-white/70">
                    <Check className="w-4 h-4 mr-2 text-blue-400/80 shrink-0" />
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </PortalCard>
          ))}
        </div>

        {/* Creative Studio Cross-Sell */}
        <div className="relative p-[1px] rounded-3xl overflow-hidden group mb-12 border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative rounded-[23px] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                 <span className="text-xl">✨</span>
               </div>
               <div>
                 <h3 className="text-xl font-bold text-white text-left tracking-tight">Looking for AI-powered creative assets?</h3>
                 <p className="text-white/60 text-left font-light">Product mockups, ad creatives, and video ads — delivered same-day.</p>
               </div>
             </div>

             <a 
               href="/creative-studio"
               className="whitespace-nowrap px-6 py-3 border border-white/20 bg-[#b7d1ea]/30 hover:bg-white text-white hover:text-black font-semibold rounded-full transition-colors flex items-center gap-2 uppercase text-sm tracking-wide"
             >
               Explore the Creative Studio
               <span className="group-hover:translate-x-1 transition-transform">→</span>
             </a>
          </div>
        </div>

         {/* Detailed Breakdown */}
        <ServiceDeepDive />

        <div className="text-center mt-6 mb-12">
          <p className="text-xl text-white/50 tracking-wide font-light">
            Custom enterprise solutions available — <a href="#booking" className="text-[#b7d1ea] hover:text-white transition-colors border-b border-[#b7d1ea]/30 hover:border-white">let&apos;s talk</a>.
          </p>
        </div>

        {/* Add-on Section */}
        <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-white">Ongoing Support</h3>
                <span className="px-3 py-1 rounded-full bg-[#b7d1ea]/10 text-[#b7d1ea] text-xs font-bold tracking-wide">ADD-ON</span>
              </div>
              <p className="text-lg font-medium text-white/90">AI moves fast. We keep you current.</p>
              <p className="text-white/60 font-light max-w-xl">
                 Optional monthly retainer. We check in, optimise your setup as new tools launch, and make sure everything keeps running smoothly.
              </p>
            </div>
            <div className="text-right shrink-0">
               <p className="text-4xl font-light text-[#b7d1ea]">$500<span className="text-lg text-white/40 font-normal">/mo</span></p>
            </div>
          </div>
        </div>
        <GlassCTA />
      </div>
    </section>
  );
}
