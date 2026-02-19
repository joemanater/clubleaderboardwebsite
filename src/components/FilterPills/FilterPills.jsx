import './FilterPills.css'

const PILLS = [
  { label: 'Drivers', icon: '🏌️' },
  { label: 'Irons', icon: '🎯' },
  { label: 'Wedges', icon: '⛳' },
  { label: 'Putters', icon: '🕳️' },
  { label: 'Hybrids', icon: '🔀' },
  { label: 'Fairway Woods', icon: '🌲' },
  { label: 'Most Forgiving', icon: '🟢' },
  { label: 'Best Value', icon: '💰' },
  { label: 'Beginner Friendly', icon: '👋' },
]

export default function FilterPills() {
  return (
    <section className="filter-pills">
      <div className="container">
        <div className="filter-pills__scroll">
          {PILLS.map((pill) => (
            <button key={pill.label} className="filter-pill">
              <span className="filter-pill__icon">{pill.icon}</span>
              {pill.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
