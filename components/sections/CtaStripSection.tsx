import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { CTA_STRIP } from '@/lib/constants'

export function CtaStripSection() {
  return (
    <section className="relative section-dark py-24 lg:py-32 overflow-hidden" aria-labelledby="cta-heading">
      {/* Background blueprint accent */}
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245, 158, 11, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.08) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            backgroundPosition: 'center center',
            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
          }}
        />
      </div>
      {/* Top safety stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, var(--color-ciq-safety) 0 12px, var(--color-ciq-midnight) 12px 20px)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 text-center">
        <p className="pretitle">{CTA_STRIP.pretitle}</p>
        <h2
          id="cta-heading"
          className="font-display font-bold text-white mt-5 text-[36px] md:text-[48px] lg:text-[64px] leading-[1.05] max-w-3xl mx-auto"
        >
          Ready to bring your project <span style={{ color: 'var(--color-ciq-safety)' }}>on-platform?</span>
        </h2>
        <p className="mt-6 text-base lg:text-lg text-[color:var(--color-ciq-concrete)] max-w-xl mx-auto">
          {CTA_STRIP.sub}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={CTA_STRIP.primary.href}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold text-base transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: 'var(--color-ciq-safety)', color: 'var(--color-ciq-midnight)' }}
          >
            {CTA_STRIP.primary.label}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={CTA_STRIP.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold text-base border border-white/[0.18] text-white hover:bg-white/[0.04] transition-colors"
          >
            <MessageCircle size={16} />
            {CTA_STRIP.secondary.label}
          </a>
        </div>
      </div>
    </section>
  )
}
