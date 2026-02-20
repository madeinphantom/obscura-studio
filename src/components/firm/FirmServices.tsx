"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import PortalCard from "@/components/PortalCard";
import GlassCTA from "@/components/GlassCTA";
import { useRouter } from "next/navigation";

export default function FirmServices() {
  const router = useRouter();

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Intelligence Systems",
      tagline: "The Core Engine. Bespoke intelligence infrastructure.",
      layer: "SYSTEMS",
      price: "Custom Scope",
      description: "",
      details: [
        "Custom agent orchestration (RAG, Vector embeddings)",
        "Document processing & deal research pipelines",
        "CRM integration & proprietary skills graph",
        "Deployed on secure private infrastructure",
      ],
      cta: "Request Private Access",
      onClick: scrollToBooking,
      gradient: "from-[#b7d1ea]/55 to-[#b7d1ea]/20",
    },
    {
      title: "Private Intelligence",
      tagline: "A 24/7 Chief of Staff for your portfolio and life.",
      layer: "LEADERS",
      price: "Fraction of a Hire",
      description: "",
      details: [
        "Deployed directly to your WhatsApp & Telegram",
        "Monitors entities, deals, and deadlines 24/7",
        "Managed hosting, continuous updates, zero setup",
        "Absolute data sovereignty — nothing leaves your control",
      ],
      cta: "Request Private Access",
      onClick: scrollToBooking,
      gradient: "from-[#b7d1ea]/55 to-[#b7d1ea]/20",
    }
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto space-y-20">
        <div className="space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-2">
            <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">What We Build</span>
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tighter text-white font-fraunces font-normal italic">
            Join The AI Race Now.
          </h2>
          <p className="text-lg text-white/50 font-light max-w-2xl">
            Deploy intelligence across two distinct vectors: the firm's operations, and the leaders who run it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <PortalCard
              key={index}
              title={service.title}
              price={service.price}
              description={service.description}
              layer={service.layer}
              className="h-full min-h-[600px]"
              gradient={service.gradient}
              onClick={service.onClick}
              actionIcon={<ArrowRight className="w-5 h-5" />}
            >
              <div className="mb-6">
                <p className="text-sm font-medium text-[#b7d1ea]">{service.tagline}</p>
              </div>
              <ul className="space-y-3">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b7d1ea]/60 mr-3 mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <span className="text-xs font-bold tracking-widest text-[#b7d1ea]/70 uppercase">
                  {service.cta} →
                </span>
              </div>
            </PortalCard>
          ))}
        </div>

        <GlassCTA />
      </div>
    </section>
  );
}
