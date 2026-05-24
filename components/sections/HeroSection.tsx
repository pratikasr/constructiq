'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowRight, Play } from 'lucide-react'
import { HERO } from '@/lib/constants'

const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 rounded-lg border border-white/[0.08] bg-white/[0.02] animate-pulse" />
    </div>
  ),
})

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) {
        gsap.set('.hero-pretitle, .hero-headline .word > span, .hero-subheadline, .hero-ctas, .hero-trust, .hero-stat-badge, .hero-canvas-wrapper', {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
        })
        return
      }

      const tl = gsap.timeline({ delay: 0.2 })

      tl.fromTo(
        '.hero-pretitle',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      )
        .fromTo(
          '.hero-headline .word > span',
          { y: '110%', rotateX: 10 },
          { y: '0%', rotateX: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08 },
          '-=0.2',
        )
        .fromTo(
          '.hero-subheadline',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.3',
        )
        .fromTo(
          '.hero-ctas',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          '-=0.2',
        )
        .fromTo(
          '.hero-trust',
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: 'power1.out' },
          '-=0.1',
        )
        .fromTo(
          '.hero-stat-badge',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.12 },
          '-=0.2',
        )
        .fromTo(
          '.hero-canvas-wrapper',
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out' },
          0.5,
        )
    },
    { scope: containerRef },
  )

  return (
    <section
      ref={containerRef}
      className="hero-section relative bg-blueprint overflow-hidden grain-overlay"
      aria-label="Hero"
    >
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 lg:pb-24 min-h-screen flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">
          {/* Left: text content */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="hero-pretitle pretitle flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-block w-8 h-[2px]"
                style={{ backgroundColor: 'var(--color-ciq-safety)' }}
              />
              {HERO.pretitle}
            </div>

            <h1 className="hero-headline font-display font-extrabold text-white mt-6 text-[40px] leading-[1.05] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] tracking-[-0.02em]">
              {HERO.headlineWords.map((word, i) => (
                <span key={i} className="word word-mask mr-[0.25em] last:mr-0">
                  <span>
                    {i === HERO.headlineWords.length - 1 ? (
                      <>
                        {word.replace('.', '')}
                        <span style={{ color: 'var(--color-ciq-safety)' }}>.</span>
                      </>
                    ) : (
                      word
                    )}
                  </span>
                </span>
              ))}
            </h1>

            <p className="hero-subheadline mt-6 max-w-[600px] text-base md:text-lg text-[color:var(--color-ciq-concrete)] leading-relaxed">
              {HERO.sub}
            </p>

            <div className="hero-ctas mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={HERO.primaryCta.href}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: 'var(--color-ciq-safety)', color: 'var(--color-ciq-midnight)' }}
              >
                {HERO.primaryCta.label}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={HERO.secondaryCta.href}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm border border-white/[0.18] text-white hover:bg-white/[0.04] transition-colors"
              >
                <Play size={14} fill="currentColor" />
                {HERO.secondaryCta.label}
              </a>
            </div>

            <p className="hero-trust mt-10 text-xs uppercase tracking-[0.15em] text-[color:var(--color-ciq-concrete)] flex items-center gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#22C55E' }} />
              {HERO.trustNote}
            </p>
          </div>

          {/* Right: 3D scene */}
          <div className="lg:col-span-5 relative h-[420px] sm:h-[520px] lg:h-[640px]">
            <div
              className="hero-canvas-wrapper absolute inset-0"
              role="img"
              aria-label="Interactive 3D model of a building under construction with crane and materials"
            >
              <HeroScene />
            </div>
            {/* Decorative blueprint corner brackets */}
            <CornerBrackets />
          </div>
        </div>

        {/* Stat badges */}
        <div className="mt-12 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {HERO.stats.map((s) => (
            <div
              key={s.label}
              className="hero-stat-badge relative p-5 rounded-lg border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm"
            >
              <div className="absolute top-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-[color:var(--color-ciq-safety)] to-transparent opacity-50" />
              <div className="font-stat text-3xl md:text-4xl text-white">{s.value}</div>
              <div className="mt-1 text-xs text-[color:var(--color-ciq-concrete)] uppercase tracking-[0.1em]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const BRACKET_STROKE = 'rgba(245, 158, 11, 0.5)'
const BRACKET_SIZE = 18

const BRACKET_PATHS: Record<string, string> = {
  'top-0 left-0': 'M 1 8 L 1 1 L 8 1',
  'top-0 right-0': 'M 17 8 L 17 1 L 10 1',
  'bottom-0 left-0': 'M 1 10 L 1 17 L 8 17',
  'bottom-0 right-0': 'M 17 10 L 17 17 L 10 17',
}

function Corner({ pos }: { pos: keyof typeof BRACKET_PATHS }) {
  return (
    <svg
      width={BRACKET_SIZE}
      height={BRACKET_SIZE}
      viewBox="0 0 18 18"
      className={`absolute ${pos} pointer-events-none`}
      aria-hidden="true"
    >
      <path d={BRACKET_PATHS[pos]} stroke={BRACKET_STROKE} strokeWidth={1.2} fill="none" />
    </svg>
  )
}

function CornerBrackets() {
  return (
    <>
      <Corner pos="top-0 left-0" />
      <Corner pos="top-0 right-0" />
      <Corner pos="bottom-0 left-0" />
      <Corner pos="bottom-0 right-0" />
    </>
  )
}
