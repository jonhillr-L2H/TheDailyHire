export type Category = 'news' | 'tools' | 'ai-funnies' | 'just-the-tip';

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  content: string;
  featured?: boolean;
}

export interface CategoryInfo {
  title: string;
  description: string;
  slug: Category;
}

export const CATEGORY_INFO: Record<Category, CategoryInfo> = {
  news: {
    title: 'News',
    description: 'The hottest takes and breaking news in recruiting. No fluff, just the tea ☕',
    slug: 'news',
  },
  tools: {
    title: 'Tools',
    description: 'Software reviews, Chrome extensions, and tech that actually makes your job easier (not harder).',
    slug: 'tools',
  },
  'ai-funnies': {
    title: 'Funnies',
    description: 'When AI goes hilariously wrong in recruiting. Because sometimes you just need to laugh at the chaos.',
    slug: 'ai-funnies',
  },
  'just-the-tip': {
    title: 'Just the Tip',
    description: 'Quick, no-BS tips you can use today. Short, sweet, and actually useful.',
    slug: 'just-the-tip',
  },
};

export const CATEGORY_COLORS: Record<Category, string> = {
  news: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  tools: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  'ai-funnies': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  'just-the-tip': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
};

export const CATEGORY_LABELS: Record<Category, string> = {
  news: 'News',
  tools: 'Tools',
  'ai-funnies': 'Funnies',
  'just-the-tip': 'Just the Tip',
};
