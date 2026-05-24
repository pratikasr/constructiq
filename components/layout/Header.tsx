'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

type DropdownKey = 'platform' | 'solutions' | 'resources'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [openDrop, setOpenDrop] = useState<DropdownKey | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[rgba(10,22,40,0.95)] backdrop-blur-xl border-b border-white/[0.08] h-16'
            : 'bg-transparent h-20',
        )}
      >
        <div className="mx-auto max-w-[1280px] h-full px-4 md:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="font-display font-semibold text-white flex items-baseline" aria-label="ConstructIQ home">
            <span style={{ fontSize: scrolled ? 18 : 20 }}>Construct</span>
            <span style={{ fontSize: scrolled ? 18 : 20, color: 'var(--color-ciq-safety)' }}>IQ</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.primary.map((item) => {
              if ('dropdown' in item && item.dropdown) {
                const key = item.dropdown
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDrop(key)}
                    onMouseLeave={() => setOpenDrop(null)}
                  >
                    <button
                      className="text-sm font-medium text-white/90 hover:text-white flex items-center gap-1 py-2"
                      aria-haspopup="true"
                      aria-expanded={openDrop === key}
                    >
                      {item.label}
                      <ChevronDown size={14} className={cn('transition-transform', openDrop === key && 'rotate-180')} />
                    </button>
                    <AnimatePresence>
                      {openDrop === key && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className={cn(
                            'absolute left-0 top-full pt-3',
                            key === 'resources' ? 'w-[480px]' : 'w-[320px]',
                          )}
                        >
                          <div className="rounded-lg border border-white/[0.08] bg-[rgba(10,22,40,0.98)] backdrop-blur-xl p-2 shadow-2xl">
                            <div className={cn(key === 'resources' && 'grid grid-cols-2')}>
                              {NAV_LINKS[key].map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="block rounded-md p-3 hover:bg-white/[0.05] transition-colors group"
                                  onClick={() => setOpenDrop(null)}
                                >
                                  <div className="text-sm font-medium text-white group-hover:text-[color:var(--color-ciq-safety)] transition-colors">
                                    {link.label}
                                  </div>
                                  {'desc' in link && link.desc && (
                                    <div className="text-xs text-[color:var(--color-ciq-concrete)] mt-1">
                                      {link.desc}
                                    </div>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="text-sm font-medium text-white/90 hover:text-white py-2"
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-5">
            <Link href="/login" className="text-sm font-medium text-white/80 hover:text-white">
              Login
            </Link>
            <Link
              href="/signup"
              className="text-sm font-semibold px-6 py-2.5 rounded-md transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: 'var(--color-ciq-safety)', color: 'var(--color-ciq-midnight)' }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden bg-[var(--color-ciq-midnight)] pt-20 overflow-y-auto"
          >
            <nav className="px-6 py-8 flex flex-col" aria-label="Mobile">
              {NAV_LINKS.primary.map((item) => {
                if ('dropdown' in item && item.dropdown) {
                  return (
                    <MobileAccordion
                      key={item.label}
                      label={item.label}
                      links={NAV_LINKS[item.dropdown]}
                      onPick={() => setMobileOpen(false)}
                    />
                  )
                }
                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    onClick={() => setMobileOpen(false)}
                    className="text-xl font-medium text-white py-4 border-b border-white/[0.08]"
                  >
                    {item.label}
                  </Link>
                )
              })}
              <Link href="/login" onClick={() => setMobileOpen(false)} className="text-base text-white/80 mt-8 py-3">
                Login
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center font-semibold py-4 rounded-md"
                style={{ backgroundColor: 'var(--color-ciq-safety)', color: 'var(--color-ciq-midnight)' }}
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function MobileAccordion({
  label,
  links,
  onPick,
}: {
  label: string
  links: { label: string; href: string; desc?: string }[]
  onPick: () => void
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/[0.08]">
      <button
        className="w-full flex items-center justify-between text-xl font-medium text-white py-4"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {label}
        <ChevronDown size={20} className={cn('transition-transform', open && 'rotate-180')} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={onPick}
                  className="block text-base text-white/80 hover:text-white py-3 pl-3"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pb-3" />
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
