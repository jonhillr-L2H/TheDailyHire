'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { InfiniteScroll } from '@/components/InfiniteScroll';
import { LoadingSpinner, Container } from '@/components/ui';
import type { Article, Category } from '@/types';
import { CATEGORY_INFO } from '@/types';
import { ARTICLES_PER_PAGE } from '@/lib/constants';
import { renderArticlesWithAds } from '@/lib/renderHelpers';

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as Category;

  const [articles, setArticles] = useState<Article[]>([]);
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Fetch articles for this category
    fetch(`/api/articles?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setDisplayedArticles(data.slice(0, ARTICLES_PER_PAGE));
        setHasMore(data.length > ARTICLES_PER_PAGE);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching articles:', err);
        setLoading(false);
      });
  }, [category]);

  const loadMore = () => {
    const nextPage = page + 1;
    const start = nextPage * ARTICLES_PER_PAGE;
    const end = start + ARTICLES_PER_PAGE;
    const newArticles = articles.slice(start, end);

    if (newArticles.length > 0) {
      setDisplayedArticles([...displayedArticles, ...newArticles]);
      setPage(nextPage);
      setHasMore(end < articles.length);
    } else {
      setHasMore(false);
    }
  };


  if (!category || !(category in CATEGORY_INFO)) {
    return (
      <Container className="py-12">
        <p className="text-center text-gray-400">Category not found</p>
      </Container>
    );
  }

  const info = CATEGORY_INFO[category];

  return (
    <div>
      {/* Intro Section - Condensed */}
      <section className="relative py-6 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
        <Container>
          <div className="flex items-center justify-between mb-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              {info.title}
            </h1>
            <p className="text-sm text-gray-400">
              {info.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Articles Grid */}
      <Container className="py-12">
        {loading ? (
          <LoadingSpinner text="Loading articles..." />
        ) : displayedArticles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderArticlesWithAds(displayedArticles, true)}
            </div>
            <InfiniteScroll
              onLoadMore={loadMore}
              hasMore={hasMore}
              loading={loading}
            />
          </>
        ) : (
          <p className="text-center text-gray-400 py-12">
            No articles found in this category yet. Check back soon!
          </p>
        )}
      </Container>
    </div>
  );
}
