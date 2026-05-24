'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Home, Hammer, Boxes, Truck, Landmark, PencilRuler } from 'lucide-react'
import { AUDIENCES } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

const ICONS = [Home, Hammer, Boxes, Truck, Landmark, PencilRuler]

export function AudienceSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) return
      gsap.fromTo(
        '.audience-card',
        { opacity: 0, y: 40, immediateRender: false },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.audience-grid', start: 'top 80%' },
        },
      )
    },
    { scope: ref },
  )

  return (
    <section
      ref={ref}
      className="relative section-light py-24 lg:py-32"
      aria-labelledby="audience-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="pretitle">WHO IT SERVES</p>
          <h2
            id="audience-heading"
            className="font-display font-bold mt-4 text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05]"
            style={{ color: 'var(--color-ciq-midnight)' }}
          >
            Built for the people building India.
          </h2>
          <p className="mt-5 text-base lg:text-lg text-slate-600 max-w-2xl">
            Six audiences. One platform. Each one gets the data and tools the others lack.
          </p>
        </div>

        <div className="audience-grid mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {AUDIENCES.map((a, i) => {
            const Icon = ICONS[i]
            return <AudienceCard key={a.id} audience={a} Icon={Icon} />
          })}
        </div>
      </div>
    </section>
  )
}

function AudienceCard({
  audience,
  Icon,
}: {
  audience: (typeof AUDIENCES)[number]
  Icon: typeof Home
}) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, on: false })

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = x / rect.width
    const py = y / rect.height
    setTilt({ x: (py - 0.5) * -8, y: (px - 0.5) * 8 })
    setSpotlight({ x: px * 100, y: py * 100, on: true })
  }
  const reset = () => {
    setTilt({ x: 0, y: 0 })
    setSpotlight((s) => ({ ...s, on: false }))
  }

  return (
    <Link
      ref={cardRef}
      href={audience.href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="audience-card group relative block p-7 rounded-lg border border-slate-200 bg-white overflow-hidden transition-shadow hover:shadow-xl"
      style={{
        perspective: '1000px',
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d',
        transition: spotlight.on ? 'transform 80ms ease-out, box-shadow 200ms' : 'transform 400ms ease-out, box-shadow 200ms',
      }}
    >
      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-200"
        style={{
          background: `radial-gradient(200px circle at ${spotlight.x}% ${spotlight.y}%, rgba(245, 158, 11, 0.12), transparent 60%)`,
          opacity: spotlight.on ? 1 : 0,
        }}
      />
      <div className="relative" style={{ transform: 'translateZ(20px)' }}>
        <div className="flex items-center justify-between">
          <span
            className="inline-flex items-center justify-center w-11 h-11 rounded-md"
            style={{
              backgroundColor: 'rgba(30, 58, 95, 0.08)',
              color: 'var(--color-ciq-blueprint)',
            }}
          >
            <Icon size={20} />
          </span>
          <ArrowUpRight size={18} className="text-slate-400 group-hover:text-[color:var(--color-ciq-safety)] transition-colors" />
        </div>
        <h3 className="font-display font-semibold mt-5 text-xl" style={{ color: 'var(--color-ciq-midnight)' }}>
          For {audience.label}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{audience.value}</p>
      </div>
    </Link>
  )
}
