/**
 * Author Management
 *
 * Centralized author data and utilities for author pages
 */

export interface AuthorInfo {
  name: string;
  slug: string;
  bio: string;
  category: string;
  expertise: string[];
}

export const AUTHORS: Record<string, AuthorInfo> = {
  'judah-news-boy-jacobs': {
    name: "Judah 'News Boy' Jacobs",
    slug: 'judah-news-boy-jacobs',
    bio: 'Judah covers breaking recruiting news, AI developments in talent acquisition, and industry trends shaping the future of hiring. With a pulse on the latest HR tech innovations and workforce shifts, Judah delivers the recruiting news that actually matters—minus the corporate spin.',
    category: 'news',
    expertise: ['Recruiting News', 'AI in Hiring', 'Talent Acquisition Trends', 'Industry Analysis'],
  },
  'terry-the-tool-shepard': {
    name: "Terry 'The Tool' Shepard",
    slug: 'terry-the-tool-shepard',
    bio: 'Terry delivers no-BS reviews of ATS platforms, recruiting tools, and HR technology. If a tool claims to revolutionize hiring, Terry puts it to the test. Expect honest assessments, real-world testing, and zero vendor bias in every review.',
    category: 'tools',
    expertise: ['ATS Reviews', 'Recruiting Software', 'HR Technology', 'Tool Comparisons'],
  },
  'judy-just-the-tip-terry': {
    name: "Judy 'Just The Tip' Terry",
    slug: 'judy-just-the-tip-terry',
    bio: 'Judy provides quick, actionable recruiting tips and strategies you can implement immediately. No fluff, no theory—just practical advice that moves the needle. Whether you\'re writing job descriptions, screening candidates, or negotiating offers, Judy has the tips you need.',
    category: 'just-the-tip',
    expertise: ['Recruiting Tips', 'Best Practices', 'Hiring Strategies', 'Career Advice'],
  },
  'stan-the-funny-man-fisher': {
    name: "Stan 'The Funny Man' Fisher",
    slug: 'stan-the-funny-man-fisher',
    bio: 'Stan brings humor to the sometimes absurd world of AI recruiting tools, tech fails, and hiring mishaps. Because if you can\'t laugh at the chaos of modern recruiting, you\'re in the wrong industry. Stan keeps it real and keeps it funny.',
    category: 'ai-funnies',
    expertise: ['AI Humor', 'Recruiting Fails', 'Industry Satire', 'Tech Comedy'],
  },
};

/**
 * Get author info by their slug
 */
export function getAuthorBySlug(slug: string): AuthorInfo | null {
  return AUTHORS[slug] || null;
}

/**
 * Get author info by their full name
 */
export function getAuthorByName(name: string): AuthorInfo | null {
  const author = Object.values(AUTHORS).find((author) => author.name === name);
  return author || null;
}

/**
 * Get all authors
 */
export function getAllAuthors(): AuthorInfo[] {
  return Object.values(AUTHORS);
}

/**
 * Convert author name to slug
 */
export function authorNameToSlug(name: string): string {
  // Convert "Judah 'News Boy' Jacobs" to "judah-news-boy-jacobs"
  return name
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/\s+/g, '-');
}
