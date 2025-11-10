'use client';

import { TrendingUp } from 'lucide-react';

/**
 * SpreadTracker Pro Premium Ad Component
 *
 * Premium ad placement for SpreadTracker - recruiting metrics platform
 */

export function SpreadTrackerAd() {
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
          'event_label': 'SpreadTracker Pro Ad',
        });
      }
    }
  };

  return (
    <div className="w-full mb-8 px-8">
      <a
        href="https://spreadtrackerpro.com"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleAdClick}
        className="block bg-black rounded-lg px-10 py-8 relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_4px_15px_rgba(34,197,94,0.3)]"
      >
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Left side - Logo and text */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-5">
              {/* Green box with trending icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-lg flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(34,197,94,0.5),0_0_15px_rgba(34,197,94,0.3)]">
                <TrendingUp className="w-7 h-7 text-white" strokeWidth={3} />
              </div>
              <h1 className="text-3xl font-bold text-white m-0" style={{ filter: 'drop-shadow(0 0 25px rgba(34, 197, 94, 0.4))' }}>
                spreadtracker.io
              </h1>
            </div>
            <div className="text-base text-gray-300 leading-relaxed">
              Track placements, spread, GM%, 1-on-1s and goals in one place.<br />
              No formulas. No formatting. No fuss.
            </div>
          </div>

          {/* Right side - CTA Button */}
          <div className="flex flex-col items-center gap-2 flex-shrink-0 sm:self-center self-start">
            <button className="bg-[#22c55e] hover:bg-[#16a34a] text-white text-base font-semibold px-7 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(34,197,94,0.4)] whitespace-nowrap">
              Ditch the Spreadsheets
            </button>
            <div className="text-xs text-gray-400 text-center">
              14 day free trial • No credit card required
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
