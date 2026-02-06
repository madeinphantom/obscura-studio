'use client';


import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PortalCardProps {
  title: string;
  description: string;
  price?: string;
  layer?: string;
  status?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  gradient?: string;
  actionIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export default function PortalCard({ 
  title, 
  description,
  price,
  layer, 
  status, 
  icon, 
  onClick, 
  className = '',
  gradient = 'from-blue-500/20 to-purple-500/20',
  actionIcon,
  children
}: PortalCardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative group cursor-pointer w-full overflow-hidden border border-gray-600/70 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:border-white/40 active:scale-[0.99] rounded-[2rem] flex flex-col ${className}`}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

      {/* Top Section (Icon Area) - Flexible Height */}
      <div className="relative flex-grow min-h-[60px] flex items-center justify-center p-6">
        
        {/* Status Badge (Top Right) */}
        {status && (
          <div className="absolute top-6 right-6 z-20">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-white/50 backdrop-blur-md shadow-lg">
              {status}
            </span>
          </div>
        )}

        {/* Pill Label (Top Left) replaces "Layer" */}
        {layer && (
          <div className="absolute top-6 left-6 z-20">
            <span className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase backdrop-blur-md shadow-lg border ${layer === 'Most Popular' ? 'bg-[#b7d1ea] text-black border-[#b7d1ea]' : 'bg-white/10 text-white/80 border-white/10'}`}>
              {layer}
            </span>
          </div>
        )}

        {/* Central Icon (Optional - User requested removal of numbers, but prop remains if needed later) */}
        {icon && (
          <div className="scale-100 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none">
              {icon}
          </div>
        )}
      </div>

      {/* Bottom Content Panel - Glass Effect */}
      <div className="relative z-10 bg-black/40 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col transition-colors duration-300 group-hover:bg-black/50">
          
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white tracking-wide mb-2">
                {title}
            </h3>
            
            <p className="text-sm text-white/50 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Feature List (Children) */}
          {children && (
            <div className="mb-6 pt-4 border-t border-white/5 space-y-3">
              {children}
            </div>
          )}
          
          <div className="mt-auto flex items-end justify-between pt-2">
              {price && (
                <div className="flex flex-col">
                  <span className="text-3xl font-light text-white tracking-tight shadow-black drop-shadow-lg">
                    {price}
                  </span>
                </div>
              )}
              
              {/* Action Button */}
              <div 
                className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:bg-white text-white group-hover:text-black hover:scale-110 mb-1"
              >
                {actionIcon ? actionIcon : (
                  <ArrowRight className="w-5 h-5" strokeWidth={2} />
                )}
              </div>
          </div>
      </div>

    </div>
  );
}

