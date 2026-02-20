import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const NAV_LINKS = [
  { label: 'Drivers', to: '/drivers' },
  { label: 'Irons', to: '/irons' },
  { label: 'Wedges', to: '/wedges' },
  { label: 'Putters', to: '/putters' },
  { label: 'Hybrids', to: '/hybrids' },
  { label: 'Fairways', to: '/fairway-woods' },
  { label: 'Rankings', to: '/drivers' },
  { label: 'About', to: '/about' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="nav">
      {/* Top links bar */}
      <div className="nav__top">
        <div className="container nav__top-inner">
          <div className="nav__links">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} to={link.to} className="nav__link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav bar with logo + actions */}
      <div className="nav__main">
        <div className="container nav__main-inner">
          <Link to="/" className="nav__logo">
            <svg className="nav__logo-icon" viewBox="0 0 24 24" width="28" height="28" fill="none">
              <path d="M14 2v10l-1.5-1.5L11 12V2a1 1 0 011-1h1a1 1 0 011 1z" fill="currentColor"/>
              <path d="M12.5 12.5L17 18H8l4.5-5.5z" fill="currentColor"/>
              <circle cx="12.5" cy="19.5" r="1.5" fill="currentColor"/>
              <rect x="12" y="18" width="1" height="4" fill="currentColor"/>
            </svg>
            <span className="nav__logo-text">ClubLeaderboard</span>
          </Link>

          <div className="nav__actions">
            <Link to="/compare" className="nav__action">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v18M3 12l4-7h2l-4 7 4 7H7l-4-7zM21 12l-4-7h-2l4 7-4 7h2l4-7z"/>
              </svg>
              <span>Compare</span>
            </Link>
            <Link to="/drivers" className="nav__action">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6-6 6 6M6 9h12M8 9v8a2 2 0 002 2h4a2 2 0 002-2V9"/>
              </svg>
              <span>Rankings</span>
            </Link>
<button
              className={`nav__action nav__menu-btn ${menuOpen ? 'nav__menu-btn--open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`nav__mobile-menu ${menuOpen ? 'nav__mobile-menu--open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="nav__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
