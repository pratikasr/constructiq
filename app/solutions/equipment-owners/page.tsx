import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Fuel,
  AlertTriangle,
  MapPin,
  Activity,
  ShieldCheck,
  Search,
  BarChart3,
  Camera,
  CalendarDays,
  TrendingUp,
  Wrench,
} from 'lucide-react'
import { CtaStripSection } from '@/components/sections/CtaStripSection'

export const metadata: Metadata = {
  title: 'For Equipment Owners -- ConstructIQ',
  description:
    'Reduce idle time. GPS-tracked usage. Escrow deposits. Disputes settled with data.',
}

const painPoints = [
  {
    icon: Clock,
    title: 'Your equipment sits idle 40% of the time',
    description:
      `A JCB costs ₹40-60 lakhs. An excavator, more. A concrete mixer or tower crane is a serious capital commitment. You bought this equipment to earn. But finding consistent bookings is entirely word-of-mouth -- you get work when someone remembers to call you, and then nothing for 2-3 weeks. Industry data suggests construction equipment in Tier 2/3 India utilizes only 55-60% of available hours annually. That gap is lost income from a depreciating asset with ongoing maintenance and operator costs.`,
  },
  {
    icon: Fuel,
    title: "Operators over-report hours and you can't prove otherwise",
    description:
      `Your excavator operator sends you a daily usage log: "10 hours today." The contractor is billed for 10 hours. But was the machine actually running for 10 hours, or was it 7 hours with 3 idle on the timesheet? Engine-hour fraud is endemic in construction equipment rentals. Without a tamper-proof logging system, you're relying on trust in a transaction with real financial stakes. And when the contractor disputes the hours claimed, you have nothing to stand on.`,
  },
  {
    icon: AlertTriangle,
    title: 'Deposit disputes with no evidence of original condition',
    description:
      "You collect a ₹50,000 security deposit. The equipment goes to site for 3 weeks. When it comes back, there's a hydraulic leak and a bent boom. Was that pre-existing? The contractor says yes. You say no. Without condition documentation at pickup and return, this dispute goes one of two ways: you absorb the cost, or you lose a client relationship. Neither is acceptable when you're running a business on tight equipment margins.",
  },
]

const solutions = [
  {
    icon: MapPin,
    title: 'Listed on geotagged marketplace -- get booked by nearby projects',
    description:
      "List your JCB, excavator, mixer, crane, or other equipment on ConstructIQ with your location, availability calendar, day/hour rate, and operator inclusion. Projects within your operating radius searching for equipment on the platform will see your listing. Contractors filter by equipment type, location, and availability -- and book directly through the platform. You go from finding work through 5 phone calls to having booking requests come to you from projects you'd never have reached through your network.",
  },
  {
    icon: Activity,
    title: 'GPS engine-hours log cannot be faked',
    description:
      "ConstructIQ's GPS device -- plugged into your equipment's OBD port -- records ignition-on/off events, real GPS coordinates, and engine running hours in real time. Both you and the contractor see the same verified log. Billing is generated from the GPS record, not an operator's timesheet. Disputes about hours are resolved by data, not arguments. The system also tracks idling hours separately from productive hours, giving you insight into operator behaviour on-site.",
  },
  {
    icon: ShieldCheck,
    title: 'Condition photos at pickup and return end disputes',
    description:
      'When equipment is collected for a booking, both parties walk around it together and capture condition photos through the ConstructIQ app. The photos are timestamped, GPS-pinned, and stored against the booking record. At return, the same process is repeated. Any damage that appears in the return photos but not the pickup photos is documented with irrefutable evidence. Security deposit resolution is handled in the platform -- no more arguing from memory about what the equipment looked like when it left.',
  },
]

const features = [
  {
    icon: Search,
    title: 'Geotagged Marketplace Listing',
    description:
      'Your equipment appears in search results when contractors on ConstructIQ look for machinery within your operating radius. Filter by type, capacity, availability, and price. You control your listing, rates, and terms. New bookings arrive without cold calls.',
  },
  {
    icon: Activity,
    title: 'GPS Usage Logging',
    description:
      'Real-time GPS tracking of your equipment during bookings. Engine-hour logs are generated from ignition data, not operator self-reporting. Billing is tied to verified GPS records. Idle-hour vs. productive-hour breakdown available for every shift.',
  },
  {
    icon: ShieldCheck,
    title: 'Escrow Deposit System',
    description:
      'Security deposits are held in escrow in the platform for the booking duration. At return, if condition photos confirm no damage, the deposit is released to the contractor within 24 hours. If damage is documented, the claim process is handled in-platform with photo evidence.',
  },
  {
    icon: Camera,
    title: 'Condition Photo Capture',
    description:
      'Structured condition check-in and check-out photo documentation. App guides both parties through a standard inspection sequence: all four sides, hydraulics, undercarriage, cabin, and attachments. Photos stored permanently against the booking record.',
  },
  {
    icon: CalendarDays,
    title: 'Digital Booking Calendar',
    description:
      'Manage your equipment availability in real time. Block dates for maintenance or pre-committed work. Accept and confirm platform bookings. View upcoming schedule across all your equipment in one dashboard. Eliminate double-booking and scheduling conflicts.',
  },
  {
    icon: BarChart3,
    title: 'Earnings Dashboard',
    description:
      'Monthly utilization rate, total hours invoiced, earnings breakdown per booking, and comparison to previous periods. Know exactly which equipment is earning well and which is underutilized. Use platform data to make decisions about fleet expansion or disposal.',
  },
]

