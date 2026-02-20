import { useParams, Navigate, Link } from 'react-router-dom'
import { CATEGORIES } from '../../data/categoryConfig'
import { getBestOfBySlug, getTopCompareLinks } from '../../data/shared/best-of-config'
import { getScoreColor } from '../../data/shared/scoring'
import { getMfrName } from '../../data/shared/comparisons-util'
import SEOHead from '../../components/SEOHead/SEOHead'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import './BestOfPage.css'

const SITE_URL = 'https://clubleaderboard.com'

export default function BestOfPage() {
  const { bestOfSlug } = useParams()
  const config = getBestOfBySlug(bestOfSlug)

  if (!config) return <Navigate to="/drivers" replace />

  const allDrivers = CATEGORIES.drivers?.data || []
  const filteredDrivers = config.filter(allDrivers)
  const compareLinks = getTopCompareLinks(filteredDrivers)

  return (
    <div className="best-of-page">
      <SEOHead
        title={config.seoTitle}
        description={config.metaDescription}
        canonical={`${SITE_URL}/best/${config.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: config.title,
          description: config.metaDescription,
          numberOfItems: filteredDrivers.length,
          itemListElement: filteredDrivers.map((d, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Product',
              name: d.name,
              url: `${SITE_URL}/drivers/${d.id}`,
            },
          })),
        }}
      />

      <div className="best-of-page__header">
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Drivers', to: '/drivers' },
              { label: config.title },
            ]}
          />
          <h1 className="best-of-page__title">{config.title}</h1>
        </div>
      </div>

      <div className="container">
        {/* Intro */}
        <div className="best-of-page__intro">
          <p>{config.intro}</p>
        </div>

        {/* Ranked list */}
        <div className="best-of-page__list">
          {filteredDrivers.map((driver, i) => {
            const scoreColor = getScoreColor(driver.overallScore)
            const highlightScore = driver.scores[config.sortField]
            const highlightColor = getScoreColor(highlightScore)
            return (
              <Link
                key={driver.id}
                to={`/drivers/${driver.id}`}
                className="best-of-page__card"
              >
                <span className="best-of-page__rank">#{i + 1}</span>
                <div className="best-of-page__card-img-wrap">
                  <img src={driver.imageUrl} alt={driver.name} className="best-of-page__card-img" />
                </div>
                <div className="best-of-page__card-info">
                  <p className="best-of-page__card-mfr">{getMfrName(driver)}</p>
                  <h2 className="best-of-page__card-name">{driver.name}</h2>
                  <p className="best-of-page__card-price">${driver.msrp} &middot; {driver.year}</p>
                </div>
                <div className="best-of-page__card-scores">
                  <div className="best-of-page__card-highlight" style={{ backgroundColor: highlightColor }}>
                    <span className="best-of-page__card-highlight-num">{highlightScore}</span>
                    <span className="best-of-page__card-highlight-label">{config.sortLabel}</span>
                  </div>
                  <div className="best-of-page__card-overall">
                    <span className="best-of-page__card-overall-num" style={{ color: scoreColor }}>
                      {driver.overallScore}
                    </span>
                    <span className="best-of-page__card-overall-label">Overall</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Compare top picks */}
        {compareLinks.length > 0 && (
          <section className="best-of-page__compare-section">
            <h2 className="best-of-page__compare-title">Compare Top Picks</h2>
            <div className="best-of-page__compare-links">
              {compareLinks.map((cl) => (
                <Link
                  key={cl.slug}
                  to={`/compare/${cl.slug}`}
                  className="best-of-page__compare-link"
                >
                  {cl.label} &rarr;
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
