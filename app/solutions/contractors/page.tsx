import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  Timer,
  ShoppingCart,
  Smartphone,
  Zap,
  PackageCheck,
  MapPin,
  FileSpreadsheet,
  Users,
  Lock,
  Eye,
  FileText,
  TrendingUp,
} from 'lucide-react'
import { CtaStripSection } from '@/components/sections/CtaStripSection'

export const metadata: Metadata = {
  title: 'For Contractors -- ConstructIQ',
  description:
    'Win more bids. Source materials cheaper. Manage labour without WhatsApp chaos.',
}

const painPoints = [
  {
    icon: Timer,
    title: 'You lose bids because estimation takes too long',
    description:
      "A client calls you on Monday asking for a quote by Thursday. You spend two days manually calculating quantities -- counting bricks, estimating RCC volumes, looking up last year's rates -- and by the time your quote reaches them, two other contractors have already submitted. In Tier 2/3 markets where every project is relationship-driven, being slow means losing work. You need to close in 24 hours, not 5 days.",
  },
  {
    icon: ShoppingCart,
    title: 'Material procurement is 3 phone calls and 2 middlemen',
    description:
      "You call your regular supplier for cement pricing. He quotes ₹380/bag. You know there's a better rate somewhere but you don't have time to shop 5 suppliers. You accept. The delivery comes 3 days late. The invoice doesn't match the verbal quote. Two weeks later you realize a stockist in the next district had cement at ₹358/bag and free delivery. The margin you lost on that single project was ₹40,000.",
  },
  {
    icon: Smartphone,
    title: 'Labour attendance is WhatsApp photos that can be faked',
    description:
      `Your site supervisor sends a WhatsApp group photo every morning showing "20 workers present." Except three of those workers have already left and two names on the muster roll are ghost entries billing you ₹600/day each. Clients are increasingly asking for verified attendance before releasing payment. You can't provide it. You're paying for labour you can't verify and losing client trust because of a system that belongs in 2005.`,
  },
]

const solutions = [
  {
    icon: Zap,
    title: 'Generate accurate BOQ from drawings in minutes',
    description:
      "Upload your client's architectural and structural drawings to ConstructIQ. The AI engine reads the PDF or DWG file, extracts quantities trade by trade -- earthwork, RCC, masonry, finishing -- and applies current CPWD/PWD rates for the project's district. Your BOQ is ready in under 15 minutes, formatted for client presentation or direct tender submission. You bid faster, you bid more accurately, and you win more.",
  },
  {
    icon: PackageCheck,
    title: 'Order direct from manufacturers in the platform',
    description:
      "ConstructIQ's material marketplace connects you directly to cement, steel, aggregate, brick, and fitting suppliers who have listed their inventory, pricing, and delivery terms. No middlemen. Compare quotes from 3-5 suppliers for your project's requirements, place the order in the platform, and track delivery confirmation. For a 100-bag cement order, the savings versus your traditional supplier average ₹15-25 per bag -- ₹1,500-₹2,500 saved per delivery, per project.",
  },
  {
    icon: MapPin,
    title: 'GPS + photo attendance that owners trust',
    description:
      `Workers clock in at your site using GPS-verified check-in on ConstructIQ's app. The system logs GPS coordinates at punch-in and punch-out, cross-referenced against the site address. Photo attendance with timestamp and location is generated automatically. You get a verified muster roll; your client sees a real-time dashboard of who is on site. No disputes, no "where are the workers" calls, and faster milestone payment approvals because the attendance data is already verified.`,
  },
]

const features = [
  {
    icon: FileSpreadsheet,
    title: 'AI BOQ Builder',
    description:
      'Upload drawings in PDF or DWG format and receive a complete Bill of Quantities with quantities, CPWD/PWD rates, and formatted output ready for client presentation -- in under 15 minutes.',
  },
  {
    icon: PackageCheck,
    title: 'Direct Material Ordering',
    description:
      'Compare live pricing from verified suppliers across your district and state. Order cement, steel, aggregates, bricks, and fittings with delivery confirmation tracking built in. No middlemen, better margins.',
  },
  {
    icon: Users,
    title: 'Labour Attendance Dashboard',
    description:
      'GPS-verified punch-in/punch-out, photo attendance, and real-time muster roll. Clients can view attendance data on their portal. Payment approvals are faster because attendance is no longer a dispute.',
  },
  {
    icon: Eye,
    title: 'Client Progress Portal',
    description:
      'Give every client a branded portal showing site photos, milestone status, material deliveries, and attendance data. Build trust, reduce site-visit requests, and differentiate your business from contractors who just send WhatsApp updates.',
  },
  {
    icon: Lock,
    title: 'Payment Milestone Tracker',
    description:
      `Log milestone completion with photo evidence and GPS. Clients approve through the platform. Payments are released on verified completion -- which means fewer disputes about what's "done enough" to unlock the next tranche.`,
  },
  {
    icon: FileText,
    title: 'Tender Document Generator',
    description:
      'Generate NIT-compliant Notice Inviting Tender documents alongside your BOQ -- scope of work, technical specifications, conditions of contract, and schedule of quantities in PWD standard format. Compete for government tenders with professional documentation.',
  },
]

