import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, XCircle, Minus } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing — ConstructIQ',
  description:
    'Simple, transparent pricing for homeowners, contractors, and enterprises building in India.',
}

const tiers = [
  {
    name: 'Homeowner',
    price: '₹0',
    period: 'per project',
    badge: 'Free Beta',
    badgeStyle: { backgroundColor: 'rgba(245,158,11,0.12)', color: 'var(--color-ciq-safety)', borderColor: 'rgba(245,158,11,0.25)' },
    description: 'For families building their home. Everything you need to take control of your project.',
    cta: 'Start Free',
    ctaHref: '/signup',
    highlighted: false,
    features: [
      'AI cost estimate',
      '1 active project',
      'Contractor matching',
      'Material price benchmarking',
      'Basic milestone tracking',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    price: '₹2,999',
    period: 'per contractor / month',
    badge: 'Most Popular',
    badgeStyle: { backgroundColor: 'rgba(245,158,11,0.15)', color: 'var(--color-ciq-safety)', borderColor: 'rgba(245,158,11,0.4)' },
    description: 'For contractors and professionals managing multiple projects across Bihar and UP.',
    cta: 'Start Free Trial',
    ctaHref: '/signup',
    highlighted: true,
    features: [
      'Everything in Homeowner',
      'Unlimited projects',
      'AI BOQ generation from drawings',
      'Direct material ordering',
      'Labour attendance (up to 50 workers)',
      'GPS machinery booking',
      'Priority support',
      'GST invoice',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'for banks, large contractors, institutions',
    badge: 'For Institutions',
    badgeStyle: { backgroundColor: 'rgba(59,130,246,0.12)', color: 'var(--color-ciq-steel)', borderColor: 'rgba(59,130,246,0.25)' },
    description: 'White-label deployments, bank API integrations, and dedicated infrastructure for large organisations.',
    cta: 'Contact Sales',
    ctaHref: '/contact',
    highlighted: false,
    features: [
      'Everything in Professional',
      'Unlimited workers',
      'Bank loan integration API',
      'White-label reports',
      'Custom integrations',
      'Dedicated account manager',
      'SLA-backed uptime',
      'Training sessions',
    ],
  },
]

const faqs = [
  {
    q: 'Is ConstructIQ available in my city?',
    a: 'We are launching in Bihar, Uttar Pradesh, Jharkhand, and Madhya Pradesh in 2026. If you are in one of these states, you can join the beta today. More states will be added through the year.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes — no contracts, no lock-in. Cancel your Professional plan at any time and you will retain access until the end of your billing period. Your data stays with you.',
  },
  {
    q: 'Is the beta really free?',
    a: 'Yes. The Homeowner plan is completely free during our beta period. When we officially launch, beta users will receive at least 30 days notice before any pricing changes.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We accept UPI (GPay, PhonePe, Paytm), NEFT/RTGS bank transfer, and credit/debit cards. All payments are processed securely via Razorpay with instant GST invoices.',
  },
  {
    q: 'Do you offer a trial for Professional?',
    a: 'Yes — Professional comes with a 14-day free trial, no credit card required. You get full access to all features including AI BOQ generation, labour attendance, and material ordering.',
  },
]

// Feature comparison table
const allFeatures = [
  { label: 'AI cost estimate', homeowner: true, professional: true, enterprise: true },
  { label: 'Contractor matching', homeowner: true, professional: true, enterprise: true },
  { label: 'Material price benchmarking', homeowner: true, professional: true, enterprise: true },
  { label: 'Basic milestone tracking', homeowner: true, professional: true, enterprise: true },
  { label: 'Email support', homeowner: true, professional: true, enterprise: true },
  { label: 'Active projects', homeowner: '1', professional: 'Unlimited', enterprise: 'Unlimited' },
  { label: 'AI BOQ from drawings', homeowner: false, professional: true, enterprise: true },
  { label: 'Direct material ordering', homeowner: false, professional: true, enterprise: true },
  { label: 'Labour attendance', homeowner: false, professional: 'Up to 50 workers', enterprise: 'Unlimited' },
  { label: 'GPS machinery booking', homeowner: false, professional: true, enterprise: true },
  { label: 'Priority support', homeowner: false, professional: true, enterprise: true },
  { label: 'GST invoice', homeowner: false, professional: true, enterprise: true },
  { label: 'Bank loan integration API', homeowner: false, professional: false, enterprise: true },
  { label: 'White-label reports', homeowner: false, professional: false, enterprise: true },
  { label: 'Custom integrations', homeowner: false, professional: false, enterprise: true },
  { label: 'Dedicated account manager', homeowner: false, professional: false, enterprise: true },
  { label: 'SLA-backed uptime', homeowner: false, professional: false, enterprise: true },
  { label: 'Training sessions', homeowner: false, professional: false, enterprise: true },
]

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === true) return <CheckCircle2 size={18} className="mx-auto" style={{ color: 'var(--color-ciq-safety)' }} />
  if (value === false) return <Minus size={16} className="mx-auto text-slate-300" />
  return <span className="text-xs text-slate-600 font-medium">{value}</span>
}

