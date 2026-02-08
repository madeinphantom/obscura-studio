'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface GlassHeaderProps {
  className?: string;
}

// Navigation links
const navLinks = [
  { label: 'Services', id: 'services' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Creative Studio', href: '/creative-studio', isNew: true },
  { label: 'Book a Call', id: 'booking' },
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
        // We are already on home, just scroll
        const element = document.getElementById(link.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home with hash
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
    // Break out of any constrained parent container to span full viewport width
    <header className={`w-screen fixed top-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] z-50 ${className}`}>
      <div className="bg-[#b7d1ea]/10 backdrop-blur-2xl border-b border-white/25">
        {/* Main Header Content */}
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
                  {link.isNew && (
                    <span className="px-1.5 py-0.5 text-[0.65rem] font-bold bg-violet-500/20 text-violet-200 border border-violet-500/30 rounded-full group-hover:bg-violet-500/30 transition-colors">
                      NEW
                    </span>
                  )}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <button 
              onClick={() => handleNavigation({ label: 'Get Started', id: 'booking' })}
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
