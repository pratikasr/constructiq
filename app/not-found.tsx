import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: '404 — Page Under Construction · ConstructIQ',
  description: 'This page is under construction. Like most good things in Bihar, it will be ready soon.',
}

export default function NotFound() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0A1628' }}
      aria-labelledby="not-found-heading"
    >
      {/* Blueprint grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.07) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Blueprint crosshair marks at intersections */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(59,130,246,0.25) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          backgroundPosition: '24px 24px',
        }}
      />

      {/* Amber glow from center */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245,158,11,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Blueprint corner markers */}
      <svg
        className="pointer-events-none absolute top-8 left-8 opacity-20"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path d="M0 20 H16 M20 0 V16" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="2" fill="#3B82F6" />
      </svg>
      <svg
        className="pointer-events-none absolute top-8 right-8 opacity-20"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path d="M40 20 H24 M20 0 V16" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="2" fill="#3B82F6" />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-8 left-8 opacity-20"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path d="M0 20 H16 M20 40 V24" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="2" fill="#3B82F6" />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-8 right-8 opacity-20"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path d="M40 20 H24 M20 40 V24" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="2" fill="#3B82F6" />
      </svg>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 text-center">
        {/* Construction tape stripe */}
        <div
          className="mx-auto mb-8 h-[6px] w-48 rounded-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, var(--color-ciq-safety) 0 12px, #0A1628 12px 20px)',
          }}
          aria-hidden="true"
        />

        {/* 404 number */}
        <p
          className="font-display font-bold leading-none select-none"
          style={{
            fontSize: 'clamp(100px, 20vw, 200px)',
            color: 'var(--color-ciq-safety)',
            opacity: 0.9,
            letterSpacing: '-0.04em',
          }}
          aria-hidden="true"
        >
          404
        </p>

        {/* Blueprint callout label */}
        <div
          className="mx-auto -mt-4 mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded border text-xs font-mono"
          style={{
            borderColor: 'rgba(59,130,246,0.3)',
            backgroundColor: 'rgba(59,130,246,0.06)',
            color: 'var(--color-ciq-steel)',
          }}
          aria-hidden="true"
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-ciq-steel)' }} />
          PAGE_NOT_FOUND &nbsp;·&nbsp; REF: CIQ-404
        </div>

        <h1
          id="not-found-heading"
          className="font-display font-bold text-white text-[28px] md:text-[40px] leading-[1.1] max-w-lg mx-auto"
        >
          This page is under construction.
        </h1>
        <p className="mt-4 text-base md:text-lg text-[color:var(--color-ciq-concrete)] max-w-sm mx-auto">
          Like most good things in Bihar, it&apos;ll be ready soon.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: 'var(--color-ciq-safety)', color: '#0A1628' }}
          >
            <ArrowLeft size={16} />
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm border border-white/[0.18] text-white hover:bg-white/[0.04] transition-colors"
          >
            <Mail size={16} />
            Contact Us
          </Link>
        </div>

        {/* Bottom blueprint annotation */}
        <div className="mt-16 flex items-center justify-center gap-3 opacity-30" aria-hidden="true">
          <div className="h-px w-12" style={{ backgroundColor: 'var(--color-ciq-steel)' }} />
          <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: 'var(--color-ciq-steel)' }}>
            ConstructIQ · DWG NO. 404-A · SHEET 1 OF 1
          </span>
          <div className="h-px w-12" style={{ backgroundColor: 'var(--color-ciq-steel)' }} />
        </div>
      </div>
    </main>
  )
}
