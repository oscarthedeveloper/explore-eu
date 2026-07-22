import Link from 'next/link'

export default function ProgramCard({ program, locale, t }) {
  const filterT = t?.filter || {}
  const catLabelMap = {
    volontär:   filterT.volontär,
    utbildning: filterT.utbildning,
    resa:       filterT.resa,
    praktik:    filterT.praktik,
    jobb:       filterT.jobb,
    info:       filterT.info,
  }
  const catLabel = catLabelMap[program.category] || program.categoryLabel

  return (
    <Link
      href={`/${locale}/program/${program.slug}`}
      className="group relative flex flex-col p-5 transition-colors hover:bg-[var(--paper-2)]"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-2xl">{program.emoji}</span>
        <span className="chip">{catLabel}</span>
      </div>
      <h3 className="font-semibold mb-1.5 leading-snug text-sm transition-colors group-hover:text-[#003399]" style={{ color: 'var(--ink)' }}>
        {program.name}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{program.tagline}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        <span className="mono text-[10px] uppercase tracking-[0.08em] text-gray-500 border hair px-2 py-0.5">{program.ageRange}</span>
        <span className="mono text-[10px] uppercase tracking-[0.08em] text-gray-500 border hair px-2 py-0.5">{program.duration}</span>
      </div>
      <div className="mt-4 pt-4 hair-t flex items-center justify-between">
        <span className="mono text-[10.5px] uppercase tracking-[0.08em] text-[#003399]">{program.funding}</span>
        <svg className="w-4 h-4 text-gray-300 group-hover:text-[#003399] group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}
