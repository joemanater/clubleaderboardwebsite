import { CATEGORIES } from '../categoryConfig'
import { manufacturers } from './manufacturers'

const SITE_URL = 'https://clubleaderboard.com'

/**
 * Get all drivers from the drivers category
 */
export function getAllDrivers() {
  const cat = CATEGORIES.drivers
  if (!cat) return []
  return cat.data
}

/**
 * Get manufacturer display name
 */
export function getMfrName(club) {
  const mfr = manufacturers[club.manufacturer]
  return mfr ? mfr.name : club.manufacturer
}

/**
 * Generate the canonical comparison slug (alphabetical by id)
 */
export function getComparisonSlug(idA, idB) {
  return idA < idB ? `${idA}-vs-${idB}` : `${idB}-vs-${idA}`
}

/**
 * Parse a comparison slug into two driver IDs
 */
export function parseComparisonSlug(slug) {
  const parts = slug.split('-vs-')
  if (parts.length !== 2) return null
  return { idA: parts[0], idB: parts[1] }
}

/**
 * Generate all possible driver-vs-driver comparison slugs
 */
export function getAllComparisonSlugs() {
  const drivers = getAllDrivers()
  const slugs = []
  for (let i = 0; i < drivers.length; i++) {
    for (let j = i + 1; j < drivers.length; j++) {
      slugs.push(getComparisonSlug(drivers[i].id, drivers[j].id))
    }
  }
  return slugs
}

/**
 * Look up two drivers from a comparison slug
 */
export function getDriversFromSlug(slug) {
  const parsed = parseComparisonSlug(slug)
  if (!parsed) return null
  const drivers = getAllDrivers()
  const driverA = drivers.find((d) => d.id === parsed.idA)
  const driverB = drivers.find((d) => d.id === parsed.idB)
  if (!driverA || !driverB) return null
  return { driverA, driverB }
}

/**
 * Get the score fields and labels for drivers
 */
export function getDriverScoreConfig() {
  return {
    fields: CATEGORIES.drivers.scoreFields,
    labels: CATEGORIES.drivers.scoreLabels,
  }
}

/**
 * Generate template-driven intro paragraph for a comparison
 */
export function generateIntro(a, b) {
  const nameA = a.name
  const nameB = b.name
  const mfrA = getMfrName(a)
  const mfrB = getMfrName(b)
  const priceDiff = Math.abs(a.msrp - b.msrp)
  const sameBrand = a.manufacturer === b.manufacturer
  const sameYear = a.year === b.year
  const cheaper = a.msrp < b.msrp ? a : b
  const pricier = a.msrp < b.msrp ? b : a

  // Determine player type overlap
  const typesA = new Set(a.playerType)
  const typesB = new Set(b.playerType)
  const overlap = [...typesA].filter((t) => typesB.has(t))
  const sameCategory = overlap.length > 0

  if (sameBrand && sameYear) {
    return `Two options from ${mfrA}'s ${a.year} lineup — the ${nameA} and the ${nameB} share DNA but serve different golfers. ${sameCategory ? `Both target similar handicap ranges, so the choice comes down to performance priorities and what you value most off the tee.` : `The ${nameA} is built for ${a.playerType.join('/')} handicap players while the ${nameB} targets ${b.playerType.join('/')} handicappers. Here's exactly how they compare across every metric.`} We break down the scores so you can decide which one earns a spot in your bag.`
  }

  if (priceDiff >= 100) {
    return `At $${pricier.msrp} vs $${cheaper.msrp}, there's a $${priceDiff} gap between the ${pricier.name} and the ${cheaper.name}. Is the premium worth it? ${pricier.overallScore > cheaper.overallScore ? `The ${pricier.name} does score higher overall, but the ${cheaper.name} punches above its price.` : `Interestingly, the more affordable ${cheaper.name} actually matches or beats the ${pricier.name} in several key areas.`} Here's the full head-to-head breakdown.`
  }

  if (sameCategory) {
    return `Both the ${nameA} and ${nameB} target similar golfers, but they take different approaches to performance. The ${nameA} from ${mfrA} ${a.year === 2026 ? 'is a 2026 release' : `debuted in ${a.year}`}, while ${mfrB}'s ${nameB} ${b.year === 2026 ? 'is brand new for 2026' : `launched in ${b.year}`}. We put both through our scoring system to see which one delivers more where it counts.`
  }

  return `The ${nameA} and ${nameB} represent two distinct takes on driver design. ${mfrA}'s offering ${a.overallScore >= b.overallScore ? 'holds a scoring edge' : 'falls slightly behind'} with a ${a.overallScore}/10 overall vs ${b.overallScore}/10 for ${mfrB}'s entry. But overall scores don't tell the full story — the real differences show up in the category-by-category breakdown below.`
}

/**
 * Get a spec-based contextual fact for a given score field
 */
