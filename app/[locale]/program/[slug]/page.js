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
  return { title: `${program.name} — Explore EU`, description: program.tagline }
}

const catColors = {
  volontär: 'bg-blue-50 text-blue-700', utbildning: 'bg-violet-50 text-violet-700',
  resa: 'bg-amber-50 text-amber-700', praktik: 'bg-emerald-50 text-emerald-700',
  jobb: 'bg-teal-50 text-teal-700', info: 'bg-gray-100 text-gray-600',
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
      <section style={{ background: 'linear-gradient(160deg,#eef2ff 0%,#f5f7ff 40%,#ffffff 100%)' }} className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%,rgba(0,51,153,0.06) 0%,transparent 70%)' }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-20">
          <Link href={`${lbase}#program`} className="inline-flex items-center gap-1.5 text-gray-400 hover:text-gray-700 text-sm mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            {pp.back}
          </Link>
          <span className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full mb-6 ${catColors[program.category] || 'bg-gray-100 text-gray-600'}`}>
            {program.categoryLabel}
          </span>
          <h1 className="font-bold leading-[1.05] tracking-tight mb-5 max-w-2xl"
            style={{ fontFamily: "'Syne',var(--font-syne),sans-serif", fontSize: 'clamp(2.2rem,6vw,4rem)' }}>
            {program.hero.heading}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl mb-8">{program.hero.sub}</p>
          <div className="flex flex-wrap gap-3">
            <a href={officialUrl} target="_blank" rel="noopener noreferrer"
               className="bg-[#003399] hover:bg-[#0040bb] text-white font-medium px-6 py-3 rounded-full transition-all text-sm">{pp.applyOfficially}</a>
            <a href="#hur-det-fungerar"
               className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-6 py-3 rounded-full transition-all text-sm">{pp.howItWorks}</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 pt-10 border-t border-gray-200">
            {program.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-bold text-gray-900 leading-none mb-1"
                  style={{ fontFamily: "'Syne',var(--font-syne),sans-serif", fontSize: '1.6rem' }}>{stat.value}</p>
                <p className="text-xs text-gray-400 mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <div className="max-w-3xl">
            <p className="section-label">{sec.what}</p>
            <h2 className="font-bold text-2xl text-gray-900 mb-4">{program.what.heading}</h2>
            {program.what.body.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ESK AREAS */}
      {program.areas && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <p className="section-label">{sec.areas}</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <h2 className="font-bold text-2xl text-gray-900 max-w-md">{sec.areasHeading}</h2>
            <Link href={`${lbase}/omraden`}
               className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors whitespace-nowrap">{sec.areasExplore}</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {program.areas.map((area) => (
              <Link key={area.title} href={area.slug ? `${lbase}/omraden/${area.slug}` : `${lbase}/omraden`}
                 className="group flex gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:border-[#003399]/25 hover:shadow-sm transition-all">
                <span className="text-2xl flex-shrink-0 mt-0.5">{area.emoji}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1.5 group-hover:text-[#003399] transition-colors leading-snug">{area.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{area.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-400">{sec.areasNote}</p>
        </section>
      )}

      {/* FORMATS */}
      {program.formats?.length > 0 && (
        <section className={program.areas ? 'bg-gray-50 border-y border-gray-100' : ''}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
            <p className="section-label">{sec.opportunities}</p>
            <h2 className="font-bold text-2xl text-gray-900 mb-8">{sec.opportunitiesHeading}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {program.formats.map((format, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                  <span className="text-2xl mb-3 block">{format.icon}</span>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{format.title}</h3>
                  <p className="text-xs font-medium text-emerald-600 mb-3">{format.duration}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{format.description}</p>
                  <ul className="space-y-1.5">
                    {format.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-emerald-500 mt-0.5 flex-shrink-0">{pp.checkmark}</span>{b}
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
        <section className="bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
            <p className="section-label">{sec.covered}</p>
            <h2 className="font-bold text-2xl text-gray-900 mb-8">{sec.coveredHeading}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {program.covered.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{item.title}</p>
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
        <section id="hur-det-fungerar" className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <p className="section-label">{sec.steps}</p>
          <h2 className="font-bold text-2xl text-gray-900 mb-10">{sec.stepsHeading}</h2>
          <div className="space-y-8">
            {program.steps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <span className="font-bold text-3xl text-gray-100 leading-none flex-shrink-0 w-10"
                  style={{ fontFamily: "'Syne',var(--font-syne),sans-serif" }}>{step.n}</span>
                <div className="pt-1 border-t border-gray-100 flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {program.faq?.length > 0 && (
        <section className="bg-gray-50 border-y border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
            <p className="section-label">{sec.faq}</p>
            <h2 className="font-bold text-2xl text-gray-900 mb-8">{sec.faqHeading}</h2>
            <FAQ items={program.faq} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 text-center">
          <h2 className="font-bold text-3xl text-white mb-2" style={{ fontFamily: "'Syne',var(--font-syne),sans-serif" }}>{pp.cta?.heading}</h2>
          <p className="text-gray-500 text-xs mb-8">{base.officialLabel}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={officialUrl} target="_blank" rel="noopener noreferrer"
               className="bg-[#003399] hover:bg-[#0040bb] text-white font-medium px-6 py-3 rounded-full transition-colors text-sm">{pp.cta?.btn1}</a>
            <Link href={`${lbase}#program`}
               className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium px-6 py-3 rounded-full transition-colors text-sm">{pp.cta?.btn2}</Link>
          </div>
          <p className="mt-8 text-xs text-gray-700 max-w-lg mx-auto">{base.source}</p>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <p className="section-label">{pp.related?.label}</p>
          <h2 className="font-bold text-xl text-gray-900 mb-6">{pp.related?.heading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((p) => <ProgramCard key={p.slug} program={p} locale={locale} t={t} />)}
          </div>
        </section>
      )}
    </>
  )
}
