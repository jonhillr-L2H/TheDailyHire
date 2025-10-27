import type { MetadataRoute } from 'next';

/**
 * Robots.txt Configuration
 *
 * Controls how search engines crawl and index the site.
 * - Allows all pages to be indexed
 * - Points crawlers to sitemap
 * - Optimizes crawl budget
 *
 * Accessible at: https://thedailyhire.com/robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thedailyhire.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'], // Block API routes and Next.js internals
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
