'use client';

import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function ServiceDeepDive() {
  const details = [
    {
      title: "Workflow Automation",
      description: "We audit how you work and build AI-powered automations that handle the repetitive stuff: email triage, scheduling, data entry, client follow-ups, and reporting."
    },
    {
      title: "Document Intelligence",
      description: "We turn your scattered documents into a structured system that AI can actually read and analyse. Ask questions about your own data and get answers in seconds."
    },
    {
      title: "Custom AI Tools",
      description: "Need something specific? A dashboard that tracks your KPIs? An internal tool? We design, build, and deploy custom tools tailored to your exact needs."
    }
  ];

  return (
    <section className="py-12 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {details.map((section, index) => (
            <div key={index} className="px-6 border-rounded border-gray-600">
              <h4 className="text-lg font-bold text-white mb-4 tracking-wide">{section.title}</h4>
              <p className="text-sm text-white/50 leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
