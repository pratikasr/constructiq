/**
 * All content strings, sourced from docs/WEBSITE_BLUEPRINT.md.
 * Do not invent copy. Update here, not in components.
 */

export const BRAND = {
  name: 'ConstructIQ',
  domain: 'constructiq.in',
  tagline: 'Build smarter. Build faster. Build once.',
  address: 'Gaya, Bihar, India',
  email: 'contact@constructiq.in',
  whatsappNumber: '91XXXXXXXXXX', // update before launch
}

export const NAV_LINKS = {
  platform: [
    { label: 'Construction Packages', href: '/platform/construction-packages', desc: 'Turnkey packages for all building types' },
    { label: 'Material Supply', href: '/platform/material-supply', desc: 'Direct manufacturer-to-site procurement' },
    { label: 'Machinery Rental', href: '/platform/machinery-rental', desc: 'Geotagged equipment marketplace' },
    { label: 'Construction Finance', href: '/platform/construction-finance', desc: 'BOQ-linked bank loan integration' },
    { label: 'AI Estimation', href: '/platform/ai-estimation', desc: 'Smart BOQ and tender document generation' },
    { label: 'Labour & Site AI', href: '/platform/labour-site-ai', desc: 'Offline attendance and progress monitoring' },
  ],
  solutions: [
    { label: 'For Homeowners', href: '/solutions/homeowners' },
    { label: 'For Contractors', href: '/solutions/contractors' },
    { label: 'For Suppliers', href: '/solutions/suppliers' },
    { label: 'For Equipment Owners', href: '/solutions/equipment-owners' },
    { label: 'For Banks & NBFCs', href: '/solutions/banks' },
    { label: 'For Architects', href: '/solutions/architects' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/resources/case-studies' },
    { label: 'BOQ Templates', href: '/resources/boq-templates' },
    { label: 'Cost Calculator', href: '/resources/cost-calculator' },
    { label: 'FAQ', href: '/resources/faq' },
    { label: 'Help Center', href: '/resources/help' },
  ],
  primary: [
    { label: 'Platform', dropdown: 'platform' as const },
    { label: 'Solutions', dropdown: 'solutions' as const },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Resources', dropdown: 'resources' as const },
    { label: 'Contact', href: '/contact' },
  ],
}

export const HERO = {
  pretitle: 'INDIA · TIER 2 / TIER 3 CITIES',
  headline: 'India’s end-to-end construction intelligence platform.',
  headlineWords: ['India’s', 'end-to-end', 'construction', 'intelligence', 'platform.'],
  sub: 'From blueprint to handover, one platform for packages, materials, machinery, finance, estimation, and site monitoring.',
  primaryCta: { label: 'Get Started Free', href: '/signup' },
  secondaryCta: { label: 'Watch Demo', href: '#demo' },
  trustNote: 'Serving Bihar, UP, Jharkhand, MP — launching 2026',
  stats: [
    { value: '₹20L Cr', label: 'India’s construction market' },
    { value: '64%', label: 'Tier 2/3 share of home loans' },
    { value: '6.9%', label: 'CAGR 2025–2031' },
  ],
}

export const PROBLEMS = [
  { title: 'Cost overruns', stat: 70, suffix: '%', desc: 'of projects exceed budget. Manual estimation and contractor padding eat lakhs.' },
  { title: 'Fake billing', stat: 3000, prefix: '₹', suffix: 'Cr+', desc: 'lost annually to inflated BOQs and duplicate material claims.' },
  { title: 'Middlemen markup', stat: 40, suffix: '%', desc: 'inflation in material cost from a 5–7 layer distribution chain.' },
  { title: 'No finance access', stat: 60, suffix: '%', desc: 'of homeowners can’t access construction loans — no structured cost data.' },
  { title: 'Labour chaos', stat: 30, suffix: '%', desc: 'of project delays trace to attendance fraud, wage disputes, skill mismatch.' },
  { title: 'Zero visibility', stat: 0, suffix: '', desc: 'real-time view of site progress. Owners decide blind. Contractors run unchecked.' },
]

export const PLATFORM_MODULES = [
  {
    id: 'packages',
    phase: 'PHASE 01',
    title: 'Construction Packages',
    desc: 'Turnkey packages for residential, hospital, hotel, school, and industrial projects. Pick what you want to build — the BOQ, contractor, timeline, and milestone payments come configured.',
    accent: '#F59E0B',
    href: '/platform/construction-packages',
  },
  {
    id: 'material',
    phase: 'PHASE 02',
    title: 'Material Supply',
    desc: 'Direct manufacturer-to-site procurement. Cement, steel, aggregates, bricks, fittings — ordered against your BOQ, tracked to delivery, quality-verified at receipt.',
    accent: '#3B82F6',
    href: '/platform/material-supply',
  },
  {
    id: 'machinery',
    phase: 'PHASE 03',
    title: 'Machinery Rental',
    desc: 'Geotagged marketplace for JCBs, excavators, mixers, cranes. Booking, GPS-tracked usage logs, escrow deposits, and condition reports built in.',
    accent: '#F59E0B',
    href: '/platform/machinery-rental',
  },
  {
    id: 'finance',
    phase: 'PHASE 04',
    title: 'Construction Finance',
    desc: 'BOQ-linked construction loans with milestone-based disbursement. Your itemized cost data becomes the project proposal banks have never had for Tier 2/3 borrowers.',
    accent: '#22C55E',
    href: '/platform/construction-finance',
  },
  {
    id: 'ai',
    phase: 'PHASE 05',
    title: 'AI Estimation & Tender',
    desc: 'Upload drawings — AI extracts quantities, applies CPWD/PWD rates, generates BOQs and NIT documents. Audit contractor quotes against verified market rates.',
    accent: '#3B82F6',
    href: '/platform/ai-estimation',
  },
  {
    id: 'site',
    phase: 'PHASE 06',
    title: 'Labour & Site AI',
    desc: 'Offline-first attendance with photo, GPS, and biometric verification. AI photo analysis of site progress — zone-level completion percentages, anomaly detection, weekly reports.',
    accent: '#EF4444',
    href: '/platform/labour-site-ai',
  },
]

export const HOW_IT_WORKS = [
  {
    n: '01',
    title: 'Tell us what you want to build',
    desc: 'Building type, location, area, floors, key requirements. Two minutes of input.',
  },
  {
    n: '02',
    title: 'Get your BOQ, materials, contractor, and finance',
    desc: 'Structured cost breakdown. Verified suppliers. Matched contractors. Loan pre-qualification.',
  },
  {
    n: '03',
    title: 'Track progress and pay by milestone',
    desc: 'Photo-verified milestones unlock payment tranches. AI progress reports every week.',
  },
]

export const MARKET = {
  pretitle: 'MARKET OPPORTUNITY',
  headline: 'A ₹20 lakh crore market with no integrated platform.',
  sub: 'India’s construction industry runs on the same manual processes it used 30 years ago. Tier 2/3 cities drive 64% of home loan volumes — and remain almost entirely unserved.',
  highlightedStates: ['Bihar', 'Uttar Pradesh', 'Jharkhand', 'Madhya Pradesh'],
  tamSamSom: [
    { label: 'TAM', value: '₹20L Cr', desc: 'Total addressable construction market' },
    { label: 'SAM', value: '₹3.2L Cr', desc: 'Serviceable across target sectors and geographies' },
    { label: 'SOM', value: '₹4,800 Cr', desc: 'Realistically capturable in first 4–5 years' },
  ],
  segments: [
    { label: 'Residential annual spend', value: '₹8.5L Cr' },
    { label: 'Government & institutional', value: '₹4.2L Cr' },
    { label: 'Commercial & hospitality', value: '₹2.1L Cr' },
    { label: 'Material market (online)', value: '₹1.4L Cr' },
  ],
}

export const AUDIENCES = [
  { id: 'homeowners', label: 'Homeowners', value: 'Know the real cost. Pick the right contractor. Track every rupee, every brick.', href: '/solutions/homeowners' },
  { id: 'contractors', label: 'Contractors', value: 'Win more bids with accurate BOQs. Source materials at fair rates. Manage labour without WhatsApp chaos.', href: '/solutions/contractors' },
  { id: 'suppliers', label: 'Material Suppliers', value: 'Reach buyers beyond your district. Demand visibility from active project pipelines.', href: '/solutions/suppliers' },
  { id: 'equipment-owners', label: 'Equipment Owners', value: 'Reduce idle time. GPS-tracked usage logs. Disputes settled with data.', href: '/solutions/equipment-owners' },
  { id: 'banks', label: 'Banks & NBFCs', value: 'BOQ-linked applications. Milestone verification. Real-time project dashboards.', href: '/solutions/banks' },
  { id: 'architects', label: 'Architects', value: 'Drawings to BOQ in minutes. Rate database from CPWD/PWD. Audit contractor quotes.', href: '/solutions/architects' },
]

export const COMPETITIVE = {
  pretitle: 'COMPETITIVE EDGE',
  headline: 'Other platforms solve one step. ConstructIQ owns the loop.',
  rows: [
    { feature: 'Construction packages (all sectors)', ciq: true, others: { 'Infra.Market': false, 'Brick&Bolt': 'partial', 'BuildSupply': false, 'Generic apps': false } },
    { feature: 'Direct material supply', ciq: true, others: { 'Infra.Market': 'metro-only', 'Brick&Bolt': false, 'BuildSupply': true, 'Generic apps': false } },
    { feature: 'Machinery rental marketplace', ciq: true, others: { 'Infra.Market': false, 'Brick&Bolt': false, 'BuildSupply': false, 'Generic apps': 'partial' } },
    { feature: 'BOQ-linked bank loans', ciq: true, others: { 'Infra.Market': false, 'Brick&Bolt': false, 'BuildSupply': false, 'Generic apps': false } },
    { feature: 'AI BOQ + tender generation', ciq: true, others: { 'Infra.Market': false, 'Brick&Bolt': false, 'BuildSupply': false, 'Generic apps': false } },
    { feature: 'Offline labour attendance', ciq: true, others: { 'Infra.Market': false, 'Brick&Bolt': false, 'BuildSupply': false, 'Generic apps': 'partial' } },
    { feature: 'AI site progress monitoring', ciq: true, others: { 'Infra.Market': false, 'Brick&Bolt': false, 'BuildSupply': false, 'Generic apps': false } },
    { feature: 'Tier 2/3 city focus', ciq: true, others: { 'Infra.Market': false, 'Brick&Bolt': false, 'BuildSupply': 'partial', 'Generic apps': true } },
    { feature: 'Hindi language support', ciq: true, others: { 'Infra.Market': false, 'Brick&Bolt': false, 'BuildSupply': false, 'Generic apps': 'partial' } },
  ],
}

export const CTA_STRIP = {
  pretitle: 'BUILD SMARTER. BUILD ONCE.',
  headline: 'Ready to bring your project on-platform?',
  sub: 'Join the Bihar pilot. Free during beta. Onboarding takes under an hour.',
  primary: { label: 'Get Started', href: '/signup' },
  secondary: { label: 'Talk on WhatsApp', href: 'https://wa.me/919999999999?text=Hi%20ConstructIQ%2C%20I%20am%20interested%20in%20learning%20more%20about%20the%20platform' },
}
