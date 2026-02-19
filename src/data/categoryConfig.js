import { drivers } from './drivers/drivers'
import { irons } from './irons/irons'
import { wedges } from './wedges/wedges'
import { putters } from './putters/putters'
import { hybrids } from './hybrids/hybrids'
import { fairwayWoods } from './fairway-woods/fairway-woods'

export const CATEGORIES = {
  drivers: {
    slug: 'drivers',
    label: 'Drivers',
    icon: '\u{1F3CC}\uFE0F',
    description: 'Find the longest and most forgiving drivers for your game',
    data: drivers,
    scoreFields: ['forgiveness', 'distance', 'feelAndSound', 'adjustability', 'value'],
    scoreLabels: {
      forgiveness: 'Forgiveness',
      distance: 'Distance',
      feelAndSound: 'Feel & Sound',
      adjustability: 'Adjustability',
      value: 'Value',
    },
  },
  irons: {
    slug: 'irons',
    label: 'Irons',
    icon: '\u{1F3AF}',
    description: 'Game-improvement to players irons ranked and compared',
    data: irons,
    scoreFields: ['forgiveness', 'distance', 'feelAndFeedback', 'workability', 'aesthetics', 'value'],
    scoreLabels: {
      forgiveness: 'Forgiveness',
      distance: 'Distance',
      feelAndFeedback: 'Feel & Feedback',
      workability: 'Workability',
      aesthetics: 'Aesthetics',
      value: 'Value',
    },
  },
  wedges: {
    slug: 'wedges',
    label: 'Wedges',
    icon: '\u26F3',
    description: 'Spin, control, and versatility around the greens',
    data: wedges,
    scoreFields: ['spinAndControl', 'versatility', 'feelAndFeedback', 'turfInteraction', 'value'],
    scoreLabels: {
      spinAndControl: 'Spin & Control',
      versatility: 'Versatility',
      feelAndFeedback: 'Feel & Feedback',
      turfInteraction: 'Turf Interaction',
      value: 'Value',
    },
  },
  putters: {
    slug: 'putters',
    label: 'Putters',
    icon: '\u{1F573}\uFE0F',
    description: 'Blades, mallets, and everything in between',
    data: putters,
    scoreFields: ['forgiveness', 'feelAndSound', 'alignment', 'rollQuality', 'value'],
    scoreLabels: {
      forgiveness: 'Forgiveness',
      feelAndSound: 'Feel & Sound',
      alignment: 'Alignment',
      rollQuality: 'Roll Quality',
      value: 'Value',
    },
  },
  hybrids: {
    slug: 'hybrids',
    label: 'Hybrids',
    icon: '\u{1F500}',
    description: 'The most versatile clubs in the bag, ranked',
    data: hybrids,
    scoreFields: ['forgiveness', 'distance', 'versatility', 'turfInteraction', 'value'],
    scoreLabels: {
      forgiveness: 'Forgiveness',
      distance: 'Distance',
      versatility: 'Versatility',
      turfInteraction: 'Turf Interaction',
      value: 'Value',
    },
  },
  'fairway-woods': {
    slug: 'fairway-woods',
    label: 'Fairway Woods',
    icon: '\u{1F332}',
    description: 'Off the tee or off the deck — the best fairway woods ranked',
    data: fairwayWoods,
    scoreFields: ['forgiveness', 'distance', 'versatility', 'feelAndSound', 'value'],
    scoreLabels: {
      forgiveness: 'Forgiveness',
      distance: 'Distance',
      versatility: 'Versatility',
      feelAndSound: 'Feel & Sound',
      value: 'Value',
    },
  },
}

export const CATEGORY_LIST = Object.values(CATEGORIES)

export const TAGS = {
  'most-forgiving': {
    slug: 'most-forgiving',
    label: 'Most Forgiving',
    icon: '\u{1F7E2}',
    description: 'The most forgiving clubs across every category',
    getClubs() {
      return Object.values(CATEGORIES)
        .filter((cat) => cat.scoreFields.includes('forgiveness'))
        .map((cat) => ({
          category: cat,
          clubs: [...cat.data]
            .sort((a, b) => b.scores.forgiveness - a.scores.forgiveness)
            .slice(0, 3),
        }))
    },
  },
  'best-value': {
    slug: 'best-value',
    label: 'Best Value',
    icon: '\u{1F4B0}',
    description: 'Top-performing clubs that deliver the most bang for your buck',
    getClubs() {
      return Object.values(CATEGORIES).map((cat) => ({
        category: cat,
        clubs: [...cat.data]
          .sort((a, b) => b.scores.value - a.scores.value)
          .slice(0, 3),
      }))
    },
  },
  'beginner-friendly': {
    slug: 'beginner-friendly',
    label: 'Beginner Friendly',
    icon: '\u{1F44B}',
    description: 'Easy-to-hit clubs perfect for players just getting started',
    getClubs() {
      return Object.values(CATEGORIES)
        .map((cat) => {
          const filtered = cat.data.filter((club) =>
            club.playerType.some((t) => t === 'high' || t === 'beginner')
          )
          return {
            category: cat,
            clubs: [...filtered]
              .sort((a, b) => b.overallScore - a.overallScore)
              .slice(0, 3),
          }
        })
        .filter((group) => group.clubs.length > 0)
    },
  },
}

export const TAG_LIST = Object.values(TAGS)

export function getTagBySlug(slug) {
  return TAGS[slug] || null
}

export function getCategoryBySlug(slug) {
  return CATEGORIES[slug] || null
}

export function getProductById(slug, productId) {
  const category = CATEGORIES[slug]
  if (!category) return null
  const product = category.data.find((item) => item.id === productId)
  if (!product) return null
  return { product, category }
}
