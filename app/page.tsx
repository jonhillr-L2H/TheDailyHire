import { Hero } from '@/components/Hero';
import { FeaturedStories } from '@/components/FeaturedStories';
import { Container } from '@/components/ui';
import { getAllArticles, getFeaturedArticles } from '@/lib/articles';
import { renderArticlesWithAds } from '@/lib/renderHelpers';

// ⚡ PERFORMANCE: Force static generation for maximum speed
// This page is pre-built at build time and served from CDN
// Zero server-side rendering = instant page loads
export const dynamic = 'force-static';
export const revalidate = false;

export default async function HomePage() {
  const allArticles = await getAllArticles();
  const featuredArticles = await getFeaturedArticles();

  return (
    <div>
      <Hero />
      <FeaturedStories articles={featuredArticles} />

      <Container className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-white">All Stories</h2>
        {allArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderArticlesWithAds(allArticles)}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">
              No articles yet. Add markdown files to the /content directory to get started!
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}
