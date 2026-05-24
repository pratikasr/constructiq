import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Construction Cost Calculator — ConstructIQ',
  description:
    'Estimate your construction cost for Bihar, UP, Jharkhand, and Madhya Pradesh.',
}

const costTable = [
  {
    type: 'Residential (G+0)',
    basic: '₹1,200',
    standard: '₹1,600',
    premium: '₹2,200',
    note: 'Single-storey home, RCC or load-bearing',
  },
  {
    type: 'Residential (G+1)',
    basic: '₹1,400',
    standard: '₹1,850',
    premium: '₹2,500',
    note: 'Two-storey home with staircase',
  },
  {
    type: 'Commercial',
    basic: '₹1,600',
    standard: '₹2,000',
    premium: '₹2,800',
    note: 'Shops, offices, showrooms',
  },
  {
    type: 'Institutional',
    basic: '₹1,800',
    standard: '₹2,300',
    premium: '₹3,200',
    note: 'Schools, hospitals, government buildings',
  },
]

const costDrivers = [
  {
    title: 'Structural specification',
    description:
      'Basic construction uses M15 concrete and Fe415 steel — standard for low-rise residential. Standard upgrades to M20/M25 mix with Fe500 TMT bars. Premium uses higher-grade materials with additional structural reinforcement and engineer supervision throughout.',
  },
  {
    title: 'Flooring and finishes',
    description:
      'Basic construction uses ceramic tiles, wall putty with emulsion paint, and standard sanitary ware. Standard includes vitrified tiles, OBD paint, and mid-range CP fittings. Premium encompasses marble/granite flooring, imported sanitary ware, and luxury finish specifications.',
  },
  {
    title: 'Doors and windows',
    description:
      'Basic builds use standard flush doors and aluminium windows. Standard moves to hardwood frames with powder-coated aluminium. Premium includes teak wood frames, UPVC or aluminium sections with thermal break glazing, and designer hardware throughout.',
  },
  {
    title: 'Electrical and plumbing',
    description:
      'Basic uses standard wiring (Finolex/Polycab) with 3–4 points per room and basic switchgear. Standard includes modular switches, earthing, and concealed plumbing with CPVC pipes. Premium involves complete home automation provision, three-phase power, solar readiness, and premium sanitary brands.',
  },
  {
    title: 'Location and logistics',
    description:
      'Construction costs in district headquarters (Patna, Lucknow, Ranchi) run 10–15% higher than small towns due to land access costs and material delivery. Remote sites with poor road connectivity add 5–8% for transport. Projects with constrained access (narrow lanes, no vehicle access) add further cost.',
  },
  {
    title: 'Labour rates',
    description:
      'Current mason rates in Bihar and UP range from ₹700–₹900/day for skilled masons and ₹500–₹650/day for helpers. These rates have risen 12–15% year-on-year since 2022 due to MGNREGS competition and migration to non-farm work. Our cost estimates reflect current CPWD Labour Analysis Rates for each state.',
  },
]

