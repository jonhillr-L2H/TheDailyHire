import { Hero } from '@/components/Hero';
import { FeaturedStories } from '@/components/FeaturedStories';
import { Link2StartAd } from '@/components/Link2StartAd';
import { AdvertiseWithUs } from '@/components/AdvertiseWithUs';
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

  // Split articles into chunks for ad placement
  const renderArticlesWithAdSlots = () => {
    if (allArticles.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-400">
            No articles yet. Add markdown files to the /content directory to get started!
          </p>
        </div>
      );
    }

    const chunks = [];
    const articlesPerRow = 3;
    const rowsPerAdSlot = 2; // Show ad every 2 rows (6 articles)

    for (let i = 0; i < allArticles.length; i += articlesPerRow * rowsPerAdSlot) {
      const chunkArticles = allArticles.slice(i, i + articlesPerRow * rowsPerAdSlot);

      chunks.push(
        <div key={`chunk-${i}`} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {renderArticlesWithAds(chunkArticles)}
        </div>
      );

      // Add ad slot after this chunk (except for the last chunk)
      if (i + articlesPerRow * rowsPerAdSlot < allArticles.length) {
        // Rotate through variants 1, 2, 3 based on chunk index
        const variantIndex = Math.floor(i / (articlesPerRow * rowsPerAdSlot));
        const variant = ((variantIndex % 3) + 1) as 1 | 2 | 3;

        chunks.push(
          <AdvertiseWithUs key={`ad-${i}`} variant={variant} />
        );
      }
    }

    return chunks;
  };

  return (
    <div>
      <Hero />
      <FeaturedStories articles={featuredArticles} />

      {/* Compact ad between sections */}
      <AdvertiseWithUs compact />

      <Container className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-white">All Stories</h2>
        <Link2StartAd />
        {renderArticlesWithAdSlots()}
      </Container>
    </div>
  );
}
