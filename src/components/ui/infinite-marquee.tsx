'use client';

'use client';

import { cn } from '@/lib/utils';
import { motion, Variants } from 'framer-motion';
import React, { ReactNode } from 'react';

interface InfiniteMarqueeProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  speed?: 'normal' | 'slow' | 'fast';
  pauseOnHover?: boolean;
  className?: string;
}

export default function InfiniteMarquee({
  children,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className,
}: InfiniteMarqueeProps) {
  const duration = speed === 'slow' ? 80 : speed === 'fast' ? 25 : 40;

  const marqueeVariants: Variants = {
    animate: {
      x: direction === 'left' ? '-100%' : '100%',
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: duration,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div 
      className={cn(
        'w-full overflow-hidden',
        '[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]',
        className
      )}
    >
      <motion.div
        className={cn('flex w-max', { 'hover:[animation-play-state:paused]': pauseOnHover })}
      >
        {React.Children.map(children, (child, i) => <div key={i}>{child}</div>)}
        {React.Children.map(children, (child, i) => <div key={`duplicate-${i}`}>{child}</div>)}
      </motion.div>
    </div>
  );
}
