import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { CATEGORY_LIST } from '../../data/categoryConfig'
import './Hero.css'

const TABS = ['Find a club', 'Compare models', 'Browse rankings']

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [compareCategory, setCompareCategory] = useState('')
  const [clubA, setClubA] = useState('')
  const [clubB, setClubB] = useState('')
  const [rankingCategory, setRankingCategory] = useState('')
  const navigate = useNavigate()

  const compareClubs = compareCategory
    ? CATEGORY_LIST.find((c) => c.slug === compareCategory)?.data.sort((a, b) => a.name.localeCompare(b.name)) || []
    : []

  const handleSearch = (e) => {
    e.preventDefault()
    if (activeTab === 0) {
      if (searchValue.trim()) {
        navigate(`/search?q=${encodeURIComponent(searchValue.trim())}`)
      }
    } else if (activeTab === 1) {
      if (clubA && clubB && clubA !== clubB) {
        navigate(`/compare?category=${compareCategory}&a=${clubA}&b=${clubB}`)
      }
    } else {
      if (rankingCategory) {
        navigate(`/${rankingCategory}`)
      }
    }
  }

  function handleCompareCategoryChange(slug) {
    setCompareCategory(slug)
    setClubA('')
    setClubB('')
  }

  return (
    <>
      <section className="hero">
        <div className="hero__promotions">
          <div className="container">
            <h1 className="hero__title">
              Every Golf Club. Ranked. Compared.
            </h1>

            <div className="hero__card">
              <div className="hero__tabs">
                {TABS.map((tab, i) => (
                  <button
                    key={tab}
                    className={`hero__tab ${activeTab === i ? 'hero__tab--active' : ''}`}
                    onClick={() => setActiveTab(i)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="hero__tab-content">
                <form className="hero__search-form" onSubmit={handleSearch}>
                  {activeTab === 0 && (
                    <div className="hero__input-wrap">
                      <input
                        className="hero__input"
                        type="text"
                        placeholder="Search by brand or model..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                      />
                      <button className="hero__search-btn" type="submit" aria-label="Search">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.35-4.35" />
                        </svg>
                      </button>
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="hero__compare-wrap">
                      <div className="hero__input-wrap hero__input-wrap--category">
                        <select
                          className="hero__select"
                          value={compareCategory}
                          onChange={(e) => handleCompareCategoryChange(e.target.value)}
                        >
                          <option value="">Category...</option>
                          {CATEGORY_LIST.map((cat) => (
                            <option key={cat.slug} value={cat.slug}>{cat.label}</option>
                          ))}
                        </select>
                      </div>
                      <div className="hero__input-wrap">
                        <select
                          className="hero__select"
                          value={clubA}
                          onChange={(e) => setClubA(e.target.value)}
                          disabled={!compareCategory}
                        >
                          <option value="">Club A</option>
                          {compareClubs.map((c) => (
                            <option key={c.id} value={c.id} disabled={c.id === clubB}>{c.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="hero__input-wrap">
                        <select
                          className="hero__select"
                          value={clubB}
                          onChange={(e) => setClubB(e.target.value)}
                          disabled={!compareCategory}
                        >
                          <option value="">Club B</option>
                          {compareClubs.map((c) => (
                            <option key={c.id} value={c.id} disabled={c.id === clubA}>{c.name}</option>
                          ))}
                        </select>
                      </div>
                      <button
                        className="hero__search-btn hero__compare-btn"
                        type="submit"
                        aria-label="Compare"
                        disabled={!clubA || !clubB || clubA === clubB}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="hero__input-wrap">
                      <select
                        className="hero__select"
                        value={rankingCategory}
                        onChange={(e) => setRankingCategory(e.target.value)}
                      >
                        <option value="">Select a category...</option>
                        {CATEGORY_LIST.map((cat) => (
                          <option key={cat.slug} value={cat.slug}>{cat.label}</option>
                        ))}
                      </select>
                      <button className="hero__search-btn" type="submit" aria-label="View rankings">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  )}
                </form>

                <div className="hero__helper">
                  <span>or browse our</span>
                  <Link to="/drivers" className="hero__helper-btn">
                    2026 Driver Rankings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Grey spacer behind the overhanging card */}
      <div className="hero__spacer" />
    </>
  )
}
