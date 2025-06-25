import { NextResponse } from 'next/server';

/**
 * Simple proxy to TikTok oEmbed to bypass client-side CORS.
 * GET /api/tiktok-oembed?url=https://www.tiktok.com/@user/video/ID
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'missing-url-param' }, { status: 400 });
  }

  try {
    const res = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      next: { revalidate: 60 * 60 }, // 1 hour
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: 'oembed-fetch-failed', status: res.status },
        { status: 502 },
      );
    }

    const json = await res.json();
    return NextResponse.json(json, {
      headers: {
        'Cache-Control': 's-maxage=3600, stale-while-revalidate',
      },
    });
  } catch (err) {
    console.error('[api/tiktok-oembed] error', err);
    return NextResponse.json({ error: 'unexpected-error' }, { status: 500 });
  }
}
