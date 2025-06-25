import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "next-themes";
import ThemeScript from "@/components/ThemeScript";
import SeoJsonLd from "@/components/SeoJsonLd";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nate B. Jones - AI Career Strategist | Former Amazon Prime Video Head of Product",
  description: "Join 297.7K+ professionals learning AI career strategy from Nate B. Jones, former Amazon Prime Video Head of Product. Get expert guidance on thriving in the age of artificial intelligence.",
  keywords: [
    "AI career strategy",
    "artificial intelligence career",
    "tech career advice",
    "product management",
    "Amazon Prime Video",
    "AI career coach",
    "tech leadership",
    "career development",
    "AI professional development",
    "tech career growth"
  ],
  authors: [{ name: "Nate B. Jones", url: "https://natebjonesai.com" }],
  creator: "Nate B. Jones",
  publisher: "Nate B. Jones",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://natebjonesai.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://natebjonesai.com',
    title: 'Nate B. Jones - AI Career Strategist',
    description: 'Expert AI career guidance from former Amazon Prime Video Head of Product. Join 297.7K+ professionals learning to thrive in the age of AI.',
    siteName: 'Nate B. Jones - AI Career Strategist',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nate B. Jones - AI Career Strategist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nate B. Jones - AI Career Strategist',
    description: 'Expert AI career guidance from former Amazon Prime Video Head of Product. Join 297.7K+ professionals learning to thrive in the age of AI.',
    creator: '@nate.b.jones',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'google-site-verification': 'your-google-site-verification-code',
    'msvalidate.01': 'your-bing-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <SeoJsonLd />



      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange
        >
          <ThemeScript />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 