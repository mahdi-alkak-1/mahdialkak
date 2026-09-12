import { Float, Sparkles, Stars } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function EnergyCore() {
  const group = useRef()
  const shell = useRef()

  useFrame((state, delta) => {
    if (!group.current || !shell.current) return
    group.current.rotation.y += delta * 0.22
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.12
    shell.current.rotation.y -= delta * 0.4
    shell.current.rotation.z += delta * 0.12
  })

  return (
    <group ref={group} position={[1.85, 0.25, 0]}>
      <mesh>
        <icosahedronGeometry args={[1.42, 4]} />
        <meshPhysicalMaterial
          color="#0d2730"
          emissive="#0a4d57"
          emissiveIntensity={1.15}
          roughness={0.16}
          metalness={0.62}
          transmission={0.36}
          thickness={0.8}
          transparent
          opacity={0.84}
        />
      </mesh>
      <mesh ref={shell} scale={1.11}>
        <icosahedronGeometry args={[1.42, 1]} />
        <meshBasicMaterial color="#72f7ff" wireframe transparent opacity={0.2} />
      </mesh>
      <mesh scale={0.45}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#efffff" toneMapped={false} />
      </mesh>
      <pointLight color="#5cecff" intensity={22} distance={13} decay={2} />
      <Orbit radius={2.05} tilt={[1.18, 0.1, 0.2]} speed={0.22} color="#72f7ff" />
      <Orbit radius={2.38} tilt={[0.35, 0.4, 1.22]} speed={-0.14} color="#9b7bff" />
      <Orbit radius={2.75} tilt={[0.9, 1.1, 0.2]} speed={0.08} color="#ffc66d" />
    </group>
  )
}

function Orbit({ radius, tilt, speed, color }) {
  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed
  })
  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, 0.012, 8, 180]} />
      <meshBasicMaterial color={color} transparent opacity={0.55} toneMapped={false} />
    </mesh>
  )
}

function DataShard({ position, rotation, scale = 1, color = '#72f7ff', speed = 1 }) {
  const ref = useRef()
  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.08 * speed
    ref.current.rotation.y += delta * 0.12 * speed
    ref.current.position.y += Math.sin(state.clock.elapsedTime * speed + position[0]) * 0.0008
  })

  return (
    <Float speed={1.2 * speed} rotationIntensity={0.35} floatIntensity={0.6}>
      <group ref={ref} position={position} rotation={rotation} scale={scale}>
        <mesh>
          <boxGeometry args={[1.15, 0.68, 0.16]} />
          <meshStandardMaterial
            color="#08131c"
            emissive={color}
            emissiveIntensity={0.13}
            metalness={0.85}
            roughness={0.28}
          />
        </mesh>
        <mesh scale={[1.04, 1.04, 1.12]}>
          <boxGeometry args={[1.15, 0.68, 0.16]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.32} />
        </mesh>
        <mesh position={[-0.32, 0.1, 0.1]}>
          <boxGeometry args={[0.28, 0.055, 0.02]} />
          <meshBasicMaterial color={color} toneMapped={false} />
        </mesh>
        <mesh position={[-0.18, -0.08, 0.1]}>
          <boxGeometry args={[0.56, 0.025, 0.02]} />
          <meshBasicMaterial color={color} transparent opacity={0.65} />
        </mesh>
      </group>
    </Float>
  )
}

function SignalPillars() {
  const bars = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        x: -6.2 + i * 0.58,
        h: 0.25 + ((i * 13) % 7) * 0.13,
        z: -4.8 - (i % 3) * 0.4,
      })),
    [],
  )

  return bars.map((bar, i) => (
    <mesh key={i} position={[bar.x, -2.35 + bar.h / 2, bar.z]}>
      <boxGeometry args={[0.055, bar.h, 0.055]} />
      <meshBasicMaterial color={i % 5 === 0 ? '#9b7bff' : '#285d6c'} transparent opacity={0.7} />
    </mesh>
  ))
}

function CameraRig() {
  const { camera, pointer } = useThree()
  const target = useMemo(() => new THREE.Vector3(), [])

  useFrame((state, delta) => {
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
    const scroll = window.scrollY / maxScroll
    const px = pointer.x * 0.55
    const py = pointer.y * 0.32

    target.set(px, 0.35 + py - scroll * 0.95, 8 + scroll * 2.0)
    camera.position.lerp(target, 1 - Math.pow(0.001, delta))
    camera.rotation.z = THREE.MathUtils.lerp(camera.rotation.z, -pointer.x * 0.018, 0.045)
    camera.lookAt(0.7 + pointer.x * 0.18, -scroll * 0.45, 0)
    state.scene.rotation.y = THREE.MathUtils.lerp(state.scene.rotation.y, pointer.x * 0.025, 0.025)
  })

  return null
}

export default function World() {
  return (
    <>
      <color attach="background" args={['#05070d']} />
      <fog attach="fog" args={['#05070d', 10, 31]} />
      <ambientLight intensity={0.28} />
      <directionalLight position={[-4, 6, 5]} intensity={1.3} color="#a5dfff" />
      <pointLight position={[-5, 1, 2]} intensity={9} distance={14} color="#7b5cff" />
      <Stars radius={70} depth={38} count={1900} factor={2.2} saturation={0.2} fade speed={0.32} />
      <Sparkles count={85} scale={[15, 8, 13]} size={1.4} speed={0.22} color="#72f7ff" opacity={0.42} />

      <EnergyCore />
      <DataShard position={[-3.1, 1.4, -0.9]} rotation={[0.25, -0.45, -0.1]} color="#72f7ff" />
      <DataShard position={[-2.3, -1.65, -1.8]} rotation={[-0.25, 0.35, 0.15]} color="#9b7bff" scale={0.82} speed={0.72} />
      <DataShard position={[4.8, -1.45, -2.6]} rotation={[0.3, -0.5, 0.25]} color="#ffc66d" scale={0.72} speed={0.9} />
      <DataShard position={[4.65, 2.0, -3.1]} rotation={[0.15, 0.6, -0.2]} color="#72f7ff" scale={0.6} speed={0.62} />

      <gridHelper args={[80, 80, '#153b48', '#0b1820']} position={[0, -2.4, -2]} />
      <SignalPillars />
      <CameraRig />
    </>
  )
}
