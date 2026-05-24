'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Edges, PerspectiveCamera, Line } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

// ── Camera always aims at scene center ──────────────────────────────────────
function CameraAim() {
  useFrame(({ camera }) => {
    camera.lookAt(0, 1.8, 0)
  })
  return null
}

// ── Pulsing data node (glowing amber sphere) ─────────────────────────────────
function DataNode({ pos, phase }: { pos: [number, number, number]; phase: number }) {
  const ref = useRef<THREE.Mesh>(null!)
  const baseY = pos[1]
  useFrame(({ clock }) => {
    ref.current.position.y = baseY + Math.sin(clock.elapsedTime * 0.85 + phase) * 0.18
  })
  return (
    <mesh ref={ref} position={[pos[0], baseY, pos[2]]}>
      <sphereGeometry args={[0.09, 12, 12]} />
      <meshStandardMaterial
        color="#F59E0B"
        emissive="#F59E0B"
        emissiveIntensity={2.2}
        roughness={0.1}
        metalness={0.6}
      />
    </mesh>
  )
}

// ── Finished building (dark layered floors + blueprint edges) ─────────────────
function SolidBuilding({
  x, z, w, d, h,
}: {
  x: number; z: number; w: number; d: number; h: number
}) {
  const floors = Math.max(2, Math.round(h / 1.5))
  const fh = h / floors
  return (
    <group position={[x, 0, z]}>
      {Array.from({ length: floors }, (_, i) => (
        <mesh key={i} position={[0, i * fh + fh / 2, 0]} castShadow receiveShadow>
          <boxGeometry args={[w, fh * 0.93, d]} />
          <meshStandardMaterial
            color={i === floors - 1 ? '#1E3A5F' : i % 2 === 0 ? '#0F2040' : '#132847'}
            roughness={0.75}
            metalness={0.15}
          />
          <Edges color="#3B82F6" threshold={15} />
        </mesh>
      ))}
      {/* Roof cap */}
      <mesh position={[0, h + 0.045, 0]} castShadow>
        <boxGeometry args={[w * 1.06, 0.07, d * 1.06]} />
        <meshStandardMaterial color="#1E3A5F" roughness={0.7} />
        <Edges color="#3B82F6" threshold={15} />
      </mesh>
    </group>
  )
}

