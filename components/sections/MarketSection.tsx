'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MARKET } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

type StateInfo = { id: string; name: string; spend: string; pathD: string; tooltipPos: [number, number] }

// Simplified, stylized India outline + 4 highlighted state paths (Bihar, UP, Jharkhand, MP)
const INDIA_OUTLINE_D =
  'M 200 60 L 240 50 L 280 55 L 310 75 L 335 95 L 360 110 L 380 140 L 400 165 L 420 195 L 425 225 L 425 255 L 415 285 L 405 315 L 395 345 L 380 370 L 360 395 L 340 415 L 320 430 L 295 440 L 275 445 L 255 450 L 240 460 L 230 480 L 225 500 L 220 520 L 210 535 L 200 530 L 195 510 L 190 485 L 180 460 L 170 440 L 160 420 L 150 400 L 140 380 L 130 360 L 120 340 L 110 315 L 100 285 L 95 255 L 95 225 L 100 195 L 110 165 L 125 140 L 145 115 L 165 90 L 185 70 Z'

const HIGHLIGHTED: StateInfo[] = [
  { id: 'up', name: 'Uttar Pradesh', spend: '₹85,000 Cr', pathD: 'M 200 175 L 270 170 L 295 195 L 285 230 L 230 235 L 210 215 Z', tooltipPos: [245, 200] },
  { id: 'bihar', name: 'Bihar', spend: '₹38,000 Cr', pathD: 'M 290 200 L 335 195 L 345 225 L 320 245 L 290 235 Z', tooltipPos: [315, 220] },
  { id: 'jharkhand', name: 'Jharkhand', spend: '₹22,000 Cr', pathD: 'M 285 250 L 330 250 L 335 285 L 305 295 L 285 280 Z', tooltipPos: [310, 270] },
  { id: 'mp', name: 'Madhya Pradesh', spend: '₹68,000 Cr', pathD: 'M 165 235 L 245 240 L 260 285 L 220 305 L 175 290 L 160 265 Z', tooltipPos: [210, 270] },
]

