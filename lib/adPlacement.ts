/**
 * Ad Placement Strategy
 *
 * Determines which articles show Link2Start ad vs Google AdSense
 * This ensures we don't cannibalize AdSense revenue while promoting Link2Start
 */

/**
 * Determines if a specific article should show the Link2Start premium ad
 * Returns true for ~25% of articles (based on slug hash)
 * The rest will show Google AdSense ads
 */
export function shouldShowLink2StartAd(slug: string): boolean {
  // Use slug hash to consistently determine ad placement
  // This ensures the same article always gets the same ad
  const hash = slug.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);

  // Show Link2Start ad on ~25% of articles
  return Math.abs(hash) % 4 === 0;
}

/**
 * List of specific slugs that should ALWAYS show Link2Start ad
 * Add high-traffic or strategic articles here
 */
const PREMIUM_LINK2START_SLUGS: string[] = [
  // Add specific article slugs here that should always show Link2Start
  // Example: 'how-to-improve-candidate-presentations',
];

export function isPremiumLink2StartSlot(slug: string): boolean {
  return PREMIUM_LINK2START_SLUGS.includes(slug);
}

/**
 * Final decision on whether to show Link2Start ad
 */
export function showLink2StartAd(slug: string): boolean {
  return isPremiumLink2StartSlot(slug) || shouldShowLink2StartAd(slug);
}
