import Link from 'next/link';
import Image from 'next/image';
import { Clock, User } from 'lucide-react';
import type { Article } from '@/types';
import { CATEGORY_LABELS } from '@/types';
import { Badge } from '@/components/ui';
import ArticleImagePlaceholder from './ArticleImagePlaceholder';

interface ArticleCardProps {
  article: Article;
  priority?: boolean; // For above-the-fold images
  allowManualImage?: boolean; // For featured articles with manual uploads
}

export function ArticleCard({ article, priority = false, allowManualImage = false }: ArticleCardProps) {
  // Check if manual upload exists (for featured articles)
  const hasManualImage = allowManualImage && article.imageUrl?.startsWith('/images/featured/');

  return (
    <Link
      href={`/${article.category}/${article.slug}`}
      className="group block bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="aspect-[16/9] overflow-hidden bg-gray-800 relative">
        {hasManualImage ? (
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            priority={priority}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading={priority ? undefined : 'lazy'}
          />
        ) : (
          <ArticleImagePlaceholder
            title={article.title}
            category={article.category}
            className="w-full h-full"
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge category={article.category}>
            {CATEGORY_LABELS[article.category]}
          </Badge>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>
        <h3 className="text-xl mb-2 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {article.author}
          </span>
          <span>{article.date}</span>
        </div>
      </div>
    </Link>
  );
}
