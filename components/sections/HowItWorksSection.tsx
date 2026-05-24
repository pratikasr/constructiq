'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HOW_IT_WORKS } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

export function HowItWorksSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!ref.current) return
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) return

      // Connecting line draws as section enters
      gsap.fromTo(
        '.how-line',
        { strokeDashoffset: 1000, immediateRender: false },
        {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top 70%', end: 'top 20%', scrub: 0.3 },
        },
      )

      // Steps fade in sequence
      gsap.utils.toArray<HTMLElement>('.how-step').forEach((step, i) => {
        gsap.fromTo(
          step,
          { opacity: 0, y: 30, immediateRender: false },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: `top ${65 - i * 8}%`,
              toggleActions: 'play none none none',
            },
          },
        )
        gsap.fromTo(
          step.querySelector('.step-circle'),
          { strokeDashoffset: 200, immediateRender: false },
          {
            strokeDashoffset: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: ref.current,
              start: `top ${65 - i * 8}%`,
              toggleActions: 'play none none none',
            },
          },
        )
      })
    },
    { scope: ref },
  )

  return (
    <section
      ref={ref}
      className="how-section relative section-light py-24 lg:py-32"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="pretitle">HOW IT WORKS</p>
          <h2
            id="how-heading"
            className="font-display font-bold mt-4 text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05]"
            style={{ color: 'var(--color-ciq-midnight)' }}
          >
            Three steps. <span style={{ color: 'var(--color-ciq-blueprint)' }}>From input to handover.</span>
          </h2>
        </div>

        <div className="mt-16 lg:mt-20 relative">
          {/* Connecting line (desktop) */}
          <svg
            className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-2 w-[68%]"
            viewBox="0 0 1000 8"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              className="how-line"
              x1="0"
              y1="4"
              x2="1000"
              y2="4"
              stroke="var(--color-ciq-blueprint)"
              strokeWidth="2"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
          </svg>

          <ol className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {HOW_IT_WORKS.map((step) => (
              <li key={step.n} className="how-step flex flex-col items-center text-center">
                <div className="relative">
                  <svg
                    width="96"
                    height="96"
                    viewBox="0 0 96 96"
                    className="relative z-10"
                    aria-hidden="true"
                  >
                    <circle cx="48" cy="48" r="44" fill="var(--color-ciq-cement)" stroke="rgba(30, 58, 95, 0.15)" strokeWidth="1" />
                    <circle
                      className="step-circle"
                      cx="48"
                      cy="48"
                      r="44"
                      fill="none"
                      stroke="var(--color-ciq-safety)"
                      strokeWidth="2"
                      strokeDasharray="276"
                      strokeDashoffset="200"
                      transform="rotate(-90 48 48)"
                    />
                    <text
                      x="48"
                      y="58"
                      textAnchor="middle"
                      fontFamily="var(--font-outfit)"
                      fontWeight="800"
                      fontSize="28"
                      fill="var(--color-ciq-midnight)"
                    >
                      {step.n}
                    </text>
                  </svg>
                </div>
                <h3 className="font-display font-semibold mt-6 text-xl lg:text-2xl max-w-[280px]" style={{ color: 'var(--color-ciq-midnight)' }}>
                  {step.title}
                </h3>
                <p className="mt-3 text-sm lg:text-base leading-relaxed text-slate-600 max-w-[300px]">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
