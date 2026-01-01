/**
 * Generate deterministic Unsplash image URLs
 */
export const getUnsplashImage = (
  keywords: string,
  width: number = 1600,
  height: number = 900
): string => {
  const seed = keywords.toLowerCase().replace(/\s+/g, ',');
  return `https://source.unsplash.com/${width}x${height}/?${seed}`;
};

export const getTripImage = (slug: string, width: number = 1600, height: number = 900): string => {
  return getUnsplashImage(`train,travel,${slug}`, width, height);
};

export const getDestinationImage = (
  name: string,
  width: number = 1600,
  height: number = 900
): string => {
  return getUnsplashImage(`city,${name.toLowerCase()}`, width, height);
};

export const getCollectionImage = (
  keywords: string,
  width: number = 1600,
  height: number = 900
): string => {
  return getUnsplashImage(keywords, width, height);
};

