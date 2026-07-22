'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Shared Lenis instance across route changes (layout persists)
let lenisSingleton = null

export default function SmoothScroll() {
  const pathname = usePathname()

  // ── init once: Lenis smooth scroll + GSAP ticker + progress + anchors ──
  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const bar = document.getElementById('scroll-progress')
    const setProgress = (p) => {
      if (bar) bar.style.transform = `scaleX(${Math.min(1, Math.max(0, p || 0))})`
    }
    const nativeProgress = () => {
      const h = document.documentElement
      setProgress(h.scrollHeight > h.clientHeight ? h.scrollTop / (h.scrollHeight - h.clientHeight) : 0)
    }

    // Reduced motion: native scroll + progress only, no smoothing.
    if (reduce) {
      window.addEventListener('scroll', nativeProgress, { passive: true })
      nativeProgress()
      return () => window.removeEventListener('scroll', nativeProgress)
    }

    let killed = false
    const cleanup = []

    ;(async () => {
      // Lenis is optional — degrade to native smooth scroll if unavailable.
      let Lenis = null
      try { Lenis = (await import('lenis')).default } catch { Lenis = null }
      const { gsap } = await import('gsap')
      if (killed) return

      if (Lenis) {
        const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, wheelMultiplier: 1 })
        lenisSingleton = lenis
        lenis.on('scroll', (e) => setProgress(e.progress))
        const raf = (time) => lenis.raf(time * 1000)
        gsap.ticker.add(raf)
        gsap.ticker.lagSmoothing(0)
        cleanup.push(() => { gsap.ticker.remove(raf); lenis.destroy(); lenisSingleton = null })

        const onClick = (ev) => {
          const a = ev.target.closest ? ev.target.closest('a[href]') : null
          if (!a) return
          const href = a.getAttribute('href')
          if (!href || href === '#') return
          let url
          try { url = new URL(href, window.location.href) } catch { return }
          if (url.pathname === window.location.pathname && url.hash) {
            const el = document.querySelector(url.hash)
            if (el) { ev.preventDefault(); lenis.scrollTo(el, { offset: -72 }) }
          }
        }
        document.addEventListener('click', onClick)
        cleanup.push(() => document.removeEventListener('click', onClick))
      } else {
        // Native fallback
        window.addEventListener('scroll', nativeProgress, { passive: true })
        nativeProgress()
        cleanup.push(() => window.removeEventListener('scroll', nativeProgress))
        const onClick = (ev) => {
          const a = ev.target.closest ? ev.target.closest('a[href]') : null
          if (!a) return
          const href = a.getAttribute('href')
          if (!href || href === '#') return
          let url
          try { url = new URL(href, window.location.href) } catch { return }
          if (url.pathname === window.location.pathname && url.hash) {
            const el = document.querySelector(url.hash)
            if (el) { ev.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
          }
        }
        document.addEventListener('click', onClick)
        cleanup.push(() => document.removeEventListener('click', onClick))
      }
    })()

    return () => { killed = true; cleanup.forEach((fn) => fn()) }
  }, [])

  // ── reveals via IntersectionObserver, rebuilt on every route change ──
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (lenisSingleton) lenisSingleton.scrollTo(0, { immediate: true })

    const els = Array.from(document.querySelectorAll('[data-reveal], [data-reveal-x]'))
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    )

    const id = requestAnimationFrame(() => {
      els.forEach((el) => { el.classList.remove('is-in'); io.observe(el) })
    })

    return () => { cancelAnimationFrame(id); io.disconnect() }
  }, [pathname])

  return null
}
