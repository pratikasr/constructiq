import type { Metadata } from 'next'
import { CheckCircle2, Shield, Star } from 'lucide-react'
import { SignupForm } from '@/components/ui/SignupForm'

export const metadata: Metadata = {
  title: 'Join the Beta — ConstructIQ',
  description:
    'Join 200+ builders already on the ConstructIQ beta. Free access to AI cost estimation, contractor matching, and material pricing.',
}

const benefits = [
  {
    title: 'Free forever during beta',
    description: 'Full platform access at no cost. We will give you 30+ days notice before any pricing changes at launch.',
  },
  {
    title: 'First access to all 6 modules',
    description: 'AI estimation, contractor matching, material supply, machinery rental, finance integration, and labour site AI — all live for beta users.',
  },
  {
    title: 'Help shape the product',
    description: 'Your feedback directly influences what we build next. Beta users get direct access to the product team.',
  },
  {
    title: 'Priority onboarding support',
    description: 'A dedicated onboarding call with the ConstructIQ team to get your first project set up correctly.',
  },
  {
    title: 'Early adopter pricing lock-in',
    description: 'Beta users lock in a discounted rate that stays with you for life — regardless of how prices change at launch.',
  },
]

export default function SignupPage() {
  return (
    <>
      {/* ── SPLIT LAYOUT ─────────────────────────────────────────────────────── */}
      <section
        className="min-h-screen relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="signup-heading"
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
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] opacity-8"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse at top right, var(--color-ciq-safety) 0%, transparent 65%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Benefits */}
            <div>
              <p className="pretitle">Beta access</p>
              <h1
                id="signup-heading"
                className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05]"
              >
                Why join{' '}
                <span style={{ color: 'var(--color-ciq-safety)' }}>the beta</span>
              </h1>
              <p className="mt-6 text-base text-[color:var(--color-ciq-concrete)] leading-relaxed max-w-md">
                ConstructIQ is in private beta. Join now and get free access to India&apos;s first end-to-end construction intelligence platform.
              </p>

              <ul className="mt-10 space-y-5">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: 'rgba(245,158,11,0.12)' }}
                    >
                      <CheckCircle2 size={16} style={{ color: 'var(--color-ciq-safety)' }} />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{b.title}</p>
                      <p className="mt-1 text-xs text-[color:var(--color-ciq-concrete)] leading-relaxed">
                        {b.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Social proof */}
              <div
                className="mt-12 p-5 rounded-lg border border-white/[0.06] bg-white/[0.02]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((n) => (
                      <div
                        key={n}
                        className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                        style={{
                          borderColor: '#0A1628',
                          backgroundColor: n % 2 === 0 ? 'rgba(59,130,246,0.3)' : 'rgba(245,158,11,0.3)',
                          color: n % 2 === 0 ? 'var(--color-ciq-steel)' : 'var(--color-ciq-safety)',
                        }}
                      >
                        {['R', 'S', 'A', 'M'][n - 1]}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} fill="var(--color-ciq-safety)" style={{ color: 'var(--color-ciq-safety)' }} />
                    ))}
                  </div>
                </div>
                <p className="text-sm font-semibold text-white">
                  Already trusted by 200+ beta users in Bihar
                </p>
                <p className="mt-1 text-xs text-[color:var(--color-ciq-concrete)]">
                  Contractors, homeowners, and suppliers across Patna, Gaya, Bhagalpur, and Muzaffarpur
                </p>
              </div>

              {/* Trust badges */}
              <div className="mt-6 flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-xs text-[color:var(--color-ciq-concrete)]">
                  <Shield size={14} style={{ color: 'var(--color-ciq-steel)' }} />
                  Data stored in India (Mumbai region)
                </div>
                <div className="flex items-center gap-2 text-xs text-[color:var(--color-ciq-concrete)]">
                  <Shield size={14} style={{ color: 'var(--color-ciq-steel)' }} />
                  No data sold to third parties
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div
              className="p-8 rounded-xl border border-white/[0.08] bg-white/[0.02]"
            >
              <h2 className="font-display font-bold text-white text-2xl mb-2">
                Request beta access
              </h2>
              <p className="text-sm text-[color:var(--color-ciq-concrete)] mb-8">
                Takes 2 minutes. We&apos;ll send your access link within 24 hours.
              </p>
              <SignupForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
