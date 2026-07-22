import Link from 'next/link'
import { areas } from '@/data/areas'
import { getT, locales, getLocalizedAreas } from '@/lib/i18n'

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getT(locale)
  return { title: `${t.areasPage?.indexHeading || 'Områden'} — EU Opportunities` }
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
      <section className="relative overflow-hidden" style={{ background: 'var(--paper)' }}>
        <div className="absolute inset-0 graph-bg pointer-events-none"
          style={{ maskImage: 'radial-gradient(120% 90% at 50% 0%, #000 40%, transparent 82%)', WebkitMaskImage: 'radial-gradient(120% 90% at 50% 0%, #000 40%, transparent 82%)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[420px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%,rgba(0,51,153,0.055) 0%,transparent 70%)' }} />
        <div className="band relative pt-14 pb-14">
          <Link href={`${lbase}/program/europeiska-solidaritetskaren`}
            className="mono text-[10.5px] uppercase tracking-[0.15em] inline-flex items-center gap-1.5 text-gray-400 hover:text-gray-700 mb-8 transition-colors">
            {ap.back}
          </Link>
          <p className="section-label">{ap.indexLabel}</p>
          <h1 className="font-bold leading-[1.05] tracking-tight mb-5 max-w-2xl"
            style={{ fontFamily: "'Syne',var(--font-syne),sans-serif", fontSize: 'clamp(2.2rem,5.5vw,3.4rem)', color: 'var(--ink)' }}>
            {ap.indexHeading}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">{ap.indexSub}</p>
        </div>
      </section>

      {/* AREAS GRID */}
      <section>
        <div className="band is-last py-14">
          <div className="cellgrid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {localized.map((area, i) => (
              <Link key={area.slug} href={`${lbase}/omraden/${area.slug}`}
                className="group flex flex-col gap-4 p-6 transition-colors hover:bg-[var(--paper-2)]" data-reveal style={{ '--d': `${i * 0.05}s` }}>
                <span className="text-3xl">{area.emoji}</span>
                <div>
                  <h3 className="font-semibold mb-2 leading-snug transition-colors group-hover:text-[#003399]" style={{ color: 'var(--ink)' }}>{area.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{area.tagline}</p>
                </div>
                <span className="mono text-sm text-[#003399] mt-auto pt-2 transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            ))}
          </div>
          <p className="mono text-[10.5px] text-gray-400 max-w-3xl leading-relaxed">{ap.indexNote}</p>
        </div>
      </section>
    </>
  )
}
