import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — ConstructIQ',
  description: 'How ConstructIQ collects, uses, and protects your personal data.',
}

const sections = [
  {
    id: 'data-we-collect',
    title: 'Data we collect',
    content: [
      {
        subtitle: 'Account data',
        text: 'When you create a ConstructIQ account, we collect your name, mobile number, email address, and location (district and state). This is required to create your account and personalise your experience.',
      },
      {
        subtitle: 'Project data',
        text: 'When you add a project, we collect floor plans, drawings, cost estimates, BOQs, and project details you provide. This data is used to generate estimates, connect you with contractors, and facilitate loan applications.',
      },
      {
        subtitle: 'Usage data',
        text: 'We collect information about how you use the platform — pages visited, features used, session duration, and device type. This helps us understand what is working and improve the product. We do not sell this data.',
      },
      {
        subtitle: 'Location data',
        text: 'The mobile app requests location permission for GPS-based labour attendance verification and machinery tracking. Location is only collected when you actively use these features — not in the background. You can revoke this permission at any time from your device settings.',
      },
      {
        subtitle: 'Financial data',
        text: 'If you apply for a construction loan or set up payments, we collect financial information required for the application — income details, existing liabilities, and bank account information. This is shared only with the lending partner you choose.',
      },
    ],
  },
  {
    id: 'how-we-use-it',
    title: 'How we use it',
    content: [
      {
        subtitle: 'Providing our services',
        text: 'Your data is used to generate BOQs, match contractors, process payments, and facilitate loan applications. We could not deliver these services without it.',
      },
      {
        subtitle: 'Improving the product',
        text: 'Aggregated, anonymised usage data helps us identify problems and improve features. Individual project data is never used for this purpose without your consent.',
      },
      {
        subtitle: 'Communications',
        text: 'We send service updates, important account notifications, and — if you opt in — product news and insights. You can unsubscribe from marketing messages at any time. We will never send unsolicited commercial communications.',
      },
      {
        subtitle: 'Legal compliance',
        text: 'We may use your data to comply with applicable laws, including the Digital Personal Data Protection Act, 2023, and to respond to lawful government requests.',
      },
    ],
  },
  {
    id: 'data-sharing',
    title: 'Data sharing',
    content: [
      {
        subtitle: 'With contractors',
        text: 'When you match with a contractor through ConstructIQ, your project details and contact information are shared with that contractor. You control which contractors see your project.',
      },
      {
        subtitle: 'With lending partners',
        text: 'If you apply for a construction loan, the project BOQ, cost estimates, and the personal financial information you provide are shared with the lending institution you select. We do not share your financial data with any lender without your explicit consent at the time of application.',
      },
      {
        subtitle: 'With service providers',
        text: 'We use trusted third-party providers for infrastructure (AWS), payments (Razorpay), and communication (Twilio). These providers process data on our behalf and are contractually bound to protect it.',
      },
      {
        subtitle: 'We never sell your data',
        text: 'ConstructIQ does not sell personal data to third parties for advertising or any other purpose. Full stop.',
      },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    content: [
      {
        subtitle: 'Encryption',
        text: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Floor plans, financial details, and project documents are stored in encrypted form on AWS infrastructure with data residency in India.',
      },
      {
        subtitle: 'Access controls',
        text: 'ConstructIQ employees access customer data only when needed to resolve support issues, and all such access is logged and reviewed. We operate on a least-privilege access model.',
      },
      {
        subtitle: 'Incident response',
        text: 'In the event of a data breach that affects your personal information, we will notify you within 72 hours of becoming aware of it, consistent with obligations under the Digital Personal Data Protection Act, 2023.',
      },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies',
    content: [
      {
        subtitle: 'What we use',
        text: 'We use cookies and similar technologies to maintain your login session, remember your preferences, and understand how you use the platform. We use session cookies (deleted when you close your browser) and persistent cookies (stored for up to 12 months).',
      },
      {
        subtitle: 'Analytics',
        text: 'We use privacy-respecting analytics to understand aggregate usage patterns. These analytics do not track you across other websites and do not include advertising identifiers.',
      },
      {
        subtitle: 'Your control',
        text: 'You can manage cookie preferences in your browser settings. Disabling all cookies will prevent some features from working correctly — in particular, you will not be able to stay logged in.',
      },
    ],
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    content: [
      {
        subtitle: 'Access and portability',
        text: 'You have the right to request a copy of all personal data we hold about you. You can export your project data, BOQs, and account information from your profile settings at any time.',
      },
      {
        subtitle: 'Correction and deletion',
        text: 'You can update your account information at any time from your settings. To request deletion of your account and all associated data, contact us at privacy@constructiq.in — we will complete the deletion within 30 days.',
      },
      {
        subtitle: 'Consent withdrawal',
        text: 'Where we process your data based on consent (such as marketing emails or location access), you can withdraw that consent at any time without affecting any processing that has already occurred.',
      },
      {
        subtitle: 'Grievance redressal',
        text: 'Under the Digital Personal Data Protection Act, 2023, you have the right to raise a grievance with us. We will acknowledge within 48 hours and resolve within 30 days. If you are not satisfied with our response, you can escalate to the Data Protection Board of India.',
      },
    ],
  },
  {
    id: 'contact-dpo',
    title: 'Contact our Data Protection Officer',
    content: [
      {
        subtitle: 'Reach us',
        text: 'For any privacy-related queries, data requests, or concerns, contact our Data Protection Officer at privacy@constructiq.in or by post at ConstructIQ Technologies Pvt. Ltd., Gaya, Bihar — 823001, India. We respond to all privacy queries within 48 hours.',
      },
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="privacy-hero-heading"
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
            id="privacy-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] leading-[1.05] max-w-3xl"
          >
            Privacy{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>Policy</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-[color:var(--color-ciq-concrete)]">
            How ConstructIQ collects, uses, and protects your personal data. Written in plain language — not legalese.
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
        aria-label="Privacy policy content"
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
                style={{ borderColor: 'rgba(245,158,11,0.3)', backgroundColor: 'rgba(245,158,11,0.04)', color: '#92400E' }}
              >
                <strong>Summary:</strong> We collect only what we need to run the platform. We never sell your data. You can delete your account and data at any time. We are compliant with India&apos;s Digital Personal Data Protection Act, 2023.
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
                Questions about this policy? Email{' '}
                <a href="mailto:privacy@constructiq.in" className="font-medium hover:underline" style={{ color: 'var(--color-ciq-safety)' }}>
                  privacy@constructiq.in
                </a>
                {' '}— we respond within 48 hours.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
