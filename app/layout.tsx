import type { Metadata } from 'next'
import { Outfit, Inter, Noto_Sans_Devanagari } from 'next/font/google'
import { SmoothScrollProvider } from '@/providers/SmoothScrollProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/shared/ScrollProgress'
import { ParticleField } from '@/components/shared/ParticleField'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
  preload: true,
})

const notoHindi = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-noto-hindi',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: false,
})

export const metadata: Metadata = {
  title: 'ConstructIQ — India’s end-to-end construction intelligence platform',
  description:
    'From blueprint to handover, one platform for packages, materials, machinery, finance, AI estimation, and site monitoring. Built for Tier 2/3 India.',
  metadataBase: new URL('https://constructiq.in'),
  openGraph: {
    title: 'ConstructIQ — Build smarter. Build faster. Build once.',
    description:
      'India’s end-to-end construction intelligence platform for Tier 2/3 cities.',
    url: 'https://constructiq.in',
    siteName: 'ConstructIQ',
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${notoHindi.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SmoothScrollProvider>
          <ScrollProgress />
          <ParticleField />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
