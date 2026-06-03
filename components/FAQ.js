'use client'

import { useState } from 'react'

export default function FAQ({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div className="divide-y divide-gray-100">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left py-4 flex items-start justify-between gap-4 group"
          >
            <span className="font-medium text-gray-900 group-hover:text-emerald-700 transition-colors">
              {item.q}
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-transform ${
                open === i ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="pb-4 text-gray-600 text-sm leading-relaxed">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  )
}
