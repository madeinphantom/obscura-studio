import React from "react";
import { Check } from "lucide-react";
import PortalCard from "@/components/PortalCard";
import ServiceDeepDive from "@/components/ServiceDeepDive";

export default function Services() {
  const services = [
    {
      title: "Workflow Automation",
      tagline: "Stop doing what a machine can do for you.",
      price: "£2,500",
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
      price: "£2,500",
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
      tagline: "Built for your business. By us. In a day.",
      price: "£5,000",
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
               <p className="text-4xl font-light text-[#b7d1ea]">£300<span className="text-lg text-white/40 font-normal">/mo</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