export default function ContractorsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="contractors-hero-heading"
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
          className="pointer-events-none absolute top-0 left-0 w-[700px] h-[500px] opacity-10"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse, var(--color-ciq-steel) 0%, transparent 70%)',
            transform: 'translate(-30%, -30%)',
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
            <span style={{ color: 'var(--color-ciq-safety)' }}>For Contractors</span>
          </nav>

          <p className="pretitle">For Contractors & Builders</p>

          <h1
            id="contractors-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl"
          >
            Win more bids.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>Source smarter.</span>{' '}
            Run your site on data, not WhatsApp.
          </h1>

          <p className="mt-6 max-w-2xl text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            ConstructIQ is built for contractors who want to grow in Tier 2/3 India. Generate accurate BOQs in minutes. Order materials direct from manufacturers. Give clients verified attendance and milestone data that earns faster payments. The platform that makes you the most professional contractor in your market.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: 'var(--color-ciq-safety)', color: '#0A1628' }}
            >
              Get Started Free <ArrowRight size={16} />
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
              { value: '15 min', label: 'BOQ generation from uploaded drawings' },
              { value: '₹20k+', label: 'Average material savings per project vs. traditional procurement' },
              { value: '3×', label: 'Faster milestone payment approvals with verified data' },
            ].map((s) => (
              <div key={s.label} className="p-6 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                <p
                  className="font-display font-bold text-[32px] lg:text-[40px] leading-none"
                  style={{ color: 'var(--color-ciq-steel)' }}
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
        aria-labelledby="contractors-pain-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="border-t border-white/[0.06] pt-16">
            <p className="pretitle">The problem today</p>
            <h2
              id="contractors-pain-heading"
              className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl"
            >
              Most contractors in Tier 2/3 India are{' '}
              <span style={{ color: 'var(--color-ciq-safety)' }}>running on improvised systems.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[color:var(--color-ciq-concrete)]">
              Slow estimation, expensive procurement, and unverifiable attendance aren't just inconveniences -- they're the reason most small and mid-sized contractors can't scale beyond 3-5 projects at a time.
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
        aria-labelledby="contractors-solutions-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>
            How ConstructIQ helps
          </p>
          <h2
            id="contractors-solutions-heading"
            className="font-display font-bold mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05]"
            style={{ color: '#0A1628' }}
          >
            The operational edge that makes you{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>the professional in your market.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-600">
            Your competitors are still estimating on paper and texting suppliers. ConstructIQ gives you a technological edge that translates directly to more bids won, higher margins, and clients who pay faster.
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
        aria-labelledby="contractors-features-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">Full feature set</p>
          <h2
            id="contractors-features-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-2xl"
          >
            Everything a growing contractor{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>needs on one platform.</span>
          </h2>
          <p className="mt-4 max-w-xl text-[color:var(--color-ciq-concrete)]">
            Replace the spreadsheets, the WhatsApp groups, and the phone-call procurement chain with a single platform that handles estimation, sourcing, site management, and client communication.
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

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="p-8 rounded-lg border border-white/[0.06] bg-white/[0.02]">
              <TrendingUp size={24} style={{ color: 'var(--color-ciq-safety)' }} />
              <h3 className="mt-4 font-semibold text-white text-base">
                Your track record becomes your competitive advantage
              </h3>
              <p className="mt-2 text-sm text-[color:var(--color-ciq-concrete)] leading-relaxed">
                Every project you complete on ConstructIQ builds a verified track record: on-time milestones, accurate BOQs, verified attendance, client ratings. New clients considering two contractors -- one with a verified digital track record, one without -- will choose you every time. In Tier 2/3 India, reputation is currency. ConstructIQ makes your reputation verifiable.
              </p>
            </div>
            <div className="p-8 rounded-lg border border-white/[0.06] bg-white/[0.02]">
              <Lock size={24} style={{ color: 'var(--color-ciq-safety)' }} />
              <h3 className="mt-4 font-semibold text-white text-base">
                Faster payments because the data does the convincing
              </h3>
              <p className="mt-2 text-sm text-[color:var(--color-ciq-concrete)] leading-relaxed">
                The most common reason contractors wait for payment is a client who isn't sure the milestone is genuinely complete. ConstructIQ's milestone verification -- photos, GPS, material logs -- removes the ambiguity. Clients approve in the app rather than scheduling a site visit. You get paid 3-5 days faster on average, which matters enormously when you're managing cash flow across multiple projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaStripSection />
    </>
  )
}
