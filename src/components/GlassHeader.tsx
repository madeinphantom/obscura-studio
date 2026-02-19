'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import ObscuraBrandLogo from './ObscuraBrandLogo';

interface GlassHeaderProps {
  className?: string;
}

// Navigation links — value architecture
const navLinks = [
  { label: 'The System', id: 'case-study' },
  { label: 'The Economics', id: 'economics' },
  { label: 'What We Build', id: 'services' },
  // { label: 'Concierge', href: '/concierge' },
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
    <header className={`w-full fixed top-0 left-0 right-0 z-60 ${className}`}>
      <div className="bg-[#b7d1ea]/10 backdrop-blur-2xl border-b border-white/25">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between gap-2">
            
            {/* Logo */}
            <button 
              onClick={handleLogoClick} 
              className="hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <ObscuraBrandLogo theme="light" size="header" />
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
              className="px-3 py-2 md:px-5 md:py-2.5 bg-[#b7d1ea]/80 text-black text-[11px] md:text-sm font-semibold rounded-none hover:bg-violet-200/40 transition-colors whitespace-nowrap"
            >
              REQUEST PRIVATE ACCESS
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}
