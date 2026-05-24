import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  FileQuestion,
  EyeOff,
  MapPin,
  FileCheck,
  Camera,
  LayoutDashboard,
  Database,
  ShieldCheck,
  BarChart3,
  AlertOctagon,
  Building2,
  TrendingDown,
} from 'lucide-react'
import { CtaStripSection } from '@/components/sections/CtaStripSection'

export const metadata: Metadata = {
  title: 'For Banks & NBFCs -- ConstructIQ',
  description:
    'BOQ-linked loan applications. Milestone-verified disbursements. Real-time project portfolio dashboards.',
}

const painPoints = [
  {
    icon: FileQuestion,
    title: 'Construction loan applications have no structured cost data',
    description:
      `A borrower walks in with a building plan, a handwritten contractor quote, and a self-assessed cost summary. Your credit team is expected to underwrite a ₹35 lakh construction loan based on a document that has no independent verification, no line-item breakdown, and no benchmark against market rates. The result: underwriting is guesswork dressed up as credit analysis. You either over-lend against padded estimates or under-lend because you apply conservative haircuts that push good borrowers away.`,
  },
  {
    icon: EyeOff,
    title: 'You disburse money with no way to verify milestone completion',
    description:
      "Construction loans are structured with disbursement tranches tied to construction milestones -- foundation, plinth, slab, walls, roof. But verifying those milestones requires a physical site visit by your field officer. In Tier 2/3 India, a field officer covers 20-30 active loan accounts across a 50-80 km radius. Visits are delayed, scheduled weeks out, or skipped entirely under workload pressure. You end up disbursing based on borrower self-declaration -- which means you're releasing funds for milestones that may not exist.",
  },
  {
    icon: MapPin,
    title: 'Portfolio monitoring requires expensive, infrequent site visits',
    description:
      "Your construction loan portfolio in a single district branch might have 80-150 active accounts. Meaningful monitoring of each account's progress, risk indicators, and construction trajectory requires data that doesn't exist in any structured form. NPAs in construction lending often surprise field teams because warning signs -- stalled construction, material delivery gaps, contractor abandonment -- only become visible at the annual review, not the moment they occur.",
  },
]

const solutions = [
  {
    icon: FileCheck,
    title: 'Every ConstructIQ project has a verified, AI-generated BOQ as the loan basis',
    description:
      'When a borrower applies for a construction loan through or alongside ConstructIQ, their project has an AI-generated Bill of Quantities based on uploaded architectural drawings and cross-referenced against current CPWD/PWD rate databases for their district. You receive a structured, line-item cost document -- not a handwritten estimate. The BOQ is the underwriting foundation: a verified, market-rate cost breakdown that gives your credit team something to actually analyze. Loan amounts are anchored to real construction costs, not padded contractor quotes.',
  },
  {
    icon: Camera,
    title: 'Photo + GPS milestone verification before each disbursement tranche',
    description:
      "Every disbursement tranche in a ConstructIQ-financed project is tied to a verified milestone completion event. The contractor submits geo-tagged, timestamped photos of the completed milestone -- foundation completed, plinth finished, ground floor slab poured. The platform's QC layer cross-checks submissions against expected construction sequence and flags anomalies. Your field officer reviews the digital verification package and approves disbursement in the platform -- no site visit required for routine tranches. Site visits are reserved for flagged anomalies, not every disbursement.",
  },
  {
    icon: LayoutDashboard,
    title: 'Real-time dashboard showing all financed projects\' progress',
    description:
      'Your branch manager and risk team see a live portfolio view: every ConstructIQ-registered project in your loan book, with current construction phase, last verified milestone, days since last activity, material delivery logs, and contractor attendance data. Portfolio health is visible at a glance. Loans that are progressing on schedule are green. Loans with stalled construction, missed milestone submissions, or anomalous patterns are flagged in amber and red. Early warning before an NPA, not a surprise after.',
  },
]

const features = [
  {
    icon: Database,
    title: 'Structured Loan Application Import',
    description:
      'ConstructIQ project data -- BOQ, drawings, contractor agreements, milestone schedule -- exports directly into a structured loan application package. Reduce the document chase in underwriting. All cost and project data is already verified by the platform before it reaches your credit team.',
  },
  {
    icon: FileCheck,
    title: 'BOQ-Backed Underwriting',
    description:
      'AI-generated, market-rate-referenced Bills of Quantities replace handwritten contractor estimates as the underwriting basis. Line-item cost data broken by trade, with CPWD/PWD/DSR rates applied by district and financial year. Defensible cost assessment that you can put in the credit note.',
  },
  {
    icon: ShieldCheck,
    title: 'Milestone Disbursement Triggers',
    description:
      'Disbursement tranches are locked in the system against specific milestones. Unlock only fires when milestone verification -- photos, GPS, QC review -- is complete. Removes the possibility of disbursement against unverified progress, even under borrower or field officer pressure.',
  },
  {
    icon: Camera,
    title: 'Photo-Verified Completion',
    description:
      "GPS-tagged, timestamped site photos submitted through the platform app for every milestone. Photos are automatically checked against expected construction phase, location coordinates, and construction sequence. Anomaly detection flags submissions that don't match expected progress.",
  },
  {
    icon: BarChart3,
    title: 'Portfolio Monitoring Dashboard',
    description:
      'Branch-level and regional portfolio views showing all financed projects. Filter by construction phase, days since last activity, disbursement status, and risk flags. One dashboard replaces 80 manual account reviews. Field officer time is directed to accounts that need attention, not routine check-ins.',
  },
  {
    icon: AlertOctagon,
    title: 'Early Warning Anomaly Alerts',
    description:
      'The platform monitors construction velocity, milestone spacing, material delivery frequency, and contractor attendance on every project. When patterns deviate from the expected project trajectory -- construction stalls, no deliveries in 3+ weeks, contractor off-site -- the system generates an early warning alert to your field team. Intervene early, before a recoverable situation becomes an NPA.',
  },
]

