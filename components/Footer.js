import Link from 'next/link'
import { programs } from '@/data/programs'
import EUEmblem from './EUEmblem'

export default function Footer({ locale, t }) {
  const f = t?.footer || {}
  const base = `/${locale}`

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand + EU emblem (NEG = white text, correct for dark bg) */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-400">★</span>
              <span className="text-white font-semibold text-sm" style={{ fontFamily: "'Syne',var(--font-syne),sans-serif" }}>Explore EU</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">{f.tagline}</p>
            <p className="text-xs text-gray-600 mb-6">{f.disclaimer}</p>
            <div className="pt-4 border-t border-gray-800">
              <EUEmblem variant="neg" width={200} />
            </div>
          </div>

          {/* Program links — localized slugs, display translated name */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-600 mb-3">{f.programs}</p>
            <ul className="space-y-1.5">
              {programs.map((p) => (
                <li key={p.slug}>
                  <Link href={`${base}/program/${p.slug}`} className="text-sm hover:text-white transition-colors">
                    {p.emoji} {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official sources */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-600 mb-3">{f.sources}</p>
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
                     className="text-sm hover:text-white transition-colors flex items-center gap-1">
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

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-gray-600">
          <p>{f.unofficial}</p>
          <p>{f.date}</p>
        </div>
      </div>
    </footer>
  )
}
