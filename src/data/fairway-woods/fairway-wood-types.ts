import { BaseGolfClub } from '../shared/types';

export interface FairwayWoodSpecs {
  lofts: number[];
  headSize: number | null;
  adjustable: boolean;
  adjustabilityFeatures: string[];
  faceMaterial: string;
  stockShafts: string[];
  keyTechnologies: string[];
}

export interface FairwayWoodScores {
  forgiveness: number;
  distance: number;
  versatility: number;
  feelAndSound: number;
  value: number;
}

export interface FairwayWood extends BaseGolfClub {
  category: 'fairway-wood';
  specifications: FairwayWoodSpecs;
  scores: FairwayWoodScores;
  overallScore: number;
}
