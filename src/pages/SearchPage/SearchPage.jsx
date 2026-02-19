import { useSearchParams, Link } from 'react-router-dom'
import { CATEGORY_LIST } from '../../data/categoryConfig'
import { manufacturers } from '../../data/shared/manufacturers'
import usePageTitle from '../../hooks/usePageTitle'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import ClubCard from '../../components/ClubCard/ClubCard'
import './SearchPage.css'

function searchAllClubs(query) {
  const q = query.toLowerCase().trim()
  if (!q) return []

  const results = []
  for (const category of CATEGORY_LIST) {
    const matches = category.data.filter((club) => {
      const mfr = manufacturers[club.manufacturer]
      const mfrName = mfr ? mfr.name : club.manufacturer
      return (
        club.name.toLowerCase().includes(q) ||
        mfrName.toLowerCase().includes(q) ||
        club.manufacturer.toLowerCase().includes(q)
      )
    })
    for (const club of matches) {
      results.push({ club, category })
    }
  }

  results.sort((a, b) => b.club.overallScore - a.club.overallScore)
  return results
}

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const results = searchAllClubs(query)
  usePageTitle(query ? `Search: ${query}` : 'Search Golf Clubs')

  return (
    <div className="search-page">
      <div className="search-page__header">
        <div className="container">
          <Breadcrumb items={[{ label: 'Search' }]} />
          <h1 className="search-page__title">
            {query
              ? <>Results for &ldquo;{query}&rdquo;</>
              : 'Search'}
          </h1>
          {query && (
            <p className="search-page__subtitle">
              {results.length} {results.length === 1 ? 'club' : 'clubs'} found
            </p>
          )}
        </div>
      </div>

      <div className="container">
        {!query && (
          <p className="search-page__empty">
            Enter a brand or model name to search across all categories.
          </p>
        )}

        {query && results.length === 0 && (
          <div className="search-page__empty">
            <p>No clubs found matching &ldquo;{query}&rdquo;.</p>
            <p>Try searching for a brand like &ldquo;TaylorMade&rdquo; or a model like &ldquo;Qi35&rdquo;.</p>
          </div>
        )}

        {results.length > 0 && (
          <div className="search-page__grid">
            {results.map(({ club, category }) => (
              <ClubCard
                key={`${category.slug}-${club.id}`}
                club={club}
                category={category}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
