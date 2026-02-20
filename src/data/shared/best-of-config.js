import { CATEGORIES } from '../categoryConfig'
import { getComparisonSlug } from './comparisons-util'

const allDrivers = () => CATEGORIES.drivers?.data || []

export const BEST_OF_PAGES = {
  'most-forgiving-drivers-2026': {
    slug: 'most-forgiving-drivers-2026',
    title: 'Most Forgiving Drivers 2026',
    seoTitle: 'Most Forgiving Drivers 2026 — Rankings & Reviews | ClubLeaderboard',
    metaDescription:
      'The most forgiving drivers of 2026, independently ranked. High-MOI heads that keep your ball in play on off-center strikes. See which drivers top our forgiveness scores.',
    intro:
      'Forgiveness is the single most important trait for the majority of golfers. A forgiving driver maintains ball speed and accuracy on mishits — the shots you actually hit most often. High MOI (moment of inertia) is the key metric: it resists twisting on off-center contact, keeping your dispersion tight even when your swing isn\'t perfect. We\'ve ranked every driver by our independent forgiveness score. If you want a driver that makes your bad shots less bad, start here.',
    filter: (drivers) =>
      [...drivers]
        .sort((a, b) => b.scores.forgiveness - a.scores.forgiveness)
        .slice(0, 15),
    sortLabel: 'Forgiveness Score',
    sortField: 'forgiveness',
  },
  'best-drivers-for-distance-2026': {
    slug: 'best-drivers-for-distance-2026',
    title: 'Best Drivers for Distance 2026',
    seoTitle: 'Best Drivers for Distance 2026 — Rankings & Reviews | ClubLeaderboard',
    metaDescription:
      'The longest drivers of 2026, ranked by independent distance scores. Find the driver that maximizes ball speed and carry for your swing.',
    intro:
      'Distance is what sells drivers — and for good reason. More yards off the tee means shorter approach shots, which means more birdie looks. But not all distance claims are created equal. Our distance score factors in ball speed, carry distance, total distance, and how well the driver maintains speed across the face. The drivers at the top of this list deliver genuine, measurable yards — not just marketing hype. Here are the longest drivers we\'ve tested.',
    filter: (drivers) =>
      [...drivers]
        .sort((a, b) => b.scores.distance - a.scores.distance)
        .slice(0, 15),
    sortLabel: 'Distance Score',
    sortField: 'distance',
  },
  'best-drivers-for-high-handicappers': {
    slug: 'best-drivers-for-high-handicappers',
    title: 'Best Drivers for High Handicappers',
    seoTitle: 'Best Drivers for High Handicappers 2026 | ClubLeaderboard',
    metaDescription:
      'The best drivers for high handicappers and beginners in 2026. Maximum forgiveness, easy launch, and slice-fighting designs ranked independently.',
    intro:
      'If your handicap is 20 or higher, you need a driver that works with your swing, not against it. That means maximum forgiveness for off-center hits, higher launch to get the ball airborne easily, and ideally some draw bias to fight the slice that plagues most high handicappers. Price matters too — no sense spending $700 on a tour driver that punishes mishits. We filtered for drivers with high-handicap or beginner player type designations and sorted by forgiveness score.',
    filter: (drivers) =>
      [...drivers]
        .filter((d) => d.playerType.some((t) => t === 'high' || t === 'beginner'))
        .sort((a, b) => b.scores.forgiveness - a.scores.forgiveness)
        .slice(0, 15),
    sortLabel: 'Forgiveness Score',
    sortField: 'forgiveness',
  },
  'best-low-spin-drivers-2026': {
    slug: 'best-low-spin-drivers-2026',
    title: 'Best Low Spin Drivers 2026',
    seoTitle: 'Best Low Spin Drivers 2026 — Rankings & Reviews | ClubLeaderboard',
    metaDescription:
      'The best low-spin drivers of 2026 for skilled golfers. Tour-level workability and penetrating ball flights ranked independently.',
    intro:
      'Low spin drivers are built for golfers who generate plenty of their own launch — typically players with swing speeds above 100 mph and handicaps in the single digits. Too much spin on a driver means a ballooning ball flight that loses carry distance, especially in wind. These drivers feature forward CG placement, compact head shapes, and lower loft options that produce a penetrating flight. They trade some forgiveness for workability and raw distance. If you\'re a skilled ball-striker, these are your drivers.',
    filter: (drivers) =>
      [...drivers]
        .filter((d) => d.playerType.includes('low') && !d.playerType.includes('high'))
        .sort((a, b) => b.scores.distance - a.scores.distance)
        .slice(0, 15),
    sortLabel: 'Distance Score',
    sortField: 'distance',
  },
  'best-budget-drivers-2026': {
    slug: 'best-budget-drivers-2026',
    title: 'Best Budget Drivers 2026',
    seoTitle: 'Best Budget Drivers 2026 (Under $500) | ClubLeaderboard',
    metaDescription:
      'The best golf drivers under $500 in 2026. Affordable drivers that deliver real performance without the premium price tag, ranked independently.',
    intro:
      'You don\'t need to spend $600+ to get a great driver. The sub-$500 segment has gotten remarkably competitive, with brands like Cobra, Srixon, PXG, Cleveland, and Wilson delivering genuinely impressive performance at accessible prices. These drivers use many of the same technologies as their premium counterparts — multi-material construction, adjustable hosels, high-MOI designs — at a fraction of the cost. We ranked every driver under $500 by our value score.',
    filter: (drivers) =>
      [...drivers]
        .filter((d) => d.msrp < 500)
        .sort((a, b) => b.scores.value - a.scores.value)
        .slice(0, 15),
    sortLabel: 'Value Score',
    sortField: 'value',
  },
  'best-drivers-for-seniors-2026': {
    slug: 'best-drivers-for-seniors-2026',
    title: 'Best Drivers for Seniors 2026',
    seoTitle: 'Best Drivers for Seniors 2026 — Lightweight & Easy Launch | ClubLeaderboard',
    metaDescription:
      'The best drivers for seniors and slower swing speeds in 2026. Lightweight designs, high launch, and maximum forgiveness ranked independently.',
    intro:
      'As swing speed decreases, you need a driver that compensates with lighter total weight, higher launch, and maximum forgiveness. Senior-oriented drivers typically feature ultralight shafts (under 50g), higher lofts, and head designs that get the ball up quickly even at 80-90 mph swing speeds. Several manufacturers now offer dedicated "Lite" or "Max" models specifically engineered for this segment. We\'ve identified the best options for golfers who prioritize easy launch and consistency over raw workability.',
    filter: (drivers) =>
      [...drivers]
        .filter(
          (d) =>
            d.playerType.some((t) => t === 'mid' || t === 'high') &&
            d.scores.forgiveness >= 9.0
        )
        .sort((a, b) => b.scores.forgiveness - a.scores.forgiveness)
        .slice(0, 12),
    sortLabel: 'Forgiveness Score',
    sortField: 'forgiveness',
  },
  'best-drivers-for-beginners': {
    slug: 'best-drivers-for-beginners',
    title: 'Best Drivers for Beginners',
    seoTitle: 'Best Drivers for Beginners 2026 — Easy to Hit | ClubLeaderboard',
    metaDescription:
      'The best drivers for beginners and new golfers in 2026. Maximum forgiveness, easy launch, and great value — ranked independently.',
    intro:
      'Starting golf with the wrong driver makes the game harder than it needs to be. Beginners need maximum forgiveness (because most swings won\'t find the center), high launch (because slower swings need help getting the ball airborne), and good value (because you\'re also buying irons, a putter, a bag, shoes, and balls). Skip the tour-level drivers — they\'ll punish your developing swing. These beginner-friendly picks score highest on the metrics that matter most when you\'re learning the game.',
    filter: (drivers) =>
      [...drivers]
        .filter((d) => d.playerType.some((t) => t === 'high' || t === 'beginner'))
        .sort((a, b) => {
          const aScore = a.scores.forgiveness * 0.5 + a.scores.value * 0.3 + a.scores.distance * 0.2
          const bScore = b.scores.forgiveness * 0.5 + b.scores.value * 0.3 + b.scores.distance * 0.2
          return bScore - aScore
        })
        .slice(0, 12),
    sortLabel: 'Beginner Score',
    sortField: 'forgiveness',
  },
}

export const BEST_OF_LIST = Object.values(BEST_OF_PAGES)

export function getBestOfBySlug(slug) {
  return BEST_OF_PAGES[slug] || null
}

/**
 * Get top compare links for a best-of page (top 3-4 drivers, cross-compared)
 */
export function getTopCompareLinks(filteredDrivers) {
  const top = filteredDrivers.slice(0, 4)
  const links = []
  for (let i = 0; i < top.length; i++) {
    for (let j = i + 1; j < top.length; j++) {
      links.push({
        slug: getComparisonSlug(top[i].id, top[j].id),
        label: `${top[i].name} vs ${top[j].name}`,
      })
    }
  }
  return links.slice(0, 6)
}
