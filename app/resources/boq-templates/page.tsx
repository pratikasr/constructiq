import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'BOQ Templates — ConstructIQ',
  description:
    'Free Bill of Quantities templates for residential, commercial, and institutional construction projects in India.',
}

const templates = [
  {
    id: 'residential-g0',
    name: 'Residential G+0 BOQ Template',
    description: 'Single-storey home — foundation, RCC slab, masonry, plaster, flooring, sanitation, and electrical.',
    tags: ['Residential', 'Ground Floor'],
    items: '180+ line items',
  },
  {
    id: 'residential-g2',
    name: 'Residential G+2 BOQ Template',
    description: 'Three-storey home with staircase, landing, RCC columns, and per-floor quantity breakdowns.',
    tags: ['Residential', 'Multi-storey'],
    items: '280+ line items',
  },
  {
    id: 'commercial',
    name: 'Commercial Building BOQ Template',
    description: 'Shops, offices, and showrooms with higher floor loads, grid framing, and commercial services.',
    tags: ['Commercial', 'Mixed-use'],
    items: '240+ line items',
  },
  {
    id: 'school-institutional',
    name: 'School / Institutional BOQ Template',
    description: 'Government and private school buildings — meets NBCC and SSA construction standards.',
    tags: ['Institutional', 'Education'],
    items: '320+ line items',
  },
  {
    id: 'road-civil',
    name: 'Road & Civil Works BOQ Template',
    description: 'Internal roads, boundary walls, storm drainage, and compound development works.',
    tags: ['Civil', 'Infrastructure'],
    items: '150+ line items',
  },
  {
    id: 'hospital',
    name: 'Hospital Construction BOQ Template',
    description: 'Primary health centres and small hospitals — includes specialised MEP, OT, ward, and pharmacy areas.',
    tags: ['Healthcare', 'Institutional'],
    items: '400+ line items',
  },
]

const tagColors: Record<string, { bg: string; text: string }> = {
  Residential: { bg: 'rgba(245,158,11,0.1)', text: 'var(--color-ciq-safety)' },
  Commercial: { bg: 'rgba(59,130,246,0.1)', text: 'var(--color-ciq-steel)' },
  Institutional: { bg: 'rgba(59,130,246,0.1)', text: 'var(--color-ciq-steel)' },
  Education: { bg: 'rgba(34,197,94,0.1)', text: '#16A34A' },
  Healthcare: { bg: 'rgba(239,68,68,0.1)', text: '#DC2626' },
  Civil: { bg: 'rgba(148,163,184,0.15)', text: '#475569' },
  Infrastructure: { bg: 'rgba(148,163,184,0.15)', text: '#475569' },
  'Multi-storey': { bg: 'rgba(245,158,11,0.1)', text: 'var(--color-ciq-safety)' },
  'Ground Floor': { bg: 'rgba(245,158,11,0.1)', text: 'var(--color-ciq-safety)' },
  'Mixed-use': { bg: 'rgba(59,130,246,0.1)', text: 'var(--color-ciq-steel)' },
}

