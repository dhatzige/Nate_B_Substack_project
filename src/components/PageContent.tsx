'use client';

import { Suspense, lazy } from 'react';

import HeroSection from '@/components/HeroSection';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorBoundary from '@/components/ErrorBoundary';

// Lazy load below-the-fold components
const LatestInsights = lazy(() => import('@/components/LatestInsights'));
const NotesSection = lazy(() => import('@/components/NotesSection'));
const LeaderboardSection = lazy(() => import('@/components/LeaderboardSection'));

const ChatSection = lazy(() => import('@/components/ChatSection'));
const AboutSection = lazy(() => import('@/components/AboutSection'));


import NewsletterSignup from '@/components/NewsletterSignup';
const Footer = lazy(() => import('@/components/Footer'));

const SectionWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

export default function PageContent() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <SectionWrapper className="bg-white dark:bg-gray-900">
        <ErrorBoundary>
          <HeroSection />
        </ErrorBoundary>
      </SectionWrapper>

      {/* Latest Insights */}
      <SectionWrapper className="bg-gray-50 dark:bg-gray-950">
        <ErrorBoundary>
          <Suspense fallback={<div className="py-24 sm:py-32"><LoadingSpinner size="lg" message="Loading latest insights..." className="min-h-[400px]" /></div>}>
            <LatestInsights />
          </Suspense>
        </ErrorBoundary>
      </SectionWrapper>

      {/* Notes Section */}
      <SectionWrapper className="bg-white dark:bg-gray-900">
        <ErrorBoundary>
          <Suspense fallback={<div className="py-24 sm:py-32"><LoadingSpinner size="lg" message="Loading notes..." className="min-h-[400px]" /></div>}>
            <NotesSection />
          </Suspense>
        </ErrorBoundary>
      </SectionWrapper>

      {/* Leaderboard Section */}
      <SectionWrapper className="bg-white dark:bg-gray-900">
        <ErrorBoundary>
          <Suspense fallback={<div className="h-96" />}><LeaderboardSection /></Suspense>
        </ErrorBoundary>
      </SectionWrapper>
      
      {/* Chat Section */}
      <SectionWrapper className="bg-gray-50 dark:bg-gray-950">
        <ErrorBoundary>
          <Suspense fallback={<div className="h-96" />}><ChatSection /></Suspense>
        </ErrorBoundary>
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper className="bg-white dark:bg-gray-900">
        <ErrorBoundary>
          <Suspense fallback={<div className="min-h-[500px]"><LoadingSpinner message="Loading about section..." /></div>}>
            <AboutSection />
          </Suspense>
        </ErrorBoundary>
      </SectionWrapper>

      {/* Newsletter Signup */}
      <SectionWrapper className="bg-gray-50 dark:bg-gray-950">
        <ErrorBoundary>
          <NewsletterSignup />
        </ErrorBoundary>
      </SectionWrapper>

      <Footer />
    </div>
  );
} 