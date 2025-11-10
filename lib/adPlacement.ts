/**
 * Ad Placement Strategy
 *
 * Determines which articles show premium ads (SpreadTracker/Link2Start) vs Google AdSense
 * This ensures we don't cannibalize AdSense revenue while promoting premium sponsors
 */

/**
 * Determines if a specific article should show the SpreadTracker premium ad
 * Returns true for ~25% of articles (based on slug hash)
 */
export function shouldShowSpreadTrackerAd(slug: string): boolean {
  // Use slug hash to consistently determine ad placement
  const hash = slug.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);

  // Show SpreadTracker ad on ~25% of articles (different offset than Link2Start)
  return Math.abs(hash) % 4 === 1;
}

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
 * List of specific slugs that should ALWAYS show SpreadTracker ad
 * Add high-traffic or strategic articles here
 */
const PREMIUM_SPREADTRACKER_SLUGS: string[] = [
  // Add specific article slugs here that should always show SpreadTracker
  // Example: 'managing-recruiting-metrics',
];

/**
 * List of specific slugs that should ALWAYS show Link2Start ad
 * Add high-traffic or strategic articles here
 */
const PREMIUM_LINK2START_SLUGS: string[] = [
  // Add specific article slugs here that should always show Link2Start
  // Example: 'how-to-improve-candidate-presentations',
];

export function isPremiumSpreadTrackerSlot(slug: string): boolean {
  return PREMIUM_SPREADTRACKER_SLUGS.includes(slug);
}

export function isPremiumLink2StartSlot(slug: string): boolean {
  return PREMIUM_LINK2START_SLUGS.includes(slug);
}

/**
 * Final decision on whether to show SpreadTracker ad
 */
export function showSpreadTrackerAd(slug: string): boolean {
  return isPremiumSpreadTrackerSlot(slug) || shouldShowSpreadTrackerAd(slug);
}

/**
 * Final decision on whether to show Link2Start ad
 */
export function showLink2StartAd(slug: string): boolean {
  return isPremiumLink2StartSlot(slug) || shouldShowLink2StartAd(slug);
}
