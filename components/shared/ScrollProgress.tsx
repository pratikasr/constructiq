'use client'

import { useEffect, useRef } from 'react'

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let rafId = 0

    const update = () => {
      const doc = document.documentElement
      const total = doc.scrollHeight - window.innerHeight
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0
      el.style.transform = `scaleX(${pct / 100})`
      rafId = 0
    }

    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[49] origin-left pointer-events-none"
      style={{ backgroundColor: 'var(--color-ciq-safety)', transform: 'scaleX(0)' }}
      ref={ref}
      role="progressbar"
      aria-label="Page scroll progress"
    />
  )
}
