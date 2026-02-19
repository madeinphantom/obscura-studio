'use client';

import React from 'react';
import { Shield, Clock, BarChart3, XCircle, Lock } from 'lucide-react';
import GlassCTA from '@/components/GlassCTA';
import SectionHeader from '@/components/shared/SectionHeader';
import GlassCard from '@/components/GlassCard';
import IconCard from '@/components/shared/IconCard';

export default function FirmRiskReversal() {
  const guarantees = [
    {
      icon: <Clock className="w-6 h-6 text-[#b7d1ea]" />,
      title: "7-Day Deployment",
      description: "First deployment within 7-10 days or partial refund. No exceptions."
    },
    {
      icon: <Shield className="w-6 h-6 text-[#b7d1ea]" />,
      title: "Quality Guarantee",
      description: "If the system doesn't meet spec, we rebuild at no cost."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#b7d1ea]" />,
      title: "Transparent Metrics",
      description: "Real-time dashboards showing system performance. No black boxes."
    },
    {
      icon: <Lock className="w-6 h-6 text-[#b7d1ea]" />,
      title: "Data Sovereignty",
      description: "Runs on your hardware. Nothing touches third-party servers unless you choose it."
    },
    {
      icon: <XCircle className="w-6 h-6 text-[#b7d1ea]" />,
      title: "30-Day Exit",
      description: "30-day cancellation window. No questions asked."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        <SectionHeader
          badge="The Guarantee"
          title={<>Performance assurance.<br />Not promises.</>}
        />

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {guarantees.map((item, index) => (
            <GlassCard key={index} className="group">
              <IconCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                className="p-0"
              />
            </GlassCard>
          ))}
        </div>

        <GlassCTA className="mt-16" />
      </div>
    </section>
  );
}
