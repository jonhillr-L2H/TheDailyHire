import type { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/articles';
import { getAllAuthors } from '@/lib/authors';
import { CATEGORIES } from '@/lib/constants';

/**
 * Dynamic Sitemap Generation
 *
 * Automatically generates sitemap.xml for all pages:
 * - Homepage
 * - Category pages
 * - All article pages
 *
 * This helps Google discover and index all content faster.
 * Sitemap available at: https://thedailyhire.com/sitemap.xml
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thedailyhire.com';

  // Get all articles
  const articles = await getAllArticles();

  // Homepage entry
  const homePage: MetadataRoute.Sitemap[0] = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  };

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
    url: `${baseUrl}/${category}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  // Article pages
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/${article.category}/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Author pages
  const authors = getAllAuthors();
  const authorPages: MetadataRoute.Sitemap = authors.map((author) => ({
    url: `${baseUrl}/authors/${author.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  // About page
  const aboutPage: MetadataRoute.Sitemap[0] = {
    url: `${baseUrl}/about`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  };

  // Privacy & Terms pages
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [
    homePage,
    ...categoryPages,
    aboutPage,
    ...authorPages,
    ...articlePages,
    ...legalPages,
  ];
}
