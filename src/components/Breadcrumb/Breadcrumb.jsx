import { Link } from 'react-router-dom'
import './Breadcrumb.css'

export default function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb__list">
        <li className="breadcrumb__item">
          <Link to="/" className="breadcrumb__link">Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="breadcrumb__item">
            <span className="breadcrumb__sep">/</span>
            {i === items.length - 1 ? (
              <span className="breadcrumb__current">{item.label}</span>
            ) : (
              <Link to={item.to} className="breadcrumb__link">{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
