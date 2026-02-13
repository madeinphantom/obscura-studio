'use client';

import React from 'react';

interface IconCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  variant?: 'default' | 'compact' | 'feature' | 'metric';
  label?: string;
  stat?: string;
  unit?: string;
  className?: string;
}

export default function IconCard({
  icon,
  title,
  description,
  variant = 'default',
  label,
  stat,
  unit,
  className = '',
}: IconCardProps) {
  const iconSize = variant === 'feature' ? 'w-8 h-8' : 'w-6 h-6';

  return (
    <div
      className={`flex flex-col items-start space-y-4 p-6 md:p-8 group hover:bg-white/[0.02] transition-colors duration-300 ${className}`}
    >
      {/* Icon Container */}
      <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#b7d1ea]/30 transition-colors duration-300 w-fit">
        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
          className: `${iconSize} text-[#b7d1ea] group-hover:scale-110 transition-transform duration-300`,
        })}
      </div>

      {/* Label (optional) */}
      {label && (
        <span className="text-xs font-bold tracking-widest text-[#b7d1ea]/60 uppercase">
          {label}
        </span>
      )}

      {/* Stat (for metric variant) */}
      {variant === 'metric' && stat && (
        <div className="space-y-1">
          <div className="text-3xl md:text-4xl font-bold text-[#b7d1ea]">{stat}</div>
          {unit && (
            <div className="text-sm text-white/70 uppercase tracking-wide font-medium">
              {unit}
            </div>
          )}
        </div>
      )}

      {/* Title */}
      <h3
        className={`font-semibold text-white tracking-wide ${
          variant === 'feature' ? 'text-xl' : 'text-base md:text-lg'
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-white/60 font-light leading-relaxed text-sm">{description}</p>
    </div>
  );
}
