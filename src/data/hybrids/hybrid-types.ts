import { BaseGolfClub } from '../shared/types';

export interface HybridSpecs {
  lofts: number[];
  headDesign: 'compact' | 'mid' | 'oversized';
  adjustable: boolean;
  adjustabilityFeatures: string[];
  stockShafts: string[];
  keyTechnologies: string[];
}

export interface HybridScores {
  forgiveness: number;
  distance: number;
  versatility: number;
  turfInteraction: number;
  value: number;
}

export interface Hybrid extends BaseGolfClub {
  category: 'hybrid';
  specifications: HybridSpecs;
  scores: HybridScores;
  overallScore: number;
}
