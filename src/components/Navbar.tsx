"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (id: string) => {
    if (pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  const navigateToStudio = () => {
    router.push('/creative-studio');
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav className="glass-panel w-[95%] max-w-[1400px] px-8 py-5 rounded-3xl flex items-center justify-between shadow-xl shadow-black/50 pointer-events-auto border border-white/5 bg-black/40 backdrop-blur-xl">
        
        {/* Logo */}
        <button onClick={handleLogoClick} className="hover:opacity-80 transition-opacity duration-300">
           <span className="font-['Array'] text-lg tracking-wider text-white">OBSCURA_AI</span>
        </button>
        
        {/* Links */}
        <div className="hidden md:flex items-center space-x-2 bg-white/5 rounded-full px-2 py-1 border border-white/5">
          <button onClick={() => handleNavigation('services')} className="px-5 py-2 rounded-full text-xs font-[var(--font-body)] text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300">
            Services
          </button>
          <button onClick={() => handleNavigation('how-it-works')} className="px-5 py-2 rounded-full text-xs font-[var(--font-body)] text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300">
            How It Works
          </button>
          <button onClick={navigateToStudio} className="px-5 py-2 rounded-full text-xs font-[var(--font-body)] text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group">
            Creative Studio
            <span className="px-1.5 py-0.5 text-[0.65rem] font-bold bg-violet-500/20 text-violet-200 border border-violet-500/30 rounded-full group-hover:bg-violet-500/30 transition-colors">
              NEW
            </span>
          </button>
          <button onClick={() => handleNavigation('booking')} className="px-5 py-2 rounded-full text-xs font-[var(--font-body)] text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300">
            Book a Call
          </button>
        </div>

        {/* Action Button */}
        <button onClick={() => handleNavigation('booking')} className="px-6 py-3 bg-white text-black rounded-full text-xs font-semibold hover:bg-[#b7d1ea] hover:scale-105 transition-all duration-300">
          Get Started
        </button>
        
      </nav>
    </div>
  );
}
