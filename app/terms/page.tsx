import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — ConstructIQ',
  description: 'Terms and conditions for using ConstructIQ\'s platform and services.',
}

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of terms',
    content: [
      {
        subtitle: 'By using ConstructIQ',
        text: 'By creating an account or using any part of the ConstructIQ platform — including the website, mobile app, and APIs — you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our services. We may update these terms from time to time; continued use after an update constitutes acceptance of the revised terms.',
      },
      {
        subtitle: 'Age requirement',
        text: 'You must be at least 18 years old to use ConstructIQ. By using the platform, you represent that you are 18 or older and have the legal capacity to enter into contracts under Indian law.',
      },
    ],
  },
  {
    id: 'services',
    title: 'Services description',
    content: [
      {
        subtitle: 'What ConstructIQ provides',
        text: 'ConstructIQ provides a technology platform that enables: AI-generated Bills of Quantities (BOQ) from building drawings; contractor discovery and matching; construction material sourcing; labour attendance tracking; machinery booking; milestone-linked payment management; and construction loan application facilitation. We are a technology platform — we are not a contractor, bank, or material supplier.',
      },
      {
        subtitle: 'Platform availability',
        text: 'We aim to maintain platform availability of 99.5% (measured monthly), excluding scheduled maintenance windows. We will provide 24-hour notice for scheduled downtime where possible. During our beta period, some features may be incomplete, change without notice, or be removed. We will communicate significant changes via email.',
      },
      {
        subtitle: 'Beta period',
        text: 'ConstructIQ is currently in beta. Beta users accept that the platform may have bugs, incomplete features, and service interruptions. In exchange, beta users get free or discounted access. We value beta user feedback and use it to improve the platform before general availability.',
      },
    ],
  },
  {
    id: 'user-accounts',
    title: 'User accounts',
    content: [
      {
        subtitle: 'Account responsibility',
        text: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately at contact@constructiq.in if you suspect unauthorised access. We are not liable for losses arising from unauthorised account access resulting from your failure to keep credentials secure.',
      },
      {
        subtitle: 'Accurate information',
        text: 'You agree to provide accurate, current, and complete information when creating your account and to keep it updated. Providing false information — including false contractor qualifications, inflated project values, or fraudulent financial details — may result in immediate account termination and may constitute fraud under applicable Indian law.',
      },
      {
        subtitle: 'Account termination',
        text: 'You may terminate your account at any time from account settings. We may suspend or terminate accounts that violate these terms, without prior notice for serious violations. Upon termination, your right to use the platform ceases immediately. We will retain your data for 90 days before deletion, during which you can request an export.',
      },
    ],
  },
  {
    id: 'prohibited-use',
    title: 'Prohibited use',
    content: [
      {
        subtitle: 'What you may not do',
        text: 'You may not: submit false information to obtain loans or services; use the platform to defraud homeowners, contractors, or lenders; attempt to access data belonging to other users; reverse-engineer, scrape, or copy the platform or its AI models; use automated tools to create accounts or submit data at scale; or use the platform for any purpose that is illegal under Indian law.',
      },
      {
        subtitle: 'Contractor obligations',
        text: 'Contractors using ConstructIQ agree that their profile information — qualifications, past projects, ratings — is accurate, and consent to verification checks. Contractors may not solicit clients to transact outside the platform in order to avoid ConstructIQ fees, during an active engagement facilitated through the platform.',
      },
    ],
  },
  {
    id: 'payments',
    title: 'Payments and fees',
    content: [
      {
        subtitle: 'Subscription fees',
        text: 'Subscription fees for the Professional and Enterprise plans are billed monthly or annually in advance, as selected at signup. All fees are in Indian Rupees and inclusive of applicable GST. Fees are non-refundable except where required by law or as described in our Refund Policy.',
      },
      {
        subtitle: 'Payment processing',
        text: 'Payments are processed by Razorpay, a PCI-DSS compliant payment gateway. ConstructIQ does not store your card or bank account details. By making a payment, you agree to Razorpay\'s terms of service.',
      },
      {
        subtitle: 'Construction payments',
        text: 'When using ConstructIQ\'s milestone payment escrow features, funds are held in a designated account and released to contractors upon milestone verification. ConstructIQ acts as a technology facilitator for these payments and is not a bank or NBFC. Disputes regarding milestone completion are resolved per the dispute resolution process in the platform.',
      },
      {
        subtitle: 'Price changes',
        text: 'We may change subscription pricing at any time. Existing subscribers will receive 30 days written notice before any price increase takes effect on their plan.',
      },
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    content: [
      {
        subtitle: 'Platform as facilitator',
        text: 'ConstructIQ is a technology platform that connects parties — it is not responsible for the actions, quality of work, or financial obligations of contractors, material suppliers, or lenders that you connect with through the platform. Contracts for construction, material supply, and loans are between you and those parties directly.',
      },
      {
        subtitle: 'AI estimates',
        text: 'AI-generated cost estimates and BOQs are provided for informational purposes and are not construction contracts or professional engineer\'s certifications. Actual construction costs may vary. You are responsible for verifying estimates with qualified professionals before making financial commitments.',
      },
      {
        subtitle: 'Limitation of damages',
        text: 'To the maximum extent permitted by applicable law, ConstructIQ\'s total liability to you for any claim arising from use of the platform is limited to the fees you paid to ConstructIQ in the 3 months preceding the claim. We are not liable for indirect, consequential, or punitive damages.',
      },
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing law',
    content: [
      {
        subtitle: 'Jurisdiction',
        text: 'These terms are governed by the laws of India. Any disputes arising under these terms will be subject to the exclusive jurisdiction of the courts of Gaya, Bihar, India. Both parties agree to attempt good-faith resolution before commencing any legal proceedings.',
      },
      {
        subtitle: 'Dispute resolution',
        text: 'For disputes between users and contractors arising from projects on the platform, ConstructIQ offers a mediation process. Homeowners and contractors can request mediation by contacting disputes@constructiq.in. We will assign a case manager within 48 hours.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    content: [
      {
        subtitle: 'Legal enquiries',
        text: 'For questions about these terms, contact our legal team at legal@constructiq.in or by post at ConstructIQ Technologies Pvt. Ltd., Gaya, Bihar — 823001, India. We respond to all legal enquiries within 5 business days.',
      },
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="terms-hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">Legal</p>
          <h1
            id="terms-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] leading-[1.05] max-w-3xl"
          >
            Terms of{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>Service</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-[color:var(--color-ciq-concrete)]">
            The rules for using ConstructIQ. Written clearly so you actually understand what you are agreeing to.
          </p>
          <p className="mt-3 text-sm text-[color:var(--color-ciq-concrete)] opacity-60">
            Effective date: January 1, 2026
          </p>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#F1F5F9' }}
        aria-label="Terms of service content"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[240px_1fr] gap-12 items-start">
            {/* Sidebar nav */}
            <aside className="hidden lg:block sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Contents</p>
              <nav>
                <ol className="space-y-2">
                  {sections.map((section, i) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="flex gap-2.5 text-sm text-slate-500 hover:text-amber-600 transition-colors"
                      >
                        <span style={{ color: 'var(--color-ciq-safety)' }}>{i + 1}.</span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Main content */}
            <div className="space-y-12">
              <div
                className="p-5 rounded-lg border text-sm"
                style={{ borderColor: 'rgba(59,130,246,0.25)', backgroundColor: 'rgba(59,130,246,0.04)', color: '#1E3A5F' }}
              >
                <strong>Key points:</strong> ConstructIQ is a technology platform — not a contractor, bank, or supplier. AI estimates are informational, not professional certifications. Payments are facilitated, not guaranteed. Disputes are governed by Indian law, jurisdiction in Gaya, Bihar.
              </div>

              {sections.map((section, i) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <h2
                    className="font-display font-bold text-[22px] leading-[1.3] flex items-start gap-3"
                    style={{ color: '#0A1628' }}
                  >
                    <span
                      className="font-display font-bold text-[14px] mt-1 px-2 py-0.5 rounded"
                      style={{ backgroundColor: 'rgba(245,158,11,0.1)', color: 'var(--color-ciq-safety)' }}
                    >
                      {i + 1}
                    </span>
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-5">
                    {section.content.map((block) => (
                      <div
                        key={block.subtitle}
                        className="p-5 rounded-lg border border-slate-200 bg-white"
                      >
                        <p className="font-semibold text-sm mb-2" style={{ color: '#0A1628' }}>
                          {block.subtitle}
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed">{block.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div
                className="p-5 rounded-lg border border-slate-200 bg-white text-sm text-slate-500"
              >
                Questions about these terms? Email{' '}
                <a href="mailto:legal@constructiq.in" className="font-medium hover:underline" style={{ color: 'var(--color-ciq-safety)' }}>
                  legal@constructiq.in
                </a>
                {' '}— we respond within 5 business days.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
