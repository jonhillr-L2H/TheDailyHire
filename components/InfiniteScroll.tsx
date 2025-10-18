'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface InfiniteScrollProps {
  onLoadMore: () => void;
  hasMore: boolean;
  loading: boolean;
}

export function InfiniteScroll({ onLoadMore, hasMore, loading }: InfiniteScrollProps) {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '100px',
  });

  const hasCalledLoadMore = useRef(false);

  useEffect(() => {
    if (inView && hasMore && !loading && !hasCalledLoadMore.current) {
      hasCalledLoadMore.current = true;
      onLoadMore();

      // Reset after a delay to allow new trigger
      setTimeout(() => {
        hasCalledLoadMore.current = false;
      }, 1000);
    }
  }, [inView, hasMore, loading, onLoadMore]);

  if (!hasMore) return null;

  return (
    <div ref={ref} className="py-8 text-center">
      {loading && (
        <div className="inline-block">
          <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-400 mt-2">Loading more stories...</p>
        </div>
      )}
    </div>
  );
}
