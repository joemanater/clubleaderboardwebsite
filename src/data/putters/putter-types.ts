import { BaseGolfClub } from '../shared/types';

export type PutterType = 'blade' | 'mid-mallet' | 'mallet' | 'high-moi-mallet';

export type HoselType =
  | 'plumbers-neck'
  | 'slant-neck'
  | 'center-shaft'
  | 'flow-neck'
  | 'short-slant';

export type ToeHang =
  | 'face-balanced'
  | 'slight-toe-hang'
  | 'moderate-toe-hang'
  | 'strong-toe-hang';

export interface PutterSpecs {
  putterType: PutterType;
  headMaterial: string;
  insertMaterial: string;
  alignmentAid: string;
  hoselType: HoselType;
  toeHang: ToeHang;
  availableLengths: number[];
  headWeight: number | null;
  moi: number | null;
  keyTechnologies: string[];
}

export interface PutterScores {
  forgiveness: number;
  feelAndSound: number;
  alignment: number;
  rollQuality: number;
  value: number;
}

export interface Putter extends BaseGolfClub {
  category: 'putter';
  specifications: PutterSpecs;
  scores: PutterScores;
  overallScore: number;
}
