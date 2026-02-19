import { BaseGolfClub } from '../shared/types';

export interface WedgeGrind {
  name: string;
  description: string;
}

export interface WedgeSpecs {
  availableLofts: number[];
  availableBounces: number[];
  availableGrinds: WedgeGrind[];
  material: string;
  grooveDesign: string;
  finish: string[];
  keyTechnologies: string[];
}

export interface WedgeScores {
  spinAndControl: number;
  versatility: number;
  feelAndFeedback: number;
  turfInteraction: number;
  value: number;
}

export interface Wedge extends BaseGolfClub {
  category: 'wedge';
  specifications: WedgeSpecs;
  scores: WedgeScores;
  overallScore: number;
}
