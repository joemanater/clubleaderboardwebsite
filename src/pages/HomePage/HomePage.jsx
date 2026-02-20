import SEOHead from '../../components/SEOHead/SEOHead'
import Hero from '../../components/Hero/Hero'
import FilterPills from '../../components/FilterPills/FilterPills'
import DealsCarousel from '../../components/DealsCarousel/DealsCarousel'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import { CATEGORY_LIST } from '../../data/categoryConfig'
import './HomePage.css'

const SITE_URL = 'https://clubleaderboard.com'

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="ClubLeaderboard — Independent Golf Club Rankings & Comparisons"
        description="The trusted destination for golf club rankings. Compare drivers, irons, wedges, putters, hybrids, and fairway woods with independent, transparent scores. No sponsors. No bias. Just data."
        canonical={SITE_URL}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'ClubLeaderboard',
          url: SITE_URL,
          description: 'Independent golf club rankings and comparisons.',
          potentialAction: {
            '@type': 'SearchAction',
            target: `${SITE_URL}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        }}
      />
      <Hero />
      <FilterPills />
      <DealsCarousel />
      <section className="browse-categories">
        <div className="container">
          <h2 className="browse-categories__heading">Browse by Category</h2>
          <p className="browse-categories__subheading">
            Explore our independent rankings across every club type
          </p>
          <div className="browse-categories__grid">
            {CATEGORY_LIST.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
