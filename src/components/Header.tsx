'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Compass, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { cn, scrollToSection } from '@/lib/utils';
import { Button } from './ui/button';

const NAV_LINKS = [
  { name: 'Insights', href: 'insights', type: 'scroll' },
  { name: 'Archive', href: 'archive', type: 'scroll' },
  { name: 'Notes', href: 'notes', type: 'scroll' },
  { name: 'Leaderboard', href: 'leaderboard', type: 'scroll' },
  { name: 'Chat', href: 'chat', type: 'scroll' },
  { name: 'About', href: 'about', type: 'scroll' },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9 p-2 rounded-full" />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setMobileMenuOpen(false);
  };

  const menuVariants: Variants = {
    closed: { opacity: 0, x: '100%' },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 260, damping: 30 }
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'sticky top-0 z-50 transition-colors duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex h-20 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
              <span className="sr-only">Nate B. Jones</span>
              <motion.div 
                className="bg-primary rounded-lg p-2"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Compass className="h-6 w-6 text-primary-foreground" />
              </motion.div>
              <div>
                <h1 className="font-bold text-lg text-foreground">Nate B. Jones</h1>
                <p className="text-xs text-muted-foreground">AI Career Strategist</p>
              </div>
            </Link>
          </div>

          <div className="flex items-center lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              type="button"
              className="ml-1"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          <div className="hidden lg:flex lg:gap-x-1">
            {NAV_LINKS.map((item) =>
              item.type === 'scroll' ? (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-semibold"
                >
                  {item.name}
                </Button>
              ) : (
                <Button key={item.name} variant="ghost" asChild className="text-sm font-semibold">
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              )
            )}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
            <ThemeToggle />
            <Button onClick={() => scrollToSection('newsletter')} className="rounded-full shadow-lg shadow-primary/20">
              Join Newsletter
            </Button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border lg:hidden"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
                  <div className="bg-primary rounded-lg p-2">
                    <Compass className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h1 className="font-bold text-lg text-foreground">Nate B. Jones</h1>
                </Link>
                <Button variant="ghost" size="icon" type="button" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <motion.div 
                className="mt-8 flow-root"
                initial="closed"
                animate="open"
                variants={{ open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
              >
                <div className="-my-6 divide-y divide-border">
                  <div className="space-y-2 py-6">
                    {NAV_LINKS.map((item) => (
                      <motion.div key={item.name} variants={itemVariants}>
                        {item.type === 'scroll' ? (
                          <Button
                            variant="ghost"
                            onClick={() => handleNavClick(item.href)}
                            className="w-full justify-start px-3 py-6 text-base"
                          >
                            {item.name}
                          </Button>
                        ) : (
                          <Button variant="ghost" asChild className="w-full justify-start px-3 py-6 text-base">
                            <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                          </Button>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  <motion.div className="py-6" variants={itemVariants}>
                    <Button
                      variant="ghost"
                      onClick={() => handleNavClick('newsletter')}
                      className="w-full justify-start px-3 py-6 text-base"
                    >
                      Join Newsletter
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 