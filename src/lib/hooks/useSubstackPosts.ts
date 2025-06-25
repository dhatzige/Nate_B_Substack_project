"use client";

import { useEffect, useState } from "react";
import type { SubstackPost } from "@/lib/types";

interface Return {
  posts: SubstackPost[];
  loading: boolean;
  error?: string;
}

/**
 * Client-side hook to fetch Nate's latest Substack posts from the
 * `/api/substack-posts` edge-cached route.
 * Keeps footprint tiny – no external data library required.
 */
export default function useSubstackPosts(limit = 12): Return {
  const [posts, setPosts] = useState<SubstackPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    let isMounted = true;

    fetch(`/api/substack-posts`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        if (!isMounted) return;
        const all: SubstackPost[] = json?.posts ?? [];
        setPosts(all.slice(0, limit));
        setLoading(false);
      })
      .catch((e) => {
        if (!isMounted) return;
        console.error("[useSubstackPosts] fetch error", e);
        setError("Failed to load posts");
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [limit]);

  return { posts, loading, error };
}
