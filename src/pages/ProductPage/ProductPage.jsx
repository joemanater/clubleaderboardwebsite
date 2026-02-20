import { useParams, Navigate, Link } from 'react-router-dom'
import { getProductById, CATEGORIES } from '../../data/categoryConfig'
import { getScoreColor, getScoreLabel } from '../../data/shared/scoring'
import { manufacturers } from '../../data/shared/manufacturers'
import { generateProductSEO } from '../../data/shared/seo'
import { getComparisonSlug, getRelatedComparisons, getAllComparisonSlugs } from '../../data/shared/comparisons-util'
import SEOHead from '../../components/SEOHead/SEOHead'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import ScoreBar from '../../components/ScoreBar/ScoreBar'
import './ProductPage.css'

const PLAYER_LABELS = {
  low: 'Low HCP',
  mid: 'Mid HCP',
  high: 'High HCP',
  beginner: 'Beginner',
}

function formatSpecValue(value) {
  if (value === null || value === undefined) return 'N/A'
  if (typeof value === 'boolean') return value ? 'Yes' : 'No'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'N/A'
    if (typeof value[0] === 'object') return value.map((v) => v.name || v.description || JSON.stringify(v)).join(', ')
    return value.join(', ')
  }
  if (typeof value === 'object') {
    return Object.entries(value).map(([k, v]) => `${k}: ${v}`).join(', ')
  }
  return String(value)
}

function formatSpecKey(key) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (s) => s.toUpperCase())
    .replace(/([a-z])(\d)/g, '$1 $2')
}

export default function ProductPage() {
  const { categorySlug, productId } = useParams()
  const result = getProductById(categorySlug, productId)

  if (!result) return <Navigate to="/" replace />

  const { product, category } = result
  const seo = generateProductSEO(product, categorySlug)
  const mfr = manufacturers[product.manufacturer]
  const mfrName = mfr ? mfr.name : product.manufacturer
  const scoreColor = getScoreColor(product.overallScore)
  const scoreLabel = getScoreLabel(product.overallScore)

  return (
    <div className="product-page">
      <SEOHead {...seo} />
      <div className="product-page__header-bg">
        <div className="container">
          <Breadcrumb
            items={[
              { label: category.label, to: `/${category.slug}` },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      <div className="container">
        {/* Hero section */}
        <div className="product-page__hero">
          <div className="product-page__image-col">
            <div className="product-page__image-wrap">
              <img src={product.imageUrl} alt={product.name} className="product-page__image" />
            </div>
          </div>
          <div className="product-page__info-col">
            <p className="product-page__mfr">{mfrName}</p>
            <h1 className="product-page__name">{product.name}</h1>
            <div className="product-page__score-badge" style={{ backgroundColor: scoreColor }}>
              <span className="product-page__score-num">{product.overallScore}</span>
              <span className="product-page__score-label">{scoreLabel}</span>
            </div>
            <p className="product-page__price">${product.msrp}</p>
            <div className="product-page__tags">
              {product.playerType.map((type) => (
                <span key={type} className="product-page__tag">{PLAYER_LABELS[type] || type}</span>
              ))}
            </div>
            <p className="product-page__desc">{product.description}</p>
          </div>
        </div>

        {/* Scores */}
        <section className="product-page__section">
          <h2 className="product-page__section-title">Performance Scores</h2>
          <div className="product-page__scores-grid">
            {category.scoreFields.map((field) => (
              <ScoreBar
                key={field}
                label={category.scoreLabels[field]}
                score={product.scores[field]}
              />
            ))}
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="product-page__section">
          <h2 className="product-page__section-title">Pros & Cons</h2>
          <div className="product-page__proscons">
            <div className="product-page__pros">
              <h3 className="product-page__proscons-heading product-page__proscons-heading--pro">Pros</h3>
              <ul className="product-page__proscons-list">
                {product.pros.map((item, i) => (
                  <li key={i} className="product-page__proscons-item product-page__proscons-item--pro">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="product-page__cons">
              <h3 className="product-page__proscons-heading product-page__proscons-heading--con">Cons</h3>
              <ul className="product-page__proscons-list">
                {product.cons.map((item, i) => (
                  <li key={i} className="product-page__proscons-item product-page__proscons-item--con">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Specifications */}
        {product.specifications && (
          <section className="product-page__section">
            <h2 className="product-page__section-title">Specifications</h2>
            <table className="product-page__specs-table">
              <tbody>
                {Object.entries(product.specifications).map(([key, value], i) => (
                  <tr key={key} className={i % 2 === 0 ? 'product-page__specs-row--even' : ''}>
                    <td className="product-page__specs-key">{formatSpecKey(key)}</td>
                    <td className="product-page__specs-val">{formatSpecValue(value)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* Compare this driver */}
        {categorySlug === 'drivers' && (() => {
          const allDrivers = CATEGORIES.drivers?.data || []
          const allSlugs = getAllComparisonSlugs()
          const related = getRelatedComparisons(product.id, allSlugs, allDrivers)
          if (related.length === 0) return null
          return (
            <section className="product-page__section">
              <h2 className="product-page__section-title">Compare {product.name}</h2>
              <div className="product-page__compare-links">
                {related.map((r) => (
                  <Link key={r.slug} to={`/compare/${r.slug}`} className="product-page__compare-link">
                    {r.label} &rarr;
                  </Link>
                ))}
              </div>
            </section>
          )
        })()}

        <div className="product-page__back">
          <Link to={`/${category.slug}`} className="product-page__back-btn">
            View all {category.label}
          </Link>
        </div>
      </div>
    </div>
  )
}
