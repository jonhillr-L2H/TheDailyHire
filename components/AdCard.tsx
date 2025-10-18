/**
 * Google AdSense Ad Placeholder
 *
 * ⚠️ DISABLED FOR PERFORMANCE
 * AdSense is currently disabled because placeholder IDs cause errors and slowness.
 *
 * To enable AdSense:
 * 1. Get your actual publisher ID from Google AdSense
 * 2. Replace the placeholder IDs in app/layout.tsx
 * 3. Uncomment the AdSense code below
 * 4. Remove this placeholder
 */

export function AdCard() {
  // Placeholder only - no AdSense calls until configured
  return (
    <div className="w-full py-8">
      <div className="max-w-4xl mx-auto">
        {/* Placeholder for development */}
        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 text-center">
          <p className="text-gray-400 text-sm mb-2">Advertisement Slot</p>
          <p className="text-gray-500 text-xs">
            AdSense disabled for performance. Configure with real publisher ID to enable.
          </p>
        </div>
      </div>
    </div>
  );
}

/* UNCOMMENT THIS WHEN YOU HAVE REAL ADSENSE IDs:

'use client';

import { useEffect, useRef } from 'react';

export function AdCard() {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      const w = window as unknown as Window & { adsbygoogle?: unknown[] };
      if (w.adsbygoogle) {
        w.adsbygoogle.push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className="w-full py-8">
      <div className="max-w-4xl mx-auto">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-YOUR-REAL-ID-HERE"
          data-ad-slot="YOUR-REAL-SLOT-HERE"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}

*/
