'use client';

import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string | React.ReactNode;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 max-w-3xl ${className}`}>
      {/* Badge */}
      {badge && (
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
          <span className="text-xs font-bold tracking-widest text-[#b7d1ea] uppercase">
            {badge}
          </span>
        </div>
      )}

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
        {title}
      </h2>

      {/* Description (optional) */}
      {description && (
        <p className="text-xl text-white/60 font-light leading-relaxed">{description}</p>
      )}
    </div>
  );
}
