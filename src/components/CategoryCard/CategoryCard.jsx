import { Link } from 'react-router-dom'
import './CategoryCard.css'

export default function CategoryCard({ category }) {
  const sorted = [...category.data].sort((a, b) => b.overallScore - a.overallScore)
  const topClub = sorted[0]

  return (
    <Link to={`/${category.slug}`} className="category-card">
      <div className="category-card__image-wrap">
        {topClub?.imageUrl && (
          <img
            className="category-card__image"
            src={topClub.imageUrl}
            alt={topClub.name}
            loading="lazy"
          />
        )}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__name">{category.label}</h3>
        <p className="category-card__desc">{category.description}</p>
        <span className="category-card__count">{category.data.length} clubs ranked</span>
      </div>
    </Link>
  )
}
