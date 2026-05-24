'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MARKET } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

type StateInfo = { id: string; name: string; spend: string; pathD: string; tooltipPos: [number, number] }

// ViewBox: "50 25 410 545"  (x: 50→460, y: 25→570)
// Points derived from geographic coordinates:
//   x = 50 + (lon°E − 68) × 14.1   (scale: 410/29)
//   y = 25 + (37 − lat°N) × 18.8   (scale: 545/29)
const INDIA_OUTLINE_D = [
  'M 132 46',  // J&K / Jammu (74°E, 36°N)
  'L 155 27',  // Himachal / Punjab hills (76°E, 33.5°N ← top edge)
  'L 200 27',  // Uttarakhand / Nepal W border (79°E)
  'L 252 29',  // UP / Nepal border mid (82.7°E)
  'L 296 36',  // Bihar / Nepal border (81.7°E, 29.6°N)
  'L 324 47',  // Sikkim / Bhutan (87°E, 28.4°N)
  'L 350 62',  // Assam W (89°E, 27.5°N)
  'L 378 80',  // Assam / Arunachal (91°E, 26.5°N)
  'L 408 100', // Arunachal Pradesh (93°E, 25.4°N)
  'L 440 128', // Arunachal NE corner (97°E, 27.7°N)
  'L 430 162', // Nagaland (96.3°E, 26°N)
  'L 410 196', // Manipur (95°E, 24.1°N)
  'L 386 228', // Mizoram / Bangladesh (93.2°E, 22.5°N)
  'L 368 255', // WB coast / Bay start (91°E, 21.1°N)
  'L 354 282', // Bay of Bengal (WB / Odisha) (89.8°E, 19.6°N)
  'L 340 320', // Odisha coast (89°E, 17.6°N)
  'L 328 362', // AP coast (88.2°E, 15.4°N)
  'L 308 406', // AP / TN border (87°E, 13°N)
  'L 284 448', // TN NE coast (85.4°E, 10.8°N)
  'L 258 484', // TN E coast (83.6°E, 9°N)
  'L 238 514', // S Tamil Nadu (82.2°E, 7.5°N)
  'L 228 537', // Kanyakumari tip (81.5°E, 6.3°N)
  'L 218 522', // Kerala coast start (80.8°E, 7.1°N)
  'L 205 492', // Kerala mid (80°E, 8.7°N)
  'L 190 460', // Kerala / Karnataka (79.1°E, 10.5°N)
  'L 172 422', // Karnataka coast (77.9°E, 12.6°N)
  'L 158 384', // Goa (76.9°E, 14.7°N)
  'L 143 344', // Maharashtra Konkan (76°E, 16.8°N)
  'L 126 302', // Near Mumbai (74.9°E, 19°N)
  'L 110 264', // Gujarat / Maharashtra border (74°E, 21.1°N)
  'L 93 232',  // Gujarat S coast (73°E, 22.8°N)
  'L 73 244',  // Saurashtra W indent (71.6°E, 22.1°N)
  'L 60 220',  // Gulf of Kutch / Pakistan (69.9°E, 23.4°N)
  'L 67 192',  // Gujarat / Rajasthan NW (70.4°E, 24.9°N)
  'L 80 162',  // Rajasthan / Pakistan border (71.3°E, 26.5°N)
  'L 100 128', // Punjab / Rajasthan (72.7°E, 28.4°N)
  'L 118 98',  // Punjab / J&K (73.9°E, 30°N)
  'L 132 66',  // J&K lower
  'Z',
].join(' ')

// State polygons — centres approx:
//   UP  (80.7°E, 26.8°N) → (225, 213)
//   Bihar (85.3°E, 25.8°N) → (289, 232)
//   Jharkhand (85.8°E, 23.5°N) → (296, 275)
//   MP  (78.7°E, 23.3°N) → (197, 279)
const HIGHLIGHTED: StateInfo[] = [
  {
    id: 'up',
    name: 'Uttar Pradesh',
    spend: '₹85,000 Cr',
    pathD: 'M 176 152 L 274 148 L 284 192 L 276 268 L 224 274 L 176 260 L 160 226 Z',
    tooltipPos: [225, 210],
  },
  {
    id: 'bihar',
    name: 'Bihar',
    spend: '₹38,000 Cr',
    pathD: 'M 268 200 L 330 196 L 338 230 L 316 260 L 268 256 Z',
    tooltipPos: [300, 228],
  },
  {
    id: 'jharkhand',
    name: 'Jharkhand',
    spend: '₹22,000 Cr',
    pathD: 'M 268 260 L 322 256 L 328 294 L 295 310 L 268 296 Z',
    tooltipPos: [298, 278],
  },
  {
    id: 'mp',
    name: 'Madhya Pradesh',
    spend: '₹68,000 Cr',
    pathD: 'M 136 218 L 254 212 L 272 252 L 258 316 L 214 322 L 160 306 L 132 270 Z',
    tooltipPos: [200, 268],
  },
]

