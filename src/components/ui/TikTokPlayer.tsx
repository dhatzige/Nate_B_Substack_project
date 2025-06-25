'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Play, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TikTokPlayerProps {
  /**
   * Full TikTok video URL, e.g. "https://www.tiktok.com/@nate.b.jones/video/1234567890".
   * The component automatically extracts the video id for the embed.
   */
  /** Specific TikTok video URL. If omitted, `username` will be used to fetch the latest public video. */
  videoUrl?: string;
  /** TikTok username without @ sign. Defaults to "nate.b.jones" */
  username?: string;
  /** Optional thumbnail image path (public/…). Falls back to a generic placeholder. */
  thumbnailSrc?: string;
  /** Tailwind class override for the trigger element. */
  className?: string;
}

export default function TikTokPlayer({
  videoUrl: initialVideoUrl,
  username = 'nate.b.jones',
  thumbnailSrc = '/nate-profile.png',
  className,
}: TikTokPlayerProps) {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | undefined>(initialVideoUrl);
  const [thumb, setThumb] = useState<string | undefined>();

  // If no explicit video URL, fetch the latest one once on mount
  useEffect(() => {
    if (!initialVideoUrl) {
      fetch(`/api/latest-tiktok?user=${username}`)
        .then((res) => res.ok ? res.json() : Promise.reject(res))
        .then((json) => {
          if (json?.videoUrl) setVideoUrl(json.videoUrl as string);
        })
        .catch((e) => console.error('[TikTokPlayer] failed to fetch latest video', e));
    }
  }, [initialVideoUrl, username]);

  // Fetch oEmbed once we have a video URL to get the official thumbnail
  useEffect(() => {
    if (!videoUrl) return;
    fetch(`/api/tiktok-oembed?url=${encodeURIComponent(videoUrl)}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        if (json?.thumbnail_url) setThumb(json.thumbnail_url as string);
      })
      .catch((e) => console.error('[TikTokPlayer] oEmbed fail', e));
  }, [videoUrl]);

  // Extract the numeric id at the end of the video URL for embed
  const match = videoUrl?.match(/video\/(\d+)/);
  const videoId = match ? match[1] : '';

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Play latest TikTok video"
        className={cn(
          'group relative outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg',
          className,
        )}
      >
        <Image
          src={thumb || thumbnailSrc}
          alt="Latest TikTok"
          width={480}
          height={640}
          priority={!thumb} // don't preload remote img
          unoptimized={!!thumb}
          className="aspect-[9/16] w-full rounded-lg object-cover bg-gray-200 dark:bg-gray-700 transition-all duration-300 group-hover:brightness-75"
        />
        {/* Optional label while we resolve the latest video */}
        {!videoId && (
          <span className="absolute bottom-2 left-2 text-xs text-white/80">Loading…</span>
        )}
        <Play
          aria-hidden="true"
          className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-black/60 p-3 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/80"
        />
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && videoId && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
            onClick={() => setOpen(false)}
          >
            <motion.div
              key="modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-[420px] aspect-[9/16] overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10"
            >
              <iframe
                src={`https://www.tiktok.com/embed/v2/${videoId}`}
                referrerPolicy="no-referrer"
                allow="autoplay; encrypted-media"
                allowFullScreen
                loading="lazy"
                className="h-full w-full bg-black"
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close video"
                className="absolute top-2 right-2 rounded-full bg-black/60 p-1 text-white hover:bg-black"
              >
                <X className="h-8 w-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
