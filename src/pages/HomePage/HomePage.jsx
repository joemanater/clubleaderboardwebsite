import usePageTitle from '../../hooks/usePageTitle'
import Hero from '../../components/Hero/Hero'
import FilterPills from '../../components/FilterPills/FilterPills'
import DealsCarousel from '../../components/DealsCarousel/DealsCarousel'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import { CATEGORY_LIST } from '../../data/categoryConfig'
import './HomePage.css'

export default function HomePage() {
  usePageTitle()
  return (
    <>
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
