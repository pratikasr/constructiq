import Link from 'next/link'
import { BRAND, NAV_LINKS } from '@/lib/constants'

const FOOTER_COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  { title: 'Platform', links: NAV_LINKS.platform.map(({ label, href }) => ({ label, href })) },
  { title: 'Solutions', links: NAV_LINKS.solutions },
  { title: 'Resources', links: NAV_LINKS.resources },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/about/careers' },
      { label: 'Press', href: '/about/press' },
      { label: 'Contact', href: '/contact' },
      { label: 'Investors', href: '/investors' },
    ],
  },
]

const LEGAL = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Grievance', href: '/grievance' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[var(--color-ciq-midnight)]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="font-display font-semibold text-white text-xl flex items-baseline">
              <span>Construct</span>
              <span style={{ color: 'var(--color-ciq-safety)' }}>IQ</span>
            </Link>
            <p className="mt-4 text-sm text-[color:var(--color-ciq-concrete)] max-w-[260px]">
              {BRAND.tagline} India’s end-to-end construction intelligence platform.
            </p>
            <div className="mt-6 text-xs text-[color:var(--color-ciq-concrete)] space-y-1">
              <div>{BRAND.address}</div>
              <div>
                <a href={`mailto:${BRAND.email}`} className="hover:text-white">
                  {BRAND.email}
                </a>
              </div>
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--color-ciq-safety)]">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-[color:var(--color-ciq-concrete)]">
            © {new Date().getFullYear()} ConstructIQ Technologies Pvt. Ltd. Built in Gaya, Bihar.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-xs text-white/70 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
