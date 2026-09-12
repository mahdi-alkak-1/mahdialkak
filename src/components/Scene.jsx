import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import World from './World.jsx'

export default function Scene() {
  return (
    <div className="scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.35, 8], fov: 48, near: 0.1, far: 100 }}
        dpr={[1, 1.65]}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance', toneMapping: THREE.ACESFilmicToneMapping }}
        performance={{ min: 0.55 }}
      >
        <World />
      </Canvas>
    </div>
  )
}
