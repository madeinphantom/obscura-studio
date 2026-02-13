'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface GlassHeaderProps {
  className?: string;
}

// Navigation links — value architecture
const navLinks = [
  { label: 'The System', id: 'case-study' },
  { label: 'The Economics', id: 'economics' },
  { label: 'Services', id: 'services' },
  { label: 'Concierge', href: '/concierge' },
];

export default function GlassHeader({ className = '' }: GlassHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (link: { id?: string; href?: string; label: string }) => {
    if (link.href) {
      router.push(link.href);
      return;
    }

    if (link.id) {
      if (pathname === '/') {
        const element = document.getElementById(link.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push(`/#${link.id}`);
      }
    }
  };

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  return (
    <header className={`w-screen fixed top-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] z-50 ${className}`}>
      <div className="bg-[#b7d1ea]/10 backdrop-blur-2xl border-b border-white/25">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <button 
              onClick={handleLogoClick} 
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
                  onClick={() => handleNavigation(link)}
                  className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <button 
              onClick={() => handleNavigation({ label: 'Book', id: 'booking' })}
              className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Book Free Strategy Call
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}
