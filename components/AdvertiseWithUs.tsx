'use client';

import { Linkedin } from 'lucide-react';

/**
 * Advertise With Us Component
 *
 * Shows call-to-action for advertisers with social media contact options
 * Multiple style variations to keep things fresh
 */

type AdvertiseWithUsProps = {
  variant?: 1 | 2 | 3 | 4;
  compact?: boolean;
};

export function AdvertiseWithUs({ variant = 1, compact = false }: AdvertiseWithUsProps) {
  // Your social media URLs - update these with your actual handles
  const X_URL = 'https://twitter.com/messages/compose?recipient_id=YOUR_X_ID'; // Replace with your X/Twitter DM link
  const LINKEDIN_URL = 'https://www.linkedin.com/company/the-daily-hire'; // Replace with your LinkedIn company page

  // X (formerly Twitter) logo as SVG component
  const XLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  const handleSocialClick = (platform: string) => {
    if (typeof window !== 'undefined') {
      interface WindowWithGtag {
        gtag?: (...args: unknown[]) => void;
      }
      const w = window as unknown as WindowWithGtag;
      if (w.gtag) {
        w.gtag('event', 'advertise_inquiry', {
          'event_category': 'advertising',
          'event_label': platform,
        });
      }
    }
  };

  // Variation 1: Colorful and Eye-Catching
  if (variant === 1) {
    return (
      <div className="w-full mb-8">
        <div className="bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20 rounded-lg p-8 border border-purple-500/30 relative overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 animate-pulse pointer-events-none" />

          <div className="relative z-10 text-center">
            <div className="inline-block bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text mb-2">
              <h3 className="text-2xl font-bold">
                Your Ad Could Be Here
              </h3>
            </div>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Promote your recruiting platform, tools, or services to thousands of active talent acquisition professionals
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('X')}
                className="group flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <XLogo className="w-5 h-5" />
                <span>DM us on X</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('LinkedIn')}
                className="group flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                <span>Message on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Variation 2: Minimalist and Professional
  if (variant === 2) {
    return (
      <div className="w-full mb-8 px-8">
        <div className="bg-[#1a2332] rounded-lg p-6 relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_4px_15px_rgba(107,70,193,0.3)] group">
          {/* Animated background gradient overlay */}
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-purple-600/10 to-transparent animate-[shimmer_3s_infinite] pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-bold text-white mb-1">
                Advertise With Us
              </h4>
              <p className="text-gray-400 text-sm">
                Get your message in front of recruiting professionals
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('X')}
                className="flex items-center gap-2 bg-gray-700 hover:bg-black text-white font-medium px-4 py-2 rounded-md transition-all duration-300"
                aria-label="Message us on X"
              >
                <XLogo className="w-4 h-4" />
                <span className="hidden sm:inline">X</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('LinkedIn')}
                className="flex items-center gap-2 bg-gray-700 hover:bg-[#0A66C2] text-white font-medium px-4 py-2 rounded-md transition-all duration-300"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>

          <style jsx>{`
            @keyframes shimmer {
              0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
              100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  // Variation 3: Bold and Direct
  return (
    <div className="w-full mb-8">
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 border border-blue-500/30 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">
          Reach 1000s of Recruiting Professionals
        </h3>
        <p className="text-gray-300 mb-6">
          Advertise your recruiting tools, services, or job opportunities with The Daily Hire
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleSocialClick('X')}
            className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <XLogo className="w-5 h-5" />
            Message on X
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleSocialClick('LinkedIn')}
            className="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#094d92] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );

  // Compact variant for between sections
  if (compact) {
    return (
      <div className="w-full py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#1a2332] rounded-lg p-5 text-center border border-gray-700">
            <p className="text-gray-300 text-sm mb-3">
              Reach thousands of recruiting professionals
            </p>
            <div className="flex gap-3 justify-center">
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('X')}
                className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-md transition-all duration-300"
              >
                <XLogo className="w-4 h-4" />
                Message on X
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('LinkedIn')}
                className="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#094d92] text-white text-sm font-medium px-4 py-2 rounded-md transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
                Message on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
