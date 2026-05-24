import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Wifi,
  Camera,
  IndianRupee,
  ScanEye,
  LayoutGrid,
  BarChart2,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Link2,
  WifiOff,
} from 'lucide-react'
import { CtaStripSection } from '@/components/sections/CtaStripSection'

export const metadata: Metadata = {
  title: 'Labour & Site AI — ConstructIQ',
  description:
    'Offline-first attendance tracking and AI-powered construction site progress monitoring for Tier 2/3 India.',
}

const features = [
  {
    icon: WifiOff,
    title: 'Offline Attendance',
    description:
      'Workers check in and check out even when the site has no internet. The app stores records locally and syncs automatically when connectivity returns. No missed attendance, no excuses.',
  },
  {
    icon: Camera,
    title: 'Photo + GPS Verification',
    description:
      'Every check-in is geotagged and photo-verified. Selfie on check-in, selfie on checkout — matched against the enrolled worker profile. Ghost employees and proxy attendance are eliminated.',
  },
  {
    icon: IndianRupee,
    title: 'Wage Automation',
    description:
      'Attendance data feeds directly into weekly wage calculation. Rates per trade, overtime rules, deductions — all configured once. Workers get an SMS wage slip. Zero WhatsApp wage disputes.',
  },
  {
    icon: ScanEye,
    title: 'AI Progress Analysis',
    description:
      'Workers and supervisors upload site photos daily. AI analyzes each photo zone by zone — identifying completed elements (columns, beams, brickwork, plaster, tile) and estimating completion percentage.',
  },
  {
    icon: LayoutGrid,
    title: 'Zone-Level Monitoring',
    description:
      'Site is divided into zones matching your BOQ structure — foundation, podium, floors, roof, external works. Each zone has its own progress percentage, updated from AI photo analysis daily.',
  },
  {
    icon: BarChart2,
    title: 'Weekly Reports',
    description:
      "Every Sunday, an auto-generated progress report is delivered to the owner's email and WhatsApp — zone completion percentages, attendance summary, wage payments made, and upcoming milestone status.",
  },
]

const steps = [
  {
    n: '01',
    title: 'Workers check in via app (offline-capable)',
    desc: 'Your site supervisor downloads the ConstructIQ field app. Workers are enrolled with a photo and trade classification. Daily check-in and checkout via selfie + GPS — works without internet, syncs when online.',
  },
  {
    n: '02',
    title: 'AI analyzes site photos daily',
    desc: 'The site supervisor uploads a 10–15 photo walkthrough of the site each day. AI assigns each photo to the correct zone from your BOQ structure and estimates work completion percentage per zone based on visual progress.',
  },
  {
    n: '03',
    title: 'Weekly progress report delivered to owner and bank',
    desc: 'Every week, a structured progress report is sent to the project owner and, if construction finance is active, forwarded to the lending bank as milestone verification evidence for the next disbursement tranche.',
  },
]

const stats = [
  { value: '100%', label: 'Offline-capable — works with 2G or no signal' },
  { value: '30%', label: 'Project delays traced to labour management failures' },
  { value: 'Weekly', label: 'AI progress reports delivered automatically' },
]

const beforeAfter = [
  {
    before: 'Paper register attendance — ghost workers, proxy sign-ins common',
    after: 'Selfie + GPS check-in eliminates proxy attendance and ghost worker payroll',
  },
  {
    before: 'Owner visits site once a month — has no idea of actual progress',
    after: 'Zone-level AI analysis from daily site photos — weekly report to owner\'s WhatsApp',
  },
  {
    before: 'Wage disputes every Friday — unclear what each worker is owed',
    after: 'Wage auto-calculated from verified attendance — SMS slip sent to each worker',
  },
]

const integrations = [
  {
    module: 'Construction Finance',
    href: '/platform/construction-finance',
    desc: "Progress data feeds into Construction Finance for milestone-based loan disbursement — AI-verified photos replace the bank's physical site valuation visit for each tranche release.",
  },
  {
    module: 'Construction Packages',
    href: '/platform/construction-packages',
    desc: 'Anomaly alerts — unexpected idle periods, missing worker categories — connect to your contractor dashboard in Construction Packages for immediate follow-up.',
  },
  {
    module: 'AI Estimation',
    href: '/platform/ai-estimation',
    desc: 'Actual labour productivity data from site attendance feeds back into AI Estimation — improving the accuracy of future project timeline estimates for similar project types in your district.',
  },
]

export default function LabourSiteAiPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="lab-hero-heading"
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
        {/* Subtle rebar-red glow accent */}
        <div
          className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] opacity-5"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(circle, #EF4444 0%, transparent 70%)',
            transform: 'translate(-30%, -30%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[color:var(--color-ciq-concrete)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/#platform" className="hover:text-white transition-colors">Platform</Link>
            <ChevronRight size={12} />
            <span style={{ color: 'var(--color-ciq-safety)' }}>Labour & Site AI</span>
          </nav>

          <p className="pretitle">Phase 06 / Labour & Site AI</p>

          {/* Offline-first badge */}
          <div
            className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border"
            style={{
              borderColor: 'rgba(239,68,68,0.3)',
              backgroundColor: 'rgba(239,68,68,0.08)',
              color: '#EF4444',
            }}
          >
            <Wifi size={12} />
            Offline-first — works on 2G or no signal
          </div>

          <h1
            id="lab-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl"
          >
            See your site.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>Even when you're not there.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            Offline-first attendance with photo + GPS verification. Weekly AI reports analyze site photos to give you zone-level progress percentages — no engineer needed on call.
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
                  style={{ color: '#EF4444' }}
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
        aria-labelledby="lab-features-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>What's included</p>
          <h2
            id="lab-features-heading"
            className="font-display font-bold mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05]"
            style={{ color: '#0A1628' }}
          >
            Labour management{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>built for Indian sites.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-600">
            Most construction sites in Tier 2/3 India have intermittent internet, unskilled data entry, and zero visibility after the contractor leaves the premises. ConstructIQ is built for that reality.
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
                  style={{ backgroundColor: 'rgba(239,68,68,0.1)' }}
                >
                  <f.icon size={20} style={{ color: '#EF4444' }} />
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
        aria-labelledby="lab-steps-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">How it works</p>
          <h2
            id="lab-steps-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-2xl"
          >
            Check-in to{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>bank-verified milestone</span>{' '}
            report.
          </h2>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.n} className="relative p-6 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] opacity-30"
                    aria-hidden="true"
                    style={{ backgroundColor: '#EF4444' }}
                  />
                )}
                <p
                  className="font-display font-bold text-[48px] leading-none opacity-20"
                  style={{ color: '#EF4444' }}
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
        aria-labelledby="lab-integrations-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="border-t border-white/[0.06] pt-16">
            <p className="pretitle">Platform Connections</p>
            <h2
              id="lab-integrations-heading"
              className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-2xl"
            >
              Site data that{' '}
              <span style={{ color: 'var(--color-ciq-safety)' }}>unlocks finance and accountability.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[color:var(--color-ciq-concrete)]">
              Labour & Site AI is the eyes on the ground. Its data unlocks loan disbursements, triggers contractor alerts, and improves future project estimates.
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
                      style={{ backgroundColor: 'rgba(239,68,68,0.1)' }}
                    >
                      <Link2 size={16} style={{ color: '#EF4444' }} />
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
