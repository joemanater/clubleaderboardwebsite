import { useParams, Navigate, Link } from 'react-router-dom'
import { getScoreColor } from '../../data/shared/scoring'
import {
  getDriversFromSlug,
  getMfrName,
  getDriverScoreConfig,
  generateIntro,
  generateCategoryBreakdown,
  generateFAQData,
  generateRecommendation,
  getRelatedComparisons,
  getAllComparisonSlugs,
  getAllDrivers,
} from '../../data/shared/comparisons-util'
import SEOHead from '../../components/SEOHead/SEOHead'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import './ComparisonDetailPage.css'

const SITE_URL = 'https://clubleaderboard.com'

export default function ComparisonDetailPage() {
  const { comparisonSlug } = useParams()
  const result = getDriversFromSlug(comparisonSlug)

  if (!result) return <Navigate to="/compare" replace />

  const { driverA, driverB } = result
  const { fields, labels } = getDriverScoreConfig()
  const nameA = driverA.name
  const nameB = driverB.name
  const winner = driverA.overallScore >= driverB.overallScore ? driverA : driverB
  const loser = driverA.overallScore >= driverB.overallScore ? driverB : driverA

  const intro = generateIntro(driverA, driverB)
  const faqData = generateFAQData(driverA, driverB)
  const recommendations = generateRecommendation(driverA, driverB)
  const allSlugs = getAllComparisonSlugs()
  const allDrivers = getAllDrivers()
  const relatedA = getRelatedComparisons(driverA.id, allSlugs, allDrivers).filter(
    (r) => r.slug !== comparisonSlug
  )
  const relatedB = getRelatedComparisons(driverB.id, allSlugs, allDrivers).filter(
    (r) => r.slug !== comparisonSlug && !relatedA.some((ra) => ra.slug === r.slug)
  )
  const related = [...relatedA.slice(0, 3), ...relatedB.slice(0, 3)]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <div className="comp-detail">
      <SEOHead
        title={`${nameA} vs ${nameB} | ClubLeaderboard`}
        description={`Head-to-head comparison: ${nameA} (${driverA.overallScore}/10) vs ${nameB} (${driverB.overallScore}/10). Compare forgiveness, distance, feel, adjustability, and value side by side.`}
        canonical={`${SITE_URL}/compare/${comparisonSlug}`}
        jsonLd={jsonLd}
      />

      <div className="comp-detail__header">
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Compare', to: '/compare' },
              { label: `${nameA} vs ${nameB}` },
            ]}
          />
          <h1 className="comp-detail__title">{nameA} vs {nameB}</h1>
        </div>
      </div>

      <div className="container">
        {/* Intro */}
        <p className="comp-detail__intro">{intro}</p>

        {/* Side-by-side hero cards */}
        <div className="comp-detail__heroes">
          {[driverA, driverB].map((d) => {
            const color = getScoreColor(d.overallScore)
            return (
              <div key={d.id} className="comp-detail__hero-card">
                <div className="comp-detail__hero-img-wrap">
                  <img src={d.imageUrl} alt={d.name} className="comp-detail__hero-img" />
                </div>
                <p className="comp-detail__hero-mfr">{getMfrName(d)}</p>
                <h2 className="comp-detail__hero-name">
                  <Link to={`/drivers/${d.id}`}>{d.name}</Link>
                </h2>
                <div className="comp-detail__hero-badge" style={{ backgroundColor: color }}>
                  <span className="comp-detail__hero-score">{d.overallScore}</span>
                  <span className="comp-detail__hero-label">/10</span>
                </div>
                <p className="comp-detail__hero-price">${d.msrp}</p>
                <p className="comp-detail__hero-year">{d.year}</p>
              </div>
            )
          })}
        </div>

        {/* Overall winner */}
        <div className="comp-detail__winner-callout">
          <strong>{winner.name}</strong> takes the edge at {winner.overallScore}/10 vs {loser.overallScore}/10
        </div>

        {/* Score comparison */}
        <section className="comp-detail__section">
          <h2 className="comp-detail__section-title">Score Comparison</h2>
          <div className="comp-detail__scores">
            {fields.map((field) => {
              const a = driverA.scores[field] ?? 0
              const b = driverB.scores[field] ?? 0
              const aColor = getScoreColor(a)
              const bColor = getScoreColor(b)
              const w = a > b ? 'a' : b > a ? 'b' : null
              return (
                <div key={field} className="comp-detail__score-row">
                  <div className={`comp-detail__score-val comp-detail__score-val--left ${w === 'a' ? 'comp-detail__score-val--winner' : ''}`}>
                    <span className="comp-detail__score-num" style={{ color: aColor }}>{a}</span>
                    <div className="comp-detail__bar-track comp-detail__bar-track--left">
                      <div className="comp-detail__bar-fill" style={{ width: `${(a / 10) * 100}%`, backgroundColor: aColor }} />
                    </div>
                  </div>
                  <span className="comp-detail__score-label">{labels[field]}</span>
                  <div className={`comp-detail__score-val comp-detail__score-val--right ${w === 'b' ? 'comp-detail__score-val--winner' : ''}`}>
                    <span className="comp-detail__score-num" style={{ color: bColor }}>{b}</span>
                    <div className="comp-detail__bar-track comp-detail__bar-track--right">
                      <div className="comp-detail__bar-fill" style={{ width: `${(b / 10) * 100}%`, backgroundColor: bColor }} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Category breakdown */}
        <section className="comp-detail__section">
          <h2 className="comp-detail__section-title">Category-by-Category Breakdown</h2>
          {fields.map((field) => (
            <div key={field} className="comp-detail__breakdown">
              <h3 className="comp-detail__breakdown-title">{labels[field]}</h3>
              <p className="comp-detail__breakdown-text">
                {generateCategoryBreakdown(driverA, driverB, field, labels[field])}
              </p>
            </div>
          ))}
        </section>

        {/* Specs table */}
        <section className="comp-detail__section">
          <h2 className="comp-detail__section-title">Specifications</h2>
          <div className="comp-detail__specs-wrap">
            <table className="comp-detail__specs-table">
              <thead>
                <tr>
                  <th className="comp-detail__specs-th">Spec</th>
                  <th className="comp-detail__specs-th">{nameA}</th>
                  <th className="comp-detail__specs-th">{nameB}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="comp-detail__specs-key">Price</td>
                  <td className="comp-detail__specs-val">${driverA.msrp}</td>
                  <td className="comp-detail__specs-val">${driverB.msrp}</td>
                </tr>
                <tr className="comp-detail__specs-row--even">
                  <td className="comp-detail__specs-key">Year</td>
                  <td className="comp-detail__specs-val">{driverA.year}</td>
                  <td className="comp-detail__specs-val">{driverB.year}</td>
                </tr>
                <tr>
                  <td className="comp-detail__specs-key">Head Size</td>
                  <td className="comp-detail__specs-val">{driverA.specifications.headSize}cc</td>
                  <td className="comp-detail__specs-val">{driverB.specifications.headSize}cc</td>
                </tr>
                <tr className="comp-detail__specs-row--even">
                  <td className="comp-detail__specs-key">Lofts</td>
                  <td className="comp-detail__specs-val">{driverA.specifications.lofts.join('°, ')}°</td>
                  <td className="comp-detail__specs-val">{driverB.specifications.lofts.join('°, ')}°</td>
                </tr>
                <tr>
                  <td className="comp-detail__specs-key">Adjustable</td>
                  <td className="comp-detail__specs-val">{driverA.specifications.adjustable ? 'Yes' : 'No'}</td>
                  <td className="comp-detail__specs-val">{driverB.specifications.adjustable ? 'Yes' : 'No'}</td>
                </tr>
                {(driverA.specifications.moi || driverB.specifications.moi) && (
                  <tr className="comp-detail__specs-row--even">
                    <td className="comp-detail__specs-key">MOI</td>
                    <td className="comp-detail__specs-val">{driverA.specifications.moi || 'N/A'}</td>
                    <td className="comp-detail__specs-val">{driverB.specifications.moi || 'N/A'}</td>
                  </tr>
                )}
                <tr>
                  <td className="comp-detail__specs-key">Key Tech</td>
                  <td className="comp-detail__specs-val">{driverA.specifications.keyTechnologies.slice(0, 3).join(', ')}</td>
                  <td className="comp-detail__specs-val">{driverB.specifications.keyTechnologies.slice(0, 3).join(', ')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Which should you buy */}
        {recommendations.length > 0 && (
          <section className="comp-detail__section">
            <h2 className="comp-detail__section-title">Which Should You Buy?</h2>
            <div className="comp-detail__recs">
              {recommendations.map((rec) => (
                <div key={rec.label} className="comp-detail__rec">
                  <h3 className="comp-detail__rec-label">{rec.label}</h3>
                  <p className="comp-detail__rec-text">{rec.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="comp-detail__section">
          <h2 className="comp-detail__section-title">Frequently Asked Questions</h2>
          <div className="comp-detail__faqs">
            {faqData.map((faq) => (
              <div key={faq.question} className="comp-detail__faq">
                <h3 className="comp-detail__faq-q">{faq.question}</h3>
                <p className="comp-detail__faq-a">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Driver page links */}
        <div className="comp-detail__driver-links">
          <Link to={`/drivers/${driverA.id}`} className="comp-detail__driver-link">
            View full {nameA} review &rarr;
          </Link>
          <Link to={`/drivers/${driverB.id}`} className="comp-detail__driver-link">
            View full {nameB} review &rarr;
          </Link>
        </div>

        {/* Related comparisons */}
        {related.length > 0 && (
          <section className="comp-detail__section">
            <h2 className="comp-detail__section-title">Related Comparisons</h2>
            <div className="comp-detail__related">
              {related.map((r) => {
                const parsed = r.slug.split('-vs-')
                const otherDrivers = getDriversFromSlug(r.slug)
                if (!otherDrivers) return null
                return (
                  <Link
                    key={r.slug}
                    to={`/compare/${r.slug}`}
                    className="comp-detail__related-link"
                  >
                    {otherDrivers.driverA.name} vs {otherDrivers.driverB.name}
                  </Link>
                )
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
