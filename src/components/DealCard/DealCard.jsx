import './DealCard.css'

export default function DealCard({ deal }) {
  return (
    <article className="deal-card">
      <div className="deal-card__image-wrap">
        <img
          className="deal-card__image"
          src={deal.imageUrl}
          alt={deal.name}
          loading="lazy"
        />
        <span className="deal-card__badge">
          {deal.overallScore} / 10
        </span>
      </div>

      <div className="deal-card__body">
        <h3 className="deal-card__model">{deal.name}</h3>
        <p className="deal-card__tagline">{deal.description}</p>

        <div className="deal-card__prices">
          <div className="deal-card__price-group">
            <span className="deal-card__price-label">Forgiveness</span>
            <span className="deal-card__price-value">{deal.scores.forgiveness}</span>
          </div>
          <div className="deal-card__price-group" style={{ textAlign: 'right' }}>
            <span className="deal-card__price-label">Distance</span>
            <span className="deal-card__price-value">{deal.scores.distance}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
