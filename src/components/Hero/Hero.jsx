import { useState } from 'react'
import './Hero.css'

const TABS = ['Find a club', 'Compare models', 'Browse rankings']

const CLUB_OPTIONS = [
  { value: '', label: 'Select a club...' },
  { value: 'callaway-paradym', label: 'Callaway Paradym Ai Smoke' },
  { value: 'taylormade-qi10', label: 'TaylorMade Qi10' },
  { value: 'titleist-gt2', label: 'Titleist GT2' },
  { value: 'ping-g430', label: 'Ping G430 Max' },
  { value: 'cobra-darkspeed', label: 'Cobra Darkspeed' },
  { value: 'mizuno-st-max', label: 'Mizuno ST-Max 230' },
]

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [clubA, setClubA] = useState('')
  const [clubB, setClubB] = useState('')
  const [rankingCategory, setRankingCategory] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (activeTab === 0) {
      alert(`Searching for: ${searchValue || 'all clubs'}`)
    } else if (activeTab === 1) {
      alert(`Comparing: ${clubA || 'Club A'} vs ${clubB || 'Club B'}`)
    } else {
      alert(`Viewing rankings for: ${rankingCategory || 'all categories'}`)
    }
  }

  return (
    <>
      <section className="hero">
        <div className="hero__promotions">
          <div className="container">
            <h1 className="hero__title">
              Every Club. Ranked. Compared.
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
                      <div className="hero__input-wrap">
                        <select
                          className="hero__select"
                          value={clubA}
                          onChange={(e) => setClubA(e.target.value)}
                        >
                          <option value="">Club A</option>
                          {CLUB_OPTIONS.filter(o => o.value).map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                      <div className="hero__input-wrap">
                        <select
                          className="hero__select"
                          value={clubB}
                          onChange={(e) => setClubB(e.target.value)}
                        >
                          <option value="">Club B</option>
                          {CLUB_OPTIONS.filter(o => o.value).map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                      <button className="hero__search-btn hero__compare-btn" type="submit" aria-label="Compare">
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
                        <option value="drivers">Drivers</option>
                        <option value="irons">Irons</option>
                        <option value="wedges">Wedges</option>
                        <option value="putters">Putters</option>
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
                  <a href="#" className="hero__helper-btn">
                    2025 Driver Rankings
                  </a>
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
