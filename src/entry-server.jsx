import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import { CATEGORIES, TAGS } from './data/categoryConfig'
import { generateSitemap } from './data/shared/seo'
import { getAllComparisonSlugs } from './data/shared/comparisons-util'
import { BEST_OF_LIST } from './data/shared/best-of-config'

export function render(url) {
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  )
  const { helmet } = helmetContext
  return { html, helmet }
}

export function getRoutes() {
  const routes = ['/', '/search', '/compare', '/about', '/privacy']

  for (const tag of Object.keys(TAGS)) {
    routes.push(`/t/${tag}`)
  }

  for (const cat of Object.values(CATEGORIES)) {
    routes.push(`/${cat.slug}`)
    for (const club of cat.data) {
      routes.push(`/${cat.slug}/${club.id}`)
    }
  }

  // Comparison detail pages (driver vs driver)
  for (const slug of getAllComparisonSlugs()) {
    routes.push(`/compare/${slug}`)
  }

  // Best-of pages
  for (const page of BEST_OF_LIST) {
    routes.push(`/best/${page.slug}`)
  }

  return routes
}

export function getSitemapData() {
  const allClubs = Object.values(CATEGORIES).flatMap((cat) =>
    cat.data.map((club) => ({ id: club.id, categorySlug: cat.slug }))
  )
  const comparisons = getAllComparisonSlugs().map((slug) => ({ slug }))
  const bestOfSlugs = BEST_OF_LIST.map((p) => ({ slug: p.slug }))
  const categories = Object.keys(CATEGORIES)
  const tags = Object.keys(TAGS)
  return generateSitemap(allClubs, comparisons, categories, tags, bestOfSlugs)
}
