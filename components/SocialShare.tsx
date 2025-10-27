'use client';

import { Linkedin, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

interface SocialShareProps {
  title: string;
  url: string;
  description?: string;
}

export function SocialShare({ title, url, description }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  // X logo as SVG component
  const XLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  const shareOnX = () => {
    const text = `${title} - ${description || ''}`.trim();
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');

    // Track share event
    if (typeof window !== 'undefined') {
      interface WindowWithGtag {
        gtag?: (...args: unknown[]) => void;
      }
      const w = window as unknown as WindowWithGtag;
      if (w.gtag) {
        w.gtag('event', 'share', {
          method: 'X',
          content_type: 'article',
          item_id: url,
        });
      }
    }
  };

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'width=550,height=420');

    // Track share event
    if (typeof window !== 'undefined') {
      interface WindowWithGtag {
        gtag?: (...args: unknown[]) => void;
      }
      const w = window as unknown as WindowWithGtag;
      if (w.gtag) {
        w.gtag('event', 'share', {
          method: 'LinkedIn',
          content_type: 'article',
          item_id: url,
        });
      }
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);

      // Track copy event
      if (typeof window !== 'undefined') {
        interface WindowWithGtag {
          gtag?: (...args: unknown[]) => void;
        }
        const w = window as unknown as WindowWithGtag;
        if (w.gtag) {
          w.gtag('event', 'share', {
            method: 'copy_link',
            content_type: 'article',
            item_id: url,
          });
        }
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex items-center gap-3 py-6 border-t border-b border-gray-800 my-8">
      <span className="text-sm text-gray-400 font-medium">Share this article:</span>

      <div className="flex gap-2">
        {/* X (Twitter) Share */}
        <button
          onClick={shareOnX}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white rounded-md transition-colors text-sm font-medium"
          aria-label="Share on X"
        >
          <XLogo className="w-4 h-4" />
          <span className="hidden sm:inline">X</span>
        </button>

        {/* LinkedIn Share */}
        <button
          onClick={shareOnLinkedIn}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-blue-900 text-gray-300 hover:text-blue-300 rounded-md transition-colors text-sm font-medium"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
          <span className="hidden sm:inline">LinkedIn</span>
        </button>

        {/* Copy Link */}
        <button
          onClick={copyLink}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white rounded-md transition-colors text-sm font-medium"
          aria-label="Copy link"
        >
          <LinkIcon className="w-4 h-4" />
          <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
    </div>
  );
}
