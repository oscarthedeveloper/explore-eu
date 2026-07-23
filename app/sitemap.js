import { programs } from '@/data/programs'
import { areas } from '@/data/areas'
import { locales, defaultLocale } from '@/lib/i18n'

// Base URL: explicit override → Netlify's build-time site URL → localhost.
// Set NEXT_PUBLIC_SITE_URL in Netlify if you use a custom domain you want forced.
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || 'http://localhost:3000').replace(/\/+$/, '')

// Path suffixes after /<locale>. Route segments (program, omraden) are the same
// across every language, only the content is translated.
const suffixes = [
  '',                                             // localized home
  '/omraden',                                     // ESC activity-areas index
  ...programs.map((p) => `/program/${p.slug}`),   // 11 programme pages
  ...areas.map((a) => `/omraden/${a.slug}`),      // 6 activity-area pages
]

function priorityFor(suffix) {
  if (suffix === '') return 1.0
  if (suffix.startsWith('/program/')) return 0.8
  return 0.6
}

export default function sitemap() {
  const lastModified = new Date()
  const entries = []

  for (const suffix of suffixes) {
    // hreflang alternates shared by every locale variant of this page
    const languages = {}
    for (const l of locales) languages[l] = `${SITE_URL}/${l}${suffix}/`
    languages['x-default'] = `${SITE_URL}/${defaultLocale}${suffix}/`

    for (const l of locales) {
      entries.push({
        url: `${SITE_URL}/${l}${suffix}/`,        // trailingSlash: true
        lastModified,
        changeFrequency: 'monthly',
        priority: priorityFor(suffix),
        alternates: { languages },
      })
    }
  }

  return entries
}
