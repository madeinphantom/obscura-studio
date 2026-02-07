import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, MeshTransmissionMaterial } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function GlassCube() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime()
    if (!meshRef.current) return

    // Gentle float
    meshRef.current.position.y = Math.sin(t * 0.6) * 0.18

    // Base idle rotation (slow, deliberate)
    const baseRotX = 0.6 + Math.sin(t * 0.25) * 0.25
    const baseRotY = 0.9 + Math.cos(t * 0.3) * 0.3

    // Mouse-driven tilt for "alive" feel
    const mouseTiltX = mouse.y * 0.4
    const mouseTiltY = mouse.x * 0.6

    const targetX = baseRotX + mouseTiltX
    const targetY = baseRotY + mouseTiltY

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetX,
      0.08,
    )
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetY,
      0.08,
    )
  })

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <MeshTransmissionMaterial
        samples={24}
        resolution={512}
        thickness={2}
        chromaticAberration={1}
        anisotropicBlur={0.6}
        distortion={0.18}
        distortionScale={0.6}
        temporalDistortion={0.25}
        roughness={0.02}
        ior={1.6}
        transmission={1}
        metalness={0}
        clearcoat={1}
        clearcoatRoughness={0.05}
        attenuationColor="#ffc892"
        attenuationDistance={0.7}
        color="#ffffff"
        background={new THREE.Color('#020207')}
      />
    </mesh>
  )
}

export function TesseractScene() {
  return (
    <div className="tesseract-wrapper">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 35 }}
        shadows
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#000000']} />

        <ambientLight intensity={0.08} />
        <spotLight
          intensity={3.2}
          angle={0.6}
          penumbra={0.4}
          position={[4, 6, 6]}
          color="#ffffff"
          castShadow
        />
        <pointLight intensity={2.4} position={[-3, -2, -4]} color="#4fd1ff" />
        <pointLight intensity={2.4} position={[3, 1, 4]} color="#ff9b4f" />

        <Environment
          files={null}
          preset="studio"
          background={false}
        />

        <GlassCube />
      </Canvas>
    </div>
  )
}

export default TesseractScene

