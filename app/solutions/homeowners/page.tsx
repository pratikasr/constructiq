import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  ShieldAlert,
  Clock,
  PackageX,
  CheckCircle2,
  Lock,
  QrCode,
  Calculator,
  Users,
  FileText,
  Camera,
  BarChart3,
  AlertTriangle,
} from 'lucide-react'
import { CtaStripSection } from '@/components/sections/CtaStripSection'

export const metadata: Metadata = {
  title: 'For Homeowners -- ConstructIQ',
  description:
    'Know the real cost. Pick the right contractor. Track every rupee and every milestone of your construction project.',
}

const painPoints = [
  {
    icon: ShieldAlert,
    title: 'You have no way to verify the BOQ',
    description:
      `Your contractor hands you a 4-page estimate with items like "earthwork -- ₹2.4L" and "RCC columns -- ₹6.8L". You have no idea if these numbers are reasonable or inflated. You're building your family home, possibly your life's largest investment, and you're signing a contract you can't verify. Overcharging of 25-40% is common in Tier 2/3 markets because there is no independent benchmark.`,
  },
  {
    icon: Clock,
    title: "Construction stalls and you can't do anything",
    description:
      `You advance ₹8 lakhs for the slab. The slab gets done. Then nothing happens for six weeks. The contractor cites "labour issues," "monsoon delay," or "material shortage" -- all unverifiable. You've already paid; now your leverage is gone. In Bihar, UP, Jharkhand, and MP, 65% of owner-built homes face construction stalls of more than 30 days, often due to cash diversion to other projects.`,
  },
  {
    icon: PackageX,
    title: 'Material substitution without your knowledge',
    description:
      "You spec M25 RCC concrete. Your contractor uses M20 to save ₹12/bag. You spec ISI-marked TMT bars. You get unknown-brand bars from the local mandi. Tiles are downgraded, door frames are substituted, waterproofing is skipped entirely. You won't know until cracks appear in three years. By then, the contractor is untraceable and your legal options are limited.",
  },
]

const solutions = [
  {
    icon: Calculator,
    title: 'AI-verified BOQ shows you exact fair rates',
    description:
      "Before you sign any contract, ConstructIQ generates a detailed Bill of Quantities for your project using AI-parsed drawings and government-standard rate databases -- CPWD, PWD, and District Schedule of Rates for your specific district and financial year. You see the fair market rate for every line item: earthwork, concrete, masonry, plaster, flooring, and MEP. When your contractor's quote arrives, you compare it side by side. Inflated items are flagged automatically.",
  },
  {
    icon: Lock,
    title: 'Milestone-locked payments protect your money',
    description:
      "You never release money before work is done. Each payment tranche is locked against a specific milestone -- foundation completion, plinth level, ground floor slab, first floor slab, roof slab, brickwork, plaster, and finishing. The contractor submits milestone completion with site photos and GPS coordinates. Your project manager (or ConstructIQ's network QC engineer) verifies. Only then is payment unlocked. Your ₹8 lakh slab advance becomes ₹8 lakhs paid after slab verification.",
  },
  {
    icon: QrCode,
    title: 'Material receipt verification at your gate',
    description:
      'Every material delivery to your site is logged on ConstructIQ. The truck driver scans a QR code at entry. The system records: supplier name, material grade, invoice number, weight or quantity, and timestamp. You get a push notification on your phone for every delivery. Steel, cement, aggregates, and fittings are all tracked. If M20 bags arrive instead of M25, the system flags the discrepancy before the truck is even unloaded.',
  },
]

const features = [
  {
    icon: Calculator,
    title: 'Project Cost Estimator',
    description:
      'Get an accurate cost estimate for your construction project before you approach any contractor. Enter plot size, number of floors, and finish specification. The AI returns a detailed range -- structure cost, finishing cost, and total -- broken by trade and compared against current market rates in your district.',
  },
  {
    icon: Users,
    title: 'Verified Contractor Shortlist',
    description:
      'ConstructIQ shows you contractors who have completed projects in your district, with verified track records, photo documentation of past work, and client ratings. Not a directory -- a performance-based shortlist tied to actual project outcomes on the platform.',
  },
  {
    icon: Lock,
    title: 'Milestone Payment Lock',
    description:
      'Funds are released in tranches tied to physical milestones. Each tranche requires photo evidence and optional third-party QC verification before unlock. You decide the milestone schedule upfront. No surprises, no pressure to pay early.',
  },
  {
    icon: QrCode,
    title: 'Material Receipt QR Tracking',
    description:
      'Every material delivery to your site is logged with QR scan, supplier invoice, and delivery quantity. Mismatches between the BOQ-specified grade and delivered material trigger instant alerts to you. Digital receipts are stored for the entire project lifecycle.',
  },
  {
    icon: Camera,
    title: 'Site Photo Feed',
    description:
      "Your contractor uploads geotagged site photos at each stage of construction. You see exactly what is happening on-site from your phone, whether you're in the next street or working in another city. Photos are timestamped, GPS-pinned, and permanently stored.",
  },
  {
    icon: BarChart3,
    title: 'Weekly Progress Report',
    description:
      "Every Sunday evening, ConstructIQ sends you a consolidated project report: milestones completed this week, materials delivered, payments released, and next week's schedule. Clear, one-page summary so you always know where your project stands.",
  },
]

