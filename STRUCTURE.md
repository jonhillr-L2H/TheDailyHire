# The Daily Hire - Project Structure

This document outlines the complete structure of The Daily Hire blog, built with Next.js 15 App Router.

## Directory Structure

```
the-daily-hire/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with SEO, Analytics, AdSense
│   ├── page.tsx                 # Homepage (featured + all articles)
│   ├── globals.css              # Global styles (dark mode only)
│   ├── [category]/              # Dynamic category pages
│   │   ├── page.tsx            # Category listing with infinite scroll
│   │   └── [slug]/             # Dynamic article pages
│   │       └── page.tsx        # Individual article view
│   └── api/
│       └── articles/
│           └── route.ts         # API endpoint for fetching articles
│
├── components/                   # React components
│   ├── ThemeProvider.tsx        # Dark mode theme provider
│   ├── Header.tsx               # Site header with navigation
│   ├── Footer.tsx               # Site footer
│   ├── Hero.tsx                 # Homepage hero section
│   ├── ArticleCard.tsx          # Article preview card
│   ├── FeaturedStories.tsx      # Featured articles section
│   ├── SimilarStories.tsx       # Related articles section
│   ├── AdCard.tsx               # Google AdSense component
│   └── InfiniteScroll.tsx       # Infinite scroll trigger
│
├── content/                      # Markdown content (organized by category)
│   ├── news/                    # News articles
│   ├── tools/                   # Tool reviews
│   ├── ai-funnies/              # Humorous AI stories
│   └── just-the-tip/            # Quick tips
│
├── lib/                          # Utility functions
│   ├── articles.ts              # Article fetching and parsing logic
│   └── utils.ts                 # General utilities (cn helper)
│
├── types/                        # TypeScript definitions
│   └── index.ts                 # Article, Category types and constants
│
├── public/                       # Static assets
│
└── Documentation files
    ├── STRUCTURE.md             # This file
    ├── CONTENT_SYSTEM.md        # How to add/manage content
    └── WRITING_GUIDELINES.md    # Content writing style guide
```

## Key Architecture Decisions

### 1. Next.js 15 App Router
- **Server Components by default** for optimal performance
- **Static Site Generation (SSG)** for all article pages
- **Incremental Static Regeneration (ISR)** - pages revalidate every hour
- **API Routes** for dynamic data fetching on category pages

### 2. Content Management
- **Markdown files** stored in `/content` directory
- **Frontmatter** for article metadata (title, author, date, etc.)
- **Gray-matter** for parsing frontmatter
- **Remark** for converting markdown to HTML

### 3. Routing Structure
```
/                           → Homepage (all articles + featured)
/[category]                 → Category page (news, tools, ai-funnies, just-the-tip)
/[category]/[slug]          → Individual article page
/api/articles?category=X    → API endpoint for fetching articles
```

### 4. SEO Optimization
- **Dynamic metadata** generated for each page
- **Open Graph tags** for social media sharing
- **Twitter Card support**
- **Structured data** ready for implementation
- **Semantic HTML** throughout

### 5. Performance Features
- **Image optimization** via Next.js Image component
- **Lazy loading** for images
- **Code splitting** automatic with App Router
- **Static generation** for millions of future pages
- **Edge-ready** architecture for Vercel deployment

### 6. Ad Integration
- **Google AdSense** placeholders in layout
- **Ad slots** every 6 articles on listing pages
- **NO ADS** on individual article pages (per requirements)
- **Easy configuration** via AdCard component

### 7. Analytics
- **Google Analytics 4** placeholder in root layout
- **Page view tracking** automatic
- **Event tracking** ready for implementation

## Component Types

### Server Components (Default)
- `app/page.tsx` - Homepage
- `app/[category]/[slug]/page.tsx` - Article pages
- `Header`, `Footer`, `ArticleCard`, `FeaturedStories`, `SimilarStories`

### Client Components ('use client')
- `ThemeProvider` - Theme management
- `Header` - Uses usePathname for active state
- `InfiniteScroll` - Uses intersection observer
- `app/[category]/page.tsx` - Uses useState for infinite scroll

## Data Flow

### Article Loading Process
1. Markdown files in `/content/[category]/` directory
2. `lib/articles.ts` functions parse markdown + frontmatter
3. Server Components fetch data at build time
4. ISR revalidates pages every hour
5. Client-side infinite scroll loads more on category pages

### Build Process
```
1. Next.js reads all markdown files
2. generateStaticParams() creates routes for each article
3. Static HTML generated for all pages
4. Deployed to Vercel with automatic optimization
5. ISR updates pages periodically without full rebuild
```

## Scaling to Millions of Pages

### Current Setup Supports:
- **Unlimited articles** via markdown files
- **Automatic route generation** via generateStaticParams()
- **ISR** prevents full rebuilds for updates
- **Edge caching** via Vercel for global performance
- **Optimized bundle** - only necessary code loaded per page

### Future Enhancements:
- **On-demand ISR** via API routes for instant updates
- **Database migration** if markdown becomes unwieldy
- **CDN optimization** for images (Cloudinary, Imgix)
- **Search functionality** (Algolia, ElasticSearch)
- **RSS feed** for subscribers

## Configuration Files

### package.json
Core dependencies:
- next (15.x)
- react (18.x)
- next-themes (dark mode)
- gray-matter (frontmatter parsing)
- remark (markdown processing)
- lucide-react (icons)
- tailwindcss (styling)

### next.config.js
- Image optimization enabled
- Remote image patterns configured
- Strict mode enabled

### tailwind.config.ts
- Dark mode class-based
- Custom color palette (grays, blues)
- Typography plugin for prose styles

## Environment Variables

Create `.env.local` for:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=GA_MEASUREMENT_ID
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
```

## Development Workflow

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
vercel deploy
```

## Notes

- **Dark mode only** - light mode completely removed per requirements
- **Clean, minimal design** - no unnecessary components
- **Mobile-first** responsive design
- **Accessibility** - semantic HTML, proper ARIA labels
- **Type-safe** - Full TypeScript coverage
