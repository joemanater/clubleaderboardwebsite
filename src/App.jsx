import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import HomePage from './pages/HomePage/HomePage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import ProductPage from './pages/ProductPage/ProductPage'
import TagPage from './pages/TagPage/TagPage'
import SearchPage from './pages/SearchPage/SearchPage'
import ComparePage from './pages/ComparePage/ComparePage'
import AboutPage from './pages/AboutPage/AboutPage'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/t/:tagSlug" element={<TagPage />} />
        <Route path="/:categorySlug" element={<CategoryPage />} />
        <Route path="/:categorySlug/:productId" element={<ProductPage />} />
      </Routes>
    </div>
  )
}
