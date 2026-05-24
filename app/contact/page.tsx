import type { Metadata } from 'next'
import { Mail, MapPin, Clock } from 'lucide-react'
import { ContactForm } from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — ConstructIQ',
  description:
    'Get in touch with the ConstructIQ team. We respond fast — usually within a few hours during business days.',
}

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@constructiq.in',
    href: 'mailto:contact@constructiq.in',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Gaya, Bihar, India',
    href: null,
  },
  {
    icon: Clock,
    label: 'Office hours',
    value: 'Mon–Sat, 9am–6pm IST',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="contact-hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,158,11,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.15) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 text-center">
          <p className="pretitle">Get in touch</p>
          <h1
            id="contact-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05]"
          >
            Talk to us.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>We respond fast.</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            Whether you&apos;re a homeowner, contractor, supplier, bank, or investor — we want to hear from you.
          </p>
        </div>
      </section>

      {/* ── SPLIT LAYOUT: FORM + DETAILS ─────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#F1F5F9' }}
        aria-label="Contact form and details"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Form */}
            <div>
              <p className="pretitle" style={{ color: 'var(--color-ciq-blueprint)' }}>Send us a message</p>
              <h2 className="font-display font-bold mt-3 text-[28px] md:text-[36px] leading-[1.1]" style={{ color: '#0A1628' }}>
                We&apos;ll get back to you{' '}
                <span style={{ color: 'var(--color-ciq-safety)' }}>within hours</span>
              </h2>
              <p className="mt-3 mb-8 text-sm text-slate-600">
                No bots. A real person from the ConstructIQ team reads every message.
              </p>
              <ContactForm />
            </div>

            {/* Right: Contact details */}
            <div className="lg:pt-16">
              {/* Contact info cards */}
              <div className="space-y-4">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-start gap-4 p-5 rounded-lg border border-slate-200 bg-white shadow-sm"
                  >
                    <div
                      className="w-10 h-10 rounded-md flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(245,158,11,0.1)' }}
                    >
                      <detail.icon size={18} style={{ color: 'var(--color-ciq-safety)' }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">{detail.label}</p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="mt-1 block text-sm font-medium hover:underline"
                          style={{ color: '#0A1628' }}
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-medium" style={{ color: '#0A1628' }}>{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div
                className="mt-6 p-5 rounded-lg border"
                style={{ borderColor: 'rgba(34,197,94,0.3)', backgroundColor: 'rgba(34,197,94,0.05)' }}
              >
                <p className="text-sm font-semibold" style={{ color: '#166534' }}>Prefer WhatsApp?</p>
                <p className="mt-1 text-sm text-slate-600">
                  Chat with us directly — fast replies during office hours.
                </p>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-transform hover:scale-[1.01]"
                  style={{ backgroundColor: '#22C55E', color: '#fff' }}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Office hours note */}
              <div
                className="mt-4 p-4 rounded-lg border border-slate-200 bg-white"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Response time</p>
                <p className="mt-2 text-sm text-slate-600">
                  We typically reply within <span className="font-semibold text-slate-800">2–4 hours</span> during office hours (Mon–Sat, 9am–6pm IST). Weekend messages are answered on Monday morning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
