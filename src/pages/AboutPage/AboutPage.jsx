import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead/SEOHead'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import './AboutPage.css'

const SITE_URL = 'https://clubleaderboard.com'

const STATS = [
  { number: '133+', label: 'Clubs Ranked' },
  { number: '6', label: 'Categories' },
  { number: '30+', label: 'Score Metrics' },
  { number: '0', label: 'Sponsor Deals' },
]

const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Independent Testing',
    description: 'Every score is based on real-world performance data, expert analysis, and player feedback. No manufacturer has a say in our rankings.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Apples-to-Apples Scoring',
    description: 'Our weighted scoring system compares clubs within their category on the metrics that actually matter — forgiveness, distance, feel, value, and more.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Total Transparency',
    description: 'We show you exactly how every club scores across every dimension. No hidden algorithms, no mysterious "editor\'s picks." Just the numbers.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Zero Pay-to-Play',
    description: 'Manufacturers can\'t buy higher rankings. We don\'t accept advertising from the brands we review. Our revenue comes from you trusting us, not them paying us.',
  },
]

export default function AboutPage() {
  return (
    <div className="about-page">
      <SEOHead
        title="About ClubLeaderboard — Independent Golf Club Rankings"
        description="ClubLeaderboard is the trusted destination for independent golf club rankings. Learn how we test, score, and compare every club — no sponsors, no bias, just data."
        canonical={`${SITE_URL}/about`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About ClubLeaderboard',
          description: 'Independent golf club rankings — no sponsors, no bias, just data.',
          url: `${SITE_URL}/about`,
          publisher: { '@type': 'Organization', name: 'ClubLeaderboard' },
        }}
      />
      <div className="about-page__header">
        <div className="container">
          <Breadcrumb items={[{ label: 'About' }]} />
          <h1 className="about-page__title">The Trusted Destination for Golf Clubs</h1>
          <p className="about-page__subtitle">
            We rank every club so you don't have to guess.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="about-page__stats">
        <div className="container">
          <div className="about-page__stats-grid">
            {STATS.map((stat) => (
              <div key={stat.label} className="about-page__stat">
                <span className="about-page__stat-number">{stat.number}</span>
                <span className="about-page__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {/* Intro */}
        <section className="about-page__section">
          <h2 className="about-page__section-title">Why ClubLeaderboard Exists</h2>
          <div className="about-page__prose">
            <p>
              Let's be honest — buying golf clubs is broken. You walk into a pro shop or scroll through an online retailer and you're hit with a wall of marketing jargon. <em>AI-designed faces. Quantum foam microspheres. 4th-generation speed pockets.</em> Every single club claims to be the longest, the most forgiving, the best feeling. And somehow, they're all "tour-proven."
            </p>
            <p>
              So how do you actually know which driver will add yards off the tee? Which irons will keep your mishits on the green? Which putter won't make you want to snap it over your knee on the 17th?
            </p>
            <p>
              <strong>That's exactly why we built ClubLeaderboard.</strong>
            </p>
            <p>
              We're the independent, no-BS ranking system for every golf club that matters. We test, score, and compare clubs across the categories that real golfers care about — not the ones manufacturers want to sell you on. Every club in our database gets a transparent, weighted score based on forgiveness, distance, feel, workability, value, and category-specific metrics.
            </p>
            <p>
              No sponsored rankings. No "editor's choice" awards that go to whoever buys the most ad space. Just honest numbers, laid out side by side, so you can make the decision yourself.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="about-page__section">
          <h2 className="about-page__section-title">What We Believe In</h2>
          <div className="about-page__values-grid">
            {VALUES.map((value) => (
              <div key={value.title} className="about-page__value-card">
                <div className="about-page__value-icon">{value.icon}</div>
                <h3 className="about-page__value-title">{value.title}</h3>
                <p className="about-page__value-desc">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="about-page__section">
          <h2 className="about-page__section-title">How Our Rankings Work</h2>
          <div className="about-page__prose">
            <p>
              Every club goes through the same process. We gather data from launch monitors, expert reviews, player testing panels, and real-world performance metrics. Then we run it through our weighted scoring model — tuned specifically for each category.
            </p>
            <p>
              A driver isn't scored the same way as a putter. A wedge isn't judged the same way as a hybrid. Each category has its own set of performance dimensions with weights that reflect what actually matters for that type of club. A driver cares a lot about forgiveness and distance. A wedge cares about spin control and versatility. A putter cares about feel, alignment, and roll quality.
            </p>
            <p>
              The result? A single overall score out of 10 that you can trust — plus the full breakdown so you can see exactly where a club excels and where it falls short.
            </p>
          </div>
        </section>

        {/* Fun section */}
        <section className="about-page__section">
          <h2 className="about-page__section-title">The Fine Print (the Fun Kind)</h2>
          <div className="about-page__prose">
            <p>
              We believe your money is better spent on greens fees than on a driver you chose because an Instagram ad told you to. We believe a 15-handicapper deserves the same quality buying advice as a scratch golfer. We believe "game improvement" isn't a dirty word — and that blade irons look gorgeous but will humble even the proudest weekend warrior.
            </p>
            <p>
              We also believe golf is supposed to be fun. So while we take the data seriously, we don't take ourselves too seriously. If you find a club you love through our rankings, tell your foursome. If you disagree with a score, tell us. If you three-putt with the top-ranked putter, well... that one's on you.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="about-page__section about-page__cta">
          <h2 className="about-page__cta-title">Ready to Find Your Next Club?</h2>
          <p className="about-page__cta-desc">
            Browse our rankings, compare models head-to-head, or search for a specific club. No account needed. No paywall. Just clarity.
          </p>
          <div className="about-page__cta-buttons">
            <Link to="/drivers" className="about-page__cta-btn about-page__cta-btn--primary">
              Browse Rankings
            </Link>
            <Link to="/compare" className="about-page__cta-btn about-page__cta-btn--secondary">
              Compare Clubs
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