export default function BOQTemplatesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="boq-hero-heading"
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
          className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[400px] opacity-10"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse at bottom right, var(--color-ciq-steel) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">BOQ Templates</p>
          <h1
            id="boq-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] leading-[1.05] max-w-3xl"
          >
            BOQ templates.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>CPWD-rate ready.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            Download free Bill of Quantities templates for any building type — pre-populated with line items from the CPWD Schedule of Rates for Bihar, UP, Jharkhand, and MP. Free with your ConstructIQ account.
          </p>
          <div className="mt-4">
            <span
              className="px-2.5 py-1 rounded-full text-[11px] font-semibold border"
              style={{ backgroundColor: 'rgba(245,158,11,0.12)', color: 'var(--color-ciq-safety)', borderColor: 'rgba(245,158,11,0.3)' }}
            >
              Based on CPWD/PWD Rates — Bihar, UP, Jharkhand, MP
            </span>
          </div>
        </div>
      </section>

      {/* ── TEMPLATE GRID ────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#F1F5F9' }}
        aria-labelledby="templates-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>All templates</p>
          <h2
            id="templates-heading"
            className="font-display font-bold mt-4 text-[28px] md:text-[36px] leading-[1.1] max-w-2xl"
            style={{ color: '#0A1628' }}
          >
            6 templates. Every major{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>building type.</span>
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((tpl) => (
              <div
                key={tpl.id}
                className="flex flex-col p-6 rounded-lg border border-slate-200 bg-white shadow-sm"
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(245,158,11,0.1)' }}
                >
                  <FileText size={20} style={{ color: 'var(--color-ciq-safety)' }} />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-[17px] leading-snug" style={{ color: '#0A1628' }}>
                  {tpl.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{tpl.description}</p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {tpl.tags.map((tag) => {
                    const style = tagColors[tag] ?? { bg: 'rgba(148,163,184,0.15)', text: '#475569' }
                    return (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[11px] font-medium"
                        style={{ backgroundColor: style.bg, color: style.text }}
                      >
                        {tag}
                      </span>
                    )
                  })}
                  <span
                    className="px-2 py-0.5 rounded-full text-[11px] font-medium"
                    style={{ backgroundColor: 'rgba(148,163,184,0.15)', color: '#475569' }}
                  >
                    {tpl.items}
                  </span>
                </div>

                {/* Download CTA */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <Link
                    href="/signup"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold w-full justify-center transition-transform hover:scale-[1.01]"
                    style={{ backgroundColor: '#0A1628', color: '#fff' }}
                  >
                    <Download size={15} />
                    Download Free
                  </Link>
                  <p className="mt-2 text-center text-[11px] text-slate-400">
                    Free with ConstructIQ account
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Rate disclaimer */}
          <div
            className="mt-12 p-5 rounded-lg border border-slate-200 bg-white flex gap-4 items-start"
          >
            <div
              className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5"
              style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}
            >
              <FileText size={16} style={{ color: 'var(--color-ciq-steel)' }} />
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: '#0A1628' }}>
                All templates based on current CPWD/PWD rates
              </p>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                Every template is built on the current CPWD Schedule of Rates and PWD rate schedules for Bihar, UP, Jharkhand, and MP. Rates are updated quarterly to reflect market movements. When you download a template through ConstructIQ, you can optionally have our AI auto-fill quantities from your floor plan — turning a blank template into a complete BOQ in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI UPGRADE CTA ───────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="boq-ai-cta-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="pretitle">Go further with AI</p>
              <h2
                id="boq-ai-cta-heading"
                className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] leading-[1.05]"
              >
                Skip the template.{' '}
                <span style={{ color: 'var(--color-ciq-safety)' }}>Generate from your drawing.</span>
              </h2>
              <p className="mt-6 text-[color:var(--color-ciq-concrete)] leading-relaxed">
                Templates are a good starting point — but our AI goes further. Upload a photo of your floor plan and get a complete, auto-filled BOQ with quantities, rates, and total costs in under 3 minutes. No manual entry.
              </p>
              <div className="mt-8">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: 'var(--color-ciq-safety)', color: '#0A1628' }}
                >
                  Try AI BOQ generation free
                </Link>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] space-y-4">
              {[
                { step: '01', text: 'Upload your floor plan — photo, PDF, or CAD file' },
                { step: '02', text: 'AI reads dimensions, rooms, and structural elements' },
                { step: '03', text: 'BOQ generated with CPWD quantities and current rates' },
                { step: '04', text: 'Export as Excel, PDF, or share with your bank' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <span
                    className="font-display font-bold text-[13px] shrink-0 mt-0.5"
                    style={{ color: 'var(--color-ciq-safety)' }}
                  >
                    {item.step}
                  </span>
                  <p className="text-sm text-[color:var(--color-ciq-concrete)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
