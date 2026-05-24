import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FileSpreadsheet,
  BadgeCheck,
  Banknote,
  Building,
  FilePlus,
  Camera,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Link2,
} from 'lucide-react'
import { CtaStripSection } from '@/components/sections/CtaStripSection'

export const metadata: Metadata = {
  title: 'Construction Finance — ConstructIQ',
  description:
    'BOQ-linked construction loans with milestone-based disbursement. Finally, structured finance for Tier 2/3 builders.',
}

const features = [
  {
    icon: FileSpreadsheet,
    title: 'BOQ-Linked Loan',
    description:
      'Your ConstructIQ BOQ is the loan application. Itemized costs, contractor credentials, project timeline — all already structured in the format banks and NBFCs need to approve construction finance.',
  },
  {
    icon: BadgeCheck,
    title: 'Pre-Qualification',
    description:
      'Answer 5 questions about income, land ownership, and project type. Platform runs a soft pre-qualification in 48 hours across partner banks and NBFCs — no hard enquiry until you choose to proceed.',
  },
  {
    icon: Banknote,
    title: 'Milestone Disbursement',
    description:
      "Loan doesn't disburse in a lump sum. Funds release in tranches tied to verified construction milestones — foundation approved, slab completed, brickwork done. Money matches work.",
  },
  {
    icon: Building,
    title: 'Bank Partnerships',
    description:
      'Integrated with regional banks and NBFCs active in Bihar, UP, Jharkhand, and MP. Our NBFC partners have committed to ConstructIQ-verified BOQs as qualifying documentation for construction loans.',
  },
  {
    icon: FilePlus,
    title: 'Document Generation',
    description:
      'Platform auto-generates the loan application pack: BOQ summary, project timeline, contractor credentials, estimated completion date, and cost-to-completion report — signed and ready to submit.',
  },
  {
    icon: Camera,
    title: 'Progress-Based Release',
    description:
      'Each disbursement tranche is unlocked by AI-verified photo evidence from the site. The Labour & Site AI module captures and validates progress before the bank releases the next tranche.',
  },
]

const steps = [
  {
    n: '01',
    title: 'BOQ auto-generates your loan application',
    desc: "Once you've finalized your construction package and BOQ, the Finance module packages it into a bank-ready loan application. Project cost, itemized by trade, contractor details, and payment schedule — formatted to each lender's template.",
  },
  {
    n: '02',
    title: 'Get pre-qualified in 48 hours',
    desc: 'The platform sends your application to matched bank/NBFC partners. You receive pre-qualification status within 48 hours — eligible loan amount, interest rate range, and required documentation. All without a formal hard credit inquiry.',
  },
  {
    n: '03',
    title: 'Funds disburse as milestones are verified',
    desc: 'Construction begins. As each milestone is completed, your site supervisor uploads photos. AI verifies progress against your approved BOQ. Bank releases the next tranche. No waiting weeks for a site visit from a bank valuer.',
  },
]

const stats = [
  { value: '₹60L', label: 'Avg. loan size pre-qualified' },
  { value: '48 hr', label: 'Pre-qualification turnaround' },
  { value: '60%', label: 'Homeowners currently denied construction loans' },
]

const beforeAfter = [
  {
    before: 'Construction loan rejected — bank says "no structured cost data"',
    after: 'BOQ-linked application gives banks exactly the documentation they need',
  },
  {
    before: 'Bank site valuer visits every 3–4 weeks — disbursement delayed',
    after: 'AI photo verification confirms milestones in 24 hours — tranche releases automatically',
  },
  {
    before: 'Informal moneylenders at 24–36% interest fill the gap',
    after: 'Bank-rate construction finance available for verified ConstructIQ projects',
  },
]

const integrations = [
  {
    module: 'Construction Packages',
    href: '/platform/construction-packages',
    desc: 'Pulls live data from Construction Packages — locked BOQ and signed contractor agreement form the core of the loan application. No re-entry of costs.',
  },
  {
    module: 'Material Supply',
    href: '/platform/material-supply',
    desc: "Supplier payment milestones are linked to Finance disbursements — cement and steel payments release from the tranche, not from the builder's pocket.",
  },
  {
    module: 'Labour & Site AI',
    href: '/platform/labour-site-ai',
    desc: "Works with Labour & Site AI for photo-verified milestone confirmation — AI progress reports replace the bank's physical site inspection, accelerating disbursement.",
  },
]

export default function ConstructionFinancePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="fin-hero-heading"
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
        {/* Green finance accent glow */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] opacity-5 rounded-full"
          aria-hidden="true"
          style={{ background: 'radial-gradient(circle, #22C55E 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[color:var(--color-ciq-concrete)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/#platform" className="hover:text-white transition-colors">Platform</Link>
            <ChevronRight size={12} />
            <span style={{ color: 'var(--color-ciq-safety)' }}>Construction Finance</span>
          </nav>

          <p className="pretitle">Phase 04 / Construction Finance</p>
          <h1
            id="fin-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl"
          >
            Your BOQ becomes{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>your loan application.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            Stop being rejected for construction loans because you can't prove costs. ConstructIQ turns your itemized BOQ into the structured proposal banks have been asking for.
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
        aria-labelledby="fin-features-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>What's included</p>
          <h2
            id="fin-features-heading"
            className="font-display font-bold mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05]"
            style={{ color: '#0A1628' }}
          >
            Construction finance that{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>actually works in Tier 2/3.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-600">
            Banks have always wanted to lend for construction — they just couldn't trust informal cost estimates. ConstructIQ-verified BOQs give them the structure they need to approve.
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
                  style={{ backgroundColor: 'rgba(34,197,94,0.1)' }}
                >
                  <f.icon size={20} style={{ color: '#22C55E' }} />
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
        aria-labelledby="fin-steps-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">How it works</p>
          <h2
            id="fin-steps-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-2xl"
          >
            From BOQ to{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>approved loan</span>{' '}
            in three steps.
          </h2>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.n} className="relative p-6 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] opacity-30"
                    aria-hidden="true"
                    style={{ backgroundColor: '#22C55E' }}
                  />
                )}
                <p
                  className="font-display font-bold text-[48px] leading-none opacity-20"
                  style={{ color: '#22C55E' }}
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
        aria-labelledby="fin-integrations-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="border-t border-white/[0.06] pt-16">
            <p className="pretitle">Platform Connections</p>
            <h2
              id="fin-integrations-heading"
              className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-2xl"
            >
              Finance that's wired to{' '}
              <span style={{ color: 'var(--color-ciq-safety)' }}>real project data.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[color:var(--color-ciq-concrete)]">
              Construction Finance doesn't operate in isolation — it reads live BOQ data, triggers supplier payments, and receives milestone verification automatically.
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
                      style={{ backgroundColor: 'rgba(34,197,94,0.1)' }}
                    >
                      <Link2 size={16} style={{ color: '#22C55E' }} />
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
