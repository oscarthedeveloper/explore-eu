import Link from 'next/link'
import { programs } from '@/data/programs'
import ProgramFilter from '@/components/ProgramFilter'
import FAQ from '@/components/FAQ'
import AnimatedHero from '@/components/AnimatedHero'
import { getT, locales, getLocalizedPrograms } from '@/lib/i18n'

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function Home({ params }) {
  const { locale } = await params
  const t = await getT(locale)
  const h = t.home
  const base = `/${locale}`
  const localizedPrograms = await getLocalizedPrograms(programs, locale)

  return (
    <>
      <AnimatedHero t={t} locale={locale} />

      <section id="vad-ar-det" className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <div className="max-w-3xl">
            <p className="section-label">{h.what.label}</p>
            <h2 className="font-bold text-2xl text-gray-900 mb-3">{h.what.heading}</h2>
            <p className="text-gray-600 leading-relaxed">{h.what.body}</p>
          </div>
        </div>
      </section>

      <section id="program" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-8">
          <p className="section-label">{h.programs.label}</p>
          <h2 className="font-bold text-2xl text-gray-900">{h.programs.heading}</h2>
        </div>
        <ProgramFilter programs={localizedPrograms} t={t} locale={locale} />
      </section>

      <section id="hur-det-fungerar" className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <p className="section-label">{h.howItWorks.label}</p>
          <h2 className="font-bold text-2xl text-gray-900 mb-10">{h.howItWorks.heading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {h.howItWorks.steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <span className="font-bold text-3xl text-gray-100 leading-none flex-shrink-0"
                  style={{ fontFamily: "'Syne',var(--font-syne),sans-serif" }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <p className="section-label">{h.quickPicks.label}</p>
        <h2 className="font-bold text-2xl text-gray-900 mb-8">{h.quickPicks.heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {h.quickPicks.items.map((pick) => (
            <Link key={pick.slug} href={`${base}/program/${pick.slug}`}
              className="group flex gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:border-[#003399]/30 hover:shadow-sm transition-all duration-200">
              <span className="text-2xl flex-shrink-0">{pick.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#003399] transition-colors text-sm">{pick.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-2">{pick.desc}</p>
                <span className="text-xs font-medium text-emerald-600">{pick.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <p className="section-label">{h.faq.label}</p>
          <h2 className="font-bold text-2xl text-gray-900 mb-8">{h.faq.heading}</h2>
          <FAQ items={h.faq.items} />
        </div>
      </section>

      <section id="om" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-2xl">
          <p className="section-label">{h.about.label}</p>
          <h2 className="font-bold text-2xl text-gray-900 mb-4">{h.about.heading}</h2>
          <p className="text-gray-600 leading-relaxed mb-4">{h.about.p1}</p>
          <p className="text-gray-600 leading-relaxed">{h.about.p2}</p>
        </div>
      </section>

      <section className="bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="font-bold text-3xl text-white mb-3" style={{ fontFamily: "'Syne',var(--font-syne),sans-serif" }}>{h.cta.heading}</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">{h.cta.sub}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#program" className="bg-[#003399] hover:bg-[#0040bb] text-white font-medium px-6 py-3 rounded-full transition-colors text-sm">{h.cta.btn1}</a>
            <a href="https://youth.europa.eu" target="_blank" rel="noopener noreferrer"
               className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium px-6 py-3 rounded-full transition-colors text-sm">{h.cta.btn2}</a>
          </div>
        </div>
      </section>
    </>
  )
}
