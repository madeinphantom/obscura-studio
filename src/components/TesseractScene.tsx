import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { Edges } from '@react-three/drei'

export default function TesseractScene({ colorTheme = 'light' }: { colorTheme?: 'light' | 'dark' }) {
  const groupRef = useRef<THREE.Group>(null)

  // Colors
  const isDark = colorTheme === 'dark' // Dark Mode = Dark Lines on Light BG
  
  const outerSize = 2.2
  const innerSize = 1.1
  
  // Light Theme (Default): Cyan/Blue on Black BG
  // Dark Theme: Navy/Black on White BG
  const outerColor = isDark ? "#003366" : "#00aaff"
  const innerColor = isDark ? "#004488" : "#b7d1ea"
  const edgeColor = isDark ? "#000000" : "#ffffff"

  // Connector lines geometry
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
        points.push(outerCorners[i])
        points.push(innerCorners[i])
    }
    
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [])

  return (
    <group 
      ref={groupRef} 
      rotation={[Math.PI / 8, Math.PI / 4, 0]} // Hero Angle - Locked
    >
      {/* Outer Cube */}
      <mesh>
        <boxGeometry args={[outerSize, outerSize, outerSize]} />
        <meshBasicMaterial 
          color={outerColor} 
          transparent 
          opacity={0.1} 
          side={THREE.DoubleSide} 
          depthWrite={false} 
        />
        <Edges color={edgeColor} transparent opacity={0.5} threshold={15} /> 
      </mesh>

      {/* Inner Cube */}
      <mesh>
        <boxGeometry args={[innerSize, innerSize, innerSize]} />
        <meshBasicMaterial 
          color={innerColor} 
          transparent 
          opacity={0.15} 
          side={THREE.DoubleSide} 
          depthWrite={false} 
        />
        <Edges color={edgeColor} transparent opacity={0.8} threshold={15} />
      </mesh>

      {/* Connectors */}
      <lineSegments geometry={connectorGeometry}>
        <lineBasicMaterial color={edgeColor} transparent opacity={0.3} linewidth={1} />
      </lineSegments>
    </group>
  )
}
