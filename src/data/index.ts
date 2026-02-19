// Master data index — re-exports all equipment data and utilities

// Data
export { drivers } from './drivers/drivers';
export { irons } from './irons/irons';
export { putters } from './putters/putters';
export { fairwayWoods } from './fairway-woods/fairway-woods';
export { hybrids } from './hybrids/hybrids';
export { wedges } from './wedges/wedges';

// Types
export type { Driver, DriverSpecs, DriverScores } from './drivers/driver-types';
export type { Iron, IronSpecs, IronScores, IronCategory } from './irons/iron-types';
export type { Putter, PutterSpecs, PutterScores, PutterType } from './putters/putter-types';
export type { FairwayWood, FairwayWoodSpecs, FairwayWoodScores } from './fairway-woods/fairway-wood-types';
export type { Hybrid, HybridSpecs, HybridScores } from './hybrids/hybrid-types';
export type { Wedge, WedgeSpecs, WedgeScores } from './wedges/wedge-types';
export type { ClubCategory, PlayerType, Manufacturer, BaseGolfClub, Comparison, SEOMetadata } from './shared/types';

// Shared utilities
export { manufacturers } from './shared/manufacturers';
export { SCORING_WEIGHTS, calculateOverallScore, compareScores, getScoreLabel, getScoreColor } from './shared/scoring';
export { generateComparison, generateAllPairings, generateSlug } from './shared/comparisons';
export { generateProductSEO, generateComparisonSEO, generateCategoryRankingSEO, generateSitemap } from './shared/seo';
