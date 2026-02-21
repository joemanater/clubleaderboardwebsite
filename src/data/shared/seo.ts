import { BaseGolfClub, SEOMetadata, Comparison } from './types';

const SITE_URL = 'https://clubleaderboard.com';
const SITE_NAME = 'ClubLeaderboard';

export function generateProductSEO(
  club: BaseGolfClub & { overallScore: number },
  categorySlug?: string
): SEOMetadata {
  const title = `${club.name} Review - ${(club as any).overallScore}/10 | ${SITE_NAME}`;
  const description = `${club.name} scores ${(club as any).overallScore}/10 in our independent testing. See detailed ratings for forgiveness, distance, feel, and more. MSRP: $${club.msrp}.`;
  const slug = categorySlug || `${club.category}s`;

  return {
    title: title.slice(0, 60),
    description: description.slice(0, 160),
    canonical: `${SITE_URL}/${slug}/${club.id}`,
    ogTitle: title,
    ogDescription: description,
    ogImage: `${SITE_URL}${club.imageUrl}`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: club.name,
      description: club.description,
      brand: { '@type': 'Brand', name: club.manufacturer },
      offers: {
        '@type': 'Offer',
        price: club.msrp,
        priceCurrency: club.currency,
        availability: 'https://schema.org/InStock',
      },
      review: {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: (club as any).overallScore,
          bestRating: 10,
          worstRating: 1,
        },
        author: { '@type': 'Organization', name: SITE_NAME },
      },
    },
  };
}

export function generateComparisonSEO(comparison: Comparison): SEOMetadata {
  const title = `${comparison.title} | ${SITE_NAME}`;
  return {
    title: title.slice(0, 60),
    description: comparison.metaDescription.slice(0, 160),
    canonical: `${SITE_URL}/compare/${comparison.slug}`,
    ogTitle: title,
    ogDescription: comparison.metaDescription,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: comparison.title,
      description: comparison.metaDescription,
      publisher: { '@type': 'Organization', name: SITE_NAME },
    },
  };
}

export function generateCategoryRankingSEO(
  category: string,
  clubs: (BaseGolfClub & { overallScore: number })[]
): SEOMetadata {
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
  const title = `Best ${categoryTitle} 2026 - Rankings & Reviews | ${SITE_NAME}`;
  const description = `Compare the top ${clubs.length} ${category} of 2026. Independent ratings, head-to-head comparisons, and expert analysis to find the best ${category} for your game.`;

  return {
    title: title.slice(0, 60),
    description: description.slice(0, 160),
    canonical: `${SITE_URL}/${category}`,
    ogTitle: title,
    ogDescription: description,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `Best ${categoryTitle} 2026`,
      numberOfItems: clubs.length,
      itemListElement: clubs
        .sort((a, b) => b.overallScore - a.overallScore)
        .map((club, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Product',
            name: club.name,
            url: `${SITE_URL}/${category}/${club.id}`,
          },
        })),
    },
  };
}

export function generateSitemap(
  allClubs: { id: string; categorySlug: string }[],
  comparisons: { slug: string }[],
  categories: string[],
  tags: string[] = [],
  bestOfPages: { slug: string }[] = []
): string {
  const today = new Date().toISOString().split('T')[0];
  const u = (loc: string, priority: string, lastmod: string = today) =>
    `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><priority>${priority}</priority></url>`;

  const urls: string[] = [u(SITE_URL, '1.0')];

  // Static pages
  const staticPages = ['/search', '/compare', '/about', '/privacy'];
  for (const page of staticPages) {
    urls.push(u(`${SITE_URL}${page}`, '0.5'));
  }

  // Category pages
  for (const category of categories) {
    urls.push(u(`${SITE_URL}/${category}`, '0.9'));
  }

  // Tag pages
  for (const tag of tags) {
    urls.push(u(`${SITE_URL}/t/${tag}`, '0.7'));
  }

  // Product pages
  for (const club of allClubs) {
    urls.push(u(`${SITE_URL}/${club.categorySlug}/${club.id}`, '0.8'));
  }

  for (const comp of comparisons) {
    urls.push(u(`${SITE_URL}/compare/${comp.slug}`, '0.7'));
  }

  // Best-of pages
  for (const page of bestOfPages) {
    urls.push(u(`${SITE_URL}/best/${page.slug}`, '0.8'));
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
}
