'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import useSubstackPosts from '@/lib/hooks/useSubstackPosts';
import PostCard from './PostCard';
import { buttonVariants } from './ui/button';
import Link from 'next/link';

export default function LatestInsights() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const { posts: allPosts, loading, error } = useSubstackPosts(); // Fetch all posts
  const posts = allPosts.slice(0, 6); // Take the first 6 posts for the preview

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="insights" className="py-24 sm:py-32">
      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div className="mx-auto max-w-2xl lg:text-center" variants={itemVariants}>
          <h2 className="text-base font-semibold leading-7 text-primary">
            Fresh from the Newsletter
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Latest Insights
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Daily insights on AI career strategy, industry analysis, and practical implementation guides.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center"
          variants={containerVariants}
        >
          {posts.map((post, i) => (
            <motion.div key={post.id} variants={itemVariants}>
              <PostCard post={post} featured={post.featured} />
            </motion.div>
          ))}
        </motion.div>

                <div id="archive" className="-mt-20 h-20" />
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <a 
            href="https://natesnewsletter.substack.com/archive" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }), 'group')}
          >
            View Full Archive
            <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}