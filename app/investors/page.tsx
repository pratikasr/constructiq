import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Investors — ConstructIQ',
  description: "ConstructIQ is raising a seed round to scale India's construction intelligence platform.",
}

const metrics = [
  {
    value: '₹20L Cr',
    label: 'Addressable market',
    note: 'Annual construction spend in Tier 2/3 India — growing at 14% CAGR',
  },
  {
    value: '64%',
    label: 'Tier 2/3 share',
    note: 'Of all home construction in India happens outside metro cities',
  },
  {
    value: '200+',
    label: 'Beta users',
    note: 'Active projects on the platform across Bihar, UP, and Jharkhand',
  },
  {
    value: '₹3–5 Cr',
    label: 'Seed round size',
    note: 'Pre-Series A, raising now to scale to 4 states by end of 2026',
  },
]

const whyNow = [
  {
    title: 'India\'s construction digitisation wave',
    description:
      'Government mandates for digital documentation in public construction, RERA enforcement, and the rollout of PM Awas Yojana are all forcing formalisation of a sector that has operated informally for decades. The regulatory tailwinds for construction technology in India are stronger now than they have ever been.',
  },
  {
    title: 'UPI payment rails are live and trusted',
    description:
      'Milestone-linked construction payments require instant, verifiable digital transfers. Five years ago, this was impossible in Tier 2/3 India. Today, UPI penetration in Bihar and UP exceeds 70%, and contractors and homeowners are already transacting digitally. The infrastructure for our payment product is already in their pockets.',
  },
  {
    title: 'Affordable smartphones and 4G coverage',
    description:
      'A ₹6,000 Android phone and a Jio SIM is all a construction site supervisor in Gaya needs to use ConstructIQ. 4G coverage in Bihar districts has crossed 85% as of 2025. The device and connectivity gap that blocked rural construction tech for a decade is closed.',
  },
  {
    title: 'Banks are looking for construction credit products',
    description:
      'Construction loans are the largest unsecured credit risk for banks in Tier 2/3 India — there is no visibility into project progress, and default rates are high. A BOQ-linked disbursement product that gives lenders real-time milestone visibility is exactly what housing finance companies have been asking for. We are building the verification layer they need to lend more.',
  },
]

