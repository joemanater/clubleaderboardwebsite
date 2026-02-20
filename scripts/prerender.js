import { build } from 'vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

async function prerender() {
  // 1. Build SSR bundle
  console.log('Building SSR bundle...')
  await build({
    root,
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: 'dist/server',
    },
    ssr: {
      noExternal: ['react-helmet-async'],
    },
    logLevel: 'warn',
  })

  // 2. Read client HTML template
  const template = fs.readFileSync(path.resolve(root, 'dist/index.html'), 'utf-8')

  // 3. Import SSR bundle
  const { render, getRoutes } = await import(path.resolve(root, 'dist/server/entry-server.js'))

  // 4. Pre-render each route
  const routes = getRoutes()
  console.log(`Pre-rendering ${routes.length} routes...`)

  for (const url of routes) {
    const { html: appHtml, helmet } = render(url)

    // Build helmet tags string
    const helmetTags = [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString(),
    ].filter(Boolean).join('\n    ')

    let html = template

    // Inject helmet tags before </head>
    if (helmetTags.trim()) {
      html = html.replace('</head>', `    ${helmetTags}\n  </head>`)
    }

    // Inject app HTML into root div
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

    // Write to dist/{route}/index.html
    const filePath = url === '/'
      ? path.resolve(root, 'dist/index.html')
      : path.resolve(root, `dist${url}/index.html`)

    const dir = path.dirname(filePath)
    fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(filePath, html)
    process.stdout.write(`  \u2713 ${url}\n`)
  }

  console.log(`\nPre-rendered ${routes.length} routes successfully!`)
}

prerender().catch((err) => {
  console.error('Pre-render failed:', err)
  process.exit(1)
})
