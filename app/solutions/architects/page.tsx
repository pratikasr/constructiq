import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Database,
  Receipt,
  Upload,
  Ruler,
  BookOpen,
  Table2,
  FileOutput,
  SearchCheck,
  Zap,
  Scale,
  FileSpreadsheet,
} from 'lucide-react'
import { CtaStripSection } from '@/components/sections/CtaStripSection'

export const metadata: Metadata = {
  title: 'For Architects — ConstructIQ',
  description:
    'Upload drawings, get BOQ. CPWD/PWD rate database. Audit contractor quotes with verified market data.',
}

const painPoints = [
  {
    icon: Clock,
    title: 'BOQ generation takes days of manual quantity take-off',
    description:
      "You've delivered the design drawings. The client wants a cost estimate. You open your drawings, pull out the scale ruler, and start counting: wall lengths, floor areas, window openings, column schedules. For a 2,000 sq ft residence, a complete quantity take-off — earthwork, RCC, masonry, plaster, flooring, MEP — takes 2-3 days of careful work. For a larger project, a week. This manual process is error-prone, non-billable in most mandates, and happens on every project whether you like it or not. It eats the time you should spend on design.",
  },
  {
    icon: Database,
    title: 'Rate data is outdated or from memory',
    description:
      "When a client asks whether a cost estimate is realistic, you give them a number based on the last project you worked on, or a general sense calibrated a year ago. The official rate databases — CPWD Schedule of Rates, state PWD SOR, District Schedule of Rates — are published annually but are difficult to access, not searchable in any useful format, and require knowing exactly which schedule applies to your district and financial year. Rates you're quoting clients are often 12-18 months stale, and the construction market moves.",
  },
  {
    icon: Receipt,
    title: 'Contractors submit inflated bills with no way to cross-check',
    description:
      "Your client comes to you with a contractor's bill. Stage 2 payment: Rs 8.4 lakhs for ground floor structure. The line items are vague — RCC columns and beams, masonry work, electrical rough-in. Is this reasonable? You have no tool to cross-check each line against market rates for that district, that financial year, that specification. You give your best judgment. Your client senses the uncertainty. Your professional authority is undermined by data you don't have.",
  },
]

const solutions = [
  {
    icon: Zap,
    title: 'AI parses your PDF/DWG drawings and extracts quantities automatically',
    description:
      "Upload your architectural and structural drawings to ConstructIQ — floor plans, sections, elevations, structural layout. The AI engine reads the geometry: room dimensions, wall lengths, slab areas, column schedules, staircase configurations, opening sizes. It runs a complete quantity take-off trade by trade — earthwork, PCC, RCC, brickwork, plaster, tiles, painting, and MEP rough-ins — and presents a line-item quantity schedule in under 15 minutes. Accuracy within 3-5% of a senior QS's manual take-off. Your 3-day quantity take-off becomes a 15-minute upload.",
  },
  {
    icon: BookOpen,
    title: 'Live rate database from CPWD/PWD/DSR schedules for your state',
    description:
      "ConstructIQ maintains a continuously updated database of construction rates from Central PWD, all state PWD schedules, and District Schedule of Rates across Bihar, UP, Jharkhand, MP, Odisha, and Chhattisgarh. You select the project district and financial year, and rates are auto-applied to your quantity schedule. Over 1,000 rate line items covering every trade. When you quote a client current CPWD rates for their district, you're citing the official government database, not memory. That's the difference between professional advice and educated guesswork.",
  },
  {
    icon: SearchCheck,
    title: 'Side-by-side contractor quote vs. market rate audit report',
    description:
      "Upload a contractor's quote alongside your project BOQ. ConstructIQ compares every line item in the contractor's quote against the market-rate BOQ. Over-billing — items quoted above CPWD/PWD rates — is flagged in red with the variance amount and percentage. Under-specified items — line items in the BOQ missing from the contractor's quote — are highlighted in amber. You get a structured audit report that you can share with your client, walk through with the contractor, and use as a negotiating basis. No more vague impressions — you have data.",
  },
]

const features = [
  {
    icon: Upload,
    title: 'Drawing Upload (PDF, DWG)',
    description:
      'Upload architectural and structural drawings in PDF or DWG format. The parser handles multi-page documents, floor plans, sections, elevations, and structural layouts. Supports drawings from AutoCAD, ArchiCAD, Revit-exported PDFs, and hand-drawn scans at sufficient resolution.',
  },
  {
    icon: Ruler,
    title: 'AI Quantity Extraction',
    description:
      `Automated quantity take-off from drawing geometry. Extracts wall lengths, floor areas, slab quantities, column counts, beam spans, staircase elements, openings, and roof areas. Output is a line-item quantity schedule broken by floor and by trade — matching the structure of a BOQ.`,
  },
  {
    icon: BookOpen,
    title: 'CPWD/PWD/DSR Rate Lookup',
    description:
      'District-level rate database covering Bihar, UP, Jharkhand, MP, Odisha, and Chhattisgarh. Select state, district, and financial year. Rates auto-applied to your quantity schedule. Manual rate override available for items not covered by the schedule. Updated quarterly from official gazette notifications.',
  },
  {
    icon: FileSpreadsheet,
    title: 'BOQ Export (Excel / PDF)',
    description:
      'Export the completed BOQ in Excel format for further editing, or as a formatted PDF for client presentation or contractor tendering. Excel output includes formulas linking quantity, rate, and amount columns. PDF output is formatted for professional client delivery.',
  },
  {
    icon: SearchCheck,
    title: 'Contractor Quote Comparison',
    description:
      'Upload contractor quotes and compare against your AI-generated BOQ line by line. Over-billing flagged in red, under-specification in amber. Variance summary shows total overbilling amount and percentage. Export the comparison report as a PDF for client and contractor use.',
  },
  {
    icon: FileOutput,
    title: 'NIT Document Generation',
    description:
      `Generate Notice Inviting Tender (NIT) documents alongside the BOQ — scope of work, technical specifications, conditions of contract, and schedule of quantities in PWD standard format. Compete for government and institutional tenders with professionally formatted procurement documents.`,
  },
]

