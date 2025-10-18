/**
 * Update Existing Articles with Lorem Picsum Images
 *
 * This script:
 * 1. Reads all existing markdown articles
 * 2. Generates Lorem Picsum image URLs (no API required!)
 * 3. Downloads images to /public/images/[category]/
 * 4. Updates markdown frontmatter with correct image paths
 *
 * Usage: npm run update-existing-images
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fetchAndSaveArticleImage } from '../lib/images';

interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  filePath: string;
}

/**
 * Get all markdown files from content directory
 */
function getAllArticles(): Article[] {
  const contentDir = path.join(process.cwd(), 'content');
  const categories = ['news', 'tools', 'ai-funnies', 'just-the-tip'];
  const articles: Article[] = [];

  for (const category of categories) {
    const categoryPath = path.join(contentDir, category);

    if (!fs.existsSync(categoryPath)) {
      console.warn(`⚠️  Category directory not found: ${category}`);
      continue;
    }

    const files = fs.readdirSync(categoryPath);

    for (const file of files) {
      if (!file.endsWith('.md')) continue;

      const filePath = path.join(categoryPath, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(content);

      articles.push({
        slug: file.replace('.md', ''),
        category,
        title: data.title || 'Untitled',
        excerpt: data.excerpt || '',
        filePath,
      });
    }
  }

  return articles;
}

/**
 * Update markdown file with new image path
 */
function updateMarkdownImage(filePath: string, imagePath: string): void {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, content: markdownContent } = matter(content);

  // Update imageUrl
  data.imageUrl = imagePath;

  // Write back to file
  const newContent = matter.stringify(markdownContent, data);
  fs.writeFileSync(filePath, newContent);
}

/**
 * Main execution
 */
async function main() {
  console.log('🖼️  Updating existing articles with Lorem Picsum images\n');

  // Get all articles
  const articles = getAllArticles();
  console.log(`Found ${articles.length} articles\n`);

  // Process each article
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    const progress = `[${i + 1}/${articles.length}]`;

    console.log(`${progress} Processing: ${article.title}`);
    console.log(`   Category: ${article.category}`);
    console.log(`   Slug: ${article.slug}`);

    try {
      // Fetch and save image
      const imagePath = await fetchAndSaveArticleImage(
        article.title,
        article.category,
        article.slug,
        article.excerpt
      );

      // Update markdown file
      updateMarkdownImage(article.filePath, imagePath);

      console.log(`   ✓ Image saved: ${imagePath}`);
      console.log(`   ✓ Markdown updated\n`);
      successCount++;

      // Small delay to be respectful to Lorem Picsum servers
      if (i < articles.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    } catch (error) {
      console.error(`   ✗ Failed: ${error}`);
      console.error('');
      failCount++;
    }
  }

  // Summary
  console.log('━'.repeat(60));
  console.log('📊 Summary\n');
  console.log(`Total articles: ${articles.length}`);
  console.log(`✓ Successfully updated: ${successCount}`);
  console.log(`✗ Failed: ${failCount}`);
  console.log('━'.repeat(60));

  if (successCount > 0) {
    console.log('\n✅ Images have been downloaded to /public/images/');
    console.log('✅ All markdown files have been updated with image paths');
    console.log('\n💡 You can now run `npm run dev` to see the images in your blog');
  }

  if (failCount > 0) {
    console.log('\n⚠️  Some images failed to download. You can:');
    console.log('   1. Run this script again to retry failed images');
    console.log('   2. Manually update those articles with custom images');
  }
}

// Run the script
main().catch((error) => {
  console.error('❌ Script failed:', error);
  process.exit(1);
});
