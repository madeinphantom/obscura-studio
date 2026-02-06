"use client";

import React from "react";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav className="glass-panel w-[95%] max-w-[1400px] px-8 py-5 rounded-3xl flex items-center justify-between shadow-xl shadow-black/50 pointer-events-auto border border-white/5 bg-black/40 backdrop-blur-xl">
        
        {/* Logo */}
        <button onClick={() => scrollToSection('hero')} className="hover:opacity-80 transition-opacity duration-300">
           <span className="font-['Array'] text-lg tracking-wider text-white">OBSCURA_AI</span>
        </button>
        
        {/* Links */}
        <div className="hidden md:flex items-center space-x-2 bg-white/5 rounded-full px-2 py-1 border border-white/5">
          <button onClick={() => scrollToSection('services')} className="px-5 py-2 rounded-full text-xs font-[var(--font-body)] text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300">
            Services
          </button>
          <button onClick={() => scrollToSection('how-it-works')} className="px-5 py-2 rounded-full text-xs font-[var(--font-body)] text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300">
            How It Works
          </button>
          <button onClick={() => scrollToSection('booking')} className="px-5 py-2 rounded-full text-xs font-[var(--font-body)] text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300">
            Book a Call
          </button>
        </div>

        {/* Action Button */}
        <button onClick={() => scrollToSection('booking')} className="px-6 py-3 bg-white text-black rounded-full text-xs font-semibold hover:bg-[#b7d1ea] hover:scale-105 transition-all duration-300">
          Get Started
        </button>
        
      </nav>
    </div>
  );
}
