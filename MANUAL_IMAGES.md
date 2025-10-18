# Manual Image Uploads Guide

## Overview

The Daily Hire uses text-based gradient placeholders for all article images by default. However, you can manually upload custom images for **featured articles** (the top row on homepage and first article in category pages).

## How to Add Manual Images

### 1. Prepare Your Image
- **Recommended size**: 1200x630px (perfect for blog headers and social sharing)
- **Format**: JPG or PNG
- **File size**: Keep under 200KB for fast loading

### 2. Upload to Public Directory

Place your image in:
```
/public/images/featured/
```

**Naming convention**: Use the article slug as the filename
```
Example: ai-integration-concerns.jpg
```

### 3. Update Article Frontmatter

Edit the markdown file and set the `imageUrl` to point to your uploaded image:

```yaml
---
title: Your Article Title
excerpt: Article excerpt here
author: Author Name
date: 'October 10, 2025'
readTime: 5 min read
imageUrl: /images/featured/ai-integration-concerns.jpg  # ← Add this path
featured: false
---
```

### 4. Verify It Works

- **Featured row (homepage)**: Image will show for articles in the "Trending Now" section
- **Category pages**: Image will show for the first article in the grid

## Where Manual Images Appear

### ✅ Supported Locations:
- Homepage "Trending Now" section (all 4 featured articles)
- Category pages (first article only)

### ❌ Not Supported:
- Regular article grid (uses text placeholders)
- "All Stories" section on homepage (uses text placeholders)

## Text Placeholder Behavior

If no manual image is uploaded (or `imageUrl` doesn't start with `/images/featured/`), the system automatically displays:

- **Category-specific gradient backgrounds**:
  - News: Slate gray (professional)
  - Tools: Blue/Indigo (tech-focused)
  - AI Funnies: Purple/Pink/Rose (playful)
  - Just the Tip: Emerald/Teal/Cyan (fresh)

- **Article title overlay** in large, bold text

## Daily Workflow Recommendation

1. Each morning, identify your top trending article per category (4 total)
2. Create/source relevant images for those 4 articles
3. Upload to `/public/images/featured/`
4. Update the frontmatter `imageUrl` in those 4 markdown files
5. Push to production - featured articles now have custom images!

## Tips

- Use relevant, high-quality stock photos
- Ensure text overlay is readable on the image (featured cards add a dark overlay automatically)
- Images are cached by Next.js - may need to clear browser cache to see updates
- Remove old featured images periodically to keep directory clean

## Example Directory Structure

```
/public/images/featured/
  ├── ai-integration-concerns.jpg       (today's featured news)
  ├── greenhouse-worth-the-hype.jpg     (today's featured tools)
  ├── chatgpt-perfect-fit.jpg           (today's featured ai-funnies)
  └── linkedin-profile-mistakes.jpg     (today's featured just-the-tip)
```
