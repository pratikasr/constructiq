# 3D Scene Rules for ConstructIQ

## Every 3D Component Must:
1. Be in components/3d/
2. Be dynamically imported with ssr: false
3. Wrapped in Suspense with skeleton fallback
4. Have mobile fallback (below lg)
5. Include postprocessing (Bloom + Vignette) on desktop only

## Material Palette
- Concrete: MeshStandardMaterial({ color: '#E5E5E5', roughness: 0.7, metalness: 0.3 })
- Steel: MeshStandardMaterial({ color: '#71717A', roughness: 0.2, metalness: 0.8 })
- Amber: MeshStandardMaterial({ color: '#F59E0B', roughness: 0.4, metalness: 0.5 })
- Blueprint edges: <Edges color="#3B82F6" threshold={15} />
