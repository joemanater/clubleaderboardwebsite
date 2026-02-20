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
  tags: string[] = []
): string {
  const urls: string[] = [
    `  <url><loc>${SITE_URL}</loc><priority>1.0</priority></url>`,
  ];

  // Static pages
  const staticPages = ['/search', '/compare', '/about', '/privacy'];
  for (const page of staticPages) {
    urls.push(`  <url><loc>${SITE_URL}${page}</loc><priority>0.5</priority></url>`);
  }

  // Category pages
  for (const category of categories) {
    urls.push(`  <url><loc>${SITE_URL}/${category}</loc><priority>0.9</priority></url>`);
  }

  // Tag pages
  for (const tag of tags) {
    urls.push(`  <url><loc>${SITE_URL}/t/${tag}</loc><priority>0.7</priority></url>`);
  }

  // Product pages
  for (const club of allClubs) {
    urls.push(`  <url><loc>${SITE_URL}/${club.categorySlug}/${club.id}</loc><priority>0.8</priority></url>`);
  }

  for (const comp of comparisons) {
    urls.push(`  <url><loc>${SITE_URL}/compare/${comp.slug}</loc><priority>0.7</priority></url>`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
}
