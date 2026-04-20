import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function GoldOrb() {
  const meshRef = useRef()
  useFrame(({ clock }) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.25
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.15
  })
  return (
    <Sphere ref={meshRef} args={[1.2, 128, 128]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#C8A96E"
        metalness={0.9}
        roughness={0.05}
        distort={0.18}
        speed={1.5}
        envMapIntensity={2.5}
      />
    </Sphere>
  )
}

function GoldRing({ radius, speed, tiltX = 0, tiltZ = 0 }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.y = clock.getElapsedTime() * speed
  })
  return (
    <mesh ref={ref} rotation={[tiltX, 0, tiltZ]}>
      <torusGeometry args={[radius, 0.006, 16, 200]} />
      <meshBasicMaterial color="#C8A96E" transparent opacity={0.35} />
    </mesh>
  )
}

function Particles({ count = 300 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 2.2 + Math.random() * 2.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.04
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.022} color="#E8C97A" transparent opacity={0.8} sizeAttenuation />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} color="#3050ff" />
      <pointLight position={[4, 4, 4]} intensity={3} color="#C8A96E" />
      <pointLight position={[-4, -2, 2]} intensity={1} color="#ffffff" />
      <pointLight position={[0, -4, -4]} intensity={0.5} color="#4060aa" />
      <GoldOrb />
      <GoldRing radius={2.0} speed={0.12} tiltX={0.5} tiltZ={0.2} />
      <GoldRing radius={2.6} speed={-0.08} tiltX={1.1} tiltZ={0.5} />
      <GoldRing radius={3.2} speed={0.06} tiltX={0.2} tiltZ={1.2} />
      <Particles count={350} />
    </>
  )
}

export default function ThreeDScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 42 }}
      dpr={[1, 2]}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
