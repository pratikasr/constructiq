'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TrendingDown, FileWarning, Layers, Wallet, Users, EyeOff } from 'lucide-react'
import { PROBLEMS } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

const ICONS = [TrendingDown, FileWarning, Layers, Wallet, Users, EyeOff]

export function ProblemSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) return

      // Card stagger
      gsap.fromTo(
        '.problem-card',
        { opacity: 0, y: 40, scale: 0.97, immediateRender: false },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: { each: 0.1, from: 'start' },
          scrollTrigger: { trigger: '.problem-grid', start: 'top 80%', toggleActions: 'play none none none' },
        },
      )

      // Underline draw
      gsap.fromTo(
        '.broken-underline',
        { strokeDashoffset: 220, immediateRender: false },
        {
          strokeDashoffset: 0,
          duration: 0.9,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: '.problem-title', start: 'top 75%' },
        },
      )

      // Stat count-ups (skip rows where stat is 0)
      const statElements = gsap.utils.toArray<HTMLElement>('.problem-stat')
      statElements.forEach((el) => {
        const target = parseInt(el.dataset.target || '0', 10)
        if (target === 0) return
        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: target,
            duration: 1.2,
            ease: 'power1.out',
            snap: { textContent: 1 },
            scrollTrigger: { trigger: el, start: 'top 85%' },
          },
        )
      })

      // Transition text
      gsap.fromTo(
        '.problem-transition-text',
        { opacity: 0, y: 20, immediateRender: false },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.problem-transition-text', start: 'top 90%' },
        },
      )
    },
    { scope: ref },
  )

  return (
    <section
      ref={ref}
      className="problem-section relative section-dark grain-overlay py-20 lg:py-32"
      aria-labelledby="problem-heading"
      style={{ backgroundColor: '#0D1B2A' }}
    >
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="pretitle">THE PROBLEM</p>
          <h2 id="problem-heading" className="problem-title font-display font-bold text-white mt-4 text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1]">
            Construction in India is{' '}
            <span className="relative inline-block">
              broken.
              <svg
                className="absolute left-0 -bottom-2 w-full"
                height="6"
                viewBox="0 0 220 6"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  className="broken-underline"
                  d="M 2 4 Q 30 1 60 4 T 130 4 Q 180 1 218 4"
                  stroke="var(--color-ciq-rebar)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="220"
                  strokeDashoffset="220"
                />
              </svg>
            </span>{' '}
            Nobody has fixed it.
          </h2>
          <p className="mt-6 text-base lg:text-lg text-[color:var(--color-ciq-concrete)] max-w-2xl">
            Six structural problems break the same way every quarter. The data is unambiguous.
          </p>
        </div>

        <div className="problem-grid mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROBLEMS.map((p, i) => {
            const Icon = ICONS[i]
            const accent = i === 5 ? 'var(--color-ciq-rebar)' : 'var(--color-ciq-safety)'
            return (
              <article
                key={p.title}
                className="problem-card group relative p-7 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] transition-colors overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                  }}
                />
                <Icon size={22} color={accent} />
                <h3 className="font-display font-semibold text-white mt-5 text-lg">{p.title}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  {p.prefix && <span className="text-2xl font-bold text-white">{p.prefix}</span>}
                  <span
                    className="problem-stat font-stat text-4xl lg:text-5xl text-white"
                    data-target={p.stat}
                    aria-live="polite"
                  >
                    {p.stat === 0 ? '0' : '0'}
                  </span>
                  {p.suffix && <span className="text-2xl font-bold" style={{ color: accent }}>{p.suffix}</span>}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-ciq-concrete)]">{p.desc}</p>
              </article>
            )
          })}
        </div>

        <p className="problem-transition-text mt-16 text-center font-display font-medium text-2xl md:text-3xl text-white max-w-2xl mx-auto">
          ConstructIQ changes this.{' '}
          <span style={{ color: 'var(--color-ciq-safety)' }}>One platform. Every stage.</span>
        </p>
      </div>
    </section>
  )
}
