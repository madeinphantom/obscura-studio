import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, MeshTransmissionMaterial, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function GlassCube() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime()
    if (!meshRef.current) return

    // Gentle float
    meshRef.current.position.y = Math.sin(t * 0.6) * 0.2

    // Slow rotation
    meshRef.current.rotation.x = t * 0.25
    meshRef.current.rotation.y = t * 0.32

    // Subtle mouse parallax
    const targetRotY = mouse.x * 0.6
    const targetRotX = mouse.y * 0.4
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRotY,
      0.08,
    )
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetRotX,
      0.08,
    )
  })

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[1.4, 1.4, 1.4]} />
      <MeshTransmissionMaterial
        samples={16}
        resolution={256}
        thickness={1.4}
        chromaticAberration={0.6}
        anisotropicBlur={0.2}
        distortion={0.1}
        distortionScale={0.4}
        temporalDistortion={0.2}
        roughness={0.05}
        ior={1.4}
        transmission={1}
        metalness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        attenuationColor="#88c7ff"
        attenuationDistance={0.8}
        color="#ffffff"
        background={new THREE.Color('black')}
      />
    </mesh>
  )
}

function InnerCore() {
  const coreRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (!coreRef.current) return
    coreRef.current.rotation.y = t * 0.6
    coreRef.current.scale.setScalar(0.4 + Math.sin(t * 2.5) * 0.05)
  })

  return (
    <mesh ref={coreRef}>
      <octahedronGeometry args={[0.6, 1]} />
      <meshStandardMaterial
        color="#7f5eff"
        emissive="#7f5eff"
        emissiveIntensity={2.4}
        metalness={0.8}
        roughness={0.15}
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
        <color attach="background" args={['#02030a']} />

        <ambientLight intensity={0.15} />
        <directionalLight
          intensity={2}
          position={[4, 6, 8]}
          castShadow
        />
        <pointLight intensity={3} position={[-4, -2, -6]} color="#4fd1ff" />
        <pointLight intensity={3} position={[4, 2, 6]} color="#ff6ad5" />

        <Environment
          files={null}
          preset="studio"
          background={false}
        />

        <group>
          <GlassCube />
          <InnerCore />
        </group>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  )
}

export default TesseractScene

