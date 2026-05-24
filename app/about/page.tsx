import type { Metadata } from 'next'
import Link from 'next/link'
import { Eye, Globe2, Database, Users2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: "About ConstructIQ — India's Construction Intelligence Platform",
  description:
    "ConstructIQ was founded in Gaya, Bihar to bring transparency, efficiency, and finance access to India's construction industry.",
}

const stats = [
  { value: '64%', label: 'of home loans in India come from Tier 2/3 cities' },
  { value: '₹3,000Cr+', label: 'lost annually to fake billing and contractor fraud' },
  { value: '70%', label: 'of residential projects in India exceed their original budget' },
]

const values = [
  {
    icon: Eye,
    title: 'Transparency first',
    description:
      'Every cost estimate, every contractor quote, every material price — visible and benchmarked. We believe transparency is the only antidote to the opacity that bleeds money from Indian construction projects.',
  },
  {
    icon: Globe2,
    title: 'Built for Bharat',
    description:
      'Designed for how construction actually works in Bihar, UP, Jharkhand, and MP — not for how it works in Mumbai or Bangalore. Hindi-first interfaces, offline-capable features, and pricing in line with Tier 2/3 incomes.',
  },
  {
    icon: Database,
    title: 'Data over trust',
    description:
      'Construction in India runs on personal networks and word-of-mouth. That is not good enough. We replace reputation guesswork with verified performance data — contractor track records, on-time delivery, payment honesty.',
  },
  {
    icon: Users2,
    title: 'Access to all',
    description:
      'A family building a ₹15L house in Gaya should have the same financial tools and market access as a developer building in Delhi NCR. ConstructIQ is explicitly designed to serve them — not as an afterthought.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="about-hero-heading"
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
            background: 'radial-gradient(ellipse at bottom right, var(--color-ciq-safety) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">About ConstructIQ</p>
          <h1
            id="about-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl"
          >
            Built in Bihar.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>Built for India.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            ConstructIQ is India&apos;s end-to-end construction intelligence platform — bringing price transparency, verified contractors, AI-powered estimation, and construction finance to the families and builders who need it most.
          </p>
        </div>
      </section>

      {/* ── MISSION ──────────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#F1F5F9' }}
        aria-labelledby="mission-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>Our mission</p>
            <blockquote
              className="mt-6 font-display font-bold text-[28px] md:text-[36px] leading-[1.2]"
              style={{ color: '#0A1628' }}
            >
              &ldquo;We believe every family in Tier 2/3 India deserves the same quality, transparency, and financial access in construction that metro cities take for granted.&rdquo;
            </blockquote>
            <p className="mt-6 text-base text-slate-600 leading-relaxed max-w-xl">
              Construction is the second-largest sector in India&apos;s economy and the primary store of wealth for crore of middle-class families. Yet it remains completely opaque — prices are guesses, contractors disappear, banks won&apos;t lend, and there is no platform layer connecting any of it. We are fixing that.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-lg border border-slate-200 bg-white shadow-sm"
              >
                <p
                  className="font-display font-bold text-[48px] leading-none"
                  style={{ color: 'var(--color-ciq-safety)' }}
                >
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-slate-600 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="story-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="pretitle">The problem we saw</p>
            <h2
              id="story-heading"
              className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05]"
            >
              Construction in India is{' '}
              <span style={{ color: 'var(--color-ciq-safety)' }}>broken.</span>
            </h2>

            <div className="mt-10 space-y-6 text-[color:var(--color-ciq-concrete)] leading-relaxed">
              <p>
                We saw it first in Gaya. A family saves for years — sometimes decades — to build their home. They hire a contractor through someone&apos;s nephew. The contractor starts work, takes advances, inflates material invoices, stops showing up mid-construction, and disappears. The family is left with an incomplete structure, no money, and no legal recourse.
              </p>
              <p>
                This story plays out hundreds of thousands of times a year across Bihar, UP, Jharkhand, and MP. Homeowners have no way to benchmark prices, no way to verify contractors, no way to track material usage, and no access to construction loans because banks have no visibility into the project either.
              </p>
              <p>
                Meanwhile, contractors face their own problems. No access to formal credit, no verified material supply chains, no tools to manage multiple sites, no way to build a verifiable reputation that helps them win larger projects.
              </p>
              <p>
                ConstructIQ was founded to build the platform layer that connects all of this — homeowners, contractors, material suppliers, equipment owners, banks, and architects — on a single verified network with real data, real pricing, and real accountability.
              </p>
              <p className="font-semibold text-white">
                We started in Gaya, Bihar because that is where the problem is largest and the solutions are fewest. We are building outward from there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#F1F5F9' }}
        aria-labelledby="values-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>What we stand for</p>
          <h2
            id="values-heading"
            className="font-display font-bold mt-4 text-[36px] md:text-[48px] leading-[1.05] max-w-2xl"
            style={{ color: '#0A1628' }}
          >
            Principles we don&apos;t{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>negotiate on</span>
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-lg border border-slate-200 bg-white shadow-sm">
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-md mb-4"
                  style={{ backgroundColor: 'rgba(245,158,11,0.1)' }}
                >
                  <v.icon size={20} style={{ color: 'var(--color-ciq-safety)' }} />
                </div>
                <h3 className="font-semibold text-base" style={{ color: '#0A1628' }}>{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM PLACEHOLDER ─────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="team-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="pretitle">The team</p>
              <h2
                id="team-heading"
                className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] leading-[1.05]"
              >
                We&apos;re building{' '}
                <span style={{ color: 'var(--color-ciq-safety)' }}>in stealth.</span>
              </h2>
              <p className="mt-6 text-[color:var(--color-ciq-concrete)] leading-relaxed">
                ConstructIQ is currently in private beta with a small, focused team of builders with backgrounds in construction, fintech, enterprise SaaS, and rural distribution in India. We are not ready to introduce ourselves publicly yet — but we are always looking for exceptional people who care deeply about this problem.
              </p>
              <div className="mt-8">
                <Link
                  href="/about/careers"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: 'var(--color-ciq-safety)', color: '#0A1628' }}
                >
                  Join our team <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="p-8 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-ciq-concrete)]">
                We are hiring for
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  'Full-stack engineers (Next.js / Python)',
                  'AI / ML engineers',
                  'Construction domain experts (site engineers, QS)',
                  'Business development — Bihar / UP',
                  'Fintech partnerships',
                  'Community & growth',
                ].map((role) => (
                  <li key={role} className="flex items-center gap-3 text-sm text-white">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: 'var(--color-ciq-safety)' }}
                    />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── INVESTORS / BACKERS ──────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="investors-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div
            className="border-t pt-16"
            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
          >
            <p className="pretitle">Backed by builders</p>
            <h2
              id="investors-heading"
              className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] leading-[1.05] max-w-2xl"
            >
              Raising our{' '}
              <span style={{ color: 'var(--color-ciq-safety)' }}>seed round.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[color:var(--color-ciq-concrete)] leading-relaxed">
              We are raising our seed round to expand across Bihar, UP, Jharkhand, and MP in 2026. We are looking for investors who understand that the next generation of Indian infrastructure fintech will be built from Tier 2/3 cities outward — not from Bangalore inward.
            </p>
            <div className="mt-8 p-6 rounded-lg border border-white/[0.06] bg-white/[0.02] inline-block">
              <p className="text-sm text-[color:var(--color-ciq-concrete)]">
                To talk about the round, reach us at{' '}
                <a
                  href="mailto:investors@constructiq.in"
                  className="font-semibold hover:underline"
                  style={{ color: 'var(--color-ciq-safety)' }}
                >
                  investors@constructiq.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
