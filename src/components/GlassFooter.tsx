'use client';

import React from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

interface GlassFooterProps {
  className?: string;
}

const productLinks = [
  { label: 'Intelligence Systems', href: '/#services' },
  // { label: 'Concierge', href: '/concierge' },
  // CREATIVE STUDIO SHUTDOWN — 2026-02-19
  // { label: 'Creative Studio', href: '/creative-studio' },
  { label: 'How We Think', href: '/#thinking-layer' },
  { label: 'Book a Call', href: '/#booking' },
];

// TODO: Add real social media links for LinkedIn and Instagram when available
const socialLinks = [
  { label: 'Twitter', href: 'https://x.com/madeinphantom', icon: Twitter },
  { label: 'Instagram', href: 'https://x.com/obscuraxyz', icon: Instagram },
  { label: 'LinkedIn', href: 'https://x.com/madeinphantom', icon: Linkedin },
  { label: 'Email', href: 'mailto:prince@obscuraai.xyz', icon: Mail },
];

export default function GlassFooter({ className = '' }: GlassFooterProps) {
  return (
    <footer className={`relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-black text-white ${className}`}>
      
      {/* Background Watermark */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 opacity-[0.03]">
        <h1 className="text-[20vw] font-bold leading-none tracking-tighter text-white/30 whitespace-nowrap absolute -bottom-[5vw] -left-[2vw]">
          OBSCURA
        </h1>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-[#b7d1ea]/30 backdrop-blur-4xl">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            
            {/* Brand Column */}
            <div className="flex flex-col justify-between h-full space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  OBSCURA AI
                </h3>
                <p className="text-lg text-white/50 font-light max-w-sm leading-relaxed">
                  We build intelligence systems that research, extract, and reason. Document processing. Deal research. Agent systems.
                </p>
              </div>
              
              <div className="flex gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-[#b7d1ea] transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Column */}
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#b7d1ea] mb-8">
                  Menu
                </h4>
                <ul className="space-y-4">
                  {productLinks.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href}
                        className="text-sm text-white/60 hover:text-white transition-colors duration-300 tracking-wide block py-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#b7d1ea] mb-8">
                  Get in Touch
                </h4>
                <a 
                  href="mailto:prince@obscuraai.xyz" 
                  className="text-sm text-white/60 hover:text-white transition-colors duration-300 tracking-wide block py-1"
                >
                  prince@obscuraai.xyz
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 bg-black/20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/20 font-medium tracking-wider uppercase">
              © 2026 Obscura AI
            </p>
            <p className="text-xs text-white/20 font-medium tracking-wider uppercase">
              London, UK — Worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
