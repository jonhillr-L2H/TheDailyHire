import { ImageResponse } from 'next/og';
import { getArticleBySlug } from '@/lib/articles';
import type { Category } from '@/types';

// Use nodejs runtime instead of edge to access file system
export const runtime = 'nodejs';
export const alt = 'The Daily Hire Article';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Category colors matching FeaturedCard gradients
const CATEGORY_COLORS: Record<Category, { from: string; to: string }> = {
  news: { from: '#2563eb', to: '#1e40af' }, // blue-600 to blue-800
  tools: { from: '#9333ea', to: '#6b21a8' }, // purple-600 to purple-800
  'ai-funnies': { from: '#16a34a', to: '#166534' }, // green-600 to green-800
  'just-the-tip': { from: '#ea580c', to: '#dc2626' }, // orange-600 to red-700
};

const CATEGORY_LABELS: Record<Category, string> = {
  news: 'NEWS',
  tools: 'TOOLS',
  'ai-funnies': 'FUNNIES',
  'just-the-tip': 'JUST THE TIP',
};

type Props = {
  params: Promise<{ category: Category; slug: string }>;
};

export default async function Image({ params }: Props) {
  const { category, slug } = await params;
  const article = await getArticleBySlug(category, slug);

  if (!article) {
    // Fallback image if article not found
    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <div style={{ fontSize: 60, fontWeight: 'bold', color: 'white' }}>
            The Daily Hire
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  }

  const colors = CATEGORY_COLORS[category];

  return new ImageResponse(
    (
      <div
        style={{
          background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Category Badge */}
        <div
          style={{
            display: 'flex',
            marginBottom: 'auto',
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              padding: '8px 24px',
              borderRadius: '999px',
              fontSize: 20,
              fontWeight: 700,
              color: 'white',
              letterSpacing: '0.1em',
            }}
          >
            {CATEGORY_LABELS[category]}
          </div>
        </div>

        {/* Article Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '32px',
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: 'white',
              lineHeight: 1.2,
              margin: 0,
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {article.title}
          </h1>
        </div>

        {/* Read Time at bottom */}
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            color: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          {article.readTime}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
