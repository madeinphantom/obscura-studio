'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import GlassHeader from '@/components/GlassHeader';
import GlassFooter from '@/components/GlassFooter';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <GlassHeader />

      <section className="py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-2xl mx-auto">

          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          {/* Main Policy Card */}
          <GlassCard className="p-12 md:p-16 space-y-12">

            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                Privacy Policy
              </h1>
              <p className="text-white/60 font-light">
                Last updated: February 2026
              </p>
            </div>

            {/* Section: Data We Collect */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">What we collect</h2>
              <p className="text-white/70 font-light leading-relaxed">
                When you request access, we collect minimal information: your name, email, company, and the intelligence system you're interested in. If you book a call, we also collect basic contact details.
              </p>
              <p className="text-white/70 font-light leading-relaxed">
                We do not track your browsing behavior. We do not collect usage data beyond what your browser normally sends. We do not use cookies for tracking or profiling.
              </p>
            </div>

            {/* Section: How We Use It */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">How we use it</h2>
              <p className="text-white/70 font-light leading-relaxed">
                We use your information solely to respond to your inquiry, schedule calls, and send you relevant updates about our services. Nothing more.
              </p>
              <p className="text-white/70 font-light leading-relaxed">
                We do not sell, share, or rent your data to third parties. We do not use it for marketing beyond what you explicitly request. We do not create profiles or make automated decisions about you.
              </p>
            </div>

            {/* Section: Data Sovereignty */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Your data security</h2>
              <p className="text-white/70 font-light leading-relaxed">
                We store your information on secure, encrypted servers. Access is limited to authorized team members only. We conduct regular security audits and maintain enterprise-grade infrastructure.
              </p>
              <p className="text-white/70 font-light leading-relaxed">
                When you deploy our systems, your data stays on your infrastructure. Nothing is stored on our servers unless you explicitly choose otherwise.
              </p>
            </div>

            {/* Section: Your Rights */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Your rights</h2>
              <p className="text-white/70 font-light leading-relaxed">
                You have the right to access, correct, or delete your personal information at any time. Email us at privacy@obscuraai.xyz and we'll respond within 7 days.
              </p>
              <p className="text-white/70 font-light leading-relaxed">
                If you're in the EU, you have additional rights under GDPR. We comply with all applicable regulations.
              </p>
            </div>

            {/* Section: Contact */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Questions?</h2>
              <p className="text-white/70 font-light leading-relaxed">
                For any privacy concerns or requests, contact us directly:
              </p>
              <p className="text-[#b7d1ea] font-light">
                <a href="mailto:privacy@obscuraai.xyz" className="hover:text-white transition-colors">
                  privacy@obscuraai.xyz
                </a>
              </p>
            </div>

            {/* Footer Note */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-xs text-white/40 font-light">
                This privacy policy applies to our lead-generation site. When you deploy our systems, additional terms apply. We're transparent about all of it.
              </p>
            </div>
          </GlassCard>

        </div>
      </section>

      <GlassFooter />
    </main>
  );
}