function getSpecFact(driver, field) {
  const specs = driver.specifications || {}
  switch (field) {
    case 'forgiveness':
      if (specs.moi) return `${driver.name}'s ${specs.moi.toLocaleString()} MOI ${specs.moi >= 9500 ? 'is among the highest available' : specs.moi <= 8500 ? 'reflects its workability-first design' : 'provides solid stability'}.`
      return ''
    case 'distance':
      if (specs.keyTechnologies?.length) return `Key tech like ${specs.keyTechnologies[0]} drives the ${driver.name}'s speed numbers.`
      return ''
    case 'feelAndSound':
      if (specs.headSize) return `The ${driver.name}'s ${specs.headSize}cc head ${specs.headSize <= 445 ? 'delivers a compact, tour-preferred feel' : 'produces a confident, full-bodied sound'}.`
      return ''
    case 'adjustability':
      if (specs.adjustabilityFeatures?.length) return `The ${driver.name} offers ${specs.adjustabilityFeatures[0]} for fine-tuning.`
      return ''
    case 'value':
      return `At $${driver.msrp}, the ${driver.name} ${driver.msrp <= 449 ? 'undercuts most competitors significantly' : driver.msrp >= 650 ? 'sits at the premium end of the market' : 'is priced in line with flagship competitors'}.`
    default:
      return ''
  }
}

/**
 * Generate score category breakdown text
 */
export function generateCategoryBreakdown(a, b, field, label) {
  const scoreA = a.scores[field]
  const scoreB = b.scores[field]
  const diff = Math.abs(scoreA - scoreB)
  const diffStr = diff.toFixed(1)
  const winner = scoreA > scoreB ? a : scoreB > scoreA ? b : null
  const loser = scoreA > scoreB ? b : scoreB > scoreA ? a : null
  const winScore = Math.max(scoreA, scoreB)
  const loseScore = Math.min(scoreA, scoreB)

  // Add a unique spec-based fact for the winner (or first driver if tied)
  const specFact = winner ? getSpecFact(winner, field) : getSpecFact(a, field)
  const factSuffix = specFact ? ` ${specFact}` : ''

  if (!winner) {
    return `Both the ${a.name} and ${b.name} score ${scoreA}/10 for ${label.toLowerCase()} — a dead heat. Neither has a meaningful edge here, so this category won't be the deciding factor.${factSuffix}`
  }

  if (diff <= 0.3) {
    return `The ${winner.name} edges the ${loser.name} ${winScore} to ${loseScore} in ${label.toLowerCase()}, but the ${diffStr}-point gap is virtually identical in practice. You won't feel a real-world difference between these two here.${factSuffix}`
  }

  if (diff <= 0.5) {
    return `A negligible difference in ${label.toLowerCase()}: the ${winner.name} scores ${winScore}/10 vs ${loseScore}/10 for the ${loser.name}. The ${diffStr}-point gap is slim enough that other factors should guide your decision.${factSuffix}`
  }

  if (diff <= 1.0) {
    return `The ${winner.name} holds a modest edge in ${label.toLowerCase()} at ${winScore}/10 vs the ${loser.name}'s ${loseScore}/10. A ${diffStr}-point advantage that's slight but could matter if ${label.toLowerCase()} ranks high on your priority list.${factSuffix}`
  }

  if (diff <= 2.0) {
    return `A clear advantage for the ${winner.name} in ${label.toLowerCase()}: ${winScore}/10 vs ${loseScore}/10 for the ${loser.name}. The ${diffStr}-point gap represents a meaningful difference you'll likely notice on the course.${factSuffix}`
  }

  return `A major gap in ${label.toLowerCase()} separates these two. The ${winner.name} dominates at ${winScore}/10 while the ${loser.name} manages just ${loseScore}/10 — a ${diffStr}-point chasm. If ${label.toLowerCase()} matters to your game, this is a deciding factor.${factSuffix}`
}

/**
 * Generate FAQ data for structured data
 */
