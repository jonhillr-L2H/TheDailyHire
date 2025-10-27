import { ArticleCard } from '@/components/ArticleCard';
import type { Article } from '@/types';

/**
 * Renders articles without ads
 * @param articles - Array of articles to render
 * @param allowManualImageForFirst - If true, first article can have manual upload image
 */
export function renderArticlesWithAds(articles: Article[], allowManualImageForFirst = false) {
  const content = [];

  for (let i = 0; i < articles.length; i++) {
    // First article in category pages can have manual uploads
    const allowManualImage = allowManualImageForFirst && i === 0;

    content.push(
      <ArticleCard
        key={articles[i].slug}
        article={articles[i]}
        allowManualImage={allowManualImage}
        priority={i < 3} // Prioritize first 3 images for LCP
      />
    );
  }

  return content;
}
