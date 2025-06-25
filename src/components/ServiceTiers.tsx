'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { PopupModal } from 'react-calendly';
import { EXPLORE_SERVICES } from '@/lib/data';

import { Button } from './ui/button';

export default function ServiceTiers() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">
            Start Your Journey
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore the Newsletter
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Dive into a comprehensive archive of daily AI insights, strategies, and analyses to stay ahead of the curve.
          </p>
        </motion.div>

        <div className="mt-16 max-w-2xl mx-auto bg-card/50 border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-foreground text-center">{EXPLORE_SERVICES[0].name}</h3>
          <p className="mt-2 text-muted-foreground text-center">{EXPLORE_SERVICES[0].description}</p>
          <ul className="mt-6 space-y-3 text-muted-foreground">
            {EXPLORE_SERVICES[0].features.map((feature, index) => (
              <li key={index} className="flex gap-x-3 items-center">
                <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-8 w-full">
            <a href={EXPLORE_SERVICES[0].ctaUrl} target="_blank" rel="noopener noreferrer">
              {EXPLORE_SERVICES[0].cta} <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <motion.div
          className="mt-20 text-center bg-card p-8 sm:p-12 rounded-2xl max-w-3xl mx-auto border border-border"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-2xl font-bold tracking-tight text-foreground">Ready to Accelerate Your Career?</h3>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Book a complimentary 15-minute discovery call to discuss your goals and see how I can help you thrive in the age of AI.
          </p>
          <div className="mt-8">
            <Button size="lg" onClick={() => setIsCalendlyOpen(true)}>
              Grab a Free Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>

      {isMounted && (
        <PopupModal
          url="https://calendly.com/nate-b-jones/15-minute-discovery-call"
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={document.getElementById('__next')!}
        />
      )}
    </section>
  );
}