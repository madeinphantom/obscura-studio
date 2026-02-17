'use client'

import { Canvas } from '@react-three/fiber'
import TesseractScene from './TesseractScene'

interface ObscuraBrandLogoProps {
  label?: string
  theme?: 'light' | 'dark'
  size?: 'hero' | 'header'
}

export default function ObscuraBrandLogo({ 
  label = "obscura xyz", 
  theme = 'light',
  size = 'hero'
}: ObscuraBrandLogoProps) {
  
  const isHeader = size === 'header'
  // Restore V2 exact color logic: Light Blue on Dark BG, Black on White BG
  const textColor = theme === 'light' ? '#b7d1ea' : '#000000'
  
  // Dimensions based on size - UPGRADED for better visibility
  const iconDim = isHeader ? 60 : 150
  const fontSize = isHeader ? '1.5rem' : '4rem'
  const gap = isHeader ? -8 : -20
  const letterSpacing = isHeader ? '-0.01em' : '-0.02em'

  return (
    <div 
      className="logo-container" 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative',
        pointerEvents: 'none'
      }}
    >
      <div 
        className="tesseract-wrapper"
        style={{
          width: iconDim,
          height: iconDim,
          pointerEvents: 'auto',
          marginRight: gap,
          marginTop: isHeader ? -1 : -2
        }}
      >
        <Canvas 
          gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
          dpr={[1, 2]}
          camera={{ 
            position: [0.664, 0.279, 3.935], 
            rotation: [-0.0722, 0.1669, 0.0122],
            fov: 75 
          }}
        >
          <TesseractScene colorTheme={theme} />
        </Canvas>
      </div>
      <h1 
        className="logo-text"
        style={{ 
          color: textColor,
          fontFamily: 'var(--font-fraunces), serif',
          fontSize: fontSize,
          fontWeight: 300,
          letterSpacing: letterSpacing,
          textTransform: 'lowercase',
          userSelect: 'none',
          whiteSpace: 'nowrap'
        }}
      >
        {label}
      </h1>
    </div>
  )
}
