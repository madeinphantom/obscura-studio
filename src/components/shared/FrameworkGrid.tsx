'use client';

import React from 'react';
import GlassCard from '@/components/GlassCard';

interface Framework {
  icon: React.ReactElement;
  title: string;
  description: string;
}

interface FrameworkGridProps {
  frameworks: Framework[];
  columns?: number;
  className?: string;
}

export default function FrameworkGrid({
  frameworks,
  columns = 3,
  className = '',
}: FrameworkGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 md:grid-cols-3';

  return (
    <div className={`grid ${gridCols} gap-6 md:gap-8 ${className}`}>
      {frameworks.map((framework, index) => (
        <GlassCard
          key={index}
          className="flex flex-col items-start p-6 group h-full hover:bg-white/[0.02] transition-colors duration-300"
        >
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#b7d1ea]/30 transition-colors duration-300 mb-4">
            {React.cloneElement(framework.icon as React.ReactElement<{ className?: string }>, {
              className: 'w-6 h-6 text-[#b7d1ea] group-hover:scale-110 transition-transform duration-300',
            })}
          </div>
          <h3 className="text-base font-semibold text-white tracking-wide mb-2">
            {framework.title}
          </h3>
          <p className="text-sm text-white/50 font-light leading-relaxed">
            {framework.description}
          </p>
        </GlassCard>
      ))}
    </div>
  );
}
