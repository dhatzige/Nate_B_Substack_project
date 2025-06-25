import { NextResponse } from 'next/server';

/**
 * GET /api/latest-tiktok?user=nate.b.jones  →  { videoUrl, videoId }
 *
 * Uses TikTok's public RSS feed (`https://www.tiktok.com/@username/rss`) to grab
 * the newest `<item>` link. This avoids needing an API key and runs only on the
 * server, so there are no CORS issues.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user = (searchParams.get('user') || 'nate.b.jones').replace(/^@/, '');
  const rssUrl = `https://www.tiktok.com/@${user}/rss`;

  try {
    const rssRes = await fetch(rssUrl, {
      // TikTok blocks generic fetch; a desktop UA header works fine
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        // avoid language variants that occasionally break regex
        'Accept-Language': 'en-US,en;q=0.9',
      },
      // Revalidate every 30 min in Vercel/Next edge cache
      next: { revalidate: 1800 },
    });

    if (!rssRes.ok) {
      return NextResponse.json(
        { error: 'rss-fetch-failed', status: rssRes.status },
        { status: 502 },
      );
    }

    const xml = await rssRes.text();

    // Find first occurrence of a TikTok video URL in the XML
    const match = xml.match(/https?:\/\/www\.tiktok\.com\/[A-Za-z0-9@._-]+\/video\/(\d+)/);

    if (!match) {
      return NextResponse.json({ error: 'no-video-found' }, { status: 404 });
    }

    const videoId = match[1];
    const videoUrl = `https://www.tiktok.com/@${user}/video/${videoId}`;

    return NextResponse.json(
      { videoUrl, videoId },
      {
        headers: {
          // Edge caching
          'Cache-Control': 's-maxage=1800, stale-while-revalidate',
        },
      },
    );
  } catch (error) {
    console.error('[api/latest-tiktok] error', error);
    return NextResponse.json({ error: 'unexpected-error' }, { status: 500 });
  }
}