export default function EquipmentOwnersPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="equipment-hero-heading"
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
          className="pointer-events-none absolute bottom-0 left-0 w-[700px] h-[500px] opacity-10"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse, var(--color-ciq-steel) 0%, transparent 70%)',
            transform: 'translate(-30%, 30%)',
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
            <span style={{ color: 'var(--color-ciq-safety)' }}>For Equipment Owners</span>
          </nav>

          <p className="pretitle">For Equipment Owners</p>

          <h1
            id="equipment-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl"
          >
            Less idle time.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>GPS-verified hours.</span>{' '}
            Zero deposit disputes.
          </h1>

          <p className="mt-6 max-w-2xl text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            JCB, excavator, mixer, and crane owners in Tier 2/3 India have two problems: not enough bookings and too many disputes. ConstructIQ's geotagged equipment marketplace puts your machine in front of active projects in your area. GPS engine-hour tracking eliminates billing fraud. Condition photo documentation ends deposit disputes before they start.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: 'var(--color-ciq-safety)', color: '#0A1628' }}
            >
              List Your Equipment <ArrowRight size={16} />
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
              { value: '40%', label: 'Typical equipment idle rate in Tier 2/3 construction markets' },
              { value: 'GPS', label: 'Tamper-proof engine-hour verification for every booking' },
              { value: '24 hrs', label: 'Deposit release after condition-confirmed return' },
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
        aria-labelledby="equipment-pain-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="border-t border-white/[0.06] pt-16">
            <p className="pretitle">The problem today</p>
            <h2
              id="equipment-pain-heading"
              className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl"
            >
              Expensive assets.{' '}
              <span style={{ color: 'var(--color-ciq-safety)' }}>No transparency.</span>{' '}
              No protection.
            </h2>
            <p className="mt-4 max-w-xl text-[color:var(--color-ciq-concrete)]">
              Equipment owners in Tier 2/3 India carry significant capital risk with minimal operational support. These three problems eat directly into the returns that justify owning expensive construction machinery.
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
        aria-labelledby="equipment-solutions-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>
            How ConstructIQ helps
          </p>
          <h2
            id="equipment-solutions-heading"
            className="font-display font-bold mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05]"
            style={{ color: '#0A1628' }}
          >
            More bookings. Better data.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>Cleaner exits.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-600">
            ConstructIQ gives equipment owners a marketplace, a verification system, and a dispute-resolution framework -- purpose-built for construction machinery rental in Tier 2/3 India.
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
        aria-labelledby="equipment-features-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">Platform features</p>
          <h2
            id="equipment-features-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-2xl"
          >
            Run your equipment fleet{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>like a business.</span>
          </h2>
          <p className="mt-4 max-w-xl text-[color:var(--color-ciq-concrete)]">
            Whether you own one JCB or a 15-machine fleet, ConstructIQ gives you the operational visibility and protection layer that serious equipment rental businesses need.
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
              <Wrench size={24} style={{ color: 'var(--color-ciq-safety)' }} />
              <h3 className="mt-4 font-semibold text-white text-base">
                Know when your equipment needs maintenance before it breaks down
              </h3>
              <p className="mt-2 text-sm text-[color:var(--color-ciq-concrete)] leading-relaxed">
                GPS engine-hour tracking feeds into a maintenance schedule based on manufacturer-recommended service intervals. When your JCB approaches 250 engine hours since the last service, the system alerts you. Schedule maintenance during a natural booking gap rather than in the middle of a project. Fewer emergency breakdowns, fewer penalty clauses, longer equipment life.
              </p>
            </div>
            <div className="p-8 rounded-lg border border-white/[0.06] bg-white/[0.02]">
              <TrendingUp size={24} style={{ color: 'var(--color-ciq-safety)' }} />
              <h3 className="mt-4 font-semibold text-white text-base">
                Use utilization data to make better fleet decisions
              </h3>
              <p className="mt-2 text-sm text-[color:var(--color-ciq-concrete)] leading-relaxed">
                Your earnings dashboard shows utilization rates, revenue per machine per month, and seasonal demand patterns. If your mini excavator runs at 80% utilization for 8 consecutive months while your road roller sits at 35%, you have a data-backed case for selling the roller and adding another excavator. Most equipment owners make fleet decisions based on intuition. ConstructIQ lets you make them based on verified operational data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaStripSection />
    </>
  )
}
