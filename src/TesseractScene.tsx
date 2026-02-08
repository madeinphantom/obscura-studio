import { Canvas, useFrame } from '@react-three/fiber'
<<<<<<< HEAD
import { Environment, MeshTransmissionMaterial, OrbitControls } from '@react-three/drei'
=======
import { Environment, MeshTransmissionMaterial } from '@react-three/drei'
>>>>>>> 9d8547b
import { useRef } from 'react'
import * as THREE from 'three'

function GlassCube() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime()
    if (!meshRef.current) return

    // Gentle float
<<<<<<< HEAD
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
=======
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
>>>>>>> 9d8547b
      0.08,
    )
  })

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
<<<<<<< HEAD
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
=======
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
>>>>>>> 9d8547b
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
<<<<<<< HEAD
        <color attach="background" args={['#02030a']} />

        <ambientLight intensity={0.15} />
        <directionalLight
          intensity={2}
          position={[4, 6, 8]}
          castShadow
        />
        <pointLight intensity={3} position={[-4, -2, -6]} color="#4fd1ff" />
        <pointLight intensity={3} position={[4, 2, 6]} color="#ff6ad5" />
=======
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
>>>>>>> 9d8547b

        <Environment
          files={null}
          preset="studio"
          background={false}
        />

<<<<<<< HEAD
        <group>
          <GlassCube />
          <InnerCore />
        </group>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate={false}
        />
=======
        <GlassCube />
>>>>>>> 9d8547b
      </Canvas>
    </div>
  )
}

export default TesseractScene

