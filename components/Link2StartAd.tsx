'use client';

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
    <div className="w-full py-8">
      <div className="max-w-4xl mx-auto">
        <a
          href="https://link2start.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleAdClick}
          className="block bg-[#314158] rounded-xl p-8 sm:p-10 md:p-12 relative overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(107,70,193,0.35)] shadow-[0_4px_20px_rgba(107,70,193,0.2)] group"
        >
          {/* Animated background gradient overlay */}
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-purple-600/10 to-transparent animate-[shimmer_3s_infinite] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
            <div className="flex-1">
              {/* Logo and brand section */}
              <div className="flex items-center gap-3 mb-5">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#6B46C1] via-[#5B8FE8] to-[#67C9C0] bg-clip-text text-transparent">
                  Link2Start
                </div>
              </div>

              {/* Main messaging */}
              <div className="space-y-2">
                <div className="text-xl sm:text-2xl md:text-[26px] text-white font-semibold leading-tight">
                  Still presenting candidates like it&apos;s 1999?
                </div>
                <div className="text-base sm:text-lg md:text-[19px] text-[#00bba7] font-semibold">
                  Try Link2Start Free!
                </div>
                <div className="text-xl sm:text-2xl md:text-[28px] font-semibold">
                  <span className="text-white">Hiring Managers Will </span>
                  <span className="bg-gradient-to-r from-[#00bba7] to-[#2b7fff] bg-clip-text text-transparent">
                    Thank You
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#6B46C1] via-[#5B8FE8] to-[#67C9C0] text-white text-base font-semibold px-7 py-3.5 rounded-lg transition-all duration-300 shadow-[0_4px_12px_rgba(107,70,193,0.3)] hover:shadow-[0_6px_20px_rgba(107,70,193,0.5)] group-hover:translate-x-1 self-start md:self-center flex-shrink-0">
              See The Difference
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </a>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
      `}</style>
    </div>
  );
}
