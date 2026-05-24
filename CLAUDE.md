# ConstructIQ - constructiq.in

India's end-to-end construction intelligence platform for Tier 2/3 cities.
Construction packages, material supply, machinery rental, bank loans,
AI estimation, and labour/site monitoring under one platform.

## Tech Stack
- Next.js 15 (App Router, TypeScript strict)
- Tailwind CSS v4
- GSAP + ScrollTrigger (all scroll animations, timelines, text reveals)
- Motion (only for: button hovers, menu toggle, modal open/close, tooltips, page transitions via AnimatePresence)
- React Three Fiber + Drei + @react-three/postprocessing (3D construction scenes, hero, interactive demos)
- Lenis (smooth scroll, connected to GSAP ticker)
- Lucide React (icons)

## Folder Structure
```
app/
  (marketing)/           -- marketing pages with shared layout
    page.tsx             -- homepage
  not-found.tsx          -- 404 page
  layout.tsx
  globals.css
components/
  layout/                -- Header, Footer, Navigation, MobileMenu
  sections/              -- homepage sections (HeroSection, ProblemSection, etc.)
  3d/                    -- all R3F scenes (HeroScene, BuildingModel, IndiaMap, etc.)
  ui/                    -- buttons, cards, inputs, badges, toast
  shared/                -- SectionDivider, ParticleField, ScrollProgress, CustomCursor
lib/
  constants.ts           -- all copy/content strings
  utils.ts               -- clsx/twMerge helpers
providers/
  SmoothScrollProvider.tsx
public/
  images/                -- WebP, optimized
docs/
  WEBSITE_BLUEPRINT.md   -- all business content
  BUILD_SPEC.md          -- full technical build specification
```

## Design Identity
This is a CONSTRUCTION platform, not a SaaS dashboard. Visual language references:
- Blueprints (thin white/blue lines on dark backgrounds, grid patterns)
- Construction materials (concrete textures, steel, rebar patterns)
- Site aesthetics (safety amber, caution stripes, structural geometry)
- Engineering drawings (technical line art, cross-sections, floor plans)
- Film grain texture on dark sections
- Floating particle field on dark sections

## Color Palette
- --ciq-midnight: #0A1628 (hero backgrounds, dark sections)
- --ciq-blueprint: #1E3A5F (primary brand blue)
- --ciq-steel: #3B82F6 (links, interactive elements)
- --ciq-concrete: #94A3B8 (body text on dark, muted)
- --ciq-cement: #F1F5F9 (light section backgrounds)
- --ciq-safety: #F59E0B (CTAs, accents, highlights)
- --ciq-rebar: #EF4444 (errors, problem highlights)
- --ciq-white: #FFFFFF

## Typography
- Headlines: "Outfit" (700, 800), letter-spacing -0.02em, line-height 1.1
- Body: "Inter" (400, 500), letter-spacing 0, line-height 1.6
- Hindi: "Noto Sans Devanagari" via next/font/google
- Stat numbers: "Outfit" (800), letter-spacing -0.03em
- Pre-titles: uppercase, letter-spacing 0.15em

## Spacing Scale (8px base)
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 80px, 120px

## Animation Rules
- GSAP ScrollTrigger for ALL scroll-driven animations
- GSAP timelines for choreographed sequences
- Motion ONLY for: hover states, toggle animations, modal transitions
- Lenis smooth scroll must be connected to GSAP ticker

## 3D Rules
- Dynamic import with ssr: false for every Canvas component
- Suspense boundary with skeleton fallback
- Postprocessing: Bloom + Vignette on desktop only
- Mobile (below lg): replace ALL 3D Canvas with static fallbacks

## DO NOT
- Use Framer Motion / Motion for scroll animations (GSAP only)
- Use purple/violet/indigo gradients
- Use stock illustration styles (undraw, storyset)
- Add decorative blob SVGs
- Over-round corners (max 8px cards, 6px buttons)
- Use localStorage/sessionStorage
