import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — ConstructIQ',
  description: "Frequently asked questions about ConstructIQ's platform, pricing, and availability.",
}

type FAQItem = { q: string; a: string }

const faqCategories: { category: string; items: FAQItem[] }[] = [
  {
    category: 'Getting Started',
    items: [
      {
        q: 'What is ConstructIQ?',
        a: 'ConstructIQ is India\'s end-to-end construction intelligence platform for Tier 2/3 cities. We bring AI-powered cost estimation, verified contractors, BOQ generation, material sourcing, labour attendance, and construction finance together under one platform — built specifically for homeowners and contractors in Bihar, UP, Jharkhand, and Madhya Pradesh.',
      },
      {
        q: 'What cities is ConstructIQ available in?',
        a: 'We are currently live in a private beta covering Patna, Gaya, Muzaffarpur, Varanasi, Lucknow, Kanpur, Ranchi, Bhopal, and Indore. We are expanding to all districts of Bihar, UP, Jharkhand, and MP through 2026. If your city is not listed, join our waitlist and we will notify you when we launch there.',
      },
      {
        q: 'Is ConstructIQ free to use?',
        a: 'The Homeowner plan is completely free during our beta period — no credit card required. You get AI cost estimation, 1 active project, contractor matching, and material price benchmarking at no cost. The Professional plan for contractors starts at ₹2,999/month with a 14-day free trial. Beta users will receive at least 30 days notice before any pricing changes.',
      },
      {
        q: 'How do I get started?',
        a: 'Sign up at constructiq.in/signup — takes under 2 minutes with your phone number. Once your account is verified, you can immediately add your project, upload floor plans or drawings, and get an AI cost estimate. Our onboarding guide walks you through each step, and our support team is available on WhatsApp if you need help.',
      },
    ],
  },
  {
    category: 'Construction Packages',
    items: [
      {
        q: 'What types of buildings does ConstructIQ support?',
        a: 'We support residential buildings (G+0 to G+3), commercial buildings, schools and institutional buildings, and civil works including boundary walls and roads. Our AI estimation and BOQ engine has been trained on CPWD and PWD rate schedules for Bihar, UP, Jharkhand, and MP, and handles RCC frame, load-bearing, and steel structure construction types.',
      },
      {
        q: "What's included in a ConstructIQ construction package?",
        a: 'A ConstructIQ construction package includes: an AI-generated Bill of Quantities (BOQ) linked to current CPWD/market rates, a vetted and verified contractor match, milestone-linked payment schedule, material procurement from verified suppliers, GPS-tracked labour attendance, site photo documentation, and a construction loan application (if required). The package covers the full construction lifecycle from estimate to handover.',
      },
      {
        q: 'Can I customise a package to fit my project?',
        a: 'Yes — packages are starting points, not rigid bundles. You can add or remove services based on your needs. For example, if you already have a contractor, you can use just the BOQ and payment milestone tracking. If you need only material procurement, we support that too. Our team will help configure the right combination for your project during onboarding.',
      },
    ],
  },
  {
    category: 'Finance',
    items: [
      {
        q: 'Which banks and NBFCs are partnered with ConstructIQ?',
        a: 'We are currently in integration discussions with several public sector banks and housing finance companies that serve Tier 2/3 India. During our beta, we facilitate loan applications through partner NBFCs. Our BOQ-linked loan product creates a verified paper trail that significantly improves approval rates. Specific partner names will be announced at our public launch.',
      },
      {
        q: 'How fast is the loan pre-qualification process?',
        a: 'With a verified ConstructIQ BOQ, loan pre-qualification typically takes 24–72 hours from submission — compared to 2–4 weeks through traditional channels. The BOQ gives the lending institution immediate visibility into the project scope, cost breakdown, and milestone schedule, dramatically reducing the due diligence time. Full disbursement timelines depend on the lender.',
      },
      {
        q: 'What loan amounts are available?',
        a: 'Our current construction loan product supports projects between ₹10 lakh and ₹2 crore. Loans are disbursed in tranches tied to construction milestones — foundation, plinth, slab, finishing — which reduces risk for both the borrower and lender. Interest rates are linked to the lender\'s standard construction loan products. We do not charge a separate fee for the loan application facilitation.',
      },
    ],
  },
  {
    category: 'Technical',
    items: [
      {
        q: 'Does the ConstructIQ app work offline?',
        a: 'Yes — the mobile app has offline-first capabilities for core field features: labour attendance marking, site photo capture, daily progress logs, and task checklists all work without an internet connection. Data syncs automatically when connectivity is restored. The web dashboard requires an active connection, but the Android app is designed to work reliably on low-bandwidth 2G/3G connections common in Tier 2/3 areas.',
      },
      {
        q: 'Which file formats are supported for drawing uploads?',
        a: 'Our AI BOQ engine accepts photographs of hand-drawn floor plans (JPEG, PNG), CAD exports (DWG, DXF), PDF drawings, and AutoCAD/SketchUp files. You can even photograph a physical drawing with your phone camera — our AI has been trained to handle imperfect scans and perspective distortions. For best results, we recommend clear PDFs or CAD files, but we work with what you have.',
      },
      {
        q: 'How is my data kept secure?',
        a: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We are hosted on AWS infrastructure with data residency in India. Your floor plans, financial data, and project details are never shared with third parties without your explicit consent. We are SOC 2 audit-ready and comply with the Digital Personal Data Protection Act, 2023. You can request a full data export or deletion at any time.',
      },
    ],
  },
  {
    category: 'Billing',
    items: [
      {
        q: 'When does billing start?',
        a: 'Billing only starts after your 14-day free trial ends, and only if you actively choose to continue on the Professional plan. The Homeowner plan is free indefinitely during the beta. We send reminder emails 7 days and 3 days before any trial ends — you will never be surprised by a charge. Payment is accepted via UPI, net banking, and credit/debit cards through Razorpay with instant GST invoices.',
      },
      {
        q: 'How do I cancel my subscription?',
        a: 'You can cancel at any time from the Account Settings page — no calls, no forms, no approval process. When you cancel, you retain full access until the end of your current billing period. Your project data, BOQs, and documents remain accessible for 90 days after cancellation so you can export everything. There are no cancellation fees or penalties.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="faq-hero-heading"
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
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px] opacity-10"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse at top right, var(--color-ciq-safety) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">FAQ</p>
          <h1
            id="faq-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] leading-[1.05] max-w-3xl"
          >
            Questions, answered.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>Honestly.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            Everything you need to know about the ConstructIQ platform, pricing, and availability.
          </p>
        </div>
      </section>

      {/* ── FAQ GRID ─────────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#F1F5F9' }}
        aria-label="Frequently asked questions"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="space-y-16">
            {faqCategories.map((category) => (
              <div key={category.category}>
                <h2
                  className="font-display font-bold text-[22px] md:text-[28px] leading-[1.2] mb-6"
                  style={{ color: '#0A1628' }}
                >
                  <span
                    className="inline-block w-2 h-2 rounded-full mr-3 mb-0.5"
                    style={{ backgroundColor: 'var(--color-ciq-safety)' }}
                    aria-hidden="true"
                  />
                  {category.category}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {category.items.map((item, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-lg border border-slate-200 bg-white shadow-sm"
                    >
                      <p className="font-semibold text-base leading-snug" style={{ color: '#0A1628' }}>
                        {item.q}
                      </p>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-16 p-6 rounded-lg border text-center"
            style={{ borderColor: 'rgba(245,158,11,0.3)', backgroundColor: 'rgba(245,158,11,0.04)' }}
          >
            <p className="font-semibold text-base" style={{ color: '#0A1628' }}>
              Still have questions?
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Our team responds within 2 hours on WhatsApp or email during office hours.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:contact@constructiq.in"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold border border-slate-300 bg-white hover:border-amber-400 transition-colors"
                style={{ color: '#0A1628' }}
              >
                contact@constructiq.in
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold"
                style={{ backgroundColor: '#22C55E', color: '#fff' }}
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
