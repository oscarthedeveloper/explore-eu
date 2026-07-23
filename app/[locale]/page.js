import Link from 'next/link'
import { programs } from '@/data/programs'
import ProgramFilter from '@/components/ProgramFilter'
import FAQ from '@/components/FAQ'
import AnimatedHero from '@/components/AnimatedHero'
import { getT, locales, getLocalizedPrograms } from '@/lib/i18n'

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

function Eyebrow({ index, label, center }) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${center ? 'justify-center' : ''}`} data-reveal-x>
      <span className="mono text-[10.5px] tracking-[0.2em] text-gray-400">{index}</span>
      <span className="block w-7 h-px" style={{ background: 'var(--hair-strong)' }} />
      <span className="section-label !mb-0">{label}</span>
    </div>
  )
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

      {/* WHAT */}
      <section id="vad-ar-det">
        <div className="band is-fill py-16">
          <div className="max-w-3xl">
            <Eyebrow index="01" label={h.what.label} />
            <h2 className="font-bold text-2xl mb-3" style={{ color: 'var(--ink)' }} data-reveal>{h.what.heading}</h2>
            <p className="text-gray-600 leading-relaxed" data-reveal>{h.what.body}</p>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="program">
        <div className="band py-16">
          <div className="mb-8">
            <Eyebrow index="02" label={h.programs.label} />
            <h2 className="font-bold text-2xl" style={{ color: 'var(--ink)' }} data-reveal>{h.programs.heading}</h2>
          </div>
          <ProgramFilter programs={localizedPrograms} t={t} locale={locale} />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="hur-det-fungerar">
        <div className="band is-fill py-16">
          <Eyebrow index="03" label={h.howItWorks.label} />
          <h2 className="font-bold text-2xl mb-10" style={{ color: 'var(--ink)' }} data-reveal>{h.howItWorks.heading}</h2>
          <div className="cellgrid grid grid-cols-1 sm:grid-cols-3">
            {h.howItWorks.steps.map((step, i) => (
              <div key={i} className="p-6" data-reveal style={{ '--d': `${i * 0.06}s` }}>
                <span className="mono text-xs tracking-[0.2em] text-gray-400">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-semibold mt-4 mb-1 text-sm" style={{ color: 'var(--ink)' }}>{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK PICKS */}
      <section>
        <div className="band py-16">
          <Eyebrow index="04" label={h.quickPicks.label} />
          <h2 className="font-bold text-2xl mb-8" style={{ color: 'var(--ink)' }} data-reveal>{h.quickPicks.heading}</h2>
          <div className="cellgrid grid grid-cols-1 sm:grid-cols-2">
            {h.quickPicks.items.map((pick, i) => (
              <Link key={pick.slug} href={`${base}/program/${pick.slug}`}
                className="group flex gap-4 p-5 transition-colors hover:bg-[var(--paper-2)]"
                data-reveal style={{ '--d': `${i * 0.05}s` }}>
                <span className="text-2xl flex-shrink-0">{pick.icon}</span>
                <div>
                  <h3 className="font-semibold mb-1 text-sm transition-colors group-hover:text-[#003399]" style={{ color: 'var(--ink)' }}>{pick.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-2">{pick.desc}</p>
                  <span className="mono text-[10.5px] uppercase tracking-wide text-[#003399]">{pick.cta}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="band is-fill py-16">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow index="05" label={h.faq.label} center />
            <h2 className="font-bold text-2xl mb-8" style={{ color: 'var(--ink)' }} data-reveal>{h.faq.heading}</h2>
            <div data-reveal className="text-left"><FAQ items={h.faq.items} /></div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="om">
        <div className="band py-16">
          <div className="max-w-2xl">
            <Eyebrow index="06" label={h.about.label} />
            <h2 className="font-bold text-2xl mb-4" style={{ color: 'var(--ink)' }} data-reveal>{h.about.heading}</h2>
            <p className="text-gray-600 leading-relaxed mb-4" data-reveal>{h.about.p1}</p>
            <p className="text-gray-600 leading-relaxed" data-reveal>{h.about.p2}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="band is-ink py-16 text-center">
          <h2 className="font-bold text-3xl mb-3 text-white" style={{ fontFamily: "'Syne',var(--font-syne),sans-serif" }} data-reveal>{h.cta.heading}</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto" data-reveal>{h.cta.sub}</p>
          <div className="flex flex-wrap gap-3 justify-center" data-reveal>
            <a href="#program" className="btn btn-primary">{h.cta.btn1}</a>
            <a href="https://youth.europa.eu" target="_blank" rel="noopener noreferrer" className="btn btn-inv">{h.cta.btn2}</a>
          </div>
        </div>
      </section>
    </>
  )
}
