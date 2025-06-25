import { cn } from '@/lib/utils';

interface GlassWordProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassWord({ children, className }: GlassWordProps) {
  return (
    <span className={cn(
      'bg-gradient-to-b from-primary/80 to-primary/40 text-transparent bg-clip-text',
      'dark:from-primary dark:to-primary/60',
      className
    )}>
      {children}
    </span>
  );
}
