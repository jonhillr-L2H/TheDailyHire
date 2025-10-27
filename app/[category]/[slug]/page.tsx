import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { getArticleBySlug, getRandomArticles, getAllArticleSlugs } from '@/lib/articles';
import { RelatedArticles } from '@/components/RelatedArticles';
import { AIDisclaimer } from '@/components/AIDisclaimer';
import { Link2StartAd } from '@/components/Link2StartAd';
import { AdvertiseWithUs } from '@/components/AdvertiseWithUs';
import { showLink2StartAd } from '@/lib/adPlacement';
import { Badge, Container } from '@/components/ui';
import { CATEGORY_LABELS, type Category } from '@/types';
import type { Metadata } from 'next';

// ⚡ PERFORMANCE: Force static generation for all article pages
// All pages are pre-built at build time = instant loads
export const dynamic = 'force-static';
export const revalidate = false;

type Props = {
  params: Promise<{ category: Category; slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map(({ category, slug }) => ({
    category,
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const article = await getArticleBySlug(category, slug);

  if (!article) {
    return {
      title: 'Article Not Found | The Daily Hire',
    };
  }

  return {
    title: `${article.title} | The Daily Hire`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: [article.imageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.imageUrl],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { category, slug } = await params;
  const article = await getArticleBySlug(category, slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = await getRandomArticles(category, slug, 3);
  const useLink2StartAd = showLink2StartAd(slug);

  // Rotate through different "Advertise With Us" variants for variety
  const getAdvertiseVariant = (slug: string): 1 | 2 | 3 => {
    const hash = slug.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    return ((hash % 3) + 1) as 1 | 2 | 3;
  };

  // Generate JSON-LD structured data for SEO
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thedailyhire.com';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.imageUrl,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Daily Hire',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/${category}/${slug}`,
    },
  };

  return (
    <div>
      {/* JSON-LD Structured Data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <Container className="py-6 md:py-8">
          <div className="max-w-3xl mx-auto">
            {/* Back Button - Prominent at top */}
            <Link
              href={`/${category}`}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to {CATEGORY_LABELS[category]}</span>
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <Badge category={category}>
                {CATEGORY_LABELS[category]}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-400 pb-8 mb-8 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Content */}
            <div
              className="prose prose-lg prose-invert max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pt-8 prose-h2:border-t prose-h2:border-gray-800
                prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-300 prose-p:text-base prose-p:md:text-lg prose-p:leading-relaxed prose-p:mb-8
                prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
                prose-strong:text-white prose-strong:font-bold
                prose-ul:text-gray-300 prose-ul:my-6 prose-ul:space-y-3
                prose-ol:text-gray-300 prose-ol:my-6 prose-ol:space-y-3
                prose-li:text-base prose-li:md:text-lg prose-li:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Ad Placement - Link2Start on ~25% of articles, Advertise With Us on the rest */}
            {useLink2StartAd ? <Link2StartAd /> : <AdvertiseWithUs variant={getAdvertiseVariant(slug)} />}

            {/* AI Disclaimer */}
            <AIDisclaimer />

            {/* Back to Category */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <Link
                href={`/${category}`}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All {CATEGORY_LABELS[category]} Stories</span>
              </Link>
            </div>
          </div>
        </Container>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <Container className="pb-12">
          <div className="max-w-3xl mx-auto">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </Container>
      )}
    </div>
  );
}
