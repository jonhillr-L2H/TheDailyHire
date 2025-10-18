import { ArticleCard } from '@/components/ArticleCard';
import { AdCard } from '@/components/AdCard';
import type { Article } from '@/types';
import { AD_INTERVAL } from './constants';

/**
 * Renders articles with ads inserted at regular intervals
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

    // Add ad after every AD_INTERVAL articles
    if ((i + 1) % AD_INTERVAL === 0 && i !== articles.length - 1) {
      content.push(
        <div key={`ad-${i}`} className="col-span-1 md:col-span-2 lg:col-span-3">
          <AdCard />
        </div>
      );
    }
  }

  return content;
}
