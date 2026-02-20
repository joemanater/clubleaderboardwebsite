import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

async function generateSitemap() {
  const { getSitemapData } = await import(path.resolve(root, 'dist/server/entry-server.js'))
  const xml = getSitemapData()
  fs.writeFileSync(path.resolve(root, 'dist/sitemap.xml'), xml)
  console.log('Generated dist/sitemap.xml')
}

generateSitemap().catch((err) => {
  console.error('Sitemap generation failed:', err)
  process.exit(1)
})
