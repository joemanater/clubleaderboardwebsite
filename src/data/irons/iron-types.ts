import { BaseGolfClub } from '../shared/types';

export type IronCategory =
  | 'blade'
  | 'players'
  | 'players-distance'
  | 'game-improvement'
  | 'super-game-improvement';

export type IronConstruction = 'forged' | 'cast' | 'multi-material';

export type ThicknessLevel = 'thin' | 'medium' | 'thick';

export type WidthLevel = 'narrow' | 'medium' | 'wide';

export type CavityDesign = 'blade' | 'shallow-cavity' | 'deep-cavity' | 'hollow-body';

export interface IronSpecs {
  ironCategory: IronCategory;
  construction: IronConstruction;
  material: string;
  offset: 'low' | 'medium' | 'high';
  toplineThickness: ThicknessLevel;
  soleWidth: WidthLevel;
  cavityDesign: CavityDesign;
  stockShaftsSteel: string[];
  stockShaftsGraphite: string[];
  loftsByIron: Record<string, number>;
  setComposition: string;
  keyTechnologies: string[];
}

export interface IronScores {
  forgiveness: number;
  distance: number;
  feelAndFeedback: number;
  workability: number;
  aesthetics: number;
  value: number;
}

export interface Iron extends BaseGolfClub {
  category: 'iron';
  specifications: IronSpecs;
  scores: IronScores;
  overallScore: number;
}
