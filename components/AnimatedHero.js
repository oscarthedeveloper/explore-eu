'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedHero({ t, locale }) {
  const heroRef = useRef(null)
  const h = t?.hero || {}

  useEffect(() => {
    let ctx
    const init = async () => {
      const { gsap } = await import('gsap')
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.from('.anim-pill',      { opacity: 0, y: -18, duration: 0.55 })
          .from('.anim-line1',     { opacity: 0, y: 52,  duration: 0.75 }, '-=0.25')
          .from('.anim-line2',     { opacity: 0, y: 52,  duration: 0.75 }, '-=0.60')
          .from('.anim-underline', { scaleX: 0, transformOrigin: 'left center', duration: 0.85, ease: 'power2.inOut' }, '-=0.30')
          .from('.anim-sub',       { opacity: 0, y: 22,  duration: 0.60 }, '-=0.50')
          .from('.anim-btn',       { opacity: 0, y: 14,  duration: 0.50, stagger: 0.10 }, '-=0.40')
          .from('.anim-stat',      { opacity: 0, y: 18,  duration: 0.45, stagger: 0.08 }, '-=0.30')
      }, heroRef)
    }
    init()
    return () => ctx?.revert()
  }, [])

  const stats = t?.stats || []

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #eef2ff 0%, #f5f7ff 40%, #ffffff 100%)' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,51,153,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-24 text-center">

        {/* Pill */}
        <div
          className="anim-pill inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-500 text-xs px-4 py-2 rounded-full mb-10 shadow-sm"
          style={{ fontFamily: "var(--font-ibm-plex-sans),'IBM Plex Sans',sans-serif" }}
        >
          🌍 {h.pill}
        </div>

        {/* Heading — 'Syne' FIRST in the font stack so direct CDN load takes priority */}
        <h1
          className="font-bold leading-[1.02] tracking-tight mb-0"
          style={{
            fontFamily: "'Syne', var(--font-syne), sans-serif",
            fontSize: 'clamp(3rem, 9vw, 6.2rem)',
          }}
        >
          <span className="anim-line1 block text-gray-950">{h.line1}</span>
          <span className="anim-line2 block text-[#003399]">{h.line2}</span>
        </h1>

        {/* Yellow underline */}
        <div className="flex justify-center mt-3 mb-9">
          <div
            className="anim-underline h-[5px] rounded-sm"
            style={{ width: 'min(600px, 90vw)', background: '#FFCC00' }}
          />
        </div>

        {/* Subtitle */}
        <p
          className="anim-sub text-gray-500 text-lg leading-relaxed max-w-xl mx-auto mb-10"
          style={{ fontFamily: "var(--font-ibm-plex-sans),'IBM Plex Sans',sans-serif" }}
        >
          {h.sub}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-20">
          <a href="#program" className="anim-btn inline-flex items-center bg-[#003399] hover:bg-[#0040bb] text-white font-medium px-6 py-3 rounded-full transition-all duration-200 text-sm shadow-sm"
            style={{ fontFamily: "var(--font-ibm-plex-sans),'IBM Plex Sans',sans-serif" }}>
            {h.cta1}
          </a>
          <a href="#vad-ar-det" className="anim-btn inline-flex items-center border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-6 py-3 rounded-full transition-all duration-200 text-sm"
            style={{ fontFamily: "var(--font-ibm-plex-sans),'IBM Plex Sans',sans-serif" }}>
            {h.cta2}
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 pt-10 border-t border-gray-200">
          {stats.map((stat, i) => (
            <div key={i} className="anim-stat text-left">
              <p className="font-bold leading-none mb-1" style={{ fontFamily: "'Syne', var(--font-syne), sans-serif", fontSize: '1.65rem' }}>
                {stat.value}
              </p>
              <p className="text-xs text-gray-400 leading-snug" style={{ fontFamily: "var(--font-ibm-plex-sans),'IBM Plex Sans',sans-serif" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
