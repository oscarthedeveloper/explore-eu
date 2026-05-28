import { notFound } from 'next/navigation'
import Link from 'next/link'
import { areas, getAreaBySlug } from '@/data/areas'
import { getT, locales, getLocalizedArea, getLocalizedAreas } from '@/lib/i18n'

export async function generateStaticParams() {
  return locales.flatMap((locale) => areas.map((a) => ({ locale, area: a.slug })))
}

export async function generateMetadata({ params }) {
  const { locale, area: slug } = await params
  const base = getAreaBySlug(slug)
  if (!base) return {}
  const a = await getLocalizedArea(base, locale)
  return { title: `${a.name} — Explore EU`, description: a.tagline }
}

// Color mapping per area for accent details
const colorMap = {
  blue:   { tag: 'bg-blue-50 text-blue-700',     dot: 'bg-blue-500',   gradient: 'linear-gradient(160deg,#eef2ff 0%,#f5f7ff 40%,#ffffff 100%)' },
  amber:  { tag: 'bg-amber-50 text-amber-700',   dot: 'bg-amber-500',  gradient: 'linear-gradient(160deg,#fffbeb 0%,#fefce8 40%,#ffffff 100%)' },
  purple: { tag: 'bg-violet-50 text-violet-700', dot: 'bg-violet-500', gradient: 'linear-gradient(160deg,#f5f3ff 0%,#faf5ff 40%,#ffffff 100%)' },
  green:  { tag: 'bg-emerald-50 text-emerald-700', dot: 'bg-emerald-500', gradient: 'linear-gradient(160deg,#ecfdf5 0%,#f0fdf4 40%,#ffffff 100%)' },
  pink:   { tag: 'bg-pink-50 text-pink-700',     dot: 'bg-pink-500',   gradient: 'linear-gradient(160deg,#fdf2f8 0%,#fdf4ff 40%,#ffffff 100%)' },
  red:    { tag: 'bg-rose-50 text-rose-700',     dot: 'bg-rose-500',   gradient: 'linear-gradient(160deg,#fff1f2 0%,#fef2f2 40%,#ffffff 100%)' },
}

export default async function AreaPage({ params }) {
  const { locale, area: slug } = await params
  const base = getAreaBySlug(slug)
  if (!base) notFound()

  const t = await getT(locale)
  const ap = t.areasPage || {}
  const area = await getLocalizedArea(base, locale)
  const lbase = `/${locale}`

  // Related areas (all others)
  const relatedBase = areas.filter((a) => a.slug !== base.slug).slice(0, 3)
  const related = await getLocalizedAreas(relatedBase, locale)

  const c = colorMap[area.color] || colorMap.blue

  return (
    <>
      {/* HERO */}
      <section style={{ background: c.gradient }} className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%,rgba(0,51,153,0.06) 0%,transparent 70%)' }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-20">
          <Link href={`${lbase}/program/europeiska-solidaritetskaren`}
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-gray-700 text-sm mb-8 transition-colors">
            {ap.back}
          </Link>
          <span className="text-5xl mb-5 block">{area.emoji}</span>
          <span className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full mb-5 ${c.tag}`}>
            {ap.indexLabel}
          </span>
          <h1 className="font-bold leading-[1.05] tracking-tight mb-5 max-w-2xl"
            style={{ fontFamily: "'Syne',var(--font-syne),sans-serif", fontSize: 'clamp(2.2rem,6vw,3.6rem)' }}>
            {area.hero?.heading || area.name}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl mb-8">{area.hero?.sub || area.tagline}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 pt-10 border-t border-gray-200">
            {area.stats?.map((stat) => (
              <div key={stat.label}>
                <p className="font-bold text-gray-900 leading-none mb-1"
                  style={{ fontFamily: "'Syne',var(--font-syne),sans-serif", fontSize: '1.5rem' }}>{stat.value}</p>
                <p className="text-xs text-gray-400 mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW BODY */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <div className="max-w-3xl">
            <p className="section-label">{ap.overviewLabel}</p>
            <h2 className="font-bold text-2xl text-gray-900 mb-4">{area.name}</h2>
            {area.body?.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLES — what you do */}
      {area.examples?.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <p className="section-label">{ap.examplesLabel}</p>
          <h2 className="font-bold text-2xl text-gray-900 mb-8">{ap.examplesHeading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {area.examples.map((ex, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                <span className="text-2xl mb-3 block">{ex.icon}</span>
                <h3 className="font-semibold text-gray-900 text-sm mb-1.5 leading-snug">{ex.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{ex.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SKILLS */}
      {area.skills?.length > 0 && (
        <section className="bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
            <p className="section-label">{ap.skillsLabel}</p>
            <h2 className="font-bold text-2xl text-gray-900 mb-8">{ap.skillsHeading}</h2>
            <div className="flex flex-wrap gap-2.5">
              {area.skills.map((skill) => (
                <span key={skill} className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SUITED FOR */}
      {area.suitedFor?.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <p className="section-label">{ap.suitedForLabel}</p>
          <h2 className="font-bold text-2xl text-gray-900 mb-8">{ap.suitedForHeading}</h2>
          <ul className="space-y-3 max-w-3xl">
            {area.suitedFor.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                <span className={`text-base mt-1 flex-shrink-0 ${c.dot.replace('bg-', 'text-')}`}>●</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* PRACTICAL */}
      {area.practical && (
        <section className="bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
            <p className="section-label">{ap.practicalLabel}</p>
            <h2 className="font-bold text-2xl text-gray-900 mb-8">{ap.practicalHeading}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">{ap.practicalDuration}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{area.practical.duration}</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">{ap.practicalLanguages}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{area.practical.languages}</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">{ap.practicalRequirements}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{area.practical.requirements}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 text-center">
          <h2 className="font-bold text-3xl text-white mb-2" style={{ fontFamily: "'Syne',var(--font-syne),sans-serif" }}>
            {area.name}
          </h2>
          <p className="text-gray-500 text-sm mb-8">{area.tagline}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://youth.europa.eu/solidarity_en" target="_blank" rel="noopener noreferrer"
              className="bg-[#003399] hover:bg-[#0040bb] text-white font-medium px-6 py-3 rounded-full transition-colors text-sm">
              {ap.applyESK}
            </a>
            <Link href={`${lbase}/program/europeiska-solidaritetskaren`}
              className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium px-6 py-3 rounded-full transition-colors text-sm">
              {ap.backToProgram}
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED AREAS */}
      {related.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <p className="section-label">{ap.relatedLabel}</p>
          <h2 className="font-bold text-xl text-gray-900 mb-6">{ap.relatedHeading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((r) => {
              const rc = colorMap[r.color] || colorMap.blue
              return (
                <Link key={r.slug} href={`${lbase}/omraden/${r.slug}`}
                  className="group flex flex-col gap-3 bg-white border border-gray-200 rounded-xl p-5 hover:border-[#003399]/25 hover:shadow-sm transition-all">
                  <span className="text-2xl">{r.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1.5 group-hover:text-[#003399] transition-colors leading-snug">{r.name}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{r.tagline}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      )}
    </>
  )
}
