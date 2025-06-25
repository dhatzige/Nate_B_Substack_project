 import { SubstackPost, ServiceTier, Testimonial, SocialProof, Accomplishment, Credential, Stat, LeaderboardEntry, Note } from './types';
import { AmazonLogo } from '@/components/icons/AmazonLogo';
import { ChaseLogo } from '@/components/icons/ChaseLogo';
import { MicrosoftLogo } from '@/components/icons/MicrosoftLogo';
import { StripeLogo } from '@/components/icons/StripeLogo';
import { ToyotaLogo } from '@/components/icons/ToyotaLogo';



export const TRUST_LOGOS = [
  { name: 'Amazon', Icon: AmazonLogo },
  { name: 'Chase', Icon: ChaseLogo },
  { name: 'Microsoft', Icon: MicrosoftLogo },
  { name: 'Stripe', Icon: StripeLogo },
  { name: 'Toyota', Icon: ToyotaLogo },
];

export const SOCIAL_PROOF: SocialProof[] = [
  { platform: 'TikTok', count: 298.6, suffix: 'k', metric: 'followers' },
  { platform: 'Substack', count: 29, suffix: 'K+', metric: 'subscribers' },
  { platform: 'TikTok', count: 4, suffix: 'M+', metric: 'likes' }
];

export const FEATURED_POSTS: SubstackPost[] = []; // deprecated mock; live data via API


export const ACCOMPLISHMENTS: Accomplishment[] = [
  { id: 1, text: 'Former Head of Product, Amazon Prime Video' },
  { id: 2, text: '15+ Years in Product Management' },
  { id: 3, text: 'AI Career Strategist for 300k+ Professionals' },
  { id: 4, text: '#1 Rising Voice in Technology on Substack' },
];

export const CAREER_HISTORY: Credential[] = [
  { icon: 'Briefcase', title: 'Amazon Prime Video', role: 'Former Head of Product' },
  { icon: 'Zap', title: 'Rockerbox', role: 'Current Head of Product' },
  { icon: 'Award', title: 'Kaffeologie', role: 'Co-founder & Operator' },
  { icon: 'Users', title: '15+ Years in Tech', role: 'Product & Team Leadership' },
];

export const STATS: Stat[] = [
  { value: '15+', label: 'Years of Experience' },
  { value: '299K+', label: 'TikTok Followers' },
  { value: '29K+', label: 'Newsletter Subscribers' },
  { value: '4M+', label: 'TikTok Likes' },
];

export const SUBSTACK_POSTS: SubstackPost[] = []; // deprecated mock; live data via API


export const EXPLORE_SERVICES: ServiceTier[] = [
  {
    id: 'newsletter',
    name: 'Newsletter Archive',
    description: 'Search 500+ daily insights by topic',
    features: ['Daily AI strategy content', 'Searchable archive', 'Topic categorization', 'Mobile-friendly reading'],
    cta: 'Browse Archive',
    ctaUrl: 'https://natesnewsletter.substack.com/archive'
  }
];

export const LEADERBOARD_DATA: LeaderboardEntry[] = [
  { rank: 1, name: 'Alex Johnson', avatarUrl: 'https://avatar.vercel.sh/alex-johnson.svg?text=AJ', referrals: 128 },
  { rank: 2, name: 'Samantha Bee', avatarUrl: 'https://avatar.vercel.sh/samantha-bee.svg?text=SB', referrals: 94 },
  { rank: 3, name: 'Ken Miles', avatarUrl: 'https://avatar.vercel.sh/ken-miles.svg?text=KM', referrals: 76 },
  { rank: 4, name: 'Maria Garcia', avatarUrl: 'https://avatar.vercel.sh/maria-garcia.svg?text=MG', referrals: 52 },
  { rank: 5, name: 'Chris Lee', avatarUrl: 'https://avatar.vercel.sh/chris-lee.svg?text=CL', referrals: 41 },
  { rank: 6, name: 'Jordan Patel', avatarUrl: 'https://avatar.vercel.sh/jordan-patel.svg?text=JP', referrals: 35 },
];



export const NOTES: Note[] = [
  {
    id: 'note-1',
    author: 'Nate',
    timestamp: '7h',
    content: 'I am loving this prompt - works on ChatGPT, Gemini, Midjourney etc. I did Singapore and Bangkok-what city should I do next?\nprompt: Photorealistic 3D cross-section of the Singapore marina bay with the marina bay sands hotel in the foreground and the Singapore skyline behind, highly-detailed, studio background, at sunset --ar 4:3 --s 100',
  },
  {
    id: 'note-2',
    author: 'Nate',
    timestamp: '13h',
    content: 'This is a BIG ruling on the AI side of things—fair use wins, but the big companies get a wrist slap on piracy too...',
    link: '#',
    linkText: 'View full episode',
  },
  {
    id: 'note-3',
    author: 'Nate',
    timestamp: '18h',
    content: `Cluely is kinda hiding the real power move here behind a bunch of breathless cheating stories—the real story is all about the dawn of a new age of proactive AI agents and it\'s MUCH more interesting than one more "Roy got kicked out of Columbia" story lol`,
  },
  {
    id: 'note-4',
    author: 'Nate',
    timestamp: '1d',
    content: 'Microsoft vaunted distribution not winning here. Cursor is now the dominant AI code editor.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '4',
    name: 'David C.',
    title: 'Software Engineer',
    company: 'Amazon',
    avatar: '/avatars/david-c.jpg',
    content: 'The daily insights in the newsletter are invaluable. It\'s the first thing I read every morning to stay ahead of the curve in the fast-paced world of AI.',
  },
  {
    id: '5',
    name: 'Emily R.',
    title: 'UX Designer',
    company: 'Google',
    avatar: '/avatars/emily-r.jpg',
    content: 'I was worried AI would make my role obsolete. Nate\'s content taught me how to leverage AI as a creative partner. My design process is now faster and more innovative than ever.',
  }
];



 