/**
 * Article Image Placeholder Component
 *
 * Displays text-based gradient placeholders for articles
 * Uses lighter/brighter versions of category colors from FeaturedCard
 */

import type { Category } from '@/types';

interface ArticleImagePlaceholderProps {
  title: string;
  category: Category;
  className?: string;
}

// Lighter versions of FeaturedCard category gradients
const CATEGORY_GRADIENTS_LIGHT: Record<Category, string> = {
  news: 'bg-gradient-to-br from-blue-300 to-blue-500',           // Even lighter blue
  tools: 'bg-gradient-to-br from-purple-300 to-purple-500',      // Even lighter purple
  'ai-funnies': 'bg-gradient-to-br from-green-300 to-green-500', // Even lighter green
  'just-the-tip': 'bg-gradient-to-br from-orange-300 to-red-400', // Even lighter orange/red
};

export default function ArticleImagePlaceholder({
  title,
  category,
  className = '',
}: ArticleImagePlaceholderProps) {
  const gradientClass = CATEGORY_GRADIENTS_LIGHT[category];

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${gradientClass} ${className}`}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
      </div>
      <div className="relative z-10 px-8 py-6 text-center">
        <h3 className="text-xl font-bold text-white drop-shadow-lg line-clamp-3 md:text-2xl lg:text-3xl">
          {title}
        </h3>
      </div>
    </div>
  );
}
