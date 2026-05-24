import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { PlatformSection } from '@/components/sections/PlatformSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { MarketSection } from '@/components/sections/MarketSection'
import { AudienceSection } from '@/components/sections/AudienceSection'
import { CompetitiveSection } from '@/components/sections/CompetitiveSection'
import { CtaStripSection } from '@/components/sections/CtaStripSection'
import { SectionDivider } from '@/components/shared/SectionDivider'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SectionDivider variant="subtle" />
      <ProblemSection />
      <PlatformSection />
      <SectionDivider variant="dark-to-light" color="#F1F5F9" />
      <HowItWorksSection />
      <SectionDivider variant="light-to-dark" color="#0A1628" />
      <MarketSection />
      <SectionDivider variant="dark-to-light" color="#F1F5F9" />
      <AudienceSection />
      <SectionDivider variant="light-to-dark" color="#0D1B2A" />
      <CompetitiveSection />
      <CtaStripSection />
    </>
  )
}
