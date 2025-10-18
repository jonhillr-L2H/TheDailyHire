import { FeaturedCard } from './FeaturedCard';
import type { Article } from '@/types';
import { TrendingUp } from 'lucide-react';

interface FeaturedStoriesProps {
  articles: Article[];
}

export function FeaturedStories({ articles }: FeaturedStoriesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="bg-gray-950 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-blue-400" />
          Trending Now
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <FeaturedCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
