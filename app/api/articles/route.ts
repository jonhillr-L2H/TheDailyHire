import { NextRequest, NextResponse } from 'next/server';
import { getArticlesByCategory, getAllArticles } from '@/lib/articles';
import type { Category } from '@/types';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category') as Category | null;

  try {
    const articles = category
      ? await getArticlesByCategory(category)
      : await getAllArticles();

    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}