export function MarketSection() {
  const ref = useRef<HTMLElement>(null)
  const [hovered, setHovered] = useState<StateInfo | null>(null)

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) {
        gsap.set('.tam-label', { opacity: 1, y: 0 })
        return
      }
      if (!ref.current) return

      // Set TAM labels initially hidden (GSAP will animate them in)
      gsap.set('.tam-label', { opacity: 0, y: 10 })

      // Map fade in + scale up
      gsap.fromTo(
        '.market-map',
        { scale: 0.85, opacity: 0, immediateRender: false },
        {
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%', end: 'top 40%', scrub: 0.4 },
        },
      )

      // Pulse on highlighted states
      gsap.to('.market-state-highlighted', {
        opacity: 0.7,
        duration: 1.6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      })

      // TAM/SAM/SOM circles
      const tam = document.querySelector('.tam-circle')
      const sam = document.querySelector('.sam-circle')
      const som = document.querySelector('.som-circle')
      if (tam && sam && som) {
        gsap.fromTo(
          '.tam-circle',
          { strokeDashoffset: 754, immediateRender: false },
          {
            strokeDashoffset: 0,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.tam-sam-som', start: 'top 80%' },
          },
        )
        gsap.fromTo(
          '.sam-circle',
          { strokeDashoffset: 503, immediateRender: false },
          {
            strokeDashoffset: 0,
            duration: 1.2,
            delay: 0.3,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.tam-sam-som', start: 'top 80%' },
          },
        )
        gsap.fromTo(
          '.som-circle',
          { strokeDashoffset: 251, immediateRender: false },
          {
            strokeDashoffset: 0,
            duration: 1.2,
            delay: 0.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.tam-sam-som', start: 'top 80%' },
          },
        )
        gsap.fromTo(
          '.tam-label',
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.3,
            delay: 1.0,
            scrollTrigger: { trigger: '.tam-sam-som', start: 'top 80%' },
          },
        )
      }

      // Segment bars
      gsap.fromTo(
        '.segment-bar',
        { scaleX: 0, immediateRender: false },
        {
          scaleX: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.12,
          transformOrigin: 'left',
          scrollTrigger: { trigger: '.segment-grid', start: 'top 80%' },
        },
      )
    },
    { scope: ref },
  )

  return (
    <section
      ref={ref}
      className="market-section relative section-dark grain-overlay py-24 lg:py-32 overflow-hidden"
      aria-labelledby="market-heading"
      style={{ backgroundColor: '#0A1628' }}
    >
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <p className="pretitle">{MARKET.pretitle}</p>
            <h2
              id="market-heading"
              className="font-display font-bold text-white mt-4 text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05]"
            >
              A <span style={{ color: 'var(--color-ciq-safety)' }}>₹20 lakh crore</span> market with no integrated platform.
            </h2>
            <p className="mt-6 text-base lg:text-lg text-[color:var(--color-ciq-concrete)] leading-relaxed">
              {MARKET.sub}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {MARKET.highlightedStates.map((s) => (
                <span
                  key={s}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border"
                  style={{
                    borderColor: 'rgba(245, 158, 11, 0.3)',
                    color: 'var(--color-ciq-safety)',
                    backgroundColor: 'rgba(245, 158, 11, 0.08)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* India Map */}
          <div className="lg:col-span-7 relative">
            <div className="market-map relative aspect-[5/6] max-w-[480px] mx-auto">
              <svg viewBox="50 30 400 530" className="w-full h-full" aria-label="Map of India with launch states highlighted">
                <defs>
                  <linearGradient id="indiaGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                <path d={INDIA_OUTLINE_D} fill="url(#indiaGrad)" stroke="#3B82F6" strokeWidth="1.2" strokeLinejoin="round" opacity="0.7" />
                {/* Inner grid lines */}
                <g stroke="#3B82F6" strokeWidth="0.5" opacity="0.15">
                  {[150, 200, 250, 300, 350, 400, 450, 500].map((y) => (
                    <line key={`h${y}`} x1="50" y1={y} x2="450" y2={y} />
                  ))}
                  {[100, 150, 200, 250, 300, 350, 400].map((x) => (
                    <line key={`v${x}`} x1={x} y1="30" x2={x} y2="560" />
                  ))}
                </g>
                {/* Highlighted states */}
                {HIGHLIGHTED.map((s) => (
                  <path
                    key={s.id}
                    className="market-state-highlighted cursor-pointer"
                    d={s.pathD}
                    fill="#F59E0B"
                    fillOpacity={hovered?.id === s.id ? 0.7 : 0.35}
                    stroke="#F59E0B"
                    strokeWidth="1.2"
                    onMouseEnter={() => setHovered(s)}
                    onMouseLeave={() => setHovered(null)}
                  />
                ))}
                {/* Pulses on state centers */}
                {HIGHLIGHTED.map((s) => (
                  <g key={`pulse-${s.id}`}>
                    <circle cx={s.tooltipPos[0]} cy={s.tooltipPos[1]} r="3" fill="#F59E0B" />
                    <circle cx={s.tooltipPos[0]} cy={s.tooltipPos[1]} r="3" fill="none" stroke="#F59E0B" strokeWidth="1">
                      <animate attributeName="r" from="3" to="14" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.8" to="0" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}
              </svg>
              {/* Tooltip */}
              {hovered && (
                <div
                  className="absolute pointer-events-none px-3 py-2 rounded-md border border-white/[0.1] bg-[var(--color-ciq-midnight)] shadow-2xl text-left"
                  style={{
                    left: `${(hovered.tooltipPos[0] / 500) * 100}%`,
                    top: `${(hovered.tooltipPos[1] / 590) * 100}%`,
                    transform: 'translate(-50%, -130%)',
                  }}
                  role="tooltip"
                >
                  <div className="font-display font-semibold text-sm text-white">{hovered.name}</div>
                  <div className="text-xs text-[color:var(--color-ciq-concrete)] mt-0.5">{hovered.spend} annual construction</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* TAM / SAM / SOM */}
        <div className="tam-sam-som mt-24 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-square max-w-[420px] mx-auto w-full">
            <svg viewBox="0 0 300 300" className="w-full h-full" aria-hidden="true">
              <circle
                className="tam-circle"
                cx="150"
                cy="150"
                r="120"
                fill="none"
                stroke="var(--color-ciq-blueprint)"
                strokeWidth="2"
                strokeDasharray="754"
                strokeDashoffset="754"
                transform="rotate(-90 150 150)"
              />
              <circle
                className="sam-circle"
                cx="150"
                cy="150"
                r="80"
                fill="none"
                stroke="var(--color-ciq-steel)"
                strokeWidth="2"
                strokeDasharray="503"
                strokeDashoffset="503"
                transform="rotate(-90 150 150)"
              />
              <circle
                className="som-circle"
                cx="150"
                cy="150"
                r="40"
                fill="none"
                stroke="var(--color-ciq-safety)"
                strokeWidth="3"
                strokeDasharray="251"
                strokeDashoffset="251"
                transform="rotate(-90 150 150)"
              />
              <text x="150" y="155" textAnchor="middle" fontFamily="var(--font-outfit)" fontWeight="700" fontSize="14" fill="#F59E0B">
                SOM
              </text>
            </svg>
          </div>

          <div className="space-y-6">
            {MARKET.tamSamSom.map((m) => (
              <div
                key={m.label}
                className="tam-label flex items-start gap-5 p-5 rounded-lg border border-white/[0.06] bg-white/[0.02]"
              >
                <div className="flex flex-col items-center min-w-[64px]">
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.15em]"
                    style={{ color: m.label === 'TAM' ? 'var(--color-ciq-blueprint)' : m.label === 'SAM' ? 'var(--color-ciq-steel)' : 'var(--color-ciq-safety)' }}
                  >
                    {m.label}
                  </span>
                  <span className="font-stat text-2xl mt-1 text-white">{m.value}</span>
                </div>
                <p className="text-sm text-[color:var(--color-ciq-concrete)] leading-relaxed pt-1">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-market segments */}
        <div className="segment-grid mt-24 grid grid-cols-1 md:grid-cols-2 gap-5">
          {MARKET.segments.map((s, i) => {
            const maxValue = 8.5
            const valueNumber = parseFloat(s.value.replace(/[^\d.]/g, ''))
            const pct = (valueNumber / maxValue) * 100
            return (
              <div key={s.label} className="p-5 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-[color:var(--color-ciq-concrete)]">{s.label}</span>
                  <span className="font-stat text-xl text-white">{s.value}</span>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
                  <div
                    className="segment-bar h-full rounded-full"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: i === 0 ? 'var(--color-ciq-safety)' : 'var(--color-ciq-steel)',
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
