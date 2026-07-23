// Base URL: explicit override → Netlify's build-time site URL → localhost.
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || 'http://localhost:3000').replace(/\/+$/, '')

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
