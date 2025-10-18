import type { Category } from '@/types';

/**
 * All available article categories
 */
export const CATEGORIES: Category[] = ['news', 'tools', 'ai-funnies', 'just-the-tip'];

/**
 * Pagination constants
 */
export const ARTICLES_PER_PAGE = 12;
export const AD_INTERVAL = 6; // Show ad after every N articles

/**
 * Revalidation time in seconds (1 hour)
 */
export const REVALIDATE_TIME = 3600;

/**
 * Scroll offsets for smooth scrolling
 */
export const SCROLL_OFFSETS = {
  hero: 600,
  category: 400,
} as const;