export function generateFAQData(a, b) {
  const winner = a.overallScore >= b.overallScore ? a : b
  const loser = a.overallScore >= b.overallScore ? b : a
  const fields = ['forgiveness', 'distance', 'feelAndSound', 'adjustability', 'value']
  const labels = { forgiveness: 'forgiveness', distance: 'distance', feelAndSound: 'feel and sound', adjustability: 'adjustability', value: 'value' }

  const winnerCategories = fields.filter((f) => winner.scores[f] > loser.scores[f]).map((f) => labels[f])
  const loserCategories = fields.filter((f) => loser.scores[f] > winner.scores[f]).map((f) => labels[f])

  const forgivenessWinner = a.scores.forgiveness >= b.scores.forgiveness ? a : b
  const forgivenessLoser = a.scores.forgiveness >= b.scores.forgiveness ? b : a

  const valueWinner = a.scores.value >= b.scores.value ? a : b
  const valueLoser = a.scores.value >= b.scores.value ? b : a

  return [
    {
      question: `Which is better: ${a.name} or ${b.name}?`,
      answer: `The ${winner.name} scores higher overall at ${winner.overallScore}/10 vs ${loser.overallScore}/10.${winnerCategories.length > 0 ? ` It wins on ${winnerCategories.join(', ')}.` : ''}${loserCategories.length > 0 ? ` The ${loser.name} is better for ${loserCategories.join(', ')}.` : ''} The best choice depends on your priorities and handicap level.`,
    },
    {
      question: `Is the ${a.name} more forgiving than the ${b.name}?`,
      answer: a.scores.forgiveness === b.scores.forgiveness
        ? `They're evenly matched on forgiveness, both scoring ${a.scores.forgiveness}/10. Neither has a meaningful edge for off-center hits.`
        : `The ${forgivenessWinner.name} is more forgiving, scoring ${forgivenessWinner.scores.forgiveness}/10 compared to ${forgivenessLoser.scores.forgiveness}/10 for the ${forgivenessLoser.name}. ${forgivenessWinner.scores.forgiveness >= 9 ? 'It offers excellent stability on mishits.' : 'It offers better stability on mishits, though the gap may narrow for center-face strikes.'}`,
    },
    {
      question: `Which is better value: ${a.name} or ${b.name}?`,
      answer: a.scores.value === b.scores.value
        ? `At $${a.msrp} and $${b.msrp} respectively, both score ${a.scores.value}/10 for value. Neither offers a clear pricing advantage.`
        : `The ${valueWinner.name} ($${valueWinner.msrp}) scores ${valueWinner.scores.value}/10 for value vs ${valueLoser.scores.value}/10 for the ${valueLoser.name} ($${valueLoser.msrp}).${valueWinner.msrp < valueLoser.msrp ? ' It costs less and delivers more bang for the buck.' : ' Despite the price, it delivers strong performance per dollar.'}`,
    },
  ]
}

/**
 * Generate "which should you buy" recommendation
 */
export function generateRecommendation(a, b) {
  const sections = []

  // Check who wins on forgiveness
  const forgivenessWinner = a.scores.forgiveness > b.scores.forgiveness ? a : b.scores.forgiveness > a.scores.forgiveness ? b : null
  if (forgivenessWinner) {
    const other = forgivenessWinner === a ? b : a
    sections.push({
      label: 'If you want maximum forgiveness',
      text: `Go with the ${forgivenessWinner.name}. Its ${forgivenessWinner.scores.forgiveness}/10 forgiveness score means more consistent results on off-center strikes compared to the ${other.name}'s ${other.scores.forgiveness}/10.`,
    })
  }

  // Check who wins on distance
  const distanceWinner = a.scores.distance > b.scores.distance ? a : b.scores.distance > a.scores.distance ? b : null
  if (distanceWinner) {
    const other = distanceWinner === a ? b : a
    sections.push({
      label: 'If you want maximum distance',
      text: `The ${distanceWinner.name} has the edge at ${distanceWinner.scores.distance}/10 vs ${other.scores.distance}/10. Its design is optimized for ball speed and carry distance.`,
    })
  }

  // Check who wins on value
  const valueWinner = a.scores.value > b.scores.value ? a : b.scores.value > a.scores.value ? b : null
  if (valueWinner) {
    const other = valueWinner === a ? b : a
    sections.push({
      label: 'If you\'re on a budget',
      text: `The ${valueWinner.name} at $${valueWinner.msrp} scores ${valueWinner.scores.value}/10 for value — better than the ${other.name}'s ${other.scores.value}/10 at $${other.msrp}.`,
    })
  }

  return sections
}

/**
 * Get related comparisons for a given driver (8-10 most relevant)
 */
export function getRelatedComparisons(driverId, allSlugs, allDrivers) {
  const driver = allDrivers.find((d) => d.id === driverId)
  if (!driver) return []

  // Find all slugs that contain this driver
  const relevant = allSlugs.filter((slug) => slug.includes(driverId))

  // Score each by relevance
  const scored = relevant.map((slug) => {
    const parsed = parseComparisonSlug(slug)
    const otherId = parsed.idA === driverId ? parsed.idB : parsed.idA
    const other = allDrivers.find((d) => d.id === otherId)
    if (!other) return { slug, score: 0, other }

    let relevance = 0
    // Same year is most relevant
    if (other.year === driver.year) relevance += 10
    // Same brand (internal lineup comparison)
    if (other.manufacturer === driver.manufacturer) relevance += 8
    // Overlapping player type
    const overlap = driver.playerType.filter((t) => other.playerType.includes(t))
    relevance += overlap.length * 3
    // Similar price (within $100)
    if (Math.abs(other.msrp - driver.msrp) <= 100) relevance += 4
    // Previous gen vs current (different year, same brand)
    if (other.manufacturer === driver.manufacturer && other.year !== driver.year) relevance += 6

    return { slug, score: relevance, other }
  })

  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, 10).map((s) => ({
    slug: s.slug,
    label: `${driver.name} vs ${s.other.name}`,
    driver: s.other,
  }))
}
