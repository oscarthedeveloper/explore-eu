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
    <section ref={heroRef} className="relative overflow-hidden" style={{ background: 'var(--paper)' }}>
      {/* graph-paper grid, faded toward edges */}
      <div
        className="absolute inset-0 graph-bg pointer-events-none"
        style={{
          maskImage: 'radial-gradient(120% 92% at 50% 0%, #000 42%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(120% 92% at 50% 0%, #000 42%, transparent 80%)',
        }}
      />
      {/* soft EU-blue glow at the top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,51,153,0.06) 0%, transparent 70%)' }}
      />

      <div className="band relative pt-16 pb-20 text-center">

        {/* Pill */}
        <div className="anim-pill chip mb-9">
          <span>🌍</span> {h.pill}
        </div>

        {/* Heading */}
        <h1
          className="font-bold leading-[1.02] tracking-tight mb-0"
          style={{ fontFamily: "'Syne', var(--font-syne), sans-serif", fontSize: 'clamp(3rem, 9vw, 6.2rem)' }}
        >
          <span className="anim-line1 block" style={{ color: 'var(--ink)' }}>{h.line1}</span>
          <span className="anim-line2 block text-[#003399]">{h.line2}</span>
        </h1>

        {/* Yellow underline */}
        <div className="flex justify-center mt-3 mb-9">
          <div className="anim-underline h-[5px] rounded-sm" style={{ width: 'min(600px, 90vw)', background: '#FFCC00' }} />
        </div>

        {/* Subtitle */}
        <p className="anim-sub text-gray-500 text-lg leading-relaxed max-w-xl mx-auto mb-10">
          {h.sub}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          <a href="#program" className="anim-btn btn btn-primary">{h.cta1}</a>
          <a href="#vad-ar-det" className="anim-btn btn btn-ghost">{h.cta2}</a>
        </div>

        {/* Stats — hairline cell grid */}
        <div className="cellgrid grid grid-cols-2 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="anim-stat text-left p-5">
              <p className="font-bold leading-none mb-2" style={{ fontFamily: "'Syne', var(--font-syne), sans-serif", fontSize: '1.7rem', color: 'var(--ink)' }}>
                {stat.value}
              </p>
              <p className="mono text-[10px] uppercase tracking-[0.12em] text-gray-400 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
