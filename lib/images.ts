/**
 * Lorem Picsum Image Helper
 *
 * Fetches high-quality placeholder images from Lorem Picsum (powered by Unsplash)
 * All images are free for commercial use
 * No API key or attribution required
 *
 * Lorem Picsum: https://picsum.photos/
 * Unsplash License: https://unsplash.com/license
 */

import fs from 'fs';
import path from 'path';
import https from 'https';

export interface ImageOptions {
  width?: number;
  height?: number;
  grayscale?: boolean;
  blur?: number; // 1-10
}

/**
 * Generate a deterministic image ID from a string (1-1000)
 * Same input always produces same image ID
 */
function generateImageId(seed: string): number {
  const hash = Math.abs(seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0));
  return (hash % 1000) + 1; // Image IDs from 1 to 1000
}

/**
 * Get image styling based on article category
 */
function getCategoryStyle(category: string): { grayscale?: boolean; blur?: number } {
  const styles: Record<string, { grayscale?: boolean; blur?: number }> = {
    news: { grayscale: true }, // Professional, serious look
    tools: {}, // Full color, vibrant
    'ai-funnies': { blur: 2 }, // Slightly blurred for humor/abstract feel
    'just-the-tip': {}, // Full color, clear
  };

  return styles[category] || {};
}

/**
 * Generate Lorem Picsum URL for an article
 * Uses deterministic image ID based on slug for consistency
 */
export function generateLoremPicsumUrl(
  slug: string,
  category: string,
  options: ImageOptions = {}
): string {
  const {
    width = 1200,
    height = 630,
    grayscale,
    blur,
  } = options;

  // Get category-specific styling
  const categoryStyle = getCategoryStyle(category);
  const finalGrayscale = grayscale !== undefined ? grayscale : categoryStyle.grayscale;
  const finalBlur = blur !== undefined ? blur : categoryStyle.blur;

  // Generate deterministic image ID from slug
  const imageId = generateImageId(slug);

  // Build URL with optional parameters
  let url = `https://picsum.photos/id/${imageId}/${width}/${height}`;

  const params: string[] = [];
  if (finalGrayscale) params.push('grayscale');
  if (finalBlur) params.push(`blur=${finalBlur}`);

  if (params.length > 0) {
    url += `?${params.join('&')}`;
  }

  return url;
}

/**
 * Download image from URL and save to local filesystem
 */
export async function downloadImage(
  imageUrl: string,
  savePath: string,
  redirectCount: number = 0
): Promise<void> {
  // Prevent infinite redirect loops
  if (redirectCount > 5) {
    throw new Error('Too many redirects');
  }

  return new Promise((resolve, reject) => {
    // Ensure directory exists
    const dir = path.dirname(savePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    https
      .get(imageUrl, (response) => {
        // Follow redirects
        if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307) {
          const redirectUrl = response.headers.location;
          if (redirectUrl) {
            // Close the response to prevent memory leaks
            response.resume();
            // Recursively follow redirect
            downloadImage(redirectUrl, savePath, redirectCount + 1)
              .then(resolve)
              .catch(reject);
            return;
          }
        }

        // Check for HTTP errors
        if (response.statusCode !== 200) {
          response.resume(); // Consume response to free up memory
          reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
          return;
        }

        // Only create file stream after following all redirects
        const file = fs.createWriteStream(savePath);

        response.pipe(file);

        file.on('finish', () => {
          file.close();
          resolve();
        });

        file.on('error', (err) => {
          file.close();
          fs.unlinkSync(savePath);
          reject(err);
        });
      })
      .on('error', (err) => {
        if (fs.existsSync(savePath)) {
          fs.unlinkSync(savePath);
        }
        reject(err);
      });
  });
}

/**
 * Get relative image path for markdown frontmatter
 */
export function getImagePath(category: string, slug: string): string {
  return `/images/${category}/${slug}.jpg`;
}

/**
 * Main function: Generate and save image for an article
 * Retries with different image IDs if a 404 occurs (some Lorem Picsum IDs don't exist)
 */
export async function fetchAndSaveArticleImage(
  title: string,
  category: string,
  slug: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  excerpt?: string
): Promise<string> {
  const publicPath = path.join(process.cwd(), 'public');
  const savePath = path.join(publicPath, 'images', category, `${slug}.jpg`);

  // Try up to 5 different image IDs if we get 404s
  let attempts = 0;
  const maxAttempts = 5;

  while (attempts < maxAttempts) {
    try {
      // Generate URL with attempt offset to try different images
      const seedWithAttempt = slug + attempts.toString();
      const imageId = generateImageId(seedWithAttempt);
      const categoryStyle = getCategoryStyle(category);

      let imageUrl = `https://picsum.photos/id/${imageId}/1200/630`;
      const params: string[] = [];
      if (categoryStyle.grayscale) params.push('grayscale');
      if (categoryStyle.blur) params.push(`blur=${categoryStyle.blur}`);
      if (params.length > 0) imageUrl += `?${params.join('&')}`;

      // Try to download
      await downloadImage(imageUrl, savePath);

      // Success! Return path
      return getImagePath(category, slug);
    } catch (error) {
      attempts++;

      // If it's a 404, try next image ID
      if (error instanceof Error && error.message.includes('HTTP 404')) {
        if (attempts < maxAttempts) {
          continue; // Try again with different ID
        }
      }

      // For other errors or max attempts reached, throw
      throw error;
    }
  }

  // Should never reach here, but just in case
  throw new Error(`Failed to fetch image after ${maxAttempts} attempts`);
}

/**
 * Batch fetch images for multiple articles
 */
export async function fetchImagesForArticles(
  articles: Array<{
    title: string;
    category: string;
    slug: string;
    excerpt?: string;
  }>
): Promise<Map<string, string>> {
  const results = new Map<string, string>();

  for (const article of articles) {
    try {
      console.log(`Fetching image for: ${article.title}`);
      const imagePath = await fetchAndSaveArticleImage(
        article.title,
        article.category,
        article.slug,
        article.excerpt
      );
      results.set(article.slug, imagePath);
      console.log(`✓ Saved to ${imagePath}`);

      // Small delay to be respectful to Lorem Picsum servers
      await new Promise((resolve) => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`✗ Failed to fetch image for ${article.slug}:`, error);
      results.set(article.slug, '');
    }
  }

  return results;
}