export default function PricingPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="pricing-hero-heading"
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
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 text-center">
          <p className="pretitle">Pricing</p>
          <h1
            id="pricing-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05]"
          >
            Simple pricing.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>No surprises.</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            Start free during beta. Upgrade as your team grows. Cancel anytime.
          </p>
        </div>
      </section>

      {/* ── PRICING TIERS ────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#F1F5F9' }}
        aria-labelledby="pricing-tiers-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <h2 id="pricing-tiers-heading" className="sr-only">Pricing tiers</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="relative flex flex-col rounded-xl border bg-white shadow-sm overflow-hidden"
                style={{
                  borderColor: tier.highlighted ? 'rgba(245,158,11,0.5)' : '#E2E8F0',
                  boxShadow: tier.highlighted ? '0 0 0 2px rgba(245,158,11,0.2), 0 4px 24px rgba(0,0,0,0.06)' : undefined,
                }}
              >
                {tier.highlighted && (
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--color-ciq-safety) 0 10px, transparent 10px 16px)' }}
                  />
                )}
                <div className="p-8 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display font-bold text-xl" style={{ color: '#0A1628' }}>{tier.name}</h3>
                    <span
                      className="shrink-0 px-2.5 py-1 rounded-full text-[11px] font-semibold border"
                      style={tier.badgeStyle}
                    >
                      {tier.badge}
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="font-display font-bold text-[40px] leading-none" style={{ color: '#0A1628' }}>
                      {tier.price}
                    </span>
                    <span className="ml-2 text-sm text-slate-500">{tier.period}</span>
                  </div>

                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">{tier.description}</p>

                  <ul className="mt-6 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--color-ciq-safety)' }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0">
                  <Link
                    href={tier.ctaHref}
                    className="block w-full text-center px-6 py-3.5 rounded-md font-semibold text-sm transition-transform hover:scale-[1.01]"
                    style={
                      tier.highlighted
                        ? { backgroundColor: 'var(--color-ciq-safety)', color: '#0A1628' }
                        : { backgroundColor: '#0A1628', color: '#fff' }
                    }
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE COMPARISON TABLE ─────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="compare-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">Compare all features</p>
          <h2
            id="compare-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] leading-[1.05] max-w-2xl"
          >
            What&apos;s included in{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>each plan</span>
          </h2>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left pb-4 pr-8 text-sm font-semibold text-[color:var(--color-ciq-concrete)]" style={{ width: '40%' }}>
                    Feature
                  </th>
                  {tiers.map((tier) => (
                    <th key={tier.name} className="pb-4 px-4 text-center text-sm font-semibold text-white">
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feature, i) => (
                  <tr
                    key={feature.label}
                    className="border-t"
                    style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                  >
                    <td className="py-3.5 pr-8 text-sm text-[color:var(--color-ciq-concrete)]">
                      {feature.label}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <FeatureCell value={feature.homeowner} />
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <FeatureCell value={feature.professional} />
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <FeatureCell value={feature.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#F1F5F9' }}
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>FAQ</p>
            <h2
              id="faq-heading"
              className="font-display font-bold mt-4 text-[36px] md:text-[48px] leading-[1.05]"
              style={{ color: '#0A1628' }}
            >
              Questions we get{' '}
              <span style={{ color: 'var(--color-ciq-safety)' }}>all the time</span>
            </h2>

            <div className="mt-10 space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg border border-slate-200 bg-white shadow-sm"
                >
                  <p className="font-semibold text-base" style={{ color: '#0A1628' }}>{faq.q}</p>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-lg border text-center" style={{ borderColor: 'rgba(245,158,11,0.3)', backgroundColor: 'rgba(245,158,11,0.04)' }}>
              <p className="text-sm text-slate-700">
                Have a different question?{' '}
                <Link href="/contact" className="font-semibold hover:underline" style={{ color: 'var(--color-ciq-safety)' }}>
                  Talk to us →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="pricing-cta-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 text-center">
          <p className="pretitle">Start building</p>
          <h2
            id="pricing-cta-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-2xl mx-auto"
          >
            Join 200+ builders already on{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>the beta</span>
          </h2>
          <p className="mt-6 text-base lg:text-lg text-[color:var(--color-ciq-concrete)] max-w-lg mx-auto">
            Free during beta. No credit card required. Get instant access to AI cost estimation and contractor matching.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold text-base transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: 'var(--color-ciq-safety)', color: '#0A1628' }}
            >
              Get started free
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold text-base border border-white/[0.18] text-white hover:bg-white/[0.04] transition-colors"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
