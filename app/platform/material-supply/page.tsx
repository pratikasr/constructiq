import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Factory,
  FileText,
  ScanLine,
  MapPin,
  TrendingDown,
  RotateCcw,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Link2,
} from 'lucide-react'
import { CtaStripSection } from '@/components/sections/CtaStripSection'

export const metadata: Metadata = {
  title: 'Material Supply — ConstructIQ',
  description:
    'Direct manufacturer-to-site procurement for cement, steel, aggregates, and more. Quality verified, BOQ-linked.',
}

const features = [
  {
    icon: Factory,
    title: 'Manufacturer Direct',
    description:
      'Skip distributors, sub-distributors, and local dealers. Cement from ACC/UltraTech, steel from SAIL affiliates, aggregates from licensed quarries — routed straight to your gate.',
  },
  {
    icon: FileText,
    title: 'BOQ-Linked Ordering',
    description:
      'Your Bill of Quantities drives the order. Quantities auto-populated. No manual re-entry, no under-ordering, no over-stocking. Change the BOQ and the order updates.',
  },
  {
    icon: ScanLine,
    title: 'Quality Verification',
    description:
      'Every batch comes with test certificates. Our field agents perform random slump tests for concrete and bend tests for steel. Substandard material triggers an instant replacement order.',
  },
  {
    icon: MapPin,
    title: 'Delivery Tracking',
    description:
      'GPS-tracked trucks from loading dock to your gate. Real-time ETA updates. Digital Delivery Receipt generated at the gate — no paper challan fraud.',
  },
  {
    icon: TrendingDown,
    title: 'Price Benchmarking',
    description:
      "AI Estimation module continuously indexes market rates for cement, steel, sand, and aggregates across districts. You always know if you're paying a fair rate.",
  },
  {
    icon: RotateCcw,
    title: 'Returns & Disputes',
    description:
      'Damaged or substandard delivery? Raise a dispute with photo evidence. Our supplier SLA mandates replacement within 48 hours. Escrow holds payment until resolution.',
  },
]

const steps = [
  {
    n: '01',
    title: 'BOQ pulls material list automatically',
    desc: 'Once your Construction Package or AI Estimation BOQ is finalized, Material Supply reads every line item. Cement quantity, steel grade, aggregate type — all pre-populated for your approval.',
  },
  {
    n: '02',
    title: 'Compare manufacturer quotes',
    desc: 'The platform requests quotes from 3–5 verified manufacturers per material category. Compare price, lead time, and quality rating side by side. No phone calls, no site visits.',
  },
  {
    n: '03',
    title: 'Order, track, verify on delivery',
    desc: 'Confirm your order with one tap. Track the truck on a map. At delivery, the gate agent scans the invoice QR code to match against your order — quantity, grade, and supplier all verified.',
  },
]

const stats = [
  { value: '40%', label: 'Avg. markup eliminated vs. local dealers' },
  { value: '48 hr', label: 'Replacement SLA on failed quality check' },
  { value: '5', label: 'Distribution layers bypassed' },
]

const beforeAfter = [
  {
    before: '5-layer distribution chain adds 30–40% to material cost',
    after: 'Manufacturer-direct pricing — only logistics cost on top',
  },
  {
    before: 'Paper challans, manual count — easy to fake quantity or grade',
    after: 'QR-coded digital receipts matched against BOQ order at gate',
  },
  {
    before: 'No benchmark — you have no idea if the rate is fair',
    after: 'Live district-level price index from AI Estimation rate database',
  },
]

const integrations = [
  {
    module: 'AI Estimation',
    href: '/platform/ai-estimation',
    desc: 'Purchase data feeds back to AI Estimation for rate benchmarking — your actual transaction prices improve the rate database for every future project.',
  },
  {
    module: 'Construction Finance',
    href: '/platform/construction-finance',
    desc: 'Material invoices link to Construction Finance for supplier payment via milestone disbursements — no cash advance needed from the builder.',
  },
  {
    module: 'Construction Packages',
    href: '/platform/construction-packages',
    desc: 'Material Supply reads the BOQ from Construction Packages automatically — quantities, grades, and delivery schedule all derived from the signed package.',
  },
]

