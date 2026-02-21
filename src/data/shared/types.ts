export type ClubCategory = 'driver' | 'fairway-wood' | 'hybrid' | 'iron' | 'wedge' | 'putter';

export type PlayerType = 'low' | 'mid' | 'high' | 'beginner';

export interface Manufacturer {
  id: string;
  name: string;
  country: string;
  website: string;
  logoPath: string;
  parentCompany?: string;
}

export interface BaseGolfClub {
  id: string;
  name: string;
  manufacturer: string;
  category: ClubCategory;
  year: number;
  msrp: number;
  streetPrice?: number;
  currency: 'USD';
  imageUrl: string;
  productUrl: string;
  playerType: PlayerType[];
  description: string;
  pros: string[];
  cons: string[];
  lastUpdated: string;
}

export interface Comparison {
  slug: string;
  title: string;
  metaDescription: string;
  winner: string | null;
  scoreComparison: Record<string, { club1: number; club2: number }>;
  keyDifferences: string[];
  bestFor: {
    club1: string;
    club2: string;
  };
  verdict: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
  jsonLd: Record<string, unknown>;
}
