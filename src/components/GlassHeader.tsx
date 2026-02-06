'use client';

import React from 'react';

interface GlassHeaderProps {
  className?: string;
}

// Navigation links - easy to tweak
const navLinks = [
  { label: 'Services', id: 'services' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Book a Call', id: 'booking' },
];

export default function GlassHeader({ className = '' }: GlassHeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Break out of any constrained parent container to span full viewport width
    <header className={`w-screen fixed top-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] z-50 ${className}`}>
      <div className="bg-[#b7d1ea]/10 backdrop-blur-2xl border-b border-white/25">
        {/* Main Header Content */}
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')} 
              className="hover:opacity-80 transition-opacity"
            >
              <h1 className="text-xl font-bold text-white tracking-tight">
                OBSCURA AI
              </h1>
            </button>

            {/* Nav Links - Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <button 
              onClick={() => scrollToSection('booking')}
              className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Get Started
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}
