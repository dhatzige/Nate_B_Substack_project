'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Copy, Twitter, Linkedin, Mail, Award, ArrowRight } from 'lucide-react';
import { LEADERBOARD_DATA } from '@/lib/data';

import { cn } from '@/lib/utils';

const medalColors: { [key: number]: string } = {
  1: 'text-yellow-400',
  2: 'text-gray-400',
  3: 'text-orange-400',
};

export default function LeaderboardSection() {
  const referralLink = 'https://natesnewsletter.substack.com/?r=sh4r3';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    // Add toast notification here in a real app
  };

  return (
    <section id="leaderboard" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Join the Inner Circle
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Help grow the community by sharing the newsletter and climb the leaderboard. Earn exclusive rewards, content, and bragging rights.
            </p>
            <div className="mt-8">
              <label htmlFor="referral-link" className="text-sm font-medium text-muted-foreground">Your unique referral link</label>
              <div className="mt-2 flex w-full max-w-md items-center space-x-2 rounded-lg border border-border bg-card p-2">
                <input
                  id="referral-link"
                  type="text"
                  readOnly
                  value={referralLink}
                  className="flex-1 bg-transparent px-2 text-muted-foreground focus:outline-none"
                />
                <Button size="sm" onClick={copyToClipboard}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm font-medium text-muted-foreground mb-2">Share with your network</p>
              <div className="flex space-x-2">
                <Button asChild variant="outline"><a href={`https://twitter.com/intent/tweet?text=Check%20out%20Nate%27s%20AI%20Newsletter!&url=${referralLink}`} target="_blank" rel="noopener noreferrer"><Twitter className="h-4 w-4 mr-2" /> Twitter</a></Button>
                <Button asChild variant="outline"><a href={`https://www.linkedin.com/shareArticle?mini=true&url=${referralLink}`} target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4 mr-2" /> LinkedIn</a></Button>
                <Button asChild variant="outline"><a href={`mailto:?subject=Nate's AI Newsletter&body=Check%20it%20out:%20${referralLink}`}><Mail className="h-4 w-4 mr-2" /> Email</a></Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flow-root"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-center mb-6">Top Referrers</h3>
            <ul role="list" className="-my-4 divide-y divide-border">
              {LEADERBOARD_DATA.map((person) => (
                <li key={person.rank} className="flex items-center py-4 space-x-4">
                  <div className={cn('text-lg font-bold w-8 text-center', medalColors[person.rank] || 'text-muted-foreground')}>
                    {person.rank <= 3 ? <Award className="h-6 w-6 mx-auto" /> : person.rank}
                  </div>
                  <div className="h-12 w-12 flex-shrink-0">
                    <img
                      className="h-full w-full rounded-full object-cover"
                      src={person.avatarUrl}
                      alt={person.name}
                    />
                  </div>
                  <div className="min-w-0 flex-auto">
                    <p className="text-md font-semibold leading-6 text-foreground">
                      {person.name}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">{person.referrals}</p>
                    <p className="text-xs text-muted-foreground">Referrals</p>
                  </div>
                </li>
              ))}
            </ul>
             <div className="mt-8 text-center">
                <Button variant="ghost" asChild className="group">
                    <a href="https://natesnewsletter.substack.com/leaderboard" target="_blank" rel="noopener noreferrer">
                        View Full Leaderboard
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