export default function CostCalculatorPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="calc-hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,158,11,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.15) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[400px] opacity-10"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse at bottom right, var(--color-ciq-safety) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">Cost Calculator</p>
          <h1
            id="calc-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] leading-[1.05] max-w-3xl"
          >
            Estimate your build cost.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>Free.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            Current construction cost benchmarks for Bihar, UP, Jharkhand, and Madhya Pradesh — based on CPWD rate schedules and live market data from our procurement network.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span
              className="px-2.5 py-1 rounded-full text-[11px] font-semibold border"
              style={{ backgroundColor: 'rgba(245,158,11,0.12)', color: 'var(--color-ciq-safety)', borderColor: 'rgba(245,158,11,0.3)' }}
            >
              Updated May 2026
            </span>
            <span className="text-xs text-[color:var(--color-ciq-concrete)]">
              Rates reflect current CPWD Schedule of Rates — Bihar, UP, Jharkhand, MP
            </span>
          </div>
        </div>
      </section>

      {/* ── COST TABLE ───────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#F1F5F9' }}
        aria-labelledby="cost-table-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>Cost reference guide</p>
          <h2
            id="cost-table-heading"
            className="font-display font-bold mt-4 text-[28px] md:text-[36px] leading-[1.1] max-w-2xl"
            style={{ color: '#0A1628' }}
          >
            Construction cost ranges by{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>building type</span>
          </h2>
          <p className="mt-4 text-sm text-slate-600 max-w-xl">
            All rates are per square foot of built-up area (BUA). Civil work only — does not include land, boundary wall, landscaping, or furniture.
          </p>

          {/* Table: desktop */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 pr-6 text-sm font-semibold text-slate-500 uppercase tracking-wide" style={{ width: '30%' }}>
                    Building Type
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-semibold" style={{ color: '#0A1628' }}>
                    Basic (₹/sqft)
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-semibold" style={{ color: '#0A1628' }}>
                    Standard (₹/sqft)
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-semibold" style={{ color: 'var(--color-ciq-safety)' }}>
                    Premium (₹/sqft)
                  </th>
                  <th className="py-4 pl-6 text-left text-sm font-semibold text-slate-500 hidden lg:table-cell">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {costTable.map((row, i) => (
                  <tr
                    key={row.type}
                    className="border-b border-slate-200"
                    style={{ backgroundColor: i % 2 === 0 ? '#fff' : 'transparent' }}
                  >
                    <td className="py-5 pr-6">
                      <p className="font-semibold text-sm" style={{ color: '#0A1628' }}>{row.type}</p>
                    </td>
                    <td className="py-5 px-4 text-center">
                      <span className="font-display font-bold text-[20px]" style={{ color: '#64748B' }}>
                        {row.basic}
                      </span>
                    </td>
                    <td className="py-5 px-4 text-center">
                      <span className="font-display font-bold text-[20px]" style={{ color: 'var(--color-ciq-blueprint)' }}>
                        {row.standard}
                      </span>
                    </td>
                    <td className="py-5 px-4 text-center">
                      <span className="font-display font-bold text-[20px]" style={{ color: 'var(--color-ciq-safety)' }}>
                        {row.premium}
                      </span>
                    </td>
                    <td className="py-5 pl-6 text-xs text-slate-500 hidden lg:table-cell">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Disclaimer */}
          <p className="mt-4 text-xs text-slate-400">
            * Rates are indicative ranges for Tier 2/3 cities in Bihar, UP, Jharkhand, and MP. Actual costs depend on site conditions, finish quality, and local labour rates. For a precise estimate, generate a free AI BOQ below.
          </p>

          {/* Example calculation */}
          <div
            className="mt-10 p-6 rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Example calculation</p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-slate-500">Project</p>
                <p className="font-semibold text-base mt-1" style={{ color: '#0A1628' }}>Residential G+1, Standard finish</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Built-up area</p>
                <p className="font-semibold text-base mt-1" style={{ color: '#0A1628' }}>1,200 sqft</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Estimated cost</p>
                <p className="font-display font-bold text-[28px] mt-1" style={{ color: 'var(--color-ciq-safety)' }}>
                  ₹22.2 lakh
                </p>
                <p className="text-xs text-slate-400">@ ₹1,850/sqft × 1,200 sqft</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COST DRIVERS ─────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="cost-drivers-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">Understanding the numbers</p>
          <h2
            id="cost-drivers-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] leading-[1.05] max-w-2xl"
          >
            What drives{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>cost differences</span>
          </h2>
          <p className="mt-6 max-w-xl text-[color:var(--color-ciq-concrete)]">
            Basic vs. premium is not just about quality — it is about specification choices made at the design stage. Here is what moves the needle.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {costDrivers.map((driver) => (
              <div
                key={driver.title}
                className="p-6 rounded-lg border border-white/[0.06] bg-white/[0.02]"
              >
                <div
                  className="w-1.5 h-6 rounded-full mb-4"
                  style={{ backgroundColor: 'var(--color-ciq-safety)' }}
                  aria-hidden="true"
                />
                <h3 className="font-semibold text-base text-white">{driver.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-ciq-concrete)] leading-relaxed">{driver.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#F1F5F9' }}
        aria-labelledby="calc-cta-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 text-center">
          <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>Go beyond estimates</p>
          <h2
            id="calc-cta-heading"
            className="font-display font-bold mt-4 text-[28px] md:text-[36px] leading-[1.1] max-w-2xl mx-auto"
            style={{ color: '#0A1628' }}
          >
            Get an AI-generated BOQ for your project —{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>free</span>
          </h2>
          <p className="mt-4 text-sm text-slate-600 max-w-lg mx-auto">
            Upload your floor plan and get a complete, line-item Bill of Quantities in under 3 minutes — priced to current CPWD/market rates for your district.
          </p>
          <div className="mt-8">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold text-base transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: 'var(--color-ciq-safety)', color: '#0A1628' }}
            >
              Generate my free BOQ
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-400">No account required for the first estimate. No credit card.</p>
        </div>
      </section>
    </>
  )
}
