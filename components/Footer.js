import Link from 'next/link'
import { programs } from '@/data/programs'

export default function Footer({ locale, t }) {
  const f = t?.footer || {}
  const base = `/${locale}`

  return (
    <footer>
      <div className="band is-ink is-footer is-last pt-12 pb-8">

        {/* meta row */}
        <div className="flex items-center justify-between pb-8 mb-10" style={{ borderBottom: '1px solid var(--hair-inv)' }}>
          <span className="mono text-[10.5px] uppercase tracking-[0.18em] text-gray-400">EU // OPPORTUNITIES</span>
          <span className="mono text-[10.5px] uppercase tracking-[0.18em] text-gray-400">{locale}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand + EU emblem */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#FFCC00]">★</span>
              <span className="text-white font-semibold text-sm" style={{ fontFamily: "'Syne',var(--font-syne),sans-serif" }}>EU Opportunities</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-300 mb-4">{f.tagline}</p>
            <p className="text-xs text-gray-500 mb-6">{f.disclaimer}</p>
            <div className="mt-4 flex justify-center">
              <a href="https://hvitstierna.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src="/eu-emblem/stiernaVIT.svg" alt="Logotyp" width={80} style={{ marginBottom: '10px' }} />
              </a>
            </div>
            <div className="pt-4">
              <img
                src="/eu-emblem/cofunded.png"
                alt="Co-funded by the European Union"
                width={200}
                style={{ height: 'auto' }}
              />
            </div>
          </div>

          {/* Program links */}
          <div>
            <p className="mono text-[10.5px] font-medium tracking-[0.18em] uppercase text-gray-400 mb-4">{f.programs}</p>
            <ul className="space-y-1.5">
              {programs.map((p) => (
                <li key={p.slug}>
                  <Link href={`${base}/program/${p.slug}`} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {p.emoji} {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official sources */}
          <div>
            <p className="mono text-[10.5px] font-medium tracking-[0.18em] uppercase text-gray-400 mb-4">{f.sources}</p>
            <ul className="space-y-1.5">
              {[
                { href: 'https://youth.europa.eu/solidarity_en', label: 'European Solidarity Corps' },
                { href: 'https://erasmus-plus.ec.europa.eu', label: 'Erasmus+' },
                { href: 'https://youth.europa.eu/discovereu_en', label: 'DiscoverEU' },
                { href: 'https://traineeships.ec.europa.eu', label: 'Blue Book Traineeship' },
                { href: 'https://www.europarl.europa.eu/traineeships', label: 'Schuman Traineeship' },
                { href: 'https://eures.europa.eu', label: 'EURES' },
                { href: 'https://eurodesk.eu', label: 'Eurodesk' },
                { href: 'https://youth.europa.eu', label: 'EU Youth Portal' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer"
                     className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                    {link.label}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between gap-2 mono text-[10.5px] uppercase tracking-[0.12em] text-gray-500" style={{ borderTop: '1px solid var(--hair-inv)' }}>
          <p>{f.unofficial}</p>
          <p>{f.date}</p>
        </div>
      </div>
    </footer>
  )
}
