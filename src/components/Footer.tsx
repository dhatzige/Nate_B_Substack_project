'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import { scrollToSection } from '@/lib/utils';
import { Linkedin, Rss } from 'lucide-react';



const SOCIAL_LINKS = [

  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/natebjones/',
    icon: Linkedin,
  },
  {
    name: 'Substack',
    href: 'https://natesnewsletter.substack.com/',
    icon: Rss,
  },
];

const NAV_LINKS = [
  { name: 'Insights', href: '#insights' },
  { name: 'Archive', href: '#archive' },
  { name: 'Notes', href: '#notes' },
  { name: 'Leaderboard', href: '#leaderboard' },
  { name: 'Chat', href: '#chat' },
  { name: 'About', href: '#about' },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <motion.div 
        className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {NAV_LINKS.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href.substring(1));
                }}
                className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {SOCIAL_LINKS.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} Nate B. Jones. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
 