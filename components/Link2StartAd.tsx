'use client';

import Image from 'next/image';

/**
 * Link2Start Premium Ad Component
 *
 * Premium ad placement for Link2Start - recruiting presentation platform
 */

export function Link2StartAd() {
  const handleAdClick = () => {
    // Track ad click with analytics
    if (typeof window !== 'undefined') {
      interface WindowWithGtag {
        gtag?: (...args: unknown[]) => void;
      }
      const w = window as unknown as WindowWithGtag;
      if (w.gtag) {
        w.gtag('event', 'ad_click', {
          'event_category': 'advertising',
          'event_label': 'Link2Start Ad',
        });
      }
    }
  };

  return (
    <div className="w-full mb-8 px-8">
      <a
        href="https://link2start.com"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleAdClick}
        className="block bg-[#1a2332] rounded-lg p-6 relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_4px_15px_rgba(107,70,193,0.3)] group"
      >
        {/* Animated background gradient overlay */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-purple-600/10 to-transparent animate-[shimmer_3s_infinite] pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            {/* Logo - prominent size matching text height */}
            <div className="flex-shrink-0">
              <Image
                src="/linqlogo.webp"
                alt="Link2Start Logo"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Text content stacked */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="text-xl font-bold bg-gradient-to-r from-[#6B46C1] via-[#5B8FE8] to-[#67C9C0] bg-clip-text text-transparent">
                  Link2Start
                </div>
                <span className="text-xs text-gray-400">Advertisement</span>
              </div>
              <div className="text-lg text-white font-medium">
                Still presenting candidates like it&apos;s 1999?
              </div>
              <div className="text-base text-[#00bba7] font-bold">
                Try Link2Start Free!
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#6B46C1] via-[#5B8FE8] to-[#67C9C0] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-all duration-300 shadow-[0_2px_8px_rgba(107,70,193,0.3)] hover:shadow-[0_4px_12px_rgba(107,70,193,0.5)] group-hover:translate-x-1 self-start sm:self-center flex-shrink-0">
            See The Difference
            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </a>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
      `}</style>
    </div>
  );
}
