import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui';
import { ArticleCard } from '@/components/ArticleCard';
import { getAllArticles } from '@/lib/articles';
import { getAuthorBySlug, getAllAuthors } from '@/lib/authors';
import type { Metadata } from 'next';

// ⚡ PERFORMANCE: Force static generation for all author pages
export const dynamic = 'force-static';
export const revalidate = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const authors = getAllAuthors();
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return {
      title: 'Author Not Found | The Daily Hire',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thedailyhire.com';

  return {
    title: `${author.name} - Author | The Daily Hire`,
    description: author.bio,
    alternates: {
      canonical: `${baseUrl}/authors/${slug}`,
    },
    openGraph: {
      title: `${author.name} - Author | The Daily Hire`,
      description: author.bio,
      type: 'profile',
      url: `${baseUrl}/authors/${slug}`,
    },
  };
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  // Get all articles by this author
  const allArticles = await getAllArticles();
  const authorArticles = allArticles.filter((article) => {
    const articleAuthorSlug = article.author
      .toLowerCase()
      .replace(/['"]/g, '')
      .replace(/\s+/g, '-');
    return articleAuthorSlug === slug;
  });

  // Generate JSON-LD structured data for author
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thedailyhire.com';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    description: author.bio,
    url: `${baseUrl}/authors/${slug}`,
    jobTitle: 'Contributing Writer',
    worksFor: {
      '@type': 'Organization',
      name: 'The Daily Hire',
    },
  };

  return (
    <div>
      {/* JSON-LD Structured Data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          {/* Author Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {author.name}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">{author.bio}</p>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-2">
              {author.expertise.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-900 text-gray-300 rounded-full text-sm border border-gray-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Articles Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Articles by {author.name.split("'")[0].trim()} ({authorArticles.length})
            </h2>

            {authorArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {authorArticles.map((article) => (
                  <ArticleCard key={`${article.category}-${article.slug}`} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400">No articles yet. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
