import Link from 'next/link'
import { areas } from '@/data/areas'
import { getT, locales, getLocalizedAreas } from '@/lib/i18n'

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getT(locale)
  return { title: `${t.areasPage?.indexHeading || 'Områden'} — Explore EU` }
}

const accentMap = {
  blue:   'border-blue-200 hover:border-blue-400',
  amber:  'border-amber-200 hover:border-amber-400',
  purple: 'border-violet-200 hover:border-violet-400',
  green:  'border-emerald-200 hover:border-emerald-400',
  pink:   'border-pink-200 hover:border-pink-400',
  red:    'border-rose-200 hover:border-rose-400',
}

export default async function AreasIndexPage({ params }) {
  const { locale } = await params
  const t = await getT(locale)
  const ap = t.areasPage || {}
  const localized = await getLocalizedAreas(areas, locale)
  const lbase = `/${locale}`

  return (
    <>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg,#eef2ff 0%,#f5f7ff 40%,#ffffff 100%)' }} className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%,rgba(0,51,153,0.06) 0%,transparent 70%)' }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-14">
          <Link href={`${lbase}/program/europeiska-solidaritetskaren`}
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-gray-700 text-sm mb-8 transition-colors">
            {ap.back}
          </Link>
          <p className="section-label">{ap.indexLabel}</p>
          <h1 className="font-bold leading-[1.05] tracking-tight mb-5 max-w-2xl"
            style={{ fontFamily: "'Syne',var(--font-syne),sans-serif", fontSize: 'clamp(2.2rem,5.5vw,3.4rem)' }}>
            {ap.indexHeading}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">{ap.indexSub}</p>
        </div>
      </section>

      {/* AREAS GRID */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {localized.map((area) => (
            <Link key={area.slug} href={`${lbase}/omraden/${area.slug}`}
              className={`group flex flex-col gap-4 bg-white border ${accentMap[area.color] || accentMap.blue} rounded-xl p-6 hover:shadow-md transition-all`}>
              <span className="text-3xl">{area.emoji}</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#003399] transition-colors leading-snug">{area.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{area.tagline}</p>
              </div>
              <span className="text-sm font-medium text-[#003399] mt-auto pt-2">→</span>
            </Link>
          ))}
        </div>
        <p className="text-xs text-gray-400 max-w-3xl leading-relaxed">{ap.indexNote}</p>
      </section>
    </>
  )
}
