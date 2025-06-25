'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');
    
    try {
      // Simulate API call to a newsletter service
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you'd handle the response from your API
      // For example: if (response.ok) { ... }
      
      setStatus('success');
      setMessage("Thanks for subscribing! Please check your inbox to confirm.");
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="newsletter" className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get Ahead with AI Insights
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Join 29,000+ professionals receiving daily AI news, career strategies, and tool reviews directly to their inbox.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={status === 'loading'}
              />
              <Button
                type="submit"
                disabled={status === 'loading'}
                size="lg"
              >
                {status === 'loading' ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  'Subscribe'
                )}
              </Button>
            </form>
            <div className="mt-4 h-5">
              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  <p className="text-sm font-medium">{message}</p>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-destructive">
                  <AlertCircle className="h-5 w-5" />
                  <p className="text-sm font-medium">{message}</p>
                </div>
              )}
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-primary/10 p-2 ring-1 ring-primary/20">
                <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-foreground">Daily Insights</dt>
              <dd className="mt-2 leading-7 text-muted-foreground">
                Stay current with the latest AI trends, news, and tool discoveries.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-primary/10 p-2 ring-1 ring-primary/20">
                <CheckCircle className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-foreground">Career Strategies</dt>
              <dd className="mt-2 leading-7 text-muted-foreground">
                Actionable advice to help you leverage AI for professional growth.
              </dd>
            </div>
          </dl>
        </motion.div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  );
}