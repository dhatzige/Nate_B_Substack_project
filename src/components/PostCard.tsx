'use client';

import { Clock, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { SubstackPost } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { motion } from 'framer-motion';

interface PostCardProps {
  post: SubstackPost;
  featured?: boolean;
}

/**
 * A modernized, visually engaging card for displaying Substack articles.
 * Aligned with the new design system, it features a clean layout, refined
 * typography, and subtle, engaging hover effects.
 */
export default function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <Link href={post.url} target="_blank" rel="noopener noreferrer" className="block h-full">
      <motion.article
        aria-label={`Read article: ${post.title}`}
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {post.imageUrl && (
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="flex flex-col flex-grow p-6">
        {/* Card Header: Category and Date */}
        <div className="mb-4 flex items-center justify-between text-xs">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary ring-1 ring-inset ring-primary/20">
            {post.category}
          </span>
          <time dateTime={post.date} className="text-muted-foreground">
            {formatDate(post.date)}
          </time>
        </div>

        {/* Card Title */}
        <h3 className="text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h3>

        {/* Card Excerpt */}
        <p className="mt-3 flex-grow text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {post.excerpt}
        </p>

        {/* Card Footer: Read Time and Action */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center text-sm font-semibold text-primary">
            Read Article
            <ArrowRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
          <Star className="h-3 w-3" />
          <span>Featured</span>
        </div>
      )}
    </motion.article>
    </Link>
  );
} 