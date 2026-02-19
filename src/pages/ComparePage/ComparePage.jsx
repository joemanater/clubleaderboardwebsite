import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { CATEGORY_LIST, getCategoryBySlug } from '../../data/categoryConfig'
import { manufacturers } from '../../data/shared/manufacturers'
import { getScoreColor, getScoreLabel } from '../../data/shared/scoring'
import usePageTitle from '../../hooks/usePageTitle'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import './ComparePage.css'

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
    if (typeof value[0] === 'object')
      return value.map((v) => v.name || v.description || JSON.stringify(v)).join(', ')
    return value.join(', ')
  }
  if (typeof value === 'object') {
    return Object.entries(value)
      .map(([k, v]) => `${k}: ${v}`)
      .join(', ')
  }
  return String(value)
}

function formatSpecKey(key) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (s) => s.toUpperCase())
    .replace(/([a-z])(\d)/g, '$1 $2')
}

export default function ComparePage() {
  usePageTitle('Compare Golf Clubs Side by Side')
  const [searchParams, setSearchParams] = useSearchParams()

  const initialCat = searchParams.get('category') || ''
  const initialA = searchParams.get('a') || ''
  const initialB = searchParams.get('b') || ''

  const [catSlug, setCatSlug] = useState(initialCat)
  const [clubAId, setClubAId] = useState(initialA)
  const [clubBId, setClubBId] = useState(initialB)

  const category = getCategoryBySlug(catSlug)
  const clubs = category ? [...category.data].sort((a, b) => a.name.localeCompare(b.name)) : []
  const clubA = category ? category.data.find((c) => c.id === clubAId) : null
  const clubB = category ? category.data.find((c) => c.id === clubBId) : null
  const ready = clubA && clubB && clubA.id !== clubB.id

  // All unique spec keys across both clubs
  const specKeys = useMemo(() => {
    if (!clubA || !clubB) return []
    const keys = new Set([
      ...Object.keys(clubA.specifications || {}),
      ...Object.keys(clubB.specifications || {}),
    ])
    return Array.from(keys)
  }, [clubA, clubB])

  function handleCategoryChange(slug) {
    setCatSlug(slug)
    setClubAId('')
    setClubBId('')
  }

  function updateUrl(cat, a, b) {
    const params = {}
    if (cat) params.category = cat
    if (a) params.a = a
    if (b) params.b = b
    setSearchParams(params, { replace: true })
  }

  function handleCompare() {
    updateUrl(catSlug, clubAId, clubBId)
  }

  function getMfrName(club) {
    const mfr = manufacturers[club.manufacturer]
    return mfr ? mfr.name : club.manufacturer
  }

  return (
    <div className="compare-page">
      <div className="compare-page__header">
        <div className="container">
          <Breadcrumb items={[{ label: 'Compare' }]} />
          <h1 className="compare-page__title">Compare Clubs</h1>
          <p className="compare-page__subtitle">
            Pick two clubs from the same category for a head-to-head breakdown
          </p>
        </div>
      </div>

      <div className="container">
        {/* Selector */}
        <div className="compare-page__selectors">
          <div className="compare-page__selector-row">
            <label className="compare-page__label">Category</label>
            <select
              className="compare-page__select"
              value={catSlug}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="">Select a category...</option>
              {CATEGORY_LIST.map((cat) => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.label} ({cat.data.length})
                </option>
              ))}
            </select>
          </div>

          {category && (
            <>
              <div className="compare-page__selector-row">
                <label className="compare-page__label">Club A</label>
                <select
                  className="compare-page__select"
                  value={clubAId}
                  onChange={(e) => setClubAId(e.target.value)}
                >
                  <option value="">Select a club...</option>
                  {clubs.map((c) => (
                    <option key={c.id} value={c.id} disabled={c.id === clubBId}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="compare-page__selector-row">
                <label className="compare-page__label">Club B</label>
                <select
                  className="compare-page__select"
                  value={clubBId}
                  onChange={(e) => setClubBId(e.target.value)}
                >
                  <option value="">Select a club...</option>
                  {clubs.map((c) => (
                    <option key={c.id} value={c.id} disabled={c.id === clubAId}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="compare-page__btn"
                disabled={!ready}
                onClick={handleCompare}
              >
                Compare
              </button>
            </>
          )}
        </div>

        {/* Comparison */}
        {ready && (
          <div className="compare-page__result">
            {/* Hero cards */}
            <div className="compare-page__heroes">
              {[clubA, clubB].map((club) => {
                const color = getScoreColor(club.overallScore)
                return (
                  <div key={club.id} className="compare-page__hero-card">
                    <div className="compare-page__hero-img-wrap">
                      <img src={club.imageUrl} alt={club.name} className="compare-page__hero-img" />
                    </div>
                    <p className="compare-page__hero-mfr">{getMfrName(club)}</p>
                    <h2 className="compare-page__hero-name">
                      <Link to={`/${catSlug}/${club.id}`}>{club.name}</Link>
                    </h2>
                    <div className="compare-page__hero-badge" style={{ backgroundColor: color }}>
                      <span className="compare-page__hero-score">{club.overallScore}</span>
                      <span className="compare-page__hero-label">{getScoreLabel(club.overallScore)}</span>
                    </div>
                    <p className="compare-page__hero-price">${club.msrp}</p>
                    <div className="compare-page__hero-tags">
                      {club.playerType.map((t) => (
                        <span key={t} className="compare-page__hero-tag">{PLAYER_LABELS[t] || t}</span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Score comparison */}
            <section className="compare-page__section">
              <h3 className="compare-page__section-title">Performance Scores</h3>
              <div className="compare-page__scores">
                {category.scoreFields.map((field) => {
                  const a = clubA.scores[field] ?? 0
                  const b = clubB.scores[field] ?? 0
                  const aColor = getScoreColor(a)
                  const bColor = getScoreColor(b)
                  const winner = a > b ? 'a' : b > a ? 'b' : null
                  return (
                    <div key={field} className="compare-page__score-row">
                      <div className={`compare-page__score-val compare-page__score-val--left ${winner === 'a' ? 'compare-page__score-val--winner' : ''}`}>
                        <span className="compare-page__score-num" style={{ color: aColor }}>{a}</span>
                        <div className="compare-page__bar-track compare-page__bar-track--left">
                          <div className="compare-page__bar-fill" style={{ width: `${(a / 10) * 100}%`, backgroundColor: aColor }} />
                        </div>
                      </div>
                      <span className="compare-page__score-label">{category.scoreLabels[field]}</span>
                      <div className={`compare-page__score-val compare-page__score-val--right ${winner === 'b' ? 'compare-page__score-val--winner' : ''}`}>
                        <span className="compare-page__score-num" style={{ color: bColor }}>{b}</span>
                        <div className="compare-page__bar-track compare-page__bar-track--right">
                          <div className="compare-page__bar-fill" style={{ width: `${(b / 10) * 100}%`, backgroundColor: bColor }} />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Overall verdict */}
            <section className="compare-page__section">
              <h3 className="compare-page__section-title">Overall Verdict</h3>
              <div className="compare-page__verdict">
                <div className={`compare-page__verdict-side ${clubA.overallScore >= clubB.overallScore ? 'compare-page__verdict-side--winner' : ''}`}>
                  <span className="compare-page__verdict-name">{clubA.name}</span>
                  <span className="compare-page__verdict-score" style={{ color: getScoreColor(clubA.overallScore) }}>
                    {clubA.overallScore}
                  </span>
                </div>
                <span className="compare-page__verdict-vs">vs</span>
                <div className={`compare-page__verdict-side ${clubB.overallScore >= clubA.overallScore ? 'compare-page__verdict-side--winner' : ''}`}>
                  <span className="compare-page__verdict-name">{clubB.name}</span>
                  <span className="compare-page__verdict-score" style={{ color: getScoreColor(clubB.overallScore) }}>
                    {clubB.overallScore}
                  </span>
                </div>
              </div>
            </section>

            {/* Pros & Cons side by side */}
            <section className="compare-page__section">
              <h3 className="compare-page__section-title">Pros & Cons</h3>
              <div className="compare-page__proscons">
                {[clubA, clubB].map((club) => (
                  <div key={club.id} className="compare-page__proscons-col">
                    <h4 className="compare-page__proscons-name">{club.name}</h4>
                    <div className="compare-page__proscons-group">
                      <h5 className="compare-page__proscons-heading compare-page__proscons-heading--pro">Pros</h5>
                      <ul className="compare-page__proscons-list">
                        {club.pros.map((item, i) => (
                          <li key={i} className="compare-page__proscons-item compare-page__proscons-item--pro">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="compare-page__proscons-group">
                      <h5 className="compare-page__proscons-heading compare-page__proscons-heading--con">Cons</h5>
                      <ul className="compare-page__proscons-list">
                        {club.cons.map((item, i) => (
                          <li key={i} className="compare-page__proscons-item compare-page__proscons-item--con">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Specs comparison table */}
            {specKeys.length > 0 && (
              <section className="compare-page__section">
                <h3 className="compare-page__section-title">Specifications</h3>
                <div className="compare-page__specs-wrap">
                  <table className="compare-page__specs-table">
                    <thead>
                      <tr>
                        <th className="compare-page__specs-th">Spec</th>
                        <th className="compare-page__specs-th">{clubA.name}</th>
                        <th className="compare-page__specs-th">{clubB.name}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {specKeys.map((key, i) => {
                        const valA = clubA.specifications?.[key]
                        const valB = clubB.specifications?.[key]
                        return (
                          <tr key={key} className={i % 2 === 0 ? 'compare-page__specs-row--even' : ''}>
                            <td className="compare-page__specs-key">{formatSpecKey(key)}</td>
                            <td className="compare-page__specs-val">{formatSpecValue(valA)}</td>
                            <td className="compare-page__specs-val">{formatSpecValue(valB)}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
