import { BaseGolfClub, Comparison } from './types';
import { SCORING_WEIGHTS, compareScores } from './scoring';

export function generateSlug(club1Id: string, club2Id: string): string {
  return `${club1Id}-vs-${club2Id}`;
}

export function determineBetterClub(
  club1: BaseGolfClub & { overallScore: number },
  club2: BaseGolfClub & { overallScore: number }
): string | null {
  const diff = Math.abs(club1.overallScore - club2.overallScore);
  if (diff < 0.2) return null; // too close to call
  return club1.overallScore > club2.overallScore ? club1.id : club2.id;
}

export function generateKeyDifferences(
  club1: BaseGolfClub & { scores: Record<string, number>; overallScore: number },
  club2: BaseGolfClub & { scores: Record<string, number>; overallScore: number }
): string[] {
  const differences: string[] = [];
  const comparison = compareScores(club1.scores, club2.scores);

  for (const [metric, values] of Object.entries(comparison)) {
    const diff = values.club1 - values.club2;
    if (Math.abs(diff) >= 0.5) {
      const winner = diff > 0 ? club1.name : club2.name;
      const label = metric.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
      differences.push(`${winner} scores higher in ${label} (${Math.max(values.club1, values.club2)} vs ${Math.min(values.club1, values.club2)})`);
    }
  }

  if (club1.msrp !== club2.msrp) {
    const cheaper = club1.msrp < club2.msrp ? club1 : club2;
    const pricier = club1.msrp < club2.msrp ? club2 : club1;
    differences.push(`${cheaper.name} is $${pricier.msrp - cheaper.msrp} less expensive ($${cheaper.msrp} vs $${pricier.msrp})`);
  }

  return differences.slice(0, 5);
}

export function generateComparison(
  club1: BaseGolfClub & { scores: Record<string, number>; overallScore: number },
  club2: BaseGolfClub & { scores: Record<string, number>; overallScore: number }
): Comparison {
  const winner = determineBetterClub(club1, club2);
  const keyDifferences = generateKeyDifferences(club1, club2);
  const scoreComp = compareScores(club1.scores, club2.scores);

  const winnerName = winner === club1.id ? club1.name : winner === club2.id ? club2.name : null;
  const verdictStr = winnerName
    ? `The ${winnerName} edges ahead with an overall score of ${winner === club1.id ? club1.overallScore : club2.overallScore} vs ${winner === club1.id ? club2.overallScore : club1.overallScore}. However, the right choice depends on your specific needs and playing style.`
    : `Both clubs score very closely overall. The best choice comes down to your personal preferences and what metrics matter most to your game.`;

  return {
    slug: generateSlug(club1.id, club2.id),
    title: `${club1.name} vs ${club2.name}`,
    metaDescription: `Compare the ${club1.name} and ${club2.name}. See head-to-head scores for forgiveness, distance, feel, and more. Find out which ${club1.category} is right for your game.`,
    winner,
    scoreComparison: scoreComp,
    keyDifferences,
    bestFor: {
      club1: `Best for players who prioritize ${getTopMetric(club1.scores, club2.scores)}`,
      club2: `Best for players who prioritize ${getTopMetric(club2.scores, club1.scores)}`,
    },
    verdict: verdictStr,
  };
}

function getTopMetric(
  scores: Record<string, number>,
  otherScores: Record<string, number>
): string {
  let bestMetric = '';
  let bestDiff = -Infinity;

  for (const [metric, value] of Object.entries(scores)) {
    const diff = value - (otherScores[metric] ?? 0);
    if (diff > bestDiff) {
      bestDiff = diff;
      bestMetric = metric;
    }
  }

  return bestMetric.replace(/([A-Z])/g, ' $1').toLowerCase().trim();
}

export function generateAllPairings<T extends BaseGolfClub & { scores: Record<string, number>; overallScore: number }>(
  clubs: T[]
): Comparison[] {
  const comparisons: Comparison[] = [];

  for (let i = 0; i < clubs.length; i++) {
    for (let j = i + 1; j < clubs.length; j++) {
      comparisons.push(generateComparison(clubs[i], clubs[j]));
    }
  }

  return comparisons;
}
