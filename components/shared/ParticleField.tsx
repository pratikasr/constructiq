'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  opacityPhase: number
  shape: 'square' | 'circle' | 'line'
  swayPhase: number
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const isMobile = width < 1024

    const setSize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    setSize()

    const count = isMobile ? 22 : 55
    const particles: Particle[] = Array.from({ length: count }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: 0,
      vy: -(0.15 + Math.random() * 0.4),
      size: 2 + Math.random() * 4,
      opacity: 0.04 + Math.random() * 0.08,
      opacityPhase: Math.random() * Math.PI * 2,
      shape: ['square', 'circle', 'line'][Math.floor(Math.random() * 3)] as Particle['shape'],
      swayPhase: Math.random() * Math.PI * 2,
    }))

    let scrollOffset = 0
    let lastScrollY = window.scrollY
    const onScroll = () => {
      const dy = window.scrollY - lastScrollY
      scrollOffset += dy * 0.3
      lastScrollY = window.scrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', setSize)

    let raf = 0
    let visible = true
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
      },
      { threshold: 0 },
    )
    observer.observe(canvas)

    const startTime = performance.now()
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick)
      if (!visible) return
      ctx.clearRect(0, 0, width, height)
      const t = (now - startTime) / 1000

      // Decay scroll offset toward 0
      scrollOffset *= 0.94

      for (const p of particles) {
        p.y += p.vy
        const sway = Math.sin(t * 0.6 + p.swayPhase) * 10
        const xPos = p.x + sway + (isMobile ? 0 : scrollOffset * 0.15)
        const opacityOsc = p.opacity + Math.sin(t * 0.8 + p.opacityPhase) * 0.04

        ctx.fillStyle = `rgba(59, 130, 246, ${Math.max(0.02, opacityOsc)})`
        ctx.strokeStyle = `rgba(59, 130, 246, ${Math.max(0.02, opacityOsc)})`
        ctx.lineWidth = 1

        if (p.shape === 'square') {
          ctx.fillRect(xPos, p.y, p.size, p.size)
        } else if (p.shape === 'circle') {
          ctx.beginPath()
          ctx.arc(xPos, p.y, p.size / 2, 0, Math.PI * 2)
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.moveTo(xPos, p.y)
          ctx.lineTo(xPos + p.size * 2, p.y)
          ctx.stroke()
        }

        if (p.y < -10) {
          p.y = height + 10
          p.x = Math.random() * width
        }
      }
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', setSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[1]"
    />
  )
}
