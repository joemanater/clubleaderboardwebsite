import { ClubCategory } from './types';

export const SCORING_WEIGHTS: Record<string, Record<string, number>> = {
  driver: {
    forgiveness: 0.25,
    distance: 0.25,
    feelAndSound: 0.20,
    adjustability: 0.15,
    value: 0.15,
  },
  'fairway-wood': {
    forgiveness: 0.25,
    distance: 0.25,
    versatility: 0.20,
    feelAndSound: 0.15,
    value: 0.15,
  },
  hybrid: {
    forgiveness: 0.25,
    distance: 0.20,
    versatility: 0.25,
    turfInteraction: 0.15,
    value: 0.15,
  },
  iron: {
    forgiveness: 0.20,
    distance: 0.20,
    feelAndFeedback: 0.20,
    workability: 0.15,
    aesthetics: 0.10,
    value: 0.15,
  },
  wedge: {
    spinAndControl: 0.25,
    versatility: 0.25,
    feelAndFeedback: 0.20,
    turfInteraction: 0.15,
    value: 0.15,
  },
  putter: {
    forgiveness: 0.20,
    feelAndSound: 0.25,
    alignment: 0.20,
    rollQuality: 0.20,
    value: 0.15,
  },
};

export function calculateOverallScore(
  category: ClubCategory,
  scores: Record<string, number>
): number {
  const weights = SCORING_WEIGHTS[category];
  if (!weights) return 0;

  let total = 0;
  for (const [metric, weight] of Object.entries(weights)) {
    total += (scores[metric] ?? 0) * weight;
  }
  return Math.round(total * 10) / 10;
}

export function compareScores(
  scores1: Record<string, number>,
  scores2: Record<string, number>
): Record<string, { club1: number; club2: number }> {
  const allKeys = new Set([...Object.keys(scores1), ...Object.keys(scores2)]);
  const comparison: Record<string, { club1: number; club2: number }> = {};

  for (const key of allKeys) {
    comparison[key] = {
      club1: scores1[key] ?? 0,
      club2: scores2[key] ?? 0,
    };
  }
  return comparison;
}

export function getScoreLabel(score: number): string {
  if (score >= 9.0) return 'Outstanding';
  if (score >= 8.0) return 'Excellent';
  if (score >= 7.0) return 'Very Good';
  if (score >= 6.0) return 'Good';
  if (score >= 5.0) return 'Average';
  return 'Below Average';
}

export function getScoreColor(score: number): string {
  if (score >= 9.0) return '#22c55e';
  if (score >= 8.0) return '#84cc16';
  if (score >= 7.0) return '#eab308';
  if (score >= 6.0) return '#f97316';
  return '#ef4444';
}
