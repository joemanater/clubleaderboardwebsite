import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getCategoryBySlug } from '../../data/categoryConfig'
import { generateCategoryRankingSEO } from '../../data/shared/seo'
import SEOHead from '../../components/SEOHead/SEOHead'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import ClubCard from '../../components/ClubCard/ClubCard'
import './CategoryPage.css'

const SORT_OPTIONS = [
  { value: 'top-rated', label: 'Top Rated' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'a-z', label: 'A - Z' },
]

function sortClubs(clubs, sortBy) {
  const sorted = [...clubs]
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.msrp - b.msrp)
    case 'price-high':
      return sorted.sort((a, b) => b.msrp - a.msrp)
    case 'a-z':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'top-rated':
    default:
      return sorted.sort((a, b) => b.overallScore - a.overallScore)
  }
}

export default function CategoryPage() {
  const { categorySlug } = useParams()
  const category = getCategoryBySlug(categorySlug)
  const [sortBy, setSortBy] = useState('top-rated')

  if (!category) return <Navigate to="/" replace />

  const seo = generateCategoryRankingSEO(categorySlug, category.data)
  const clubs = sortClubs(category.data, sortBy)

  return (
    <div className="category-page">
      <SEOHead {...seo} />
      <div className="category-page__header">
        <div className="container">
          <Breadcrumb items={[{ label: category.label }]} />
          <h1 className="category-page__title">{category.label}</h1>
          <p className="category-page__subtitle">
            {category.data.length} clubs ranked &middot; {category.description}
          </p>
        </div>
      </div>

      <div className="container">
        <p className="category-page__note">
          Rankings include all currently available models regardless of release year.
          Model years shown reflect the manufacturer's original launch date.
          Prices shown are manufacturer's suggested retail (MSRP) — street prices for
          previous-generation models may be lower.
        </p>
        <div className="category-page__toolbar">
          <span className="category-page__count">{category.data.length} clubs</span>
          <select
            className="category-page__sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className="category-page__grid">
          {clubs.map((club, i) => (
            <ClubCard
              key={club.id}
              club={club}
              category={category}
              rank={sortBy === 'top-rated' ? i + 1 : null}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
