'use client'

import { Canvas, useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import TesseractScene from './TesseractScene'
import '../App.css'

// ... imports

function ScreenshotHandler({ theme, showText }: { theme: 'light' | 'dark', showText: boolean }) {
  const { gl, scene, camera } = useThree()

  useEffect(() => {
    const handleAction = async (e: MouseEvent | KeyboardEvent) => {
      const isIconShortcut = e.type === 'keydown' && (e as KeyboardEvent).key.toLowerCase() === 'i'
      const isFullShortcut = e.type === 'keydown' && (e as KeyboardEvent).key.toLowerCase() === 'p'

      if (isIconShortcut || isFullShortcut) {
        const original = document.body.style.cursor
        document.body.style.cursor = 'wait'

        gl.render(scene, camera)
        const tesseractData = gl.domElement.toDataURL('image/png', 1.0)
        
        const img = new Image()
        img.src = tesseractData
        await new Promise((resolve) => { img.onload = resolve })

        const scale = 4
        const iconSize = 150 * scale
        const fontSize = 64 * scale
        const gap = -20 * scale
        
        const tempCanvas = document.createElement('canvas')
        const ctx = tempCanvas.getContext('2d')
        if (!ctx) return

        if (isIconShortcut) {
          // Icon Only Mode
          tempCanvas.width = iconSize
          tempCanvas.height = iconSize
          ctx.clearRect(0, 0, tempCanvas.width, tempCanvas.height)
          ctx.drawImage(img, 0, 0, iconSize, iconSize)
        } else {
          // Full Logo Mode
          ctx.font = `300 ${fontSize}px 'Fraunces'`
          const textLabel = "obscura xyz"
          const textMetrics = ctx.measureText(textLabel)
          const textWidth = textMetrics.width
          
          tempCanvas.width = iconSize + textWidth + gap + (50 * scale)
          tempCanvas.height = iconSize
          
          ctx.clearRect(0, 0, tempCanvas.width, tempCanvas.height)
          const iconY = (tempCanvas.height - iconSize) / 2
          ctx.drawImage(img, 0, iconY, iconSize, iconSize)
          
          ctx.fillStyle = theme === 'light' ? "#b7d1ea" : "#000000"
          ctx.font = `300 ${fontSize}px 'Fraunces'`
          ctx.textBaseline = 'middle'
          
          const textX = iconSize + gap
          const textY = tempCanvas.height / 2 - (4 * scale)
          ctx.fillText(textLabel, textX, textY)
        }

        const data = tempCanvas.toDataURL('image/png', 1.0)
        const link = document.createElement('a')
        const version = isIconShortcut ? 'icon' : 'full'
        link.setAttribute('download', `obscura-${version}-${theme}-${Date.now()}.png`)
        link.setAttribute('href', data)
        link.click()

        console.log(`${version} logo (${theme}) exported!`)
        document.body.style.cursor = original
      }
    }

    window.addEventListener('keydown', handleAction)

    return () => {
      window.removeEventListener('keydown', handleAction)
    }
  }, [gl, scene, camera, theme, showText])

  return null
}

interface ObscuraBrandLogoProps {
  label?: string;
  theme?: 'light' | 'dark';
  showText?: boolean;
  size?: 'hero' | 'header';
}

export default function ObscuraBrandLogo({ 
  label = "Obscura xyz", 
  theme = 'light',
  showText = true,
  size = 'hero'
}: ObscuraBrandLogoProps) {
  const isHeader = size === 'header';
  
  // Text color based on theme
  const textColor = theme === 'light' ? '#b7d1ea' : '#000000'

  // Refined dimensions for mobile vs desktop
  const iconSize = isHeader ? 'clamp(40px, 8vw, 60px)' : 'clamp(100px, 20vw, 150px)';
  const fontSize = isHeader ? 'clamp(1.2rem, 3.5vw, 1.5rem)' : 'clamp(2.5rem, 8vw, 4rem)';
  const gap = isHeader ? 'clamp(-8px, -1.5vw, -10px)' : 'clamp(-15px, -3vw, -20px)';
  const marginTop = isHeader ? '-1px' : '-2px';

  return (
    <div 
      className="logo-container"
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <div 
        className="tesseract-wrapper"
        style={{
          width: iconSize,
          height: iconSize,
          marginRight: gap,
          marginTop: marginTop,
          flexShrink: 0
        }}
      >
        <Canvas 
          gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
          dpr={typeof window !== 'undefined' ? window.devicePixelRatio * 2 : 2}
          camera={{ 
            position: [0.664, 0.279, 3.935], 
            rotation: [-0.0722, 0.1669, 0.0122],
            fov: 75 
          }}
        >
          <ScreenshotHandler theme={theme} showText={showText} />
          <TesseractScene colorTheme={theme} />
        </Canvas>
      </div>
      {showText && (
        <h1 
          className="logo-text"
          style={{ 
            color: textColor,
            fontSize: fontSize,
            marginTop: isHeader ? '1px' : '3px'
          }}
        >
          {label}
        </h1>
      )}
    </div>
  )
}
