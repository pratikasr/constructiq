import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Package,
  FileText,
  Users,
  Wallet,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Building2,
  Layers,
  Link2,
} from 'lucide-react'
import { CtaStripSection } from '@/components/sections/CtaStripSection'

export const metadata: Metadata = {
  title: 'Construction Packages — ConstructIQ',
  description:
    'Turnkey construction packages for residential, commercial, and institutional projects in Tier 2/3 India.',
}

const features = [
  {
    icon: Building2,
    title: 'Project Type Library',
    description:
      'From 500 sq ft homes to 10,000 sq ft hospitals — every project type pre-configured with real BOQs, contractor criteria, and timelines based on Bihar/UP market rates.',
  },
  {
    icon: FileText,
    title: 'Pre-configured BOQ',
    description:
      'No blank spreadsheets. Every package comes with a structured Bill of Quantities built from CPWD/PWD rate schedules, pre-populated with quantities for your area and floor count.',
  },
  {
    icon: Users,
    title: 'Contractor Matching',
    description:
      'Shortlist of 3–5 verified contractors per project type, with ratings, past work photos, and penalty clauses. No broker involvement, no referral fees.',
  },
  {
    icon: Wallet,
    title: 'Milestone Payments',
    description:
      'Phased payment schedules tied to verifiable site milestones — foundation, slab, brickwork, plaster, finishing. Money moves only when progress is confirmed.',
  },
  {
    icon: BarChart3,
    title: 'Progress Monitoring',
    description:
      "Weekly AI-generated reports from site photos give you zone-level completion percentages. Know exactly what's done and what's lagging before the next payment.",
  },
  {
    icon: ShieldCheck,
    title: 'Cost Guarantee',
    description:
      'Package price is locked at approval. Scope changes are priced in writing before work begins. Zero surprise invoices at handover.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Choose building type & area',
    desc: 'Select your project category — residential, commercial, institutional, or industrial. Enter plot area, floors, and city tier. The platform configures your package in under 60 seconds.',
  },
  {
    n: '02',
    title: 'Review BOQ and contractor options',
    desc: 'Examine the pre-built Bill of Quantities line by line. Compare 3–5 matched contractors with their profiles, pricing, and availability. Adjust scope if needed — the BOQ updates live.',
  },
  {
    n: '03',
    title: 'Approve and track milestone by milestone',
    desc: 'Sign off digitally. The platform creates a payment schedule tied to construction milestones. Funds release only after AI-verified photo evidence confirms work completion.',
  },
]

const stats = [
  { value: '40+', label: 'Building types covered' },
  { value: '₹850', label: 'Avg. per sq ft residential (Bihar)' },
  { value: '0', label: 'Surprise invoices after sign-off' },
]

const beforeAfter = [
  {
    before: 'Multiple contractors, no standard BOQ — every quote looks different',
    after: 'Pre-configured BOQ for your project type, apples-to-apples comparison',
  },
  {
    before: 'Pay contractor upfront, hope work happens',
    after: 'Milestone-linked payments — money moves when progress is verified',
  },
  {
    before: 'No idea what a hospital or school should cost to build',
    after: 'Rate database from CPWD/PWD/DSR with real Tier 2/3 market calibration',
  },
]

const integrations = [
  {
    icon: Package,
    module: 'Material Supply',
    href: '/platform/material-supply',
    desc: 'BOQ links directly to Material Supply — cement, steel, and aggregates are auto-sourced from verified manufacturers at the quantities your BOQ specifies.',
  },
  {
    icon: Wallet,
    module: 'Construction Finance',
    href: '/platform/construction-finance',
    desc: 'Finance module pre-qualifies your loan against the locked package cost. Your BOQ becomes your bank application — no separate documentation needed.',
  },
  {
    icon: Layers,
    module: 'AI Estimation',
    href: '/platform/ai-estimation',
    desc: 'If you have architectural drawings, AI Estimation generates a custom BOQ that feeds directly into your package, overriding default quantities where your design differs.',
  },
]

export default function ConstructionPackagesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="pkg-hero-heading"
      >
        {/* Blueprint grid accent */}
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
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-xs text-[color:var(--color-ciq-concrete)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/#platform" className="hover:text-white transition-colors">Platform</Link>
            <ChevronRight size={12} />
            <span style={{ color: 'var(--color-ciq-safety)' }}>Construction Packages</span>
          </nav>

          <p className="pretitle">Phase 01 / Construction Packages</p>
          <h1
            id="pkg-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl"
          >
            Turnkey packages.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>Transparent pricing.</span>{' '}
            No surprises.
          </h1>
          <p className="mt-6 max-w-xl text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            Pick your building type. Get a pre-configured BOQ, contractor shortlist, timeline, and milestone payment schedule — all in one.
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

          {/* Stats row */}
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
        aria-labelledby="pkg-features-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>What's included</p>
          <h2
            id="pkg-features-heading"
            className="font-display font-bold mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05]"
            style={{ color: '#0A1628' }}
          >
            Everything a builder needs.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>In one package.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-600">
            No more assembling quotes, finding contractors, and negotiating terms separately. ConstructIQ packages every component of a construction project.
          </p>

          {/* Before / After */}
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
                  <div
                    key={`before-${i}`}
                    className="flex items-start gap-3 p-5 border-b border-slate-100 last:border-0"
                  >
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

          {/* Feature grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-lg border border-slate-200 bg-white shadow-sm">
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-md mb-4"
                  style={{ backgroundColor: 'rgba(245,158,11,0.1)' }}
                >
                  <f.icon size={20} style={{ color: 'var(--color-ciq-safety)' }} />
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
        aria-labelledby="pkg-steps-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">How it works</p>
          <h2
            id="pkg-steps-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-2xl"
          >
            From selection to{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>site completion</span>{' '}
            in three steps.
          </h2>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.n} className="relative p-6 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] opacity-30"
                    aria-hidden="true"
                    style={{ backgroundColor: 'var(--color-ciq-safety)' }}
                  />
                )}
                <p
                  className="font-display font-bold text-[48px] leading-none opacity-20"
                  style={{ color: 'var(--color-ciq-safety)' }}
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
        aria-labelledby="pkg-integrations-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="border-t border-white/[0.06] pt-16">
            <p className="pretitle">Platform Connections</p>
            <h2
              id="pkg-integrations-heading"
              className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-2xl"
            >
              Connected to every{' '}
              <span style={{ color: 'var(--color-ciq-safety)' }}>ConstructIQ module.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[color:var(--color-ciq-concrete)]">
              Your package isn't an island. Every BOQ, payment, and milestone connects to materials, finance, and site monitoring automatically.
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
                      style={{ backgroundColor: 'rgba(245,158,11,0.1)' }}
                    >
                      <Link2 size={16} style={{ color: 'var(--color-ciq-safety)' }} />
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
