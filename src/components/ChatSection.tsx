'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const ChatSection = () => {
  return (
    <section id="chat" className="py-24 sm:py-32">
      <motion.div
        className="container mx-auto px-4 md:px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Join the Conversation
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Get direct access to me, ask questions about AI, and connect with a community of ambitious tech professionals in my private subscriber chat.
        </p>

        <div className="max-w-2xl mx-auto bg-background/50 dark:bg-zinc-800/50 p-8 sm:p-12 rounded-3xl shadow-lg flex flex-col items-center border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">Join on Mobile</h3>
              <div className="p-2 bg-white rounded-lg border border-border mb-4">
                <Image 
                  src="/images/chat-qr-code.jpg"
                  alt="QR code for Substack subscriber chat"
                  width={180}
                  height={180}
                  className="rounded-md"
                  priority
                />
              </div>
              <p className="text-sm text-muted-foreground">Scan with your phone's camera.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Get the App</h3>
              <a href="https://apps.apple.com/us/app/substack/id1581650857" target="_blank" rel="noopener noreferrer" className="w-40">
                <Image 
                  src="/images/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  layout="responsive"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.substack.app" target="_blank" rel="noopener noreferrer" className="w-40">
                <Image 
                  src="/images/google-play-badge.svg"
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                  layout="responsive"
                />
              </a>
            </div>
          </div>
          <div className="w-full my-8 border-t border-border/50"></div>
          <a href="https://substack.com/chat/1373231?utm_source=website-chat-section" target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              Open Chat on Web
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ChatSection;
