import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/types';
import { CATEGORY_LABELS, type Category } from '@/types';

interface FeaturedCardProps {
  article: Article;
}

// Gradient backgrounds for each category
const CATEGORY_GRADIENTS: Record<Category, string> = {
  news: 'bg-gradient-to-br from-blue-600 to-blue-800',
  tools: 'bg-gradient-to-br from-purple-600 to-purple-800',
  'ai-funnies': 'bg-gradient-to-br from-green-600 to-green-800',
  'just-the-tip': 'bg-gradient-to-br from-orange-600 to-red-700',
};

export function FeaturedCard({ article }: FeaturedCardProps) {
  // Check if manual upload exists
  const hasManualImage = article.imageUrl?.startsWith('/images/featured/');

  return (
    <Link
      href={`/${article.category}/${article.slug}`}
      className="group relative block rounded-lg overflow-hidden h-[180px] transition-transform hover:scale-[1.02] hover:shadow-2xl"
    >
      {hasManualImage ? (
        <>
          {/* Manual Image Background */}
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </>
      ) : (
        <>
          {/* Gradient Background */}
          <div className={`absolute inset-0 ${CATEGORY_GRADIENTS[article.category]}`} />
        </>
      )}

      {/* Content */}
      <div className="relative h-full p-3.5 flex flex-col">
        {/* Category Badge */}
        <div className="mb-auto">
          <span className="inline-block px-2 py-0.5 text-xs font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full uppercase tracking-wide">
            {CATEGORY_LABELS[article.category]}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white mb-1.5 line-clamp-3 group-hover:underline">
          {article.title}
        </h3>

        {/* Read Time */}
        <p className="text-white/80 text-xs">
          {article.readTime}
        </p>
      </div>

      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/0 group-hover:via-white/10 transition-all duration-500" />
    </Link>
  );
}
