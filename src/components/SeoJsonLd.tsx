'use client';

import { useEffect } from 'react';

const SeoJsonLd = () => {
  useEffect(() => {
    const jsonData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Nate B. Jones',
      url: 'https://natebjonesai.com',
      image: 'https://natebjonesai.com/nate-profile.jpg',
      jobTitle: 'AI Career Strategist',
      worksFor: {
        '@type': 'Organization',
        name: 'Rockerbox',
      },
      alumniOf: {
        '@type': 'Organization',
        name: 'Amazon Prime Video',
      },
      description: 'AI Career Strategist and former Amazon Prime Video Head of Product helping tech professionals thrive in the age of artificial intelligence.',
      sameAs: [
        'https://www.tiktok.com/@nate.b.jones',
        'https://substack.com/@natebjonesai',
        'https://www.linkedin.com/in/natebjonesai',
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(jsonData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default SeoJsonLd;