import { Check, ExternalLink, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { ServiceTier } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: ServiceTier;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const handleCTAClick = () => {
    if (service.ctaUrl.startsWith('http')) {
      window.open(service.ctaUrl, '_blank', 'noopener,noreferrer');
    } else {
      // This would be replaced by Next.js router navigation for internal links
      console.log(`Navigate to: ${service.ctaUrl}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCTAClick();
    }
  };

  return (
    <motion.div
      className={cn(
        'relative flex h-full flex-col rounded-2xl border bg-card p-6 shadow-sm transition-shadow duration-300',
        service.featured ? 'border-primary/50 ring-2 ring-primary' : 'border-border',
      )}
      whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)' }}
    >
      {service.featured && (
        <div className="absolute top-0 right-4 -translate-y-1/2 transform">
          <div className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            <Star className="h-3.5 w-3.5" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      <div className="flex flex-grow flex-col">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-foreground">{service.name}</h3>
          <p className="mt-2 text-muted-foreground h-12 min-h-[3rem]">{service.description}</p>

          {service.price && (
            <div className="my-6">
              <span className="text-4xl font-extrabold tracking-tight text-foreground">{service.price}</span>
              {service.pricePeriod && (
                <span className="ml-1.5 text-sm text-muted-foreground">{service.pricePeriod}</span>
              )}
            </div>
          )}

          <ul className="mt-6 space-y-3 text-sm" role="list">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <button
            onClick={handleCTAClick}
            onKeyDown={handleKeyDown}
            className={cn(
              'w-full rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition-all duration-300 ease-in-out flex items-center justify-center gap-2',
              service.featured
                ? 'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-primary scale-105 hover:scale-110'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:outline-secondary hover:scale-105',
            )}
            aria-label={`${service.cta} for ${service.name}`}
          >
            {service.cta}
            {service.ctaUrl.startsWith('http') && <ExternalLink className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
} 