# Animation Patterns for ConstructIQ

## GSAP Setup (every file that uses GSAP)
```typescript
'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
```
Always use the useGSAP hook from @gsap/react.

## Easing Reference
- Content entrances: "power2.out"
- Hero headline: "power3.out"
- SVG line draws: "power2.inOut"
- Pinned scrub: "none"
- Bounce/pop effects: "back.out(1.7)"
- NEVER use: bounce, elastic

## Reduced Motion
Always wrap GSAP code in a reduced-motion check.
