import { ArticleCard } from './ArticleCard';
import type { Article } from '@/types';

interface SimilarStoriesProps {
  articles: Article[];
}

export function SimilarStories({ articles }: SimilarStoriesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="border-t border-gray-800 pt-12 mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
