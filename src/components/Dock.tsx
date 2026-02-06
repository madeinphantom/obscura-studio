'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DockProps {
  children: React.ReactNode;
  className?: string;
  iconMagnification?: number;
  iconDistance?: number;
}

interface DockIconProps {
  children: React.ReactNode;
  className?: string;
  mouseX?: MotionValue<number>;
  magnification?: number;
  distance?: number;
}

const DockContext = React.createContext<{
  mouseX: MotionValue<number>;
  magnification: number;
  distance: number;
} | null>(null);

export function Dock({
  children,
  className,
  iconMagnification = 60,
  iconDistance = 100,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <DockContext.Provider value={{ mouseX, magnification: iconMagnification, distance: iconDistance }}>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          'flex h-14 w-fit items-end gap-3 rounded-2xl bg-white/5 border border-white/10 px-3 pb-2 backdrop-blur-md',
          className
        )}
      >
        {children}
      </motion.div>
    </DockContext.Provider>
  );
}

export function DockIcon({ children, className }: DockIconProps) {
  const context = React.useContext(DockContext);
  const ref = useRef<HTMLDivElement>(null);

  // Call hooks unconditionally (React rules of hooks)
  const fallbackMouseX = useMotionValue(Infinity);
  
  // Then use context values or fallbacks
  const mouseX = context?.mouseX ?? fallbackMouseX;
  const magnification = context?.magnification ?? 60;
  const distance = context?.distance ?? 100;

  const distanceFromMouse = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceFromMouse,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        'flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-white/10 text-white/70 hover:text-white transition-colors',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
