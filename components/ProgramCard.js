import Link from 'next/link'

const categoryColors = {
  volontär:   'bg-blue-50   text-blue-700',
  utbildning: 'bg-violet-50 text-violet-700',
  resa:       'bg-amber-50  text-amber-700',
  praktik:    'bg-emerald-50 text-emerald-700',
  jobb:       'bg-teal-50   text-teal-700',
  info:       'bg-gray-100  text-gray-600',
}

export default function ProgramCard({ program, locale, t }) {
  const filterT = t?.filter || {}
  // Map category to translated label
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
      className="group flex flex-col bg-white border border-gray-200 rounded-xl p-5 hover:border-[#003399]/25 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-2xl">{program.emoji}</span>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[program.category] || 'bg-gray-100 text-gray-600'}`}>
          {catLabel}
        </span>
      </div>
      <h3 className="font-semibold text-gray-900 mb-1.5 group-hover:text-[#003399] transition-colors leading-snug text-sm">
        {program.name}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{program.tagline}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        <span className="text-xs bg-gray-50 text-gray-500 border border-gray-100 px-2 py-0.5 rounded-full">{program.ageRange}</span>
        <span className="text-xs bg-gray-50 text-gray-500 border border-gray-100 px-2 py-0.5 rounded-full">{program.duration}</span>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs font-medium text-emerald-600">{program.funding}</span>
        <svg className="w-4 h-4 text-gray-300 group-hover:text-[#003399] group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}
