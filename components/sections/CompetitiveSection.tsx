'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, X, Minus } from 'lucide-react'
import { COMPETITIVE } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

const COMPETITORS = ['Infra.Market', 'Brick&Bolt', 'BuildSupply', 'Generic apps'] as const

export function CompetitiveSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) return

      gsap.fromTo(
        '.compare-row',
        { opacity: 0, x: -40, clipPath: 'inset(0 100% 0 0)', immediateRender: false },
        {
          opacity: 1,
          x: 0,
          clipPath: 'inset(0 0% 0 0)',
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.06,
          scrollTrigger: { trigger: '.compare-table', start: 'top 80%' },
        },
      )

      gsap.fromTo(
        '.ciq-check',
        { scale: 0, rotation: -180, immediateRender: false },
        {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: 'back.out(1.7)',
          stagger: 0.05,
          delay: 0.3,
          scrollTrigger: { trigger: '.compare-table', start: 'top 80%' },
        },
      )
    },
    { scope: ref },
  )

  const renderCell = (val: boolean | string) => {
    if (val === true) {
      return (
        <div className="flex items-center justify-center">
          <span
            className="ciq-check inline-flex items-center justify-center w-7 h-7 rounded-full"
            style={{ backgroundColor: 'var(--color-ciq-safety)', color: 'var(--color-ciq-midnight)' }}
          >
            <Check size={16} strokeWidth={3} />
          </span>
        </div>
      )
    }
    if (val === false) {
      return (
        <div className="flex items-center justify-center text-white/30">
          <X size={18} />
        </div>
      )
    }
    return (
      <div className="flex flex-col items-center justify-center text-[color:var(--color-ciq-concrete)]">
        <Minus size={14} />
        <span className="text-[10px] uppercase tracking-wide mt-1 text-center max-w-[80px] leading-tight">{val}</span>
      </div>
    )
  }

  return (
    <section
      ref={ref}
      className="relative section-dark py-24 lg:py-32"
      aria-labelledby="competitive-heading"
      style={{ backgroundColor: '#0D1B2A' }}
    >
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="pretitle">{COMPETITIVE.pretitle}</p>
          <h2
            id="competitive-heading"
            className="font-display font-bold text-white mt-4 text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05]"
          >
            {COMPETITIVE.headline.split(' ConstructIQ ')[0]}{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>ConstructIQ owns the loop.</span>
          </h2>
        </div>

        <div className="compare-table mt-12 rounded-xl border border-white/[0.06] overflow-x-auto bg-white/[0.02]">
          <table className="w-full min-w-[760px]">
            <thead>
              <tr className="border-b border-white/[0.08]">
                <th className="text-left text-xs uppercase tracking-[0.15em] text-[color:var(--color-ciq-concrete)] font-semibold py-5 px-6">
                  Capability
                </th>
                <th className="text-center text-xs uppercase tracking-[0.15em] font-semibold py-5 px-3" style={{ color: 'var(--color-ciq-safety)' }}>
                  ConstructIQ
                </th>
                {COMPETITORS.map((c) => (
                  <th key={c} className="text-center text-xs uppercase tracking-[0.1em] text-[color:var(--color-ciq-concrete)] font-medium py-5 px-3">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPETITIVE.rows.map((row, i) => (
                <tr key={row.feature} className={`compare-row ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
                  <td className="text-sm text-white py-4 px-6 font-medium">{row.feature}</td>
                  <td className="py-4 px-3" style={{ backgroundColor: 'rgba(245, 158, 11, 0.04)' }}>
                    {renderCell(row.ciq)}
                  </td>
                  {COMPETITORS.map((c) => (
                    <td key={c} className="py-4 px-3">
                      {renderCell(row.others[c])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-sm text-[color:var(--color-ciq-concrete)] max-w-3xl">
          ConstructIQ’s defensibility compounds over time. Each module feeds data into the others — BOQ data improves material pricing, attendance data improves labour cost models, and together they create the structured dataset that makes bank loan integration possible.
        </p>
      </div>
    </section>
  )
}
