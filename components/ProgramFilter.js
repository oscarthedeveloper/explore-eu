'use client'

import { useState } from 'react'
import ProgramCard from './ProgramCard'

export default function ProgramFilter({ programs, t, locale }) {
  const filterT = t?.filter || {}
  const filters = [
    { id: 'all',       label: filterT.all       || 'All' },
    { id: 'volontär',  label: filterT.volontär  || '🤝' },
    { id: 'utbildning',label: filterT.utbildning|| '🎓' },
    { id: 'resa',      label: filterT.resa      || '🚆' },
    { id: 'praktik',   label: filterT.praktik   || '📋' },
    { id: 'jobb',      label: filterT.jobb      || '💼' },
    { id: 'info',      label: filterT.info      || 'ℹ️' },
  ]

  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? programs : programs.filter((p) => p.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`text-sm px-4 py-1.5 rounded-full border transition-all font-medium ${
              active === f.id
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
            }`}
            style={{ fontFamily: "var(--font-ibm-plex-sans),'IBM Plex Sans',sans-serif" }}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((program) => (
          <ProgramCard key={program.slug} program={program} locale={locale} t={t} />
        ))}
      </div>
    </div>
  )
}
