import { useParams, Navigate, Link } from 'react-router-dom'
import { getTagBySlug } from '../../data/categoryConfig'
import usePageTitle from '../../hooks/usePageTitle'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import ClubCard from '../../components/ClubCard/ClubCard'
import './TagPage.css'

export default function TagPage() {
  const { tagSlug } = useParams()
  const tag = getTagBySlug(tagSlug)
  usePageTitle(tag ? `${tag.label} Golf Clubs 2026` : null)

  if (!tag) return <Navigate to="/" replace />

  const groups = tag.getClubs()

  return (
    <div className="tag-page">
      <div className="tag-page__header">
        <div className="container">
          <Breadcrumb items={[{ label: tag.label }]} />
          <h1 className="tag-page__title">
            <span className="tag-page__icon">{tag.icon}</span>
            {tag.label}
          </h1>
          <p className="tag-page__subtitle">{tag.description}</p>
        </div>
      </div>

      <div className="container">
        {groups.map(({ category, clubs }) => (
          <section key={category.slug} className="tag-page__section">
            <div className="tag-page__section-header">
              <h2 className="tag-page__section-title">
                <span>{category.icon}</span> {category.label}
              </h2>
              <Link to={`/${category.slug}`} className="tag-page__view-all">
                View all {category.label} &rarr;
              </Link>
            </div>
            <div className="tag-page__grid">
              {clubs.map((club, i) => (
                <ClubCard
                  key={club.id}
                  club={club}
                  category={category}
                  rank={i + 1}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