export default function BanksPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="banks-hero-heading"
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
          className="pointer-events-none absolute top-1/2 right-0 w-[700px] h-[600px] opacity-10"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse, var(--color-ciq-steel) 0%, transparent 70%)',
            transform: 'translate(30%, -50%)',
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
            <span style={{ color: 'var(--color-ciq-safety)' }}>For Banks & NBFCs</span>
          </nav>

          <p className="pretitle">For Banks & NBFCs</p>

          <h1
            id="banks-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl"
          >
            Construction lending with{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>verified data</span>{' '}
            at every stage.
          </h1>

          <p className="mt-6 max-w-2xl text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            Construction loans are among the highest-risk retail lending products in Tier 2/3 India -- not because borrowers are bad, but because lenders have been flying blind. ConstructIQ replaces guesswork with structured data: AI-verified BOQs as the underwriting basis, GPS and photo milestone verification before every disbursement, and a real-time portfolio dashboard that shows you what's happening on-site without requiring a field visit.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: 'var(--color-ciq-safety)', color: '#0A1628' }}
            >
              Request a Demo <ArrowRight size={16} />
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
              { value: 'BOQ', label: 'AI-verified bill of quantities as the underwriting basis for every project' },
              { value: 'GPS', label: 'Photo and location verification before each disbursement tranche' },
              { value: 'Live', label: 'Real-time portfolio dashboard -- no site visits required for routine monitoring' },
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
        aria-labelledby="banks-pain-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="border-t border-white/[0.06] pt-16">
            <p className="pretitle">The problem today</p>
            <h2
              id="banks-pain-heading"
              className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl"
            >
              Construction lending in Tier 2/3 India is{' '}
              <span style={{ color: 'var(--color-ciq-safety)' }}>structurally under-monitored.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[color:var(--color-ciq-concrete)]">
              The data problem in construction lending isn't the borrower's creditworthiness -- it's the absence of verifiable, real-time information about the project being financed. These three gaps drive construction loan NPAs.
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
        aria-labelledby="banks-solutions-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>
            How ConstructIQ helps
          </p>
          <h2
            id="banks-solutions-heading"
            className="font-display font-bold mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05]"
            style={{ color: '#0A1628' }}
          >
            Verified data at underwriting,{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>disbursement, and portfolio review.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-600">
            ConstructIQ integrates into your construction lending workflow at three critical points: before you lend, each time you disburse, and continuously throughout the loan term. Data replaces trust at every stage.
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
        aria-labelledby="banks-features-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">Platform capabilities</p>
          <h2
            id="banks-features-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-2xl"
          >
            The infrastructure for{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>responsible construction lending.</span>
          </h2>
          <p className="mt-4 max-w-xl text-[color:var(--color-ciq-concrete)]">
            ConstructIQ's banking integration layer gives lenders structured data access, automated verification workflows, and portfolio monitoring tools that make construction lending more accurate, more efficient, and significantly lower risk.
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
              <Building2 size={24} style={{ color: 'var(--color-ciq-safety)' }} />
              <h3 className="mt-4 font-semibold text-white text-base">
                The case for construction lending in Tier 2/3 India
              </h3>
              <p className="mt-2 text-sm text-[color:var(--color-ciq-concrete)] leading-relaxed">
                India is adding 10 million new households per year in Tier 2/3 cities and rural areas. The majority of these homes are owner-built, financed through a combination of personal savings and institutional lending. This is one of the largest retail lending opportunities in the country. The banks and NBFCs that build the right verification infrastructure now will capture disproportionate share of this market as it formalises.
              </p>
            </div>
            <div className="p-8 rounded-lg border border-white/[0.06] bg-white/[0.02]">
              <TrendingDown size={24} style={{ color: 'var(--color-ciq-safety)' }} />
              <h3 className="mt-4 font-semibold text-white text-base">
                The NPA reduction case is straightforward
              </h3>
              <p className="mt-2 text-sm text-[color:var(--color-ciq-concrete)] leading-relaxed">
                Most construction loan NPAs are preceded by months of warning signals: construction stalls, contractor abandonment, material delivery gaps, missed milestone submissions. ConstructIQ's continuous monitoring layer captures these signals in real time. Early intervention -- a call from your field officer at the 3-week stall, not the 6-month default -- resolves the majority of at-risk accounts before they deteriorate. The data infrastructure to support that early intervention is exactly what the platform provides.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaStripSection />
    </>
  )
}
