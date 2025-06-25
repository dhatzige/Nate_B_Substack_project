'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Briefcase, Zap, Award, Users } from 'lucide-react';
import { CAREER_HISTORY, STATS } from '@/lib/data';
import AnimatedCounter from './AnimatedCounter';

const iconMap: { [key: string]: React.ElementType } = {
  Briefcase,
  Zap,
  Award,
  Users,
};

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 sm:py-32">
      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                From Amazon Product Leader to Your AI Career Guide
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                This is the best place on the internet for thoughtful, strategic takes on AI. After a decade leading product teams at places like Amazon Prime Video, I'm now focused on helping you stay ahead of the curve and join a community of ambitious professionals building the future.
              </p>
              <motion.div className="mt-12 space-y-6" variants={containerVariants}>
                {CAREER_HISTORY.map((item, index) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <motion.div key={index} className="flex items-start gap-4" variants={itemVariants}>
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-1 text-base text-muted-foreground">{item.role}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <motion.div className="w-full max-w-sm lg:max-w-none" variants={itemVariants}>
              <Image 
                src="https://natebjones.com/assets/images/image02.jpg?v=2f5f4ef7"
                alt="A professional headshot of Nate B. Jones"
                width={500}
                height={600}
                className="rounded-2xl object-cover aspect-[4/5] shadow-2xl w-full h-auto"
                priority
              />
            </motion.div>
            <motion.div 
              className="mt-12 grid grid-cols-2 gap-8 w-full max-w-sm lg:max-w-none"
              variants={containerVariants}
            >
              {STATS.map((stat, index) => {
                const value = parseFloat(stat.value);
                return (
                  <motion.div key={index} className="flex flex-col-reverse" variants={itemVariants}>
                    <dt className="text-base leading-7 text-muted-foreground">{stat.label}</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-foreground">
                      <AnimatedCounter value={value} />
                      {stat.value.replace(/[0-9.]/g, '')}
                    </dd>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}