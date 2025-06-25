'use client';

import { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import useSubstackPosts from '@/lib/hooks/useSubstackPosts';
import PostCard from './PostCard';
import { Button } from './ui/button';
import { scrollToSection } from '@/lib/utils';

export default function FeaturedContent() {
  const { posts } = useSubstackPosts(10);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 sm:py-32">
      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div className="mx-auto max-w-2xl text-center" variants={itemVariants}>
          <h2 className="text-base font-semibold leading-7 text-primary">
            Greatest Hits
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Most Popular Insights
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Hand-picked articles to accelerate your AI career. These are the essential reads that have helped thousands of professionals like you.
          </p>
          <p className="mt-4 text-sm italic text-muted-foreground/80">
            (Note: This section is a curated preview. The "greatest hits" are being finalized.)
          </p>
        </motion.div>

        <div className="relative mt-16">
          <motion.div
            ref={scrollContainerRef}
            className="flex space-x-8 overflow-x-auto pb-8 scrollbar-hide"
            variants={containerVariants}
          >
            {posts.map((post) => (
              <motion.div key={post.id} className="w-[350px] flex-shrink-0" variants={itemVariants}>
                <PostCard post={post} />
              </motion.div>
            ))}
          </motion.div>
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 pointer-events-none">
            <Button variant="outline" size="icon" onClick={() => scroll(-300)} className="pointer-events-auto rounded-full bg-background hover:bg-secondary text-foreground shadow-lg">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll(300)} className="pointer-events-auto rounded-full bg-background hover:bg-secondary text-foreground shadow-lg">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <motion.div
          className="relative isolate mt-20 overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
          variants={itemVariants}
        >
          <div className="bg-dot-pattern [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] absolute inset-0 -z-10" />
          <div className="mx-auto max-w-3xl text-center p-8 sm:p-12">
            <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-4">
              Ready to Transform Your AI Career?
            </h3>
            <p className="text-lg leading-8 text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join over 29,000 professionals getting daily AI insights and career strategies delivered straight to their inbox.
            </p>
            <Button size="lg" onClick={() => scrollToSection('newsletter')} className="group">
              Join the Newsletter
              <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 