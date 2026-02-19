import { BaseGolfClub } from '../shared/types';

export interface DriverSpecs {
  lofts: number[];
  headSize: number;
  adjustable: boolean;
  adjustabilityFeatures: string[];
  headWeight: number | null;
  moi: number | null;
  stockShafts: string[];
  keyTechnologies: string[];
}

export interface DriverScores {
  forgiveness: number;
  distance: number;
  feelAndSound: number;
  adjustability: number;
  value: number;
}

export interface Driver extends BaseGolfClub {
  category: 'driver';
  specifications: DriverSpecs;
  scores: DriverScores;
  overallScore: number;
}
