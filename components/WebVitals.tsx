'use client';

/**
 * Web Vitals Performance Monitoring
 *
 * Tracks Core Web Vitals and reports to Google Analytics:
 * - LCP (Largest Contentful Paint) - Loading performance
 * - FID (First Input Delay) - Interactivity
 * - CLS (Cumulative Layout Shift) - Visual stability
 * - FCP (First Contentful Paint) - Initial render
 * - TTFB (Time to First Byte) - Server response time
 *
 * These metrics are critical for SEO and user experience.
 */

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[WebVitals]', metric);
    }

    // Send to Google Analytics in production
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    }

    // You can also send to other analytics services here
    // Example: Sentry, DataDog, New Relic, etc.
  });

  // Optional: Custom performance marks
  useEffect(() => {
    if (typeof window !== 'undefined' && window.performance) {
      performance.mark('app-hydrated');

      // Measure total time to interactive
      performance.measure('app-load-time', 'navigationStart', 'app-hydrated');

      const measure = performance.getEntriesByName('app-load-time')[0];
      if (measure) {
        console.log(`[Performance] App hydrated in ${Math.round(measure.duration)}ms`);
      }
    }
  }, []);

  return null;
}

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}