export default function InvestorsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="investors-hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(59,130,246,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[700px] h-[500px] opacity-10"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse at bottom right, var(--color-ciq-safety) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">Investors</p>
          <h1
            id="investors-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[56px] lg:text-[64px] leading-[1.05] max-w-4xl"
          >
            We&apos;re building India&apos;s{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>construction OS.</span>{' '}
            Join the round.
          </h1>
          <p className="mt-6 max-w-2xl text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            ConstructIQ is raising a ₹3–5 crore seed round to scale India&apos;s only end-to-end construction intelligence platform for Tier 2/3 cities — the ₹20 lakh crore market that every other tech company is ignoring.
          </p>
          <div className="mt-8">
            <a
              href="mailto:investors@constructiq.in"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: 'var(--color-ciq-safety)', color: '#0A1628' }}
            >
              Reach our team <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── METRICS ──────────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#0D1B2A' }}
        aria-labelledby="metrics-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">Key numbers</p>
          <h2
            id="metrics-heading"
            className="font-display font-bold text-white mt-4 text-[28px] md:text-[36px] leading-[1.1] max-w-2xl"
          >
            The market, the traction,{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>the ask.</span>
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-6 rounded-lg border border-white/[0.06] bg-white/[0.02]"
              >
                <p
                  className="font-display font-bold text-[40px] leading-none"
                  style={{ color: 'var(--color-ciq-safety)' }}
                >
                  {metric.value}
                </p>
                <p className="mt-3 font-semibold text-sm text-white">{metric.label}</p>
                <p className="mt-1.5 text-xs text-[color:var(--color-ciq-concrete)] leading-relaxed">{metric.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THESIS / WHY NOW ─────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="thesis-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">Investment thesis</p>
          <h2
            id="thesis-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] leading-[1.05] max-w-2xl"
          >
            Why this.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>Why now.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[color:var(--color-ciq-concrete)] leading-relaxed">
            Construction in Tier 2/3 India has had structural problems for decades. Four things have changed in the last 3 years that make a technology platform viable today when it was not before.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {whyNow.map((point, i) => (
              <div
                key={point.title}
                className="p-6 rounded-lg border border-white/[0.06] bg-white/[0.02]"
              >
                <div className="flex gap-3 items-start mb-3">
                  <span
                    className="font-display font-bold text-[13px] px-2 py-0.5 rounded shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(245,158,11,0.1)', color: 'var(--color-ciq-safety)' }}
                  >
                    0{i + 1}
                  </span>
                  <h3 className="font-semibold text-base text-white leading-snug">{point.title}</h3>
                </div>
                <p className="text-sm text-[color:var(--color-ciq-concrete)] leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE OF FUNDS ─────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#0D1B2A' }}
        aria-labelledby="use-of-funds-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="pretitle">The round</p>
              <h2
                id="use-of-funds-heading"
                className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] leading-[1.05]"
              >
                Raising{' '}
                <span style={{ color: 'var(--color-ciq-safety)' }}>₹3–5 crore</span>
                <br />
                seed round
              </h2>
              <p className="mt-6 text-[color:var(--color-ciq-concrete)] leading-relaxed">
                The seed round will fund 18 months of runway to scale from private beta to a full public launch across Bihar, UP, Jharkhand, and MP — and to close our first bank/NBFC lending partnerships.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:investors@constructiq.in"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: 'var(--color-ciq-safety)', color: '#0A1628' }}
                >
                  Contact our team <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { allocation: '40%', use: 'Product and engineering', detail: 'Expand AI BOQ capabilities, build mobile app, launch lender API' },
                { allocation: '30%', use: 'Market expansion', detail: 'On-ground team in Bihar, UP, Jharkhand, MP; contractor and homeowner acquisition' },
                { allocation: '20%', use: 'Lending partnerships', detail: 'NBFC integrations, credit product development, compliance' },
                { allocation: '10%', use: 'Operations', detail: 'Infrastructure, customer support, legal and regulatory' },
              ].map((item) => (
                <div
                  key={item.use}
                  className="flex gap-4 p-4 rounded-lg border border-white/[0.06] bg-white/[0.02] items-start"
                >
                  <span
                    className="font-display font-bold text-[20px] leading-none shrink-0 mt-0.5"
                    style={{ color: 'var(--color-ciq-safety)' }}
                  >
                    {item.allocation}
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-white">{item.use}</p>
                    <p className="mt-1 text-xs text-[color:var(--color-ciq-concrete)]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="investor-cta-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div
            className="p-8 md:p-12 rounded-xl border border-white/[0.06] bg-white/[0.02] text-center"
          >
            <p className="pretitle">Get in touch</p>
            <h2
              id="investor-cta-heading"
              className="font-display font-bold text-white mt-4 text-[28px] md:text-[36px] leading-[1.1] max-w-2xl mx-auto"
            >
              We are looking for investors who believe Bharat&apos;s infrastructure future{' '}
              <span style={{ color: 'var(--color-ciq-safety)' }}>is built from the ground up.</span>
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-[color:var(--color-ciq-concrete)] leading-relaxed">
              If you are an angel investor, seed fund, or family office with a thesis on Indian construction, fintech, or Tier 2/3 markets — we would like to talk.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:investors@constructiq.in"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold text-base transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: 'var(--color-ciq-safety)', color: '#0A1628' }}
              >
                investors@constructiq.in <ArrowRight size={16} />
              </a>
            </div>
            <p className="mt-4 text-xs text-[color:var(--color-ciq-concrete)] opacity-60">
              We respond to all investor enquiries within 48 hours.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
