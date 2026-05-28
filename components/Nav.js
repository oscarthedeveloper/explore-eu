'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

export default function Nav({ locale, t }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = t?.nav || {}
  const base = `/${locale}`

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-[0_1px_0_#e5e7eb]' : ''}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[60px]">

          {/* Logo */}
          <Link href={base} className="flex items-center gap-2 flex-shrink-0">
            <span className="text-yellow-400 text-sm">★</span>
            <span className="font-bold text-[#003399] text-sm tracking-tight"
              style={{ fontFamily: "'Syne', var(--font-syne), sans-serif" }}>
              Explore EU
            </span>
          </Link>

          {/* Desktop: nav links + apply btn + language (far right) */}
          <div className="hidden md:flex items-center gap-0.5">
            <Link href={`${base}/#program`} className="text-sm text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md transition-colors whitespace-nowrap">{nav.allPrograms}</Link>
            <Link href={`${base}/#hur-det-fungerar`} className="text-sm text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md transition-colors whitespace-nowrap">{nav.howItWorks}</Link>
            <Link href={`${base}/#om`} className="text-sm text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md transition-colors whitespace-nowrap">{nav.about}</Link>
            <a href="https://youth.europa.eu" target="_blank" rel="noopener noreferrer"
               className="ml-2 text-sm font-medium bg-[#003399] hover:bg-[#0040bb] text-white px-5 py-2 rounded-full transition-all duration-200 whitespace-nowrap">
              {nav.applyNow}
            </a>
            {/* Language switcher — far right edge */}
            <div className="ml-3">
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>

          {/* Mobile: language + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher currentLocale={locale} />
            <button onClick={() => setOpen(!open)} className="text-gray-500 hover:text-gray-900 p-1.5 rounded transition-colors" aria-label="Open menu">
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-[1.5px] bg-current transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-64 pb-4' : 'max-h-0'}`}>
          <div className="border-t border-gray-100 pt-3 flex flex-col gap-1">
            <Link href={`${base}/#program`} onClick={() => setOpen(false)} className="text-sm text-gray-600 hover:text-gray-900 px-2 py-2.5 rounded">{nav.allPrograms}</Link>
            <Link href={`${base}/#hur-det-fungerar`} onClick={() => setOpen(false)} className="text-sm text-gray-600 hover:text-gray-900 px-2 py-2.5 rounded">{nav.howItWorks}</Link>
            <Link href={`${base}/#om`} onClick={() => setOpen(false)} className="text-sm text-gray-600 hover:text-gray-900 px-2 py-2.5 rounded">{nav.about}</Link>
            <a href="https://youth.europa.eu" target="_blank" rel="noopener noreferrer"
               className="mt-2 text-sm font-medium bg-[#003399] text-white px-5 py-2.5 rounded-full text-center">{nav.applyNow}</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
