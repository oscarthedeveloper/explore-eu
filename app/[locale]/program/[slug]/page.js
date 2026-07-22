import { notFound } from 'next/navigation'
import Link from 'next/link'
import { programs, getProgramBySlug } from '@/data/programs'
import FAQ from '@/components/FAQ'
import ProgramCard from '@/components/ProgramCard'
import { getT, locales, localizeUrl, getLocalizedProgram, getLocalizedPrograms } from '@/lib/i18n'

export async function generateStaticParams() {
  return locales.flatMap((locale) => programs.map((p) => ({ locale, slug: p.slug })))
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  const base = getProgramBySlug(slug)
  if (!base) return {}
  const program = await getLocalizedProgram(base, locale)
  return { title: `${program.name} — EU Opportunities`, description: program.tagline }
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

export default async function ProgramPage({ params }) {
  const { locale, slug } = await params
  const base = getProgramBySlug(slug)
  if (!base) notFound()

  const t      = await getT(locale)
  const pp     = t.programPage || {}
  const sec    = pp.sections || {}
  const program = await getLocalizedProgram(base, locale)
  const officialUrl = localizeUrl(base.officialUrl, locale)

  const relatedBase = programs.filter((p) => p.slug !== base.slug && p.category === base.category).slice(0, 2)
  const related = await getLocalizedPrograms(relatedBase, locale)
  const lbase = `/${locale}`

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: 'var(--paper)' }}>
        <div className="absolute inset-0 graph-bg pointer-events-none"
          style={{ maskImage: 'radial-gradient(120% 90% at 50% 0%, #000 40%, transparent 82%)', WebkitMaskImage: 'radial-gradient(120% 90% at 50% 0%, #000 40%, transparent 82%)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[420px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%,rgba(0,51,153,0.055) 0%,transparent 70%)' }} />
        <div className="band relative pt-14 pb-16">
          <Link href={`${lbase}#program`} className="mono text-[10.5px] uppercase tracking-[0.15em] inline-flex items-center gap-1.5 text-gray-400 hover:text-gray-700 mb-8 transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            {pp.back}
          </Link>
          <div className="mb-6"><span className="chip">{program.categoryLabel}</span></div>
          <h1 className="font-bold leading-[1.05] tracking-tight mb-5 max-w-2xl"
            style={{ fontFamily: "'Syne',var(--font-syne),sans-serif", fontSize: 'clamp(2.2rem,6vw,4rem)', color: 'var(--ink)' }}>
            {program.hero.heading}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl mb-8">{program.hero.sub}</p>
          <div className="flex flex-wrap gap-3">
            <a href={officialUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{pp.applyOfficially}</a>
            <a href="#hur-det-fungerar" className="btn btn-ghost">{pp.howItWorks}</a>
          </div>
          <div className="cellgrid grid grid-cols-2 sm:grid-cols-3 mt-12">
            {program.stats.map((stat) => (
              <div key={stat.label} className="p-5">
                <p className="font-bold leading-none mb-2" style={{ fontFamily: "'Syne',var(--font-syne),sans-serif", fontSize: '1.6rem', color: 'var(--ink)' }}>{stat.value}</p>
                <p className="mono text-[10px] uppercase tracking-[0.1em] text-gray-400 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT */}
      <section>
        <div className="band is-fill py-14">
          <div className="max-w-3xl">
            <Eyebrow index="01" label={sec.what} />
            <h2 className="font-bold text-2xl mb-4" style={{ color: 'var(--ink)' }} data-reveal>{program.what.heading}</h2>
            {program.what.body.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0" data-reveal>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ESK AREAS */}
      {program.areas && (
        <section>
          <div className="band py-14">
            <Eyebrow index="02" label={sec.areas} />
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
              <h2 className="font-bold text-2xl max-w-md" style={{ color: 'var(--ink)' }} data-reveal>{sec.areasHeading}</h2>
              <Link href={`${lbase}/omraden`} className="mono text-[10.5px] uppercase tracking-[0.12em] text-[#003399] hover:text-[#0040bb] transition-colors whitespace-nowrap">{sec.areasExplore}</Link>
            </div>
            <div className="cellgrid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6">
              {program.areas.map((area, i) => (
                <Link key={area.title} href={area.slug ? `${lbase}/omraden/${area.slug}` : `${lbase}/omraden`}
                  className="group flex gap-4 p-5 transition-colors hover:bg-[var(--paper-2)]" data-reveal style={{ '--d': `${i * 0.05}s` }}>
                  <span className="text-2xl flex-shrink-0 mt-0.5">{area.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-sm mb-1.5 leading-snug transition-colors group-hover:text-[#003399]" style={{ color: 'var(--ink)' }}>{area.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{area.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <p className="mono text-[10.5px] text-gray-400 leading-relaxed">{sec.areasNote}</p>
          </div>
        </section>
      )}

      {/* FORMATS */}
      {program.formats?.length > 0 && (
        <section>
          <div className="band is-fill py-14">
            <Eyebrow index="03" label={sec.opportunities} />
            <h2 className="font-bold text-2xl mb-8" style={{ color: 'var(--ink)' }} data-reveal>{sec.opportunitiesHeading}</h2>
            <div className="cellgrid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {program.formats.map((format, i) => (
                <div key={i} className="p-5" data-reveal style={{ '--d': `${i * 0.05}s` }}>
                  <span className="text-2xl mb-3 block">{format.icon}</span>
                  <h3 className="font-semibold mb-1 text-sm" style={{ color: 'var(--ink)' }}>{format.title}</h3>
                  <p className="mono text-[10.5px] uppercase tracking-[0.08em] text-[#003399] mb-3">{format.duration}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{format.description}</p>
                  <ul className="space-y-1.5">
                    {format.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#003399] mt-0.5 flex-shrink-0">{pp.checkmark}</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* COVERED */}
      {program.covered?.length > 0 && (
        <section>
          <div className="band py-14">
            <Eyebrow index="04" label={sec.covered} />
            <h2 className="font-bold text-2xl mb-8" style={{ color: 'var(--ink)' }} data-reveal>{sec.coveredHeading}</h2>
            <div className="cellgrid grid grid-cols-2 sm:grid-cols-3">
              {program.covered.map((item, i) => (
                <div key={i} className="flex gap-3 p-5" data-reveal style={{ '--d': `${i * 0.04}s` }}>
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-medium text-sm" style={{ color: 'var(--ink)' }}>{item.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* STEPS */}
      {program.steps?.length > 0 && (
        <section id="hur-det-fungerar">
          <div className="band is-fill py-14">
            <Eyebrow index="05" label={sec.steps} />
            <h2 className="font-bold text-2xl mb-10" style={{ color: 'var(--ink)' }} data-reveal>{sec.stepsHeading}</h2>
            <div>
              {program.steps.map((step, i) => (
                <div key={i} className="flex gap-6 py-5 hair-t" data-reveal>
                  <span className="mono text-sm tracking-[0.15em] text-gray-400 flex-shrink-0 w-8 pt-0.5">{step.n}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 text-sm" style={{ color: 'var(--ink)' }}>{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {program.faq?.length > 0 && (
        <section>
          <div className="band py-14">
            <div className="max-w-3xl">
              <Eyebrow index="06" label={sec.faq} />
              <h2 className="font-bold text-2xl mb-8" style={{ color: 'var(--ink)' }} data-reveal>{sec.faqHeading}</h2>
              <div data-reveal><FAQ items={program.faq} /></div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section>
        <div className="band is-ink py-14 text-center">
          <h2 className="font-bold text-3xl mb-2 text-white" style={{ fontFamily: "'Syne',var(--font-syne),sans-serif" }} data-reveal>{pp.cta?.heading}</h2>
          <p className="text-gray-500 text-xs mb-8 mono uppercase tracking-[0.12em]" data-reveal>{base.officialLabel}</p>
          <div className="flex flex-wrap gap-3 justify-center" data-reveal>
            <a href={officialUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{pp.cta?.btn1}</a>
            <Link href={`${lbase}#program`} className="btn btn-inv">{pp.cta?.btn2}</Link>
          </div>
          <p className="mt-8 text-xs text-gray-600 max-w-lg mx-auto leading-relaxed">{base.source}</p>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section>
          <div className="band is-last py-14">
            <Eyebrow index="07" label={pp.related?.label} />
            <h2 className="font-bold text-xl mb-6" style={{ color: 'var(--ink)' }} data-reveal>{pp.related?.heading}</h2>
            <div className="cellgrid grid grid-cols-1 sm:grid-cols-2">
              {related.map((p) => <ProgramCard key={p.slug} program={p} locale={locale} t={t} />)}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
