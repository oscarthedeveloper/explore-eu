'use client'

import { useState } from 'react'

export default function FAQ({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div style={{ borderTop: '1px solid var(--hair)' }}>
      {items.map((item, i) => (
        <div key={i} className="hair-b">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left py-4 flex items-start justify-between gap-4 group"
          >
            <span className="flex items-baseline gap-3">
              <span className="mono text-[10.5px] tracking-[0.15em] text-gray-400 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-medium transition-colors group-hover:text-[#003399]" style={{ color: 'var(--ink)' }}>
                {item.q}
              </span>
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-transform ${open === i ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="pb-4 pl-8 text-gray-600 text-sm leading-relaxed">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  )
}
