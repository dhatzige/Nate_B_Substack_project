import { NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser';
import type { SubstackPost } from '@/lib/types';

export const dynamic = 'force-dynamic'; // ensure fresh data in dev

export async function GET() {
  try {
    const FEED_URL = 'https://natesnewsletter.substack.com/feed';

    const rssRes = await fetch(FEED_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; NateSite/1.0; +https://natebjonesai.com)'
      },
      // Revalidate every 10 minutes
      next: { revalidate: 600 }
    });

    if (!rssRes.ok) {
      return NextResponse.json(
        { error: 'rss-fetch-failed', status: rssRes.status },
        { status: 502 }
      );
    }

    const xml = await rssRes.text();

    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '' });
    const json = parser.parse(xml);

    const items: any[] = json?.rss?.channel?.item ?? [];

    const posts: SubstackPost[] = items.map((item) => {
      const title: string = item.title;
      const link: string = Array.isArray(item.link) ? item.link[0] : item.link;
      const date: string = new Date(item.pubDate).toISOString();
      const rawDescription: string = item['content:encoded'] || item.description || '';
      const plainText = rawDescription.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
      const excerpt = plainText.slice(0, 160) + (plainText.length > 160 ? '…' : '');
      const words = plainText.split(/\s+/).length;
      const readTime = `${Math.max(1, Math.round(words / 200))} min read`;
      const category = item.category ? (Array.isArray(item.category) ? item.category[0] : item.category) : 'Insight';
      const imageUrl = item['media:content']?.url;

      return {
        id: link,
        title,
        excerpt,
        date,
        category,
        readTime,
        url: link,
        imageUrl,
      } as SubstackPost;
    });

    return NextResponse.json(
      { posts },
      {
        headers: {
          'Cache-Control': 's-maxage=600, stale-while-revalidate',
        },
      }
    );
  } catch (error) {
    console.error('[api/substack-posts] error', error);
    return NextResponse.json({ error: 'internal-error' }, { status: 500 });
  }
} 