export default function ArchitectsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="architects-hero-heading"
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
          className="pointer-events-none absolute bottom-0 right-0 w-[700px] h-[500px] opacity-10"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse, var(--color-ciq-steel) 0%, transparent 70%)',
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
            <span style={{ color: 'var(--color-ciq-safety)' }}>For Architects</span>
          </nav>

          <p className="pretitle">For Architects & Structural Engineers</p>

          <div
            className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border"
            style={{
              borderColor: 'rgba(59,130,246,0.3)',
              backgroundColor: 'rgba(59,130,246,0.08)',
              color: 'var(--color-ciq-steel)',
            }}
          >
            <Zap size={12} />
            Powered by AI drawing analysis + CPWD/PWD/DSR rate database
          </div>

          <h1
            id="architects-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl"
          >
            Upload drawings.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>Get verified BOQ.</span>{' '}
            Audit every contractor quote.
          </h1>

          <p className="mt-6 max-w-2xl text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            Quantity take-off is the most time-consuming, least creative, and most error-prone part of an architect's cost advisory work. ConstructIQ's AI engine reads your drawings, extracts quantities, applies government-standard rates for your district, and gives you a contractor audit tool that turns your professional judgment into defensible data.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: 'var(--color-ciq-safety)', color: '#0A1628' }}
            >
              Try It Free <ArrowRight size={16} />
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
              { value: '15 min', label: 'BOQ from uploaded drawings vs. 2–3 days of manual quantity take-off' },
              { value: '1000+', label: 'Rate line items from CPWD/PWD/DSR databases across 6 states' },
              { value: '3–5%', label: 'AI quantity accuracy vs. senior QS manual take-off' },
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
        aria-labelledby="architects-pain-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="border-t border-white/[0.06] pt-16">
            <p className="pretitle">The problem today</p>
            <h2
              id="architects-pain-heading"
              className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl"
            >
              Cost advisory work deserves better{' '}
              <span style={{ color: 'var(--color-ciq-safety)' }}>than memory and spreadsheets.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[color:var(--color-ciq-concrete)]">
              Architects and structural engineers in India carry significant cost advisory responsibility without adequate tools. These three problems limit the quality and efficiency of that work.
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
        aria-labelledby="architects-solutions-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>
            How ConstructIQ helps
          </p>
          <h2
            id="architects-solutions-heading"
            className="font-display font-bold mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05]"
            style={{ color: '#0A1628' }}
          >
            Your drawings become{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>verified cost intelligence.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-600">
            ConstructIQ turns the drawings you've already created into a fully verified BOQ, backed by official rate schedules, with a contractor audit capability built in. Your cost advisory work becomes faster, more accurate, and more professionally defensible.
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
        aria-labelledby="architects-features-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">Full feature set</p>
          <h2
            id="architects-features-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-2xl"
          >
            Every tool for{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>professional cost advisory work.</span>
          </h2>
          <p className="mt-4 max-w-xl text-[color:var(--color-ciq-concrete)]">
            From drawing upload to contractor negotiation, ConstructIQ covers the entire cost advisory workflow that architects and structural engineers manage on behalf of their clients.
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
              <Scale size={24} style={{ color: 'var(--color-ciq-safety)' }} />
              <h3 className="mt-4 font-semibold text-white text-base">
                Defend your cost estimates with government-standard data
              </h3>
              <p className="mt-2 text-sm text-[color:var(--color-ciq-concrete)] leading-relaxed">
                When a client challenges your cost estimate, the answer used to be "this is my professional judgment based on experience." With ConstructIQ, the answer is "this is based on the current CPWD Schedule of Rates for your district, updated for this financial year, with quantities extracted directly from your approved drawings." That's the difference between advice that clients trust and advice that clients negotiate against. Official rate databases cited by name and year carry authority that general market sense doesn't.
              </p>
            </div>
            <div className="p-8 rounded-lg border border-white/[0.06] bg-white/[0.02]">
              <Table2 size={24} style={{ color: 'var(--color-ciq-safety)' }} />
              <h3 className="mt-4 font-semibold text-white text-base">
                The time you save on take-offs goes back into design
              </h3>
              <p className="mt-2 text-sm text-[color:var(--color-ciq-concrete)] leading-relaxed">
                For an architect handling 8–12 residential projects simultaneously, the quantity take-off requirement across those projects is a substantial weekly time commitment. ConstructIQ doesn't just speed up the take-off — it removes the cognitive load of switching between design thinking and measurement mode. Upload the drawings you've already created. Review the AI output for anomalies. Apply your professional judgment where it matters. That's how cost advisory work should work: the machine handles the counting, you handle the thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaStripSection />
    </>
  )
}
