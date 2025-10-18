# Content Management System

This guide explains how to add, manage, and automate content for The Daily Hire blog.

## Content Structure

All articles are stored as Markdown files in the `/content` directory, organized by category:

```
content/
├── news/
├── tools/
├── ai-funnies/
└── just-the-tip/
```

## Article Frontmatter Format

Every markdown file must include frontmatter at the top with the following fields:

```markdown
---
title: "Your Article Title Here"
excerpt: "A compelling 1-2 sentence summary that appears in article cards"
author: "Author Name"
date: "Month Day, Year"
readTime: "X min read"
imageUrl: "https://example.com/image.jpg"
featured: false
---

Article content goes here...
```

### Frontmatter Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Article headline (keep under 80 characters for best display) |
| `excerpt` | string | Yes | Short description for cards/SEO (100-160 characters ideal) |
| `author` | string | Yes | Author name |
| `date` | string | Yes | Publication date (format: "Month Day, Year") |
| `readTime` | string | Yes | Estimated read time (e.g., "5 min read") |
| `imageUrl` | string | Yes | Full URL to hero image (minimum 1200x630px recommended) |
| `featured` | boolean | No | Set to `true` to feature on homepage (defaults to false) |

## File Naming Convention

Use kebab-case for filenames (lowercase with hyphens):

```
✅ GOOD:
- ai-screening-candidates.md
- your-ats-is-trash.md
- chatgpt-perfect-fit.md

❌ BAD:
- AI Screening Candidates.md
- your_ats_is_trash.md
- ChatGPTPerfectFit.md
```

**Important:** The filename becomes the URL slug!
- `ai-screening-candidates.md` → `/news/ai-screening-candidates`

## Adding a New Article

### Method 1: Manual Creation

1. Navigate to the appropriate category folder:
   ```bash
   cd content/[category]
   ```

2. Create a new `.md` file with a descriptive name:
   ```bash
   touch remote-work-broke-recruiting.md
   ```

3. Add frontmatter and content:
   ```markdown
   ---
   title: "Remote Work Broke Recruiting and Nobody's Mad About It"
   excerpt: "Geographic boundaries are dead. Your talent pool just went from local to global."
   author: "Marcus Johnson"
   date: "October 16, 2025"
   readTime: "4 min read"
   imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
   featured: false
   ---

   Your article content here...
   ```

4. Save the file

5. The article will automatically appear on the site after the next build or ISR revalidation (1 hour)

### Method 2: Automated (Future Setup)

For daily automated posts, you can:

1. **Use a script** to generate markdown files from a content source
2. **Set up a GitHub Action** to commit new files daily
3. **Trigger ISR** via API to update immediately without full rebuild

Example automation workflow (future):
```bash
# Generate content → Save to /content → Git commit → Deploy
```

## Markdown Formatting Guide

### Basic Formatting

```markdown
# H1 - Main article title (auto-generated from frontmatter)
## H2 - Major sections
### H3 - Subsections

**Bold text** for emphasis
*Italic text* for subtle emphasis

[Link text](https://example.com)
```

### Lists

```markdown
Unordered list:
- Item one
- Item two
- Item three

Ordered list:
1. First item
2. Second item
3. Third item
```

### Code Blocks

```markdown
Inline code: `const example = 'code'`

Code block:
​```javascript
function hello() {
  console.log('Hello world');
}
​```
```

### Blockquotes

```markdown
> This is a blockquote
> It can span multiple lines
```

### Images (In Content)

```markdown
![Alt text](https://example.com/image.jpg)
```

## Image Guidelines

### Hero Images (frontmatter `imageUrl`)
- **Minimum size:** 1200x630px (optimal for social sharing)
- **Aspect ratio:** 16:9 for best display on cards
- **Format:** JPG or PNG (WebP auto-converted by Next.js)
- **Sources:** Unsplash, Pexels, or custom images
- **Quality:** High resolution (will be optimized automatically)

### In-Content Images
- Use standard markdown image syntax
- External URLs work fine
- Consider using the same image sources for consistency

## Content Best Practices

### Title Guidelines
- Keep under 80 characters
- Use compelling, click-worthy language
- Include keywords for SEO
- Match the blog's casual, direct tone