export default function MaterialSupplyPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="mat-hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[color:var(--color-ciq-concrete)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/#platform" className="hover:text-white transition-colors">Platform</Link>
            <ChevronRight size={12} />
            <span style={{ color: 'var(--color-ciq-safety)' }}>Material Supply</span>
          </nav>

          <p className="pretitle">Phase 02 / Material Supply</p>
          <h1
            id="mat-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl"
          >
            Materials from{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>manufacturer.</span>{' '}
            Not middlemen.
          </h1>
          <p className="mt-6 max-w-xl text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            Eliminate the 5-layer distribution chain. Cement, steel, aggregates, bricks, and fittings ordered against your BOQ, tracked to your gate.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: 'var(--color-ciq-safety)', color: '#0A1628' }}
            >
              Get Started <ArrowRight size={16} />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm border border-white/[0.18] text-white hover:bg-white/[0.04] transition-colors"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl">
            {stats.map((s) => (
              <div key={s.label} className="p-6 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                <p
                  className="font-display font-bold text-[32px] lg:text-[40px] leading-none"
                  style={{ color: 'var(--color-ciq-safety)' }}
                >
                  {s.value}
                </p>
                <p className="mt-2 text-xs text-[color:var(--color-ciq-concrete)] leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW / FEATURES ──────────────────────────────────────────────── */}
      <section
        id="features"
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#F1F5F9' }}
        aria-labelledby="mat-features-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>What's included</p>
          <h2
            id="mat-features-heading"
            className="font-display font-bold mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05]"
            style={{ color: '#0A1628' }}
          >
            Every material. Every stage.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>Zero guesswork.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-600">
            Cement, steel, sand, aggregates, bricks, AAC blocks, fittings — all procurement through one interface, against one BOQ, with quality checks at every touchpoint.
          </p>

          <div className="mt-12 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="grid grid-cols-2">
              <div className="p-5 border-b border-slate-200 bg-slate-50">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Before ConstructIQ</p>
              </div>
              <div
                className="p-5 border-b border-slate-200"
                style={{ backgroundColor: 'rgba(245,158,11,0.06)' }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-ciq-safety)' }}>
                  With ConstructIQ
                </p>
              </div>
              {beforeAfter.map((row, i) => (
                <>
                  <div key={`before-${i}`} className="flex items-start gap-3 p-5 border-b border-slate-100 last:border-0">
                    <XCircle size={16} className="mt-0.5 shrink-0 text-red-400" />
                    <p className="text-sm text-slate-600">{row.before}</p>
                  </div>
                  <div
                    key={`after-${i}`}
                    className="flex items-start gap-3 p-5 border-b border-slate-100 last:border-0"
                    style={{ backgroundColor: 'rgba(245,158,11,0.03)' }}
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--color-ciq-safety)' }} />
                    <p className="text-sm text-slate-700">{row.after}</p>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-lg border border-slate-200 bg-white shadow-sm">
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-md mb-4"
                  style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}
                >
                  <f.icon size={20} style={{ color: 'var(--color-ciq-steel)' }} />
                </div>
                <h3 className="font-semibold text-base" style={{ color: '#0A1628' }}>{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="mat-steps-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">How it works</p>
          <h2
            id="mat-steps-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-2xl"
          >
            From BOQ to{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>gate delivery</span>{' '}
            in three steps.
          </h2>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.n} className="relative p-6 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] opacity-30"
                    aria-hidden="true"
                    style={{ backgroundColor: 'var(--color-ciq-steel)' }}
                  />
                )}
                <p
                  className="font-display font-bold text-[48px] leading-none opacity-20"
                  style={{ color: 'var(--color-ciq-steel)' }}
                >
                  {step.n}
                </p>
                <h3 className="mt-3 font-semibold text-lg text-white">{step.title}</h3>
                <p className="mt-3 text-sm text-[color:var(--color-ciq-concrete)] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ─────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="mat-integrations-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="border-t border-white/[0.06] pt-16">
            <p className="pretitle">Platform Connections</p>
            <h2
              id="mat-integrations-heading"
              className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-2xl"
            >
              Procurement that talks to{' '}
              <span style={{ color: 'var(--color-ciq-safety)' }}>the whole platform.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[color:var(--color-ciq-concrete)]">
              Material Supply isn't a standalone catalogue. It reads your BOQ, reports back to your finance module, and updates the rate database for the next project.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {integrations.map((int) => (
                <Link
                  key={int.module}
                  href={int.href}
                  className="group p-6 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="inline-flex items-center justify-center w-9 h-9 rounded-md"
                      style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}
                    >
                      <Link2 size={16} style={{ color: 'var(--color-ciq-steel)' }} />
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-[color:var(--color-ciq-concrete)] group-hover:translate-x-0.5 transition-transform"
                    />
                  </div>
                  <p className="mt-4 font-semibold text-white text-sm">{int.module}</p>
                  <p className="mt-2 text-xs text-[color:var(--color-ciq-concrete)] leading-relaxed">{int.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaStripSection />
    </>
  )
}
