import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function ToothMesh() {
  const meshRef = useRef()
  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.003
  })
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <capsuleGeometry args={[0.7, 1.2, 8, 32]} />
        <meshPhysicalMaterial
          color="#C8A96E"
          metalness={0.3}
          roughness={0.1}
          transmission={0.2}
          thickness={0.5}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  )
}

function GoldParticles({ count = 200 }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 2.5 + Math.random() * 2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    return positions
  }, [count])

  const geoRef = useRef()
  useFrame(({ clock }) => {
    if (geoRef.current) geoRef.current.rotation.y = clock.getElapsedTime() * 0.05
  })

  return (
    <points ref={geoRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#E8C97A" size={0.025} sizeAttenuation transparent opacity={0.7} />
    </points>
  )
}

function RingDecor() {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.1
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2
    }
  })
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.2, 0.008, 16, 120]} />
      <meshBasicMaterial color="#C8A96E" transparent opacity={0.25} />
    </mesh>
  )
}

export default function ThreeDScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.4} color="#6080ff" />
      <pointLight position={[3, 3, 3]} intensity={2} color="#C8A96E" />
      <pointLight position={[-3, -2, -3]} intensity={0.5} color="#ffffff" />
      <ToothMesh />
      <GoldParticles />
      <RingDecor />
    </Canvas>
  )
}
