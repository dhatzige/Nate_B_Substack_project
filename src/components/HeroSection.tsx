'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { SOCIAL_PROOF, TRUST_LOGOS } from '@/lib/data';
import TikTokPlayer from './ui/TikTokPlayer';
import { scrollToSection } from '@/lib/utils';
import { Button } from './ui/button';
import InfiniteMarquee from './ui/infinite-marquee';
import AnimatedCounter from './ui/animated-counter';
import GlassWord from './ui/GlassWord';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
};

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      {/* Background Gradients & Grid */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <motion.div 
          className="absolute -top-1/2 left-1/2 h-full w-full -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
        />
      </div>

      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16 items-center">
          <div className="text-center lg:text-left">
            <motion.p
              className="font-semibold text-primary text-lg"
              variants={itemVariants}
            >
              AI Career Strategist
            </motion.p>

            <motion.h1
              className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              variants={itemVariants}
            >
              Build Your <GlassWord>Compass</GlassWord> for the Age of <GlassWord>AI</GlassWord>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg leading-8 text-muted-foreground"
              variants={itemVariants}
            >
              From Amazon Prime Video to AI Career Strategy—helping tech professionals thrive in the age of artificial intelligence.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              variants={itemVariants}
            >
              <Button size="lg" onClick={() => scrollToSection('newsletter')} className="group">
                Get Free AI Career Guide
                <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="secondary" onClick={() => scrollToSection('insights')}>
                Read Latest Insights
              </Button>
            </motion.div>

            <motion.div className="mt-12" variants={itemVariants}>
              <p className="text-sm font-medium text-muted-foreground">
                Join a community of over 300,000 tech professionals
              </p>
              <div className="mt-4 flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-2">
                {SOCIAL_PROOF.map((item, index) => (
                  <div key={index} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <AnimatedCounter 
                      value={item.count} 
                      className="font-bold text-foreground text-base"
                      suffix={item.suffix || ''}
                    />
                    <span>{item.metric} on {item.platform}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* TikTok Player Column */}
          <div className="flex justify-center lg:justify-end">
            <motion.div className="text-center" variants={itemVariants}>
              <h3 className="text-lg font-semibold text-foreground mb-4">Latest Video</h3>
              <TikTokPlayer
                videoUrl="https://www.tiktok.com/@nate.b.jones/video/7519672287038049566"
                className="w-60 sm:w-72 lg:w-80 mx-auto"
              />
              <p className="mt-4 text-sm text-muted-foreground">
                Watch the latest news on AI on <a href="https://www.tiktok.com/@nate.b.jones" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">TikTok</a>.
              </p>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
} 