import { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Edges } from '@react-three/drei'

export default function TesseractScene() {
  const groupRef = useRef<THREE.Group>(null)
  const [isRotating, setIsRotating] = useState(false)

  useFrame(() => {
    if (groupRef.current && isRotating) {
      groupRef.current.rotation.x += 0.005
      groupRef.current.rotation.y += 0.008
    }
  })

  // Original colors
  const outerSize = 2
  const innerSize = 1
  const outerColor = "#00aaff"
  const innerColor = "#b7d1ea"
  const edgeColor = "#ffffff"

  // Connector lines geometry
  // Connecting corners of inner cube to outer cube
  const connectorGeometry = useMemo(() => {
    const getCorners = (s: number) => {
      const r = s / 2
      return [
        new THREE.Vector3(-r, -r, -r),
        new THREE.Vector3(r, -r, -r),
        new THREE.Vector3(r, r, -r),
        new THREE.Vector3(-r, r, -r),
        new THREE.Vector3(-r, -r, r),
        new THREE.Vector3(r, -r, r),
        new THREE.Vector3(r, r, r),
        new THREE.Vector3(-r, r, r),
      ]
    }

    const outerCorners = getCorners(outerSize)
    const innerCorners = getCorners(innerSize)
    const points: THREE.Vector3[] = []

    for (let i = 0; i < 8; i++) {
        // LineSegments expects pairs of points
        points.push(outerCorners[i])
        points.push(innerCorners[i])
    }
    
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [])

  return (
    <group 
      ref={groupRef} 
      rotation={[Math.PI / 4, Math.PI / 4, 0]}
      onClick={() => setIsRotating(!isRotating)}
      onPointerOver={() => (document.body.style.cursor = 'pointer')}
      onPointerOut={() => (document.body.style.cursor = 'auto')}
    >
      {/* Outer Cube */}
      <mesh>
        <boxGeometry args={[outerSize, outerSize, outerSize]} />
        <meshBasicMaterial 
          color={outerColor} 
          transparent 
          opacity={0.15} 
          side={THREE.DoubleSide} 
          depthWrite={false} 
        />
        <Edges color={edgeColor} transparent opacity={0.8} threshold={15} /> 
      </mesh>

      {/* Inner Cube */}
      <mesh>
        <boxGeometry args={[innerSize, innerSize, innerSize]} />
        <meshBasicMaterial 
          color={innerColor} 
          transparent 
          opacity={0.25} 
          side={THREE.DoubleSide} 
          depthWrite={false} 
        />
        <Edges color={edgeColor} transparent opacity={0.8} threshold={15} />
      </mesh>

      {/* Connectors */}
      <lineSegments geometry={connectorGeometry}>
        <lineBasicMaterial color={edgeColor} transparent opacity={0.8} linewidth={2} />
      </lineSegments>
    </group>
  )
}