// ── Under-construction building (solid base + wireframe skeleton + rebar) ─────
function ConstructionBuilding({
  x, z, w, d, h, progress = 0.6,
}: {
  x: number; z: number; w: number; d: number; h: number; progress?: number
}) {
  const doneH = h * progress
  const wipH = h * (1 - progress)
  const corners: [number, number][] = [
    [-w / 2 + 0.1, -d / 2 + 0.1],
    [w / 2 - 0.1, -d / 2 + 0.1],
    [-w / 2 + 0.1, d / 2 - 0.1],
    [w / 2 - 0.1, d / 2 - 0.1],
  ]
  return (
    <group position={[x, 0, z]}>
      {/* Completed floors */}
      <mesh position={[0, doneH / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[w, doneH, d]} />
        <meshStandardMaterial color="#0F2040" roughness={0.8} metalness={0.1} />
        <Edges color="#3B82F6" threshold={15} />
      </mesh>
      {/* Top slab */}
      <mesh position={[0, doneH + 0.045, 0]} castShadow>
        <boxGeometry args={[w * 1.05, 0.08, d * 1.05]} />
        <meshStandardMaterial color="#1a2f4a" roughness={0.7} />
        <Edges color="#3B82F6" threshold={15} />
      </mesh>
      {/* Wireframe skeleton above */}
      <mesh position={[0, doneH + wipH / 2, 0]}>
        <boxGeometry args={[w, wipH, d]} />
        <meshStandardMaterial color="#3B82F6" wireframe transparent opacity={0.28} />
      </mesh>
      {/* Rebar stubs at corners */}
      {corners.map(([rx, rz], i) => (
        <mesh key={i} position={[rx, doneH + 0.32, rz]} castShadow>
          <cylinderGeometry args={[0.022, 0.022, 0.65, 4]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.4} />
        </mesh>
      ))}
    </group>
  )
}

// ── Blueprint-only building (pure wireframe — planned structure) ──────────────
function BlueprintBuilding({
  x, z, w, d, h,
}: {
  x: number; z: number; w: number; d: number; h: number
}) {
  return (
    <group position={[x, 0, z]}>
      <mesh position={[0, h / 2, 0]}>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial color="#3B82F6" wireframe transparent opacity={0.22} />
      </mesh>
      {/* Foundation */}
      <mesh position={[0, 0.045, 0]}>
        <boxGeometry args={[w, 0.09, d]} />
        <meshStandardMaterial color="#1E3A5F" roughness={0.9} />
        <Edges color="#3B82F6" threshold={15} />
      </mesh>
    </group>
  )
}

// ── Tower crane ───────────────────────────────────────────────────────────────
function CraneModel({ x, z, h }: { x: number; z: number; h: number }) {
  return (
    <group position={[x, 0, z]}>
      {/* Mast */}
      <mesh position={[0, h / 2, 0]} castShadow>
        <cylinderGeometry args={[0.07, 0.07, h, 6]} />
        <meshStandardMaterial color="#F59E0B" roughness={0.4} metalness={0.5} emissive="#F59E0B" emissiveIntensity={0.1} />
      </mesh>
      {/* Jib arm */}
      <mesh position={[-1.1, h, 0]} castShadow>
        <boxGeometry args={[2.4, 0.07, 0.07]} />
        <meshStandardMaterial color="#F59E0B" roughness={0.4} metalness={0.5} />
      </mesh>
      {/* Counter jib */}
      <mesh position={[0.6, h, 0]} castShadow>
        <boxGeometry args={[0.8, 0.06, 0.06]} />
        <meshStandardMaterial color="#F59E0B" roughness={0.4} metalness={0.5} />
      </mesh>
      {/* Hoist cable */}
      <mesh position={[-1.8, h - 0.7, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 1.4, 4]} />
        <meshStandardMaterial color="#475569" />
      </mesh>
      {/* Hook block */}
      <mesh position={[-1.8, h - 1.45, 0]} castShadow>
        <boxGeometry args={[0.18, 0.1, 0.14]} />
        <meshStandardMaterial color="#94A3B8" roughness={0.5} metalness={0.7} />
      </mesh>
    </group>
  )
}

// ── Grid helper with transparency ─────────────────────────────────────────────
function BlueprintGrid() {
  const obj = useMemo(() => {
    const g = new THREE.GridHelper(20, 20, '#1E3A5F', '#1E3A5F')
    const mat = Array.isArray(g.material)
      ? (g.material[0] as THREE.LineBasicMaterial)
      : (g.material as THREE.LineBasicMaterial)
    mat.transparent = true
    mat.opacity = 0.2
    return g
  }, [])
  return <primitive object={obj} position={[0, 0.01, 0]} />
}

// ── Connection lines between data nodes ───────────────────────────────────────
const NODE_POSITIONS: [number, number, number][] = [
  [0, 5.6, 0],
  [2.6, 4.3, 0.4],
  [-2.4, 3.9, 0.2],
]

function DataConnections() {
  const pairs = useMemo(() => {
    const result: [[number, number, number], [number, number, number]][] = []
    for (let i = 0; i < NODE_POSITIONS.length; i++) {
      for (let j = i + 1; j < NODE_POSITIONS.length; j++) {
        result.push([NODE_POSITIONS[i], NODE_POSITIONS[j]])
      }
    }
    return result
  }, [])

  return (
    <>
      {pairs.map(([a, b], i) => (
        <Line
          key={i}
          points={[a, b]}
          color="#F59E0B"
          lineWidth={0.6}
          opacity={0.22}
          transparent
        />
      ))}
    </>
  )
}

// ── Main city scene ───────────────────────────────────────────────────────────
function CityScene() {
  const groupRef = useRef<THREE.Group>(null!)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame(() => {
    const g = groupRef.current
    if (!g) return
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, mouse.current.x * 0.28, 0.035)
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, mouse.current.y * 0.07, 0.035)
  })

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[24, 24]} />
        <meshStandardMaterial color="#070E1A" roughness={1} />
      </mesh>
      <BlueprintGrid />

      {/* Completed buildings */}
      <SolidBuilding x={0}    z={0}    w={1.3} d={1.3} h={4.8} />
      <SolidBuilding x={-2.4} z={0.2}  w={1.0} d={0.9} h={3.0} />
      <SolidBuilding x={1.0}  z={2.6}  w={0.85} d={0.85} h={2.3} />
      <SolidBuilding x={-2.7} z={-1.5} w={0.7}  d={0.7}  h={1.8} />
      <SolidBuilding x={3.8}  z={-0.6} w={0.55} d={0.55} h={1.6} />

      {/* Under construction */}
      <ConstructionBuilding x={2.6}  z={0.4}  w={1.0} d={1.0} h={3.5} progress={0.58} />
      <ConstructionBuilding x={0.4}  z={-2.8} w={0.8} d={0.8} h={2.1} progress={0.42} />

      {/* Blueprint (planned) */}
      <BlueprintBuilding x={-1.0} z={-2.4} w={0.75} d={0.75} h={2.6} />

      {/* Tower crane beside construction building */}
      <CraneModel x={3.9} z={0.4} h={5.6} />

      {/* Floating data nodes */}
      {NODE_POSITIONS.map((pos, i) => (
        <DataNode key={i} pos={pos} phase={i * 2.09} />
      ))}

      {/* Connection lines */}
      <DataConnections />
    </group>
  )
}

// ── Canvas export ─────────────────────────────────────────────────────────────
export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <PerspectiveCamera makeDefault position={[7, 6, 9]} fov={38} near={0.1} far={100} />
      <CameraAim />
      <ambientLight intensity={0.5} />
      <hemisphereLight args={['#1E3A5F', '#0A1628', 0.65]} />
      <directionalLight
        position={[6, 9, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-5, 3, -3]} intensity={0.4} color="#3B82F6" />
      <CityScene />
      {!isMobile && (
        <EffectComposer>
          <Bloom intensity={0.45} luminanceThreshold={0.5} luminanceSmoothing={0.9} mipmapBlur />
          <Vignette offset={0.32} darkness={0.55} eskil={false} />
        </EffectComposer>
      )}
    </Canvas>
  )
}