export default function HomeownersPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="homeowners-hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(59,130,246,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.12) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[500px] opacity-10"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse, var(--color-ciq-safety) 0%, transparent 70%)',
            transform: 'translate(30%, 30%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <nav
            className="mb-6 flex items-center gap-2 text-xs text-[color:var(--color-ciq-concrete)]"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span style={{ color: 'var(--color-ciq-safety)' }}>For Homeowners</span>
          </nav>

          <p className="pretitle">For Homeowners</p>

          <h1
            id="homeowners-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl"
          >
            Build your home with{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>full control</span>
            {' '}over every rupee and every brick.
          </h1>

          <p className="mt-6 max-w-2xl text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            You're building the biggest asset of your life. In Bihar, UP, Jharkhand, and MP, most homeowners face overcharging, mid-project stalls, and material substitution -- all because there was no system to hold anyone accountable. ConstructIQ changes that. Know the real cost before you sign. Track every milestone before you pay. Verify every material before it's poured.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: 'var(--color-ciq-safety)', color: '#0A1628' }}
            >
              Start Free <ArrowRight size={16} />
            </Link>
            <Link
              href="#how-it-helps"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm border border-white/[0.18] text-white hover:bg-white/[0.04] transition-colors"
            >
              See How It Works
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {[
              { value: '25-40%', label: 'Average contractor overcharge in Tier 2/3 cities' },
              { value: '65%', label: 'Projects face construction stalls of 30+ days' },
              { value: '₹0', label: 'Cost to verify your BOQ with ConstructIQ' },
            ].map((s) => (
              <div key={s.label} className="p-6 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                <p
                  className="font-display font-bold text-[32px] lg:text-[40px] leading-none"
                  style={{ color: 'var(--color-ciq-safety)' }}
                >
                  {s.value}
                </p>
                <p className="mt-2 text-xs text-[color:var(--color-ciq-concrete)] leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ──────────────────────────────────────────────────────── */}
      <section
        id="pain-points"
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="homeowners-pain-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="border-t border-white/[0.06] pt-16">
            <p className="pretitle">The problem today</p>
            <h2
              id="homeowners-pain-heading"
              className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl"
            >
              Building a home in India means{' '}
              <span style={{ color: 'var(--color-ciq-safety)' }}>trusting blindly.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[color:var(--color-ciq-concrete)]">
              Without ConstructIQ, most homeowners are operating without any independent verification, payment controls, or material tracking. These are the three problems that cost homeowners lakhs every year.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {painPoints.map((p) => (
                <div key={p.title} className="p-6 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md mb-4"
                    style={{ backgroundColor: 'rgba(239,68,68,0.1)' }}
                  >
                    <p.icon size={20} style={{ color: '#EF4444' }} />
                  </div>
                  <h3 className="font-semibold text-base text-white">{p.title}</h3>
                  <p className="mt-3 text-sm text-[color:var(--color-ciq-concrete)] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ────────────────────────────────────────────────────────── */}
      <section
        id="how-it-helps"
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#F1F5F9' }}
        aria-labelledby="homeowners-solutions-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>
            How ConstructIQ helps
          </p>
          <h2
            id="homeowners-solutions-heading"
            className="font-display font-bold mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05]"
            style={{ color: '#0A1628' }}
          >
            Three layers of protection,{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>built into every project.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-600">
            ConstructIQ wraps your home construction in a verification layer that runs from cost estimation to final handover. You stay informed and in control at every stage.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <div key={s.title} className="p-6 rounded-lg border border-slate-200 bg-white shadow-sm">
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-md mb-4"
                  style={{ backgroundColor: 'rgba(245,158,11,0.1)' }}
                >
                  <s.icon size={20} style={{ color: 'var(--color-ciq-safety)' }} />
                </div>
                <div
                  className="text-xs font-semibold mb-2"
                  style={{ color: 'var(--color-ciq-steel)' }}
                >
                  Solution {i + 1}
                </div>
                <h3 className="font-semibold text-base" style={{ color: '#0A1628' }}>
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="homeowners-features-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">Everything you need</p>
          <h2
            id="homeowners-features-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-2xl"
          >
            Built specifically{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>for homeowners</span>{' '}
            like you.
          </h2>
          <p className="mt-4 max-w-xl text-[color:var(--color-ciq-concrete)]">
            Every feature is designed around a single principle: you should never have to take a contractor's word for anything. Every claim is verified. Every payment is justified. Every material is tracked.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-md mb-4"
                  style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}
                >
                  <f.icon size={20} style={{ color: 'var(--color-ciq-steel)' }} />
                </div>
                <h3 className="font-semibold text-base text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-ciq-concrete)] leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-lg border border-white/[0.06] bg-white/[0.02]">
            <div className="flex items-start gap-4">
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-md shrink-0"
                style={{ backgroundColor: 'rgba(245,158,11,0.1)' }}
              >
                <AlertTriangle size={20} style={{ color: 'var(--color-ciq-safety)' }} />
              </div>
              <div>
                <h3 className="font-semibold text-white text-base">
                  The platform cost versus the money it saves
                </h3>
                <p className="mt-2 text-sm text-[color:var(--color-ciq-concrete)] leading-relaxed max-w-3xl">
                  On a ₹40 lakh home construction project, even a conservative 15% overcharge amounts to ₹6 lakhs. ConstructIQ's homeowner plan costs a fraction of that. The BOQ verification alone typically saves more than the platform fee in the first payment tranche. And unlike a contractor dispute that ends in court, ConstructIQ's verification system prevents the overcharge from happening in the first place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaStripSection />
    </>
  )
}