export function MarketSection() {
  const ref = useRef<HTMLElement>(null)
  const [hovered, setHovered] = useState<StateInfo | null>(null)

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) return
      if (!ref.current) return

      // Map fade-in + scale-up on scroll
      gsap.fromTo(
        '.market-map',
        { scale: 0.88, opacity: 0, immediateRender: false },
        {
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%', end: 'top 40%', scrub: 0.4 },
        },
      )

      // Gentle pulse on state fills
      gsap.to('.market-state-highlighted', {
        opacity: 0.72,
        duration: 1.6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      })

      // TAM/SAM/SOM circles draw-in on scroll
      const tamEl = ref.current.querySelector('.tam-circle')
      const samEl = ref.current.querySelector('.sam-circle')
      const somEl = ref.current.querySelector('.som-circle')
      const tamTrig = ref.current.querySelector('.tam-sam-som')
      if (tamEl && samEl && somEl && tamTrig) {
        const st = { trigger: tamTrig as Element, start: 'top 82%' }
        gsap.fromTo('.tam-circle', { strokeDashoffset: 754, immediateRender: false }, { strokeDashoffset: 0, duration: 1.4, ease: 'power2.out', scrollTrigger: st })
        gsap.fromTo('.sam-circle', { strokeDashoffset: 503, immediateRender: false }, { strokeDashoffset: 0, duration: 1.4, delay: 0.25, ease: 'power2.out', scrollTrigger: st })
        gsap.fromTo('.som-circle', { strokeDashoffset: 251, immediateRender: false }, { strokeDashoffset: 0, duration: 1.4, delay: 0.5, ease: 'power2.out', scrollTrigger: st })
      }
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

        {/* ── Headline + Map ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <p className="pretitle">{MARKET.pretitle}</p>
            <h2
              id="market-heading"
              className="font-display font-bold text-white mt-4 text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05]"
            >
              A <span style={{ color: 'var(--color-ciq-safety)' }}>₹20 lakh crore</span>{' '}
              market with no integrated platform.
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
                    borderColor: 'rgba(245,158,11,0.3)',
                    color: 'var(--color-ciq-safety)',
                    backgroundColor: 'rgba(245,158,11,0.08)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* India Map */}
          <div className="lg:col-span-7 relative">
            <div className="market-map relative aspect-[4/5] max-w-[460px] mx-auto">
              <svg
                viewBox="50 25 410 545"
                className="w-full h-full"
                aria-label="Map of India highlighting Bihar, UP, Jharkhand and Madhya Pradesh"
              >
                <defs>
                  <linearGradient id="indiaGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0.18" />
                  </linearGradient>
                  <filter id="stateGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Blueprint grid */}
                <g stroke="#3B82F6" strokeWidth="0.4" opacity="0.1">
                  {[100, 150, 200, 250, 300, 350, 400, 450, 500].map((y) => (
                    <line key={`h${y}`} x1="50" y1={y} x2="460" y2={y} />
                  ))}
                  {[100, 150, 200, 250, 300, 350, 400, 450].map((x) => (
                    <line key={`v${x}`} x1={x} y1="25" x2={x} y2="570" />
                  ))}
                </g>

                {/* India outline */}
                <path
                  d={INDIA_OUTLINE_D}
                  fill="url(#indiaGrad)"
                  stroke="#3B82F6"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  opacity="0.85"
                />

                {/* Highlighted states */}
                {HIGHLIGHTED.map((s) => (
                  <path
                    key={s.id}
                    className="market-state-highlighted cursor-pointer"
                    d={s.pathD}
                    fill="#F59E0B"
                    fillOpacity={hovered?.id === s.id ? 0.78 : 0.30}
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    filter={hovered?.id === s.id ? 'url(#stateGlow)' : undefined}
                    onMouseEnter={() => setHovered(s)}
                    onMouseLeave={() => setHovered(null)}
                  />
                ))}

                {/* Pulse dots at state centres */}
                {HIGHLIGHTED.map((s) => (
                  <g key={`pulse-${s.id}`}>
                    <circle cx={s.tooltipPos[0]} cy={s.tooltipPos[1]} r="4" fill="#F59E0B" />
                    <circle cx={s.tooltipPos[0]} cy={s.tooltipPos[1]} r="4" fill="none" stroke="#F59E0B" strokeWidth="1.2">
                      <animate attributeName="r" from="4" to="18" dur="2.2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.9" to="0" dur="2.2s" repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}
              </svg>

              {/* Hover tooltip */}
              {hovered && (
                <div
                  className="absolute pointer-events-none px-3 py-2 rounded-md border border-white/[0.12] shadow-2xl text-left z-10"
                  style={{
                    backgroundColor: 'var(--color-ciq-midnight)',
                    left: `${((hovered.tooltipPos[0] - 50) / 410) * 100}%`,
                    top: `${((hovered.tooltipPos[1] - 25) / 545) * 100}%`,
                    transform: 'translate(-50%, -130%)',
                  }}
                  role="tooltip"
                >
                  <div className="font-display font-semibold text-sm text-white whitespace-nowrap">
                    {hovered.name}
                  </div>
                  <div className="text-xs text-[color:var(--color-ciq-concrete)] mt-0.5 whitespace-nowrap">
                    {hovered.spend} annual construction
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── TAM / SAM / SOM ─────────────────────────────────────── */}
        <div className="tam-sam-som mt-24 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-square max-w-[380px] mx-auto w-full">
            <svg viewBox="0 0 300 300" className="w-full h-full" aria-hidden="true">
              {/* Filled rings for depth */}
              <circle cx="150" cy="150" r="120" fill="rgba(30,58,95,0.12)" />
              <circle cx="150" cy="150" r="80"  fill="rgba(59,130,246,0.07)" />
              <circle cx="150" cy="150" r="40"  fill="rgba(245,158,11,0.1)" />
              {/* Animated stroke circles */}
              <circle className="tam-circle" cx="150" cy="150" r="120" fill="none" stroke="var(--color-ciq-blueprint)" strokeWidth="2.5" strokeDasharray="754" strokeDashoffset="754" transform="rotate(-90 150 150)" />
              <circle className="sam-circle" cx="150" cy="150" r="80"  fill="none" stroke="var(--color-ciq-steel)"    strokeWidth="2.5" strokeDasharray="503" strokeDashoffset="503" transform="rotate(-90 150 150)" />
              <circle className="som-circle" cx="150" cy="150" r="40"  fill="none" stroke="var(--color-ciq-safety)"   strokeWidth="3"   strokeDasharray="251" strokeDashoffset="251" transform="rotate(-90 150 150)" />
              {/* Ring labels */}
              <text x="150" y="37"  textAnchor="middle" fontFamily="var(--font-outfit)" fontWeight="600" fontSize="11" fill="#1E3A5F" opacity="0.9">TAM</text>
              <text x="150" y="77"  textAnchor="middle" fontFamily="var(--font-outfit)" fontWeight="600" fontSize="11" fill="#3B82F6" opacity="0.9">SAM</text>
              <text x="150" y="156" textAnchor="middle" fontFamily="var(--font-outfit)" fontWeight="700" fontSize="13" fill="#F59E0B">SOM</text>
            </svg>
          </div>

          <div className="space-y-4">
            {MARKET.tamSamSom.map((m) => (
              <div
                key={m.label}
                className="flex items-start gap-5 p-5 rounded-lg border border-white/[0.06] bg-white/[0.02]"
              >
                <div className="flex flex-col items-center min-w-[68px]">
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.15em]"
                    style={{
                      color:
                        m.label === 'TAM' ? 'var(--color-ciq-blueprint)'
                        : m.label === 'SAM' ? 'var(--color-ciq-steel)'
                        : 'var(--color-ciq-safety)',
                    }}
                  >
                    {m.label}
                  </span>
                  <span className="font-stat text-2xl mt-1 text-white">{m.value}</span>
                </div>
                <p className="text-sm text-[color:var(--color-ciq-concrete)] leading-relaxed pt-1">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Sub-market segments ──────────────────────────────────── */}
        <div className="segment-grid mt-24 grid grid-cols-1 md:grid-cols-2 gap-5">
          {MARKET.segments.map((s, i) => {
            const maxValue = 8.5
            const valueNumber = parseFloat(s.value.replace(/[^\d.]/g, ''))
            const pct = Number.isNaN(valueNumber) ? 0 : Math.min(100, (valueNumber / maxValue) * 100)
            const barColor = i === 0 ? 'var(--color-ciq-safety)' : 'var(--color-ciq-steel)'
            return (
              <div key={s.label} className="p-5 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-sm text-[color:var(--color-ciq-concrete)]">{s.label}</span>
                  <span className="font-stat text-xl text-white">{s.value}</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pct}%`, backgroundColor: barColor }}
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
