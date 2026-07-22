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
    <div data-reveal>
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => {
          const on = active === f.id
          return (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className="mono text-[11px] uppercase tracking-[0.1em] px-3.5 py-2 rounded-[2px] border transition-colors"
              style={
                on
                  ? { background: 'var(--ink)', color: '#fff', borderColor: 'var(--ink)' }
                  : { background: 'transparent', color: 'var(--ink-soft)', borderColor: 'var(--hair)' }
              }
            >
              {f.label}
            </button>
          )
        })}
      </div>
      <div className="cellgrid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((program) => (
          <ProgramCard key={program.slug} program={program} locale={locale} t={t} />
        ))}
      </div>
    </div>
  )
}
