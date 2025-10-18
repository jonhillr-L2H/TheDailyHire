# The Daily Hire 📰

> Recruiting news that actually slaps. No corporate cringe, just the tea. ☕

A modern, high-performance blog built with Next.js 15, optimized for millions of pages and designed to drive traffic while generating revenue through strategic ad placement.

## Features

- ⚡ **Next.js 15 App Router** - Blazing fast with Server Components
- 📝 **Markdown-based CMS** - Easy content management with frontmatter
- 🎨 **Dark Mode Only** - Sleek, eye-catching design
- 🔍 **SEO Optimized** - Built-in metadata, Open Graph, Twitter Cards
- 📊 **Google Analytics Ready** - Track your traffic
- 💰 **AdSense Integration** - Strategic ad placement (1 ad per 6 articles)
- ♾️ **Infinite Scroll** - Smooth browsing experience on category pages
- 🖼️ **Image Optimization** - Automatic Next.js Image optimization
- 📱 **Mobile First** - Fully responsive design
- 🚀 **Vercel Optimized** - Deploy in seconds

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
the-daily-hire/
├── app/                  # Next.js App Router pages
│   ├── [category]/      # Dynamic category pages
│   └── api/             # API routes
├── components/           # React components
│   └── ui/              # Reusable UI component library
├── content/             # Markdown articles (organized by category)
│   ├── news/
│   ├── tools/
│   ├── ai-funnies/
│   └── just-the-tip/
├── lib/                 # Utility functions & constants
├── types/               # TypeScript types
└── public/              # Static assets
```

See [STRUCTURE.md](./STRUCTURE.md) for detailed architecture documentation.

## Adding Content

### Quick Method

1. Create a new `.md` file in the appropriate `/content/[category]` folder
2. Add frontmatter with article metadata:

```markdown
---
title: "Your Article Title"
excerpt: "Compelling summary in 1-2 sentences"
author: "Author Name"
date: "October 17, 2025"
readTime: "5 min read"
imageUrl: "https://images.unsplash.com/photo-xxxxx"
featured: false
---

Your article content here...
```

3. Save and build - article appears automatically!

See [CONTENT_SYSTEM.md](./CONTENT_SYSTEM.md) for complete content management guide.

## Writing Guidelines

The Daily Hire has a unique voice - conversational, direct, and no BS.

**Voice Principles:**
- Write like you're texting your work bestie
- No corporate speak (unless roasting it)
- Be informative AND entertaining
- Keep it 100

See [WRITING_GUIDELINES.md](./WRITING_GUIDELINES.md) for the complete style guide.

## Configuration

### Google Analytics

1. Get your GA4 Measurement ID
2. Open `app/layout.tsx`
3. Replace `GA_MEASUREMENT_ID` with your actual ID

### Google AdSense

1. Sign up for AdSense and get approved
2. Get your publisher ID (`ca-pub-XXXXXXXXXXXXXXXX`)
3. Open `app/layout.tsx` and replace the placeholder
4. Open `components/AdCard.tsx` and add your ad slot IDs
5. Ads appear automatically every 6 articles (NO ads on article pages)

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-id
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-xxxxx
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Deploy Elsewhere

```bash
# Build
npm run build

# The build output is in .next/
# Deploy the entire project directory
```

## Categories

- **News** - Breaking industry trends and hot takes
- **Tools** - Software reviews and recommendations
- **AI Funnies** - Humorous AI recruiting fails
- **Just the Tip** - Quick, actionable tips

## Roadmap

- [ ] Search functionality
- [ ] RSS feed
- [ ] Newsletter signup
- [ ] Related articles algorithm
- [ ] Content calendar automation
- [ ] Database migration (when scaling past markdown)
- [ ] Comment system
- [ ] Social sharing buttons

## Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **Content:** Markdown + Gray-matter
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Analytics:** Google Analytics 4
- **Ads:** Google AdSense

## Performance

- ⚡ Server Components for optimal performance
- 🎯 Static Site Generation (SSG) for all article pages
- 🔄 Incremental Static Regeneration (ISR) - revalidates every hour
- 🖼️ Automatic image optimization
- 📦 Code splitting and lazy loading
- 🌐 Edge-ready architecture

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - See LICENSE file for details

## Support

For questions or issues, please open an issue on GitHub.

---

Built with ❤️ and a lot of coffee ☕

**The Daily Hire** - Recruiting news that actually slaps.
