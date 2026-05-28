'use client'

import { useState, useRef, useEffect } from 'react'
import { locales, localeNames } from '@/lib/i18n'

export default function LanguageSwitcher({ currentLocale }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const switchLocale = (newLocale) => {
    setOpen(false)
    // Hard reload so GSAP animations replay cleanly and all server content re-renders
    const parts = window.location.pathname.split('/')
    parts[1] = newLocale
    window.location.href = parts.join('/') || `/${newLocale}`
  }

  const current = localeNames[currentLocale]

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 px-2.5 py-1.5 rounded-md transition-colors border border-gray-200 hover:border-gray-300 bg-white"
        aria-label="Select language"
      >
        <span className="text-base leading-none">{current?.flag}</span>
        <span className="font-medium text-xs">{current?.label}</span>
        <svg className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 bg-white border border-gray-200 rounded-xl shadow-lg py-1.5 z-50 min-w-[150px]">
          {locales.map((locale) => {
            const info = localeNames[locale]
            const isActive = locale === currentLocale
            return (
              <button key={locale} onClick={() => switchLocale(locale)}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-sm transition-colors text-left ${
                  isActive ? 'bg-gray-50 text-gray-900 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}>
                <span className="text-base">{info.flag}</span>
                <span>{info.full}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
