import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Case Studies — ConstructIQ',
  description: 'How construction projects in Bihar and UP saved cost and time with ConstructIQ.',
}

const caseStudies = [
  {
    id: 'patna-family-home',
    category: 'Homeowner',
    categoryStyle: { bg: 'rgba(245,158,11,0.1)', text: 'var(--color-ciq-safety)', border: 'rgba(245,158,11,0.25)' },
    title: 'Family home in Patna, Bihar — Saved ₹4.2 lakh on a ₹28L project with BOQ verification',
    stat: '₹4.2L',
    statLabel: 'saved on ₹28L project',
    story:
      'The Sinha family in Patna were quoted ₹32L for a G+1 house by their contractor — far above what ConstructIQ\'s AI BOQ estimated for the same specification. After sharing the platform\'s BOQ with the contractor and switching to milestone-linked payments, the final cost came to ₹27.8L, including all finishing. The verified BOQ also helped them secure a ₹18L construction loan from a partner NBFC in under a week.',
  },
  {
    id: 'lucknow-school',
    category: 'Institutional',
    categoryStyle: { bg: 'rgba(59,130,246,0.1)', text: 'var(--color-ciq-steel)', border: 'rgba(59,130,246,0.25)' },
    title: 'School construction in Lucknow, UP — Loan disbursed in 11 days with BOQ-linked application',
    stat: '11 days',
    statLabel: 'from application to disbursement',
    story:
      'A private school operator in Lucknow was expanding their campus with a ₹1.2 crore construction project. Three banks had already declined their loan application citing inadequate project documentation. ConstructIQ generated a complete, CPWD-benchmarked BOQ from their approved drawings in under 4 hours. The resubmitted application with the verified BOQ was pre-qualified by a partner NBFC within 24 hours, with full disbursement in 11 days — enabling construction to start before the monsoon break.',
  },
  {
    id: 'ranchi-contractor',
    category: 'Contractor',
    categoryStyle: { bg: 'rgba(34,197,94,0.1)', text: '#16A34A', border: 'rgba(34,197,94,0.25)' },
    title: 'Contractor in Ranchi, Jharkhand — Won 3 more bids after switching to AI BOQ',
    stat: '3 bids',
    statLabel: 'won in the first quarter',
    story:
      'Rajesh Kumar, a civil contractor managing projects in Ranchi, had been losing bids to competitors with lower — often unrealistic — quotes. After onboarding onto ConstructIQ, he started submitting AI-generated BOQs with itemised CPWD rates instead of lump-sum quotations. His bids were now higher in some line items but substantially lower in others, and the detailed breakdown built trust with clients. He won three new projects in his first quarter on the platform, totalling ₹78L in contract value.',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="cs-hero-heading"
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
          className="pointer-events-none absolute top-0 right-0 w-[600px] h-[400px] opacity-10"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse at top right, var(--color-ciq-safety) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">Case Studies</p>
          <h1
            id="cs-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] leading-[1.05] max-w-3xl"
          >
            Real projects.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>Real results.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            Stories from homeowners, contractors, and institutions in Bihar, UP, and Jharkhand who used ConstructIQ to save money, access credit, and build better.
          </p>
        </div>
      </section>

      {/* ── CASE STUDY CARDS ─────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#F1F5F9' }}
        aria-labelledby="case-studies-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <h2 id="case-studies-heading" className="sr-only">Case studies</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="flex flex-col p-6 rounded-lg border border-slate-200 bg-white shadow-sm"
              >
                {/* Category badge */}
                <span
                  className="self-start px-2.5 py-1 rounded-full text-[11px] font-semibold border"
                  style={{
                    backgroundColor: cs.categoryStyle.bg,
                    color: cs.categoryStyle.text,
                    borderColor: cs.categoryStyle.border,
                  }}
                >
                  {cs.category}
                </span>

                {/* Title */}
                <h3
                  className="mt-4 font-display font-bold text-[17px] leading-[1.3]"
                  style={{ color: '#0A1628' }}
                >
                  {cs.title}
                </h3>

                {/* Outcome stat */}
                <div
                  className="mt-5 py-4 border-y border-slate-100 flex gap-4 items-baseline"
                >
                  <span
                    className="font-display font-bold text-[40px] leading-none"
                    style={{ color: 'var(--color-ciq-safety)' }}
                  >
                    {cs.stat}
                  </span>
                  <span className="text-sm text-slate-500">{cs.statLabel}</span>
                </div>

                {/* Story */}
                <p className="mt-5 text-sm text-slate-600 leading-relaxed flex-1">
                  {cs.story}
                </p>

                {/* CTA */}
                <div className="mt-6">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all"
                    style={{ color: 'var(--color-ciq-safety)' }}
                  >
                    Read full case study
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Coming soon note */}
          <div
            className="mt-14 p-6 rounded-lg border border-slate-200 bg-white shadow-sm text-center"
          >
            <p className="font-semibold text-base" style={{ color: '#0A1628' }}>
              More coming soon.
            </p>
            <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">
              We are documenting the beta cohort — 200+ projects across Bihar, UP, Jharkhand, and MP. Detailed case studies with full cost breakdowns, loan timelines, and contractor performance data will be published through 2026.
            </p>
            <div className="mt-6">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold"
                style={{ backgroundColor: '#0A1628', color: '#fff' }}
              >
                Join the beta cohort
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS STRIP ────────────────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ backgroundColor: '#0A1628' }}
        aria-label="Platform outcomes"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-12">
            {[
              { value: '₹4.2L', label: 'Average savings per project on our beta cohort' },
              { value: '11 days', label: 'Average time to construction loan disbursement' },
              { value: '23%', label: 'Average reduction in material cost through direct procurement' },
            ].map((metric) => (
              <div key={metric.label} className="text-center">
                <p
                  className="font-display font-bold text-[48px] leading-none"
                  style={{ color: 'var(--color-ciq-safety)' }}
                >
                  {metric.value}
                </p>
                <p className="mt-3 text-sm text-[color:var(--color-ciq-concrete)] max-w-[200px] mx-auto">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
