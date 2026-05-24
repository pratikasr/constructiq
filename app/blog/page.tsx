import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog — ConstructIQ',
  description: 'Insights on construction, finance, and technology for Tier 2/3 India.',
}

const posts = [
  {
    slug: 'why-indian-construction-projects-exceed-budget',
    tag: 'Construction Cost',
    title: 'Why 70% of Indian construction projects exceed budget — and how to fix it',
    excerpt:
      'Cost overruns in Indian construction are not accidents — they are the predictable result of opaque pricing, unverified BOQs, and zero contractor accountability. We analysed 800 projects across Bihar and UP to find out exactly where the money goes.',
    date: 'Jan 15, 2026',
    readTime: '5 min read',
    author: 'ConstructIQ Team',
  },
  {
    slug: 'boq-linked-construction-loans',
    tag: 'Finance',
    title: 'BOQ-linked construction loans: How we\'re unlocking ₹4 lakh crore in credit',
    excerpt:
      'Banks refuse to lend for construction in Tier 2/3 India because they have no visibility into the project. A verified, AI-generated BOQ changes that equation completely — here is how we are building the bridge between construction and formal credit.',
    date: 'Jan 22, 2026',
    readTime: '7 min read',
    author: 'ConstructIQ Team',
  },
  {
    slug: 'ai-floor-plan-boq-3-minutes',
    tag: 'Technology',
    title: 'How AI reads your floor plan and generates a BOQ in 3 minutes',
    excerpt:
      'Traditionally, a quantity surveyor takes 2–3 weeks to produce a Bill of Quantities for a residential project. Our AI does it in under 3 minutes from a photo of your drawing — with CPWD-rate accuracy. Here is how it works.',
    date: 'Feb 1, 2026',
    readTime: '4 min read',
    author: 'ConstructIQ Team',
  },
  {
    slug: 'attendance-fraud-indian-construction',
    tag: 'Labour',
    title: 'Attendance fraud costs Indian construction ₹8,000 crore a year. Here\'s the data.',
    excerpt:
      'Ghost workers, inflated headcounts, and fake attendance sheets are so normalised in Indian construction that most contractors do not even consider them fraud. We do — and here is the data on how much it costs the industry every year.',
    date: 'Feb 10, 2026',
    readTime: '6 min read',
    author: 'ConstructIQ Team',
  },
  {
    slug: 'tier-2-3-india-the-market-nobody-is-building-for',
    tag: 'Market',
    title: 'Tier 2/3 India: The ₹20 lakh crore market nobody is building for',
    excerpt:
      'Every major construction tech startup in India targets Mumbai, Delhi, or Bangalore. But 64% of India\'s home construction happens in small cities and towns — a market that is massive, underserved, and about to explode with rising incomes and 4G penetration.',
    date: 'Feb 20, 2026',
    readTime: '8 min read',
    author: 'ConstructIQ Team',
  },
  {
    slug: 'direct-procurement-saves-30-40-percent',
    tag: 'Suppliers',
    title: 'Cutting the middleman: How direct procurement saves 30–40% on materials',
    excerpt:
      'In Tier 2/3 India, construction materials pass through 3–4 middlemen before reaching the site — each adding margin, each adding opacity. We show how bypassing the chain and sourcing direct from manufacturers changes the unit economics of construction permanently.',
    date: 'Mar 1, 2026',
    readTime: '5 min read',
    author: 'ConstructIQ Team',
  },
]

const tagColors: Record<string, { bg: string; text: string; border: string }> = {
  'Construction Cost': { bg: 'rgba(245,158,11,0.1)', text: 'var(--color-ciq-safety)', border: 'rgba(245,158,11,0.25)' },
  'Finance': { bg: 'rgba(59,130,246,0.1)', text: 'var(--color-ciq-steel)', border: 'rgba(59,130,246,0.25)' },
  'Technology': { bg: 'rgba(59,130,246,0.1)', text: 'var(--color-ciq-steel)', border: 'rgba(59,130,246,0.25)' },
  'Labour': { bg: 'rgba(239,68,68,0.1)', text: '#EF4444', border: 'rgba(239,68,68,0.25)' },
  'Market': { bg: 'rgba(245,158,11,0.1)', text: 'var(--color-ciq-safety)', border: 'rgba(245,158,11,0.25)' },
  'Suppliers': { bg: 'rgba(34,197,94,0.1)', text: '#16A34A', border: 'rgba(34,197,94,0.25)' },
}

export default function BlogPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay overflow-hidden py-24 lg:py-32"
        style={{ backgroundColor: '#0A1628' }}
        aria-labelledby="blog-hero-heading"
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
          className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[400px] opacity-10"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse at bottom left, var(--color-ciq-safety) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <p className="pretitle">Blog</p>
          <h1
            id="blog-hero-heading"
            className="font-display font-bold text-white mt-4 text-[36px] md:text-[48px] leading-[1.05] max-w-3xl"
          >
            Construction intelligence.{' '}
            <span style={{ color: 'var(--color-ciq-safety)' }}>Published.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base lg:text-lg text-[color:var(--color-ciq-concrete)]">
            Data, analysis, and on-the-ground reporting on construction, finance, and technology for Tier 2/3 India.
          </p>
        </div>
      </section>

      {/* ── BLOG GRID ────────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#F1F5F9' }}
        aria-labelledby="blog-posts-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <h2 id="blog-posts-heading" className="sr-only">Blog posts</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const tagStyle = tagColors[post.tag] ?? tagColors['Construction Cost']
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col p-6 rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  {/* Tag */}
                  <span
                    className="self-start px-2.5 py-1 rounded-full text-[11px] font-semibold border"
                    style={{ backgroundColor: tagStyle.bg, color: tagStyle.text, borderColor: tagStyle.border }}
                  >
                    {post.tag}
                  </span>

                  {/* Title */}
                  <h3
                    className="mt-4 font-display font-bold text-[18px] leading-[1.3] group-hover:opacity-80 transition-opacity"
                    style={{ color: '#0A1628' }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="mt-5 flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Subscribe strip */}
          <div
            className="mt-16 p-8 rounded-xl border text-center"
            style={{ borderColor: 'rgba(245,158,11,0.25)', backgroundColor: 'rgba(245,158,11,0.04)' }}
          >
            <p className="font-display font-bold text-[22px] md:text-[28px] leading-[1.2]" style={{ color: '#0A1628' }}>
              More coming soon.{' '}
              <span style={{ color: 'var(--color-ciq-safety)' }}>Subscribe to get notified.</span>
            </p>
            <p className="mt-2 text-sm text-slate-600">
              New articles every week on construction, finance, and technology for Bharat.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full sm:flex-1 px-4 py-3 rounded-md border border-slate-300 bg-white text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="button"
                className="w-full sm:w-auto px-6 py-3 rounded-md text-sm font-semibold whitespace-nowrap"
                style={{ backgroundColor: 'var(--color-ciq-safety)', color: '#0A1628' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