### Excerpt Guidelines
- 100-160 characters (optimal for SEO meta descriptions)
- Hook readers with intrigue or value prop
- Don't give away the whole story
- End with a reason to click

### Content Length
- **News:** 500-800 words
- **Tools:** 700-1000 words
- **AI Funnies:** 300-500 words (shorter, punchier)
- **Just the Tip:** 400-600 words (concise, actionable)

## Featured Articles

The homepage hero section displays 4 featured articles (one from each category).

**How featured selection works:**
1. By default: Shows the most recent article from each category
2. Manual override: Set `featured: true` in frontmatter to force an article to be featured

**Best practice:**
- Only set `featured: true` for your best content
- Update featured articles periodically to keep homepage fresh
- Maximum 1 featured article per category at a time

## URL Structure

Articles are accessible via:
```
/[category]/[slug]

Examples:
/news/ai-screening-candidates
/tools/ats-features-2025
/ai-funnies/chatgpt-perfect-fit
/just-the-tip/job-descriptions-1995
```

## SEO Optimization

### Automatic SEO Features
- **Title tags:** Generated from article title
- **Meta descriptions:** Uses excerpt
- **Open Graph tags:** For Facebook/LinkedIn sharing
- **Twitter Cards:** Optimized previews
- **Canonical URLs:** Automatic
- **Structured data:** Article schema (ready for implementation)

### Manual SEO Tips
- Include target keywords in title and first paragraph
- Use descriptive H2/H3 headings with keywords
- Write compelling excerpts (these become meta descriptions)
- Choose high-quality, relevant images

## Updating Existing Articles

1. Locate the article file in `/content/[category]/`
2. Edit the markdown file
3. Save changes
4. Changes will appear after ISR revalidation (1 hour) or force rebuild

To force immediate update:
```bash
npm run build
```

## Deleting Articles

1. Delete the `.md` file from `/content/[category]/`
2. The article will be removed on next build
3. Old URLs will return 404

**Note:** Consider implementing redirects for high-traffic deleted articles

## Content Validation

Before publishing, ensure:
- [ ] All required frontmatter fields are present
- [ ] Date format is correct ("Month Day, Year")
- [ ] Image URL is valid and loads
- [ ] Filename uses kebab-case
- [ ] Content matches writing guidelines (see WRITING_GUIDELINES.md)
- [ ] No spelling/grammar errors
- [ ] Links are working
- [ ] Markdown formatting renders correctly

## Bulk Content Import

For importing multiple articles at once:

1. Create all `.md` files in appropriate category folders
2. Ensure all frontmatter is properly formatted
3. Run build:
   ```bash
   npm run build
   ```
4. Verify all articles appear correctly

## Future Automation Ideas

### Daily Automated Posts
```bash
# Example workflow
1. AI generates content → saves to /content/[category]/
2. Git commit via GitHub Actions
3. Vercel auto-deploys on push
4. New article goes live
```

### Content Calendar
- Use a spreadsheet to plan content
- Schedule articles by setting future dates
- Build system to only show articles with dates <= today

### Bulk Operations
- Script to rename multiple files
- Bulk update frontmatter fields
- Generate reports on content metrics

## Troubleshooting

### Article Not Appearing
- Check frontmatter syntax (must have `---` delimiters)
- Verify file extension is `.md`
- Confirm file is in correct category folder
- Wait for ISR revalidation or rebuild

### Broken Images
- Verify image URL is publicly accessible
- Check for HTTPS (not HTTP)
- Ensure URL doesn't contain spaces
- Test URL in browser

### Formatting Issues
- Use a markdown preview tool while writing
- Check for unclosed formatting tags
- Ensure code blocks use triple backticks
- Validate frontmatter YAML syntax

## Content Backup

**Important:** Always backup your content!

Recommendations:
- Git repository (already included)
- Periodic exports to external storage
- Database backup if/when migrating from markdown

## Migration Path

When scaling to database:
1. Write script to parse all markdown files
2. Import data to database (PostgreSQL, MongoDB, etc.)
3. Update `lib/articles.ts` to fetch from DB instead of files
4. Keep markdown files as backup

The current architecture is designed to make this transition seamless.
