import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { Footer } from './components/ui/footer'
import HomePage from './pages/HomePage/HomePage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import ProductPage from './pages/ProductPage/ProductPage'
import TagPage from './pages/TagPage/TagPage'
import SearchPage from './pages/SearchPage/SearchPage'
import ComparePage from './pages/ComparePage/ComparePage'
import ComparisonDetailPage from './pages/ComparisonDetailPage/ComparisonDetailPage'
import BestOfPage from './pages/BestOfPage/BestOfPage'
import AboutPage from './pages/AboutPage/AboutPage'
import PrivacyPage from './pages/PrivacyPage/PrivacyPage'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Nav />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/compare/:comparisonSlug" element={<ComparisonDetailPage />} />
          <Route path="/best/:bestOfSlug" element={<BestOfPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/t/:tagSlug" element={<TagPage />} />
          <Route path="/:categorySlug" element={<CategoryPage />} />
          <Route path="/:categorySlug/:productId" element={<ProductPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
