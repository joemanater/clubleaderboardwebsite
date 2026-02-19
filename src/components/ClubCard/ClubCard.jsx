import { Link } from 'react-router-dom'
import { getScoreColor } from '../../data/shared/scoring'
import ScoreBar from '../ScoreBar/ScoreBar'
import './ClubCard.css'

const PLAYER_LABELS = {
  low: 'Low HCP',
  mid: 'Mid HCP',
  high: 'High HCP',
  beginner: 'Beginner',
}

export default function ClubCard({ club, category, rank }) {
  const scoreColor = getScoreColor(club.overallScore)
  const topScoreFields = category.scoreFields.slice(0, 3)

  return (
    <Link to={`/${category.slug}/${club.id}`} className="club-card">
      {rank != null && (
        <span className="club-card__rank">#{rank}</span>
      )}
      <div className="club-card__image-wrap">
        <img
          className="club-card__image"
          src={club.imageUrl}
          alt={club.name}
          loading="lazy"
        />
      </div>
      <div className="club-card__body">
        <p className="club-card__manufacturer">{club.manufacturer}</p>
        <h3 className="club-card__name">{club.name}</h3>
        <div className="club-card__score-pill" style={{ backgroundColor: scoreColor }}>
          {club.overallScore} / 10
        </div>
        <div className="club-card__scores">
          {topScoreFields.map((field) => (
            <ScoreBar
              key={field}
              label={category.scoreLabels[field]}
              score={club.scores[field]}
            />
          ))}
        </div>
        <div className="club-card__footer">
          <span className="club-card__price">${club.msrp}</span>
          <div className="club-card__tags">
            {club.playerType.map((type) => (
              <span key={type} className="club-card__tag">{PLAYER_LABELS[type] || type}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
