'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Package, Truck, Wrench, Banknote, Brain, HardHat } from 'lucide-react'
import { PLATFORM_MODULES } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

const MODULE_ICONS = [Package, Truck, Wrench, Banknote, Brain, HardHat]

export function PlatformSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const isLarge = window.matchMedia('(min-width: 1024px)').matches
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) {
        gsap.set('.platform-module', { opacity: 1, x: 0 })
        return
      }

      if (!isLarge) {
        // Mobile: simple entrance per module
        gsap.utils.toArray<HTMLElement>('.platform-module').forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40, immediateRender: false },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
            },
          )
        })
        return
      }

      if (!ref.current) return

      // Pin the content area itself (not the section root) so content fills the full viewport
      // when it reaches the top — the header band scrolls away naturally before pinning begins.
      const pinInner = ref.current.querySelector<HTMLElement>('.platform-pin-inner')
      if (!pinInner) return

      // Desktop: pinned scroll-through. Total scroll = 5x viewport height (6 modules).
      const totalScroll = '+=500%'
      const stRef = ScrollTrigger.create({
        trigger: pinInner,
        pin: pinInner,
        start: 'top top',
        end: totalScroll,
        scrub: 0.5,
        snap: {
          snapTo: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
          duration: { min: 0.2, max: 0.4 },
          ease: 'power1.inOut',
        },
        anticipatePin: 1,
      })

      // Progress fill line
      gsap.fromTo(
        '.progress-line-fill',
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: { trigger: pinInner, start: 'top top', end: totalScroll, scrub: true },
        },
      )

      // Per-module cross-fade
      const modules = gsap.utils.toArray<HTMLElement>('.platform-module')
      const dots = gsap.utils.toArray<HTMLElement>('.progress-dot')
      const visuals = gsap.utils.toArray<HTMLElement>('.platform-visual')
      modules.forEach((m, i) => {
        const range = 1 / modules.length
        const startProgress = i * range
        gsap.set(m, { opacity: i === 0 ? 1 : 0, x: i === 0 ? 0 : 40 })
        gsap.set(visuals[i], { opacity: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 0.9 })

        ScrollTrigger.create({
          trigger: pinInner,
          start: 'top top',
          end: totalScroll,
          scrub: true,
          onUpdate: (self) => {
            const p = self.progress
            const localP = (p - startProgress) / range
            if (localP < 0) {
              gsap.set(m, { opacity: 0, x: 40 })
              gsap.set(visuals[i], { opacity: 0, scale: 0.9 })
            } else if (localP > 1) {
              gsap.set(m, { opacity: 0, x: -40 })
              gsap.set(visuals[i], { opacity: 0, scale: 0.9 })
            } else {
              // enter: 0→0.15, hold: 0.15→0.85, exit: 0.85→1
              // Module 0 skips enter animation (it's visible from the start)
              let opacity = 1
              let x = 0
              let scale = 1
              if (localP < 0.15 && i > 0) {
                const t = localP / 0.15
                opacity = t
                x = (1 - t) * 40
                scale = 0.9 + t * 0.1
              } else if (localP > 0.85) {
                const t = (localP - 0.85) / 0.15
                opacity = 1 - t
                x = -t * 40
                scale = 1 - t * 0.05
              }
              gsap.set(m, { opacity, x })
              gsap.set(visuals[i], { opacity, scale })
            }

            // Update progress dots
            const activeIndex = Math.min(Math.floor(p * modules.length), modules.length - 1)
            dots.forEach((d, di) => {
              d.classList.toggle('progress-dot-active', di === activeIndex)
            })
          },
        })
      })

      return () => {
        stRef.kill()
      }
    },
    { scope: ref },
  )

  return (
    <section
      ref={ref}
      className="platform-section relative section-dark"
      aria-labelledby="platform-heading"
      style={{ backgroundColor: '#0A1628' }}
    >
      {/* Header band */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 pt-24 lg:pt-32 pb-12">
        <p className="pretitle">THE PLATFORM</p>
        <h2 id="platform-heading" className="font-display font-bold text-white mt-4 text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] max-w-3xl">
          One platform. <span style={{ color: 'var(--color-ciq-safety)' }}>Every stage.</span>
        </h2>
        <p className="mt-5 text-base lg:text-lg text-[color:var(--color-ciq-concrete)] max-w-2xl">
          Six modules. Each one feeds the others — BOQ data drives material pricing, attendance data improves labour cost models, all of it makes bank loans possible.
        </p>
      </div>

      {/* Pinned area */}
      <div className="platform-pin-inner relative w-full min-h-screen lg:h-screen flex items-center">
        <div className="mx-auto max-w-[1280px] w-full px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Progress rail */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center gap-6 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/[0.08]">
              <div
                className="progress-line-fill w-full origin-top"
                style={{ backgroundColor: 'var(--color-ciq-safety)', height: '0%' }}
              />
            </div>
            <div className="relative z-10 flex flex-col gap-12">
              {PLATFORM_MODULES.map((m) => (
                <div
                  key={m.id}
                  className="progress-dot w-3 h-3 rounded-full border-2 border-white/30 bg-[var(--color-ciq-midnight)] transition-all"
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>

          {/* Module content */}
          <div className="lg:col-span-6 relative lg:min-h-[420px]">
            {PLATFORM_MODULES.map((m, i) => {
              const Icon = MODULE_ICONS[i]
              return (
                <article
                  key={m.id}
                  className="platform-module lg:absolute lg:inset-0 lg:flex lg:flex-col lg:justify-center py-12 lg:py-0"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex items-center justify-center w-10 h-10 rounded-md"
                      style={{ backgroundColor: `${m.accent}22`, color: m.accent }}
                    >
                      <Icon size={20} />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: m.accent }}>
                      {m.phase}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-white mt-5 text-[28px] md:text-[36px] lg:text-[44px] leading-[1.1]">
                    {m.title}
                  </h3>
                  <p className="mt-5 text-base lg:text-lg text-[color:var(--color-ciq-concrete)] max-w-xl leading-relaxed">
                    {m.desc}
                  </p>
                  <Link
                    href={m.href}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white hover:gap-3 transition-all"
                  >
                    Learn more
                    <ArrowUpRight size={16} />
                  </Link>
                </article>
              )
            })}
          </div>

          {/* Visual panel */}
          <div className="lg:col-span-5 relative h-[280px] lg:h-[440px] hidden lg:block">
            {PLATFORM_MODULES.map((m, i) => (
              <ModuleVisual key={m.id} index={i} accent={m.accent} />
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

function ModuleVisual({ index, accent }: { index: number; accent: string }) {
  return (
    <div className="platform-visual absolute inset-0 flex items-center justify-center">
      <div
        className="relative w-full h-full rounded-xl overflow-hidden border border-white/[0.08]"
        style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
      >
        {/* Module-specific abstract SVG */}
        <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
          {index === 0 && <BuildingsVisual accent={accent} />}
          {index === 1 && <SupplyChainVisual accent={accent} />}
          {index === 2 && <MapPinsVisual accent={accent} />}
          {index === 3 && <FinanceFlowVisual accent={accent} />}
          {index === 4 && <BlueprintAIVisual accent={accent} />}
          {index === 5 && <SitePhoneVisual accent={accent} />}
        </svg>
        {/* Corner brackets */}
        <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2" style={{ borderColor: accent, opacity: 0.5 }} />
        <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2" style={{ borderColor: accent, opacity: 0.5 }} />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2" style={{ borderColor: accent, opacity: 0.5 }} />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2" style={{ borderColor: accent, opacity: 0.5 }} />
      </div>
    </div>
  )
}

function BuildingsVisual({ accent }: { accent: string }) {
  return (
    <g>
      <rect x="40" y="280" width="60" height="100" stroke={accent} fill="none" strokeWidth="1.5" />
      <rect x="115" y="230" width="60" height="150" stroke={accent} fill="none" strokeWidth="1.5" />
      <rect x="190" y="180" width="60" height="200" stroke={accent} fill="none" strokeWidth="1.5" />
      <rect x="265" y="220" width="60" height="160" stroke={accent} fill="none" strokeWidth="1.5" />
      <rect x="340" y="260" width="20" height="120" stroke={accent} fill="none" strokeWidth="1.5" />
      {[40, 115, 190, 265].map((x) =>
        [0, 1, 2].map((i) => <rect key={`${x}-${i}`} x={x + 10 + i * 17} y={300 - i * 5} width="6" height="6" fill={accent} opacity={0.3} />),
      )}
      <line x1="20" y1="380" x2="380" y2="380" stroke="#94A3B8" strokeWidth="1" opacity="0.3" />
    </g>
  )
}

function SupplyChainVisual({ accent }: { accent: string }) {
  return (
    <g fontFamily="Inter" fontSize="11" fill="#94A3B8">
      <rect x="20" y="170" width="80" height="60" stroke={accent} fill="none" strokeWidth="1.5" />
      <text x="60" y="205" textAnchor="middle" fill="#94A3B8">FACTORY</text>
      <path d="M 105 200 L 165 200" stroke={accent} strokeWidth="1.5" strokeDasharray="5,3" />
      <g opacity="0.4">
        <circle cx="180" cy="200" r="14" stroke="#EF4444" fill="none" strokeWidth="1.5" />
        <line x1="170" y1="190" x2="190" y2="210" stroke="#EF4444" strokeWidth="2" />
      </g>
      <path d="M 200 200 L 250 200" stroke={accent} strokeWidth="1.5" strokeDasharray="5,3" />
      <rect x="255" y="170" width="60" height="60" stroke={accent} fill="none" strokeWidth="1.5" />
      <text x="285" y="205" textAnchor="middle">TRUCK</text>
      <path d="M 320 200 L 370 200" stroke={accent} strokeWidth="1.5" strokeDasharray="5,3" />
      <polygon points="380,180 380,220 370,220 380,200" stroke={accent} fill="none" strokeWidth="1.5" />
      <text x="200" y="280" textAnchor="middle" fontSize="10" fill="#94A3B8">Middlemen removed. Manufacturer → site.</text>
    </g>
  )
}

function MapPinsVisual({ accent }: { accent: string }) {
  return (
    <g>
      <circle cx="200" cy="200" r="160" stroke={accent} fill="none" strokeWidth="1" opacity="0.2" />
      <circle cx="200" cy="200" r="110" stroke={accent} fill="none" strokeWidth="1" opacity="0.25" />
      <circle cx="200" cy="200" r="60" stroke={accent} fill="none" strokeWidth="1" opacity="0.3" />
      {/* Center site */}
      <circle cx="200" cy="200" r="8" fill={accent} />
      <text x="200" y="190" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="#fff">Your site</text>
      {/* Equipment pins */}
      {[
        [130, 140],
        [280, 130],
        [310, 230],
        [100, 250],
        [240, 310],
        [340, 180],
        [110, 180],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="5" fill="#fff" opacity="0.85" />
          <line x1="200" y1="200" x2={x} y2={y} stroke={accent} strokeWidth="0.8" opacity="0.3" strokeDasharray="3,3" />
        </g>
      ))}
    </g>
  )
}

function FinanceFlowVisual({ accent }: { accent: string }) {
  return (
    <g fontFamily="Inter" fontSize="11" fill="#94A3B8">
      <rect x="30" y="50" width="80" height="60" stroke={accent} fill="none" strokeWidth="1.5" />
      <text x="70" y="85" textAnchor="middle">BOQ</text>
      <path d="M 115 80 L 280 80" stroke={accent} strokeWidth="1.5" strokeDasharray="5,3" />
      <rect x="285" y="50" width="80" height="60" stroke={accent} fill="none" strokeWidth="1.5" />
      <text x="325" y="85" textAnchor="middle">BANK</text>
      {[120, 200, 280, 360].map((y, i) => (
        <g key={i}>
          <circle cx="200" cy={y + 30} r="14" stroke={accent} fill="none" strokeWidth="1.5" />
          <text x="200" y={y + 35} textAnchor="middle" fontSize="10">M{i + 1}</text>
          <path d={`M 325 110 L 215 ${y + 25}`} stroke="#22C55E" strokeWidth="1" opacity="0.5" strokeDasharray="3,3" />
          <text x="225" y={y + 15} fontFamily="Inter" fontSize="10" fill="#22C55E">₹</text>
        </g>
      ))}
    </g>
  )
}

function BlueprintAIVisual({ accent }: { accent: string }) {
  return (
    <g>
      {/* Floor plan */}
      <g stroke={accent} fill="none" strokeWidth="1.2">
        <rect x="30" y="80" width="140" height="240" />
        <line x1="30" y1="180" x2="170" y2="180" />
        <line x1="100" y1="180" x2="100" y2="320" />
        <line x1="30" y1="240" x2="100" y2="240" />
      </g>
      {/* AI brain */}
      <circle cx="200" cy="200" r="22" stroke={accent} fill="none" strokeWidth="1.5" />
      <text x="200" y="205" textAnchor="middle" fontFamily="Inter" fontSize="11" fill="#fff" fontWeight="600">AI</text>
      <path d="M 174 200 L 178 200" stroke={accent} strokeWidth="1.5" />
      <path d="M 222 200 L 226 200" stroke={accent} strokeWidth="1.5" />
      {/* BOQ table */}
      <g stroke={accent} fill="none" strokeWidth="1">
        <rect x="240" y="80" width="130" height="240" />
        {[120, 160, 200, 240, 280].map((y) => (
          <line key={y} x1="240" y1={y} x2="370" y2={y} opacity="0.4" />
        ))}
        <line x1="305" y1="80" x2="305" y2="320" opacity="0.4" />
      </g>
      <text x="305" y="100" textAnchor="middle" fontFamily="Inter" fontSize="9" fill="#94A3B8">BOQ</text>
    </g>
  )
}

function SitePhoneVisual({ accent }: { accent: string }) {
  return (
    <g>
      {/* Phone */}
      <rect x="40" y="60" width="140" height="280" rx="14" stroke={accent} fill="none" strokeWidth="1.5" />
      <circle cx="110" cy="80" r="3" fill={accent} />
      <rect x="60" y="110" width="100" height="60" fill={accent} opacity="0.08" stroke={accent} strokeWidth="0.5" />
      <text x="110" y="135" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="#fff">✓ Marked in</text>
      <text x="110" y="152" textAnchor="middle" fontFamily="Inter" fontSize="9" fill="#94A3B8">07:42 · GPS verified</text>
      <rect x="60" y="180" width="100" height="50" fill="rgba(34,197,94,0.1)" stroke="#22C55E" strokeWidth="0.5" />
      <text x="110" y="200" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="#22C55E">Foundation 100%</text>
      <rect x="60" y="240" width="100" height="40" fill="rgba(245,158,11,0.1)" stroke={accent} strokeWidth="0.5" />
      <text x="110" y="265" textAnchor="middle" fontFamily="Inter" fontSize="10" fill={accent}>Walls 65%</text>
      {/* Right side: site photo zones */}
      <rect x="220" y="80" width="160" height="240" stroke={accent} fill="none" strokeWidth="1.2" />
      <rect x="220" y="80" width="160" height="80" fill="#22C55E" opacity="0.12" />
      <rect x="220" y="160" width="160" height="80" fill={accent} opacity="0.12" />
      <rect x="220" y="240" width="160" height="80" fill="#EF4444" opacity="0.12" />
      <text x="300" y="125" textAnchor="middle" fontFamily="Inter" fontSize="11" fill="#22C55E">Foundation</text>
      <text x="300" y="205" textAnchor="middle" fontFamily="Inter" fontSize="11" fill={accent}>Walls</text>
      <text x="300" y="285" textAnchor="middle" fontFamily="Inter" fontSize="11" fill="#EF4444">Plumbing</text>
    </g>
  )
}
