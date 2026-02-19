import { Link } from 'react-router-dom'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import './FilterPills.css'

const PILLS = [
  { label: 'Drivers', to: '/drivers' },
  { label: 'Irons', to: '/irons' },
  { label: 'Wedges', to: '/wedges' },
  { label: 'Putters', to: '/putters' },
  { label: 'Hybrids', to: '/hybrids' },
  { label: 'Fairway Woods', to: '/fairway-woods' },
  { label: 'Most Forgiving', to: '/t/most-forgiving' },
  { label: 'Best Value', to: '/t/best-value' },
  { label: 'Beginner Friendly', to: '/t/beginner-friendly' },
]

export default function FilterPills() {
  return (
    <section className="filter-pills">
      <div className="container">
        <div className="filter-pills__scroll">
          {PILLS.map((pill) => (
            <Link key={pill.label} to={pill.to} className="filter-pills__link">
              <InteractiveHoverButton text={pill.label} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
