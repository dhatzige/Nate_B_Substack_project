export interface SubstackPost {
  id: string;
  title: string;
  excerpt: string;
  date: string; // Formatted date string for display
  post_date: string; // ISO date string for sorting
  category: string;
  readTime: string;
  url: string;
  featured?: boolean;
  imageUrl?: string;
  comments_count: number;
  reactions: { [key: string]: number };
}

export interface ServiceTier {
  id: string;
  name: string;
  description: string;
  features: string[];
  cta: string;
  ctaUrl: string;
  price?: string;
  pricePeriod?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Credential {
  icon: string;
  title: string;
  role: string;
}

export interface Accomplishment {
  id: number;
  text: string;
}

export interface SocialProof {
  platform: string;
  count: number;
  metric: string;
  suffix?: string;
}

export interface NewsletterSignup {
  email: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  avatarUrl: string;
  referrals: number;
}

export interface Note {
  id: string;
  author: string;
  timestamp: string;
  content: string;
  link?: string;
  linkText?: string;
} 