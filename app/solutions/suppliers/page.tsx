import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  CreditCard,
  BarChart2,
  Globe,
  ShieldCheck,
  Telescope,
  Store,
  TrendingUp,
  PackageCheck,
  Star,
  Truck,
  AlertCircle,
} from 'lucide-react'
import { CtaStripSection } from '@/components/sections/CtaStripSection'

export const metadata: Metadata = {
  title: 'For Material Suppliers -- ConstructIQ',
  description:
    'Reach active construction projects beyond your district. Get demand visibility and streamlined B2B ordering.',
}

const painPoints = [
  {
    icon: MapPin,
    title: 'Your sales are limited to whoever knows your phone number',
    description:
      "Your cement depot or steel stockyard has been running for 15 years. You have loyal clients in your district. But 40 km away, a contractor is placing a 200-tonne TMT order with a supplier he found through his cousin's referral -- even though your price is better and your delivery is faster. There is no marketplace for construction materials in Tier 2/3 India. You have no way to reach projects beyond your existing network, so your growth is capped by who you know, not what you offer.",
  },
  {
    icon: CreditCard,
    title: 'Payment collection from contractors is unpredictable and stressful',
    description:
      `You extend credit to contractors because everyone does it. A ₹4.5 lakh cement order goes out. The contractor promises payment in 30 days. On day 45, he's "waiting for his client to release the next tranche." Day 60, he's not answering calls. You've delivered the goods, you've issued the invoice, but you have no mechanism to enforce payment timelines. Bad debt write-offs and delayed collection erode margins that were never wide to begin with.`,
  },
  {
    icon: BarChart2,
    title: 'You have no visibility into upcoming project demand',
    description:
      "You order inventory based on gut feel and last year's seasonality. You overstock in slow months and run short in peak construction season. When 5 contractors in your district start projects in March simultaneously, you don't have enough cement. When August rains slow construction, you're sitting on ₹12 lakhs of working capital tied up in inventory. Demand forecasting for construction materials is impossible when you have no window into what projects are actively in procurement.",
  },
]

const solutions = [
  {
    icon: Globe,
    title: 'Listed on the ConstructIQ marketplace, visible to all projects in your state',
    description:
      'Create your supplier storefront on ConstructIQ. Every construction project registered on the platform in your state -- and neighbouring states -- can see your inventory, pricing, delivery terms, and ratings. Your reach expands from your local network to every active project in a 200 km radius without a sales team. Contractors filtering the marketplace for cement, steel, or aggregate suppliers in their delivery zone will find you. You compete on price, delivery time, and ratings -- not on who you know.',
  },
  {
    icon: ShieldCheck,
    title: 'Escrow-backed payments tied to delivery confirmation',
    description:
      "When a contractor places an order through ConstructIQ, payment is held in escrow before delivery. Once the delivery is confirmed by the contractor (QR scan at site) or by the platform's automated delivery verification, funds are released to you within 24-48 hours. No more credit risk. No more chasing payments. No more arguing about whether the delivery arrived. The entire payment cycle is automated and tied to a verifiable delivery event -- not a handshake and a promise.",
  },
  {
    icon: Telescope,
    title: 'Pipeline dashboard shows you which projects are in the procurement phase',
    description:
      "ConstructIQ's supplier dashboard gives you a live view of projects in your region that are currently in the material procurement stage. You see project type, construction phase, estimated material quantities needed, and procurement timeline. This lets you anticipate demand weeks in advance -- stock up on 53-grade cement when you see 12 RCC slab projects entering procurement in your district next month. Better inventory management, fewer stockouts, lower carrying costs.",
  },
]

const features = [
  {
    icon: Store,
    title: 'Supplier Storefront',
    description:
      'A branded listing page showing your full product catalogue -- material grades, available quantities, pricing, delivery zones, and minimum order sizes. Updated by you in real time. Searchable by material type, grade, and location by contractors on the platform.',
  },
  {
    icon: TrendingUp,
    title: 'Project Pipeline Visibility',
    description:
      'Live dashboard showing projects in your region by phase. Filter for projects entering the procurement stage, see estimated material requirements, and identify high-value orders before they go to other suppliers.',
  },
  {
    icon: PackageCheck,
    title: 'BOQ-Matched Demand',
    description:
      "When a contractor generates a BOQ on ConstructIQ, the platform auto-matches material quantities to listed suppliers. Your storefront appears as a recommended supplier when a project's cement, steel, or aggregate requirements match your listed inventory and delivery zone.",
  },
  {
    icon: ShieldCheck,
    title: 'Escrow Payment Protection',
    description:
      'Every order placed through the platform has payment locked in escrow before delivery. Delivery confirmation triggers automatic fund release. No credit risk, no payment disputes, no bad debt. Your DSO drops from 45+ days to under 48 hours.',
  },
  {
    icon: Truck,
    title: 'Delivery Confirmation System',
    description:
      'QR-code-based delivery logging at site entry. Driver scans the code; the system records material grade, quantity, and timestamp. Confirmation is logged against your invoice and triggers payment release. Every delivery is documented with a verifiable digital receipt.',
  },
  {
    icon: Star,
    title: 'Rating and Review System',
    description:
      "Contractors rate deliveries on accuracy, timeliness, and material quality. Your rating is publicly visible on your storefront and factors into the platform's supplier recommendation algorithm. Consistent quality service compounds into a dominant position in your market.",
  },
]

export default function SuppliersPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="suppliers-hero-heading"
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
          className="pointer-events-none absolute top-0 right-0 w-[600px] h-[500px] opacity-10"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse, var(--color-ciq-steel) 0%, transparent 70%)',
            transform: 'translate(25%, -25%)',
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
            <span style={{ color: 'var(--color-ciq-safety)' }}>For Suppliers</span>
          </nav>

          <p className="pretitle">For Material Suppliers</p>

          <h1
            id="suppliers-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl"
          >
            Reach every active project{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>in your state.</span>{' '}
            Get paid on delivery.
          </h1>

          <p className="mt-6 max-w-2xl text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            Cement, steel, aggregate, brick, and fitting suppliers in Tier 2/3 India are constrained by local networks and slow-paying contractors. ConstructIQ opens your business to a state-wide marketplace of verified projects, delivers escrow-backed payments on every order, and gives you demand visibility that lets you manage inventory with precision instead of guesswork.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: 'var(--color-ciq-safety)', color: '#0A1628' }}
            >
              List Your Business <ArrowRight size={16} />
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
              { value: '200 km', label: 'Reach: orders from projects across your delivery zone' },
              { value: '48 hrs', label: 'Maximum payment cycle after delivery confirmation' },
              { value: '0', label: 'Credit risk on orders placed through the platform' },
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
        aria-labelledby="suppliers-pain-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="border-t border-white/[0.06] pt-16">
            <p className="pretitle">The problem today</p>
            <h2
              id="suppliers-pain-heading"
              className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl"
            >
              Your growth is limited by{' '}
              <span style={{ color: 'var(--color-ciq-safety)' }}>geography and credit risk.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[color:var(--color-ciq-concrete)]">
              Material suppliers in India's construction heartland -- Bihar, UP, Jharkhand, MP, Odisha -- face the same structural problems: captive local markets, slow-paying contractors, and zero visibility into the demand pipeline that could help them grow.
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
        aria-labelledby="suppliers-solutions-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>
            How ConstructIQ helps
          </p>
          <h2
            id="suppliers-solutions-heading"
            className="font-display font-bold mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05]"
            style={{ color: '#0A1628' }}
          >
            Expand your reach.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>Eliminate your credit risk.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-600">
            ConstructIQ gives material suppliers three things they've never had: a digital marketplace to reach projects beyond their local network, guaranteed payment tied to delivery, and a live view of upcoming demand across their region.
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
        aria-labelledby="suppliers-features-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">Platform features</p>
          <h2
            id="suppliers-features-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-2xl"
          >
            Everything a growing supplier{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>needs to scale.</span>
          </h2>
          <p className="mt-4 max-w-xl text-[color:var(--color-ciq-concrete)]">
            From your first listing to your hundredth order, ConstructIQ gives suppliers the digital infrastructure that was previously only available to large, metro-based building material companies.
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
                <AlertCircle size={20} style={{ color: 'var(--color-ciq-safety)' }} />
              </div>
              <div>
                <h3 className="font-semibold text-white text-base">
                  India's construction heartland is a ₹2.8 lakh crore market -- and it's going digital
                </h3>
                <p className="mt-2 text-sm text-[color:var(--color-ciq-concrete)] leading-relaxed max-w-3xl">
                  Bihar, UP, Jharkhand, and MP are among the fastest-growing construction markets in India, driven by government housing schemes, PMAY, rural road construction, and rising private home ownership. These projects need materials -- cement, steel, aggregates, bricks, fittings. The suppliers who establish a digital presence and verified track record now will dominate the market as procurement moves onto platforms. ConstructIQ is that platform.
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
