'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        // Handle floating point numbers by rounding to 1 decimal place if needed
        const displayValue = Number.isInteger(value) 
          ? Math.round(latest)
          : parseFloat(latest.toFixed(1));
        ref.current.textContent = `${prefix}${displayValue}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix, value]);

  // Reserve width to prevent layout shift
  const widthCh = `${prefix}${value}${suffix}`.length;
  return (
    <span
      ref={ref}
      className={`inline-block tabular-nums ${className ?? ''}`.trim()}
      style={{ minWidth: `${widthCh}ch` }}
    />
  );
}
