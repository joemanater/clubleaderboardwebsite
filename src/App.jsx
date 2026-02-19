import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import FilterPills from './components/FilterPills/FilterPills'
import DealsCarousel from './components/DealsCarousel/DealsCarousel'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <FilterPills />
      <DealsCarousel />
    </div>
  )
}
