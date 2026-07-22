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
  return { title: `${a.name} — EU Opportunities`, description: a.tagline }
}

function Eyebrow({ index, label }) {
  return (
    <div className="flex items-center gap-3 mb-6" data-reveal-x>
      <span className="mono text-[10.5px] tracking-[0.2em] text-gray-400">{index}</span>
      <span className="block w-7 h-px" style={{ background: 'var(--hair-strong)' }} />
      <span className="section-label !mb-0">{label}</span>
    </div>
  )
}

export default async function AreaPage({ params }) {
  const { locale, area: slug } = await params
  const base = getAreaBySlug(slug)
  if (!base) notFound()

  const t = await getT(locale)
  const ap = t.areasPage || {}
  const area = await getLocalizedArea(base, locale)
  const lbase = `/${locale}`

  const relatedBase = areas.filter((a) => a.slug !== base.slug).slice(0, 3)
  const related = await getLocalizedAreas(relatedBase, locale)

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: 'var(--paper)' }}>
        <div className="absolute inset-0 graph-bg pointer-events-none"
          style={{ maskImage: 'radial-gradient(120% 90% at 50% 0%, #000 40%, transparent 82%)', WebkitMaskImage: 'radial-gradient(120% 90% at 50% 0%, #000 40%, transparent 82%)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[420px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%,rgba(0,51,153,0.055) 0%,transparent 70%)' }} />
        <div className="band relative pt-14 pb-16">
          <Link href={`${lbase}/program/europeiska-solidaritetskaren`}
            className="mono text-[10.5px] uppercase tracking-[0.15em] inline-flex items-center gap-1.5 text-gray-400 hover:text-gray-700 mb-8 transition-colors">
            {ap.back}
          </Link>
          <span className="text-5xl mb-5 block">{area.emoji}</span>
          <div className="mb-5"><span className="chip">{ap.indexLabel}</span></div>
          <h1 className="font-bold leading-[1.05] tracking-tight mb-5 max-w-2xl"
            style={{ fontFamily: "'Syne',var(--font-syne),sans-serif", fontSize: 'clamp(2.2rem,6vw,3.6rem)', color: 'var(--ink)' }}>
            {area.hero?.heading || area.name}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl mb-8">{area.hero?.sub || area.tagline}</p>
          {area.stats?.length > 0 && (
            <div className="cellgrid grid grid-cols-2 sm:grid-cols-3 mt-12">
              {area.stats.map((stat) => (
                <div key={stat.label} className="p-5">
                  <p className="font-bold leading-none mb-2" style={{ fontFamily: "'Syne',var(--font-syne),sans-serif", fontSize: '1.5rem', color: 'var(--ink)' }}>{stat.value}</p>
                  <p className="mono text-[10px] uppercase tracking-[0.1em] text-gray-400 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* OVERVIEW */}
      <section>
        <div className="band is-fill py-14">
          <div className="max-w-3xl">
            <Eyebrow index="01" label={ap.overviewLabel} />
            <h2 className="font-bold text-2xl mb-4" style={{ color: 'var(--ink)' }} data-reveal>{area.name}</h2>
            {area.body?.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0" data-reveal>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      {area.examples?.length > 0 && (
        <section>
          <div className="band py-14">
            <Eyebrow index="02" label={ap.examplesLabel} />
            <h2 className="font-bold text-2xl mb-8" style={{ color: 'var(--ink)' }} data-reveal>{ap.examplesHeading}</h2>
            <div className="cellgrid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {area.examples.map((ex, i) => (
                <div key={i} className="p-5" data-reveal style={{ '--d': `${i * 0.05}s` }}>
                  <span className="text-2xl mb-3 block">{ex.icon}</span>
                  <h3 className="font-semibold text-sm mb-1.5 leading-snug" style={{ color: 'var(--ink)' }}>{ex.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{ex.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SKILLS */}
      {area.skills?.length > 0 && (
        <section>
          <div className="band is-fill py-14">
            <Eyebrow index="03" label={ap.skillsLabel} />
            <h2 className="font-bold text-2xl mb-8" style={{ color: 'var(--ink)' }} data-reveal>{ap.skillsHeading}</h2>
            <div className="flex flex-wrap gap-2.5" data-reveal>
              {area.skills.map((skill) => (
                <span key={skill} className="inline-flex items-center gap-2 text-sm px-4 py-2 border hair" style={{ color: 'var(--ink)', background: 'var(--paper)' }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#003399' }} />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SUITED FOR */}
      {area.suitedFor?.length > 0 && (
        <section>
          <div className="band py-14">
            <Eyebrow index="04" label={ap.suitedForLabel} />
            <h2 className="font-bold text-2xl mb-8" style={{ color: 'var(--ink)' }} data-reveal>{ap.suitedForHeading}</h2>
            <ul className="space-y-3 max-w-3xl">
              {area.suitedFor.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-600 leading-relaxed" data-reveal>
                  <span className="mt-1 flex-shrink-0 text-[#003399]">●</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* PRACTICAL */}
      {area.practical && (
        <section>
          <div className="band is-fill py-14">
            <Eyebrow index="05" label={ap.practicalLabel} />
            <h2 className="font-bold text-2xl mb-8" style={{ color: 'var(--ink)' }} data-reveal>{ap.practicalHeading}</h2>
            <div className="cellgrid grid grid-cols-1 sm:grid-cols-3 max-w-4xl">
              <div className="p-5" data-reveal>
                <p className="mono text-[10.5px] font-medium tracking-[0.14em] uppercase text-gray-400 mb-2">{ap.practicalDuration}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{area.practical.duration}</p>
              </div>
              <div className="p-5" data-reveal style={{ '--d': '0.05s' }}>
                <p className="mono text-[10.5px] font-medium tracking-[0.14em] uppercase text-gray-400 mb-2">{ap.practicalLanguages}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{area.practical.languages}</p>
              </div>
              <div className="p-5" data-reveal style={{ '--d': '0.1s' }}>
                <p className="mono text-[10.5px] font-medium tracking-[0.14em] uppercase text-gray-400 mb-2">{ap.practicalRequirements}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{area.practical.requirements}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section>
        <div className="band is-ink py-14 text-center">
          <h2 className="font-bold text-3xl mb-2 text-white" style={{ fontFamily: "'Syne',var(--font-syne),sans-serif" }} data-reveal>{area.name}</h2>
          <p className="text-gray-500 text-sm mb-8" data-reveal>{area.tagline}</p>
          <div className="flex flex-wrap gap-3 justify-center" data-reveal>
            <a href="https://youth.europa.eu/solidarity_en" target="_blank" rel="noopener noreferrer" className="btn btn-primary">{ap.applyESK}</a>
            <Link href={`${lbase}/program/europeiska-solidaritetskaren`} className="btn btn-inv">{ap.backToProgram}</Link>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section>
          <div className="band is-last py-14">
            <Eyebrow index="06" label={ap.relatedLabel} />
            <h2 className="font-bold text-xl mb-6" style={{ color: 'var(--ink)' }} data-reveal>{ap.relatedHeading}</h2>
            <div className="cellgrid grid grid-cols-1 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`${lbase}/omraden/${r.slug}`}
                  className="group flex flex-col gap-3 p-5 transition-colors hover:bg-[var(--paper-2)]" data-reveal>
                  <span className="text-2xl">{r.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-sm mb-1.5 leading-snug transition-colors group-hover:text-[#003399]" style={{ color: 'var(--ink)' }}>{r.name}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{r.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
