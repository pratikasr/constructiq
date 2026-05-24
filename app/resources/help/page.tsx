import type { Metadata } from 'next'
import { BookOpen, CreditCard, Smartphone, MessageCircle, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Help Center — ConstructIQ',
  description: 'Get help with ConstructIQ — guides, tutorials, and support.',
}

const helpCategories = [
  {
    icon: BookOpen,
    title: 'Getting Started',
    description: 'Set up your account, add your project, get your first BOQ',
    articles: [
      'Creating your ConstructIQ account',
      'Adding your first project',
      'Uploading floor plans for AI estimation',
      'Understanding your BOQ report',
      'Inviting your contractor to the platform',
    ],
  },
  {
    icon: CreditCard,
    title: 'Payments & Finance',
    description: 'Understand milestone payments, loan application, escrow',
    articles: [
      'How milestone-linked payments work',
      'Applying for a construction loan',
      'Understanding the BOQ-linked loan process',
      'Escrow account setup for contractors',
      'GST invoicing and receipts',
    ],
  },
  {
    icon: Smartphone,
    title: 'Using the App',
    description: 'Attendance, site photos, machinery booking how-tos',
    articles: [
      'Marking labour attendance with GPS verification',
      'Uploading daily site progress photos',
      'Booking machinery and equipment',
      'Managing material delivery notes',
      'Using ConstructIQ offline on-site',
    ],
  },
  {
    icon: MessageCircle,
    title: 'Contact Support',
    description: 'Reach us on WhatsApp, email, or call',
    articles: [
      'WhatsApp: wa.me/919999999999',
      'Email: contact@constructiq.in',
      'Office hours: Mon–Sat, 9am–6pm IST',
      'Emergency support for active projects',
      'Report a bug or suggest a feature',
    ],
  },
]

export default function HelpPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="help-hero-heading"
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
          className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[400px] opacity-10"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse at bottom left, var(--color-ciq-steel) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 text-center">
          <p className="pretitle">Help Center</p>
          <h1
            id="help-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] leading-[1.05]"
          >
            We&apos;re here{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>to help.</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            Guides, tutorials, and direct support for every part of the ConstructIQ platform.
          </p>
        </div>
      </section>

      {/* ── HELP CATEGORIES ──────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#F1F5F9' }}
        aria-labelledby="help-categories-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>Browse by topic</p>
          <h2
            id="help-categories-heading"
            className="font-display font-bold mt-4 text-[28px] md:text-[36px] leading-[1.1] max-w-2xl"
            style={{ color: '#0A1628' }}
          >
            Find what you&apos;re{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>looking for</span>
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {helpCategories.map((cat) => (
              <div
                key={cat.title}
                className="p-6 rounded-lg border border-slate-200 bg-white shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-md flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'rgba(245,158,11,0.1)' }}
                  >
                    <cat.icon size={20} style={{ color: 'var(--color-ciq-safety)' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base" style={{ color: '#0A1628' }}>
                      {cat.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">{cat.description}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  {cat.articles.map((article) => (
                    <li key={article}>
                      <span
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-600 cursor-pointer transition-colors"
                      >
                        <span
                          className="w-1 h-1 rounded-full shrink-0"
                          style={{ backgroundColor: 'var(--color-ciq-concrete)' }}
                          aria-hidden="true"
                        />
                        {article}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact support card */}
          <div
            className="mt-14 p-8 rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>Can&apos;t find your answer?</p>
            <h3
              className="font-display font-bold mt-3 text-[22px] md:text-[28px] leading-[1.2]"
              style={{ color: '#0A1628' }}
            >
              Talk to a real person
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-lg">
              Our support team is available Monday to Saturday, 9am–6pm IST. We respond under 2 hours on WhatsApp and email during office hours.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-5">
              {/* Email */}
              <div className="p-4 rounded-lg border border-slate-200 flex gap-3 items-start">
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(245,158,11,0.1)' }}
                >
                  <Mail size={16} style={{ color: 'var(--color-ciq-safety)' }} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Email</p>
                  <a
                    href="mailto:contact@constructiq.in"
                    className="mt-1 block text-sm font-medium hover:underline"
                    style={{ color: '#0A1628' }}
                  >
                    contact@constructiq.in
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="p-4 rounded-lg border flex gap-3 items-start" style={{ borderColor: 'rgba(34,197,94,0.3)', backgroundColor: 'rgba(34,197,94,0.04)' }}>
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(34,197,94,0.15)' }}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="#22C55E" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#16A34A' }}>WhatsApp</p>
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm font-medium hover:underline"
                    style={{ color: '#166534' }}
                  >
                    wa.me/919999999999
                  </a>
                </div>
              </div>

              {/* Response time */}
              <div className="p-4 rounded-lg border border-slate-200 flex gap-3 items-start">
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}
                >
                  <Phone size={16} style={{ color: 'var(--color-ciq-steel)' }} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Response time</p>
                  <p className="mt-1 text-sm font-medium" style={{ color: '#0A1628' }}>
                    Under 2 hours
                  </p>
                  <p className="text-xs text-slate-400">Mon–Sat, 9am–6pm IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
