import type { Metadata } from 'next'
import Link from 'next/link'
import {
  MapPin,
  CalendarCheck,
  Satellite,
  Lock,
  Camera,
  Scale,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Link2,
} from 'lucide-react'
import { CtaStripSection } from '@/components/sections/CtaStripSection'

export const metadata: Metadata = {
  title: 'Machinery Rental — ConstructIQ',
  description:
    'Geotagged marketplace for JCBs, excavators, concrete mixers, and cranes. GPS-tracked, escrow-protected.',
}

const features = [
  {
    icon: MapPin,
    title: 'Geotagged Inventory',
    description:
      'Every machine in our network is listed with its real-time GPS location. Search equipment within your radius — JCBs, excavators, transit mixers, compactors, cranes, concrete pumps.',
  },
  {
    icon: CalendarCheck,
    title: 'Instant Booking',
    description:
      'Book equipment directly from the platform — no phone calls, no broker negotiations. Availability calendar shows current deployment. Delivery to site within your agreed window.',
  },
  {
    icon: Satellite,
    title: 'GPS Usage Logs',
    description:
      "Every engine-on hour is logged via the machine's onboard GPS unit. No padding of invoices, no disputed hours. You're billed exactly for what the machine ran on your site.",
  },
  {
    icon: Lock,
    title: 'Escrow Deposits',
    description:
      'Security deposits sit in platform-managed escrow, not with the owner. Funds release to the owner only after you confirm the machine was returned in agreed condition.',
  },
  {
    icon: Camera,
    title: 'Condition Reports',
    description:
      'Photo-based condition inspection at pickup and return. Timestamped images with 360-degree coverage. If damage occurs, the evidence is already in the system.',
  },
  {
    icon: Scale,
    title: 'Dispute Resolution',
    description:
      'Usage disputes are settled by GPS log data. Condition disputes are settled by the before/after photo record. An in-platform arbitration flow handles both without court involvement.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Search equipment near your site',
    desc: 'Enter your site PIN code and the equipment type you need. The map shows available machines with current location, day rate, minimum hire period, and owner rating. Filter by capacity, make, or availability date.',
  },
  {
    n: '02',
    title: 'Book with deposit in escrow',
    desc: 'Reserve the machine with a platform-managed escrow deposit. The owner gets notified, confirms the booking, and coordinates delivery. Your deposit is held safely until the machine is returned and cleared.',
  },
  {
    n: '03',
    title: 'Track usage, resolve disputes with evidence',
    desc: 'Monitor GPS hours daily via your dashboard. On return, both parties submit condition photos. Billing is generated from actual GPS-logged hours. Disputes — if any — are resolved from the record.',
  },
]

const stats = [
  { value: '200+', label: 'Equipment types listed' },
  { value: '100%', label: 'GPS-verified billing hours' },
  { value: '0', label: 'Broker commissions' },
]

const beforeAfter = [
  {
    before: 'Renting through a broker — 15–25% commission on every booking',
    after: 'Direct owner booking via platform — zero broker commission',
  },
  {
    before: 'Invoice shows 12 hours, machine was on-site for 6 — no way to verify',
    after: 'GPS engine-hours log is the invoice — exact, tamper-proof',
  },
  {
    before: 'Security deposit with owner — hard to recover if machine is returned fine',
    after: 'Escrow deposit — auto-releases to owner after your condition sign-off',
  },
]

const integrations = [
  {
    module: 'AI Estimation',
    href: '/platform/ai-estimation',
    desc: 'Machinery costs sync to your BOQ in AI Estimation — rental rates update the equipment cost lines so your project estimate stays accurate throughout construction.',
  },
  {
    module: 'Labour & Site AI',
    href: '/platform/labour-site-ai',
    desc: 'GPS usage logs feed into Labour & Site AI for project timeline tracking — machine idle time flags scheduling issues before they cascade into delays.',
  },
  {
    module: 'Construction Packages',
    href: '/platform/construction-packages',
    desc: 'Construction Packages pre-plan your machinery requirement schedule — machinery bookings align to your milestone timeline so equipment arrives when work is ready.',
  },
]

export default function MachineryRentalPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="mach-hero-heading"
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
        {/* Safety stripe accent */}
        <div
          className="pointer-events-none absolute top-0 left-0 right-0 h-1 opacity-60"
          aria-hidden="true"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, var(--color-ciq-safety) 0 10px, transparent 10px 18px)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[color:var(--color-ciq-concrete)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/#platform" className="hover:text-white transition-colors">Platform</Link>
            <ChevronRight size={12} />
            <span style={{ color: 'var(--color-ciq-safety)' }}>Machinery Rental</span>
          </nav>

          <p className="pretitle">Phase 03 / Machinery Rental</p>
          <h1
            id="mach-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl"
          >
            Every machine.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>GPS-tracked.</span>{' '}
            Escrow-protected.
          </h1>
          <p className="mt-6 max-w-xl text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            Find and book JCBs, excavators, transit mixers, and cranes near your site. Usage is logged, deposits are in escrow, condition disputes are settled with photo evidence.
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
        aria-labelledby="mach-features-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>What's included</p>
          <h2
            id="mach-features-heading"
            className="font-display font-bold mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05]"
            style={{ color: '#0A1628' }}
          >
            Rent smarter.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>Pay for what you use.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-600">
            Construction equipment rental in India is dominated by brokers and verbal agreements. ConstructIQ brings transparency, GPS verification, and escrow protection to every booking.
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
        aria-labelledby="mach-steps-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">How it works</p>
          <h2
            id="mach-steps-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-2xl"
          >
            Search, book, and{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>pay only for hours used.</span>
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
        aria-labelledby="mach-integrations-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="border-t border-white/[0.06] pt-16">
            <p className="pretitle">Platform Connections</p>
            <h2
              id="mach-integrations-heading"
              className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-2xl"
            >
              Equipment data that{' '}
              <span style={{ color: 'var(--color-ciq-safety)' }}>improves every module.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[color:var(--color-ciq-concrete)]">
              Machine usage logs don't just track billing — they flow into your project BOQ, timeline tracking, and milestone verification automatically.
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
