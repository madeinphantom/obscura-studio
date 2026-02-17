import { Canvas, useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import TesseractScene from './TesseractScene'
import '../App.css'

// ... imports

function ScreenshotHandler({ theme }: { theme: 'light' | 'dark' }) {
  const { gl, scene, camera } = useThree()

  useEffect(() => {
    const handleAction = async (e: MouseEvent | KeyboardEvent) => {
      if (
        (e.type === 'keydown' && (e as KeyboardEvent).key.toLowerCase() === 'p') ||
        (e.type === 'click' && e.target === gl.domElement)
      ) {
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

        // Set dimensions
        ctx.font = `300 ${fontSize}px 'Fraunces'`
        const textLabel = "obscura xyz"
        const textMetrics = ctx.measureText(textLabel)
        const textWidth = textMetrics.width
        
        tempCanvas.width = iconSize + textWidth + gap + (50 * scale)
        tempCanvas.height = iconSize
        
        // Draw
        ctx.clearRect(0, 0, tempCanvas.width, tempCanvas.height)
        
        const iconY = (tempCanvas.height - iconSize) / 2
        ctx.drawImage(img, 0, iconY, iconSize, iconSize)
        
        // Text Color based on Theme
        ctx.fillStyle = theme === 'light' ? "#ffffff" : "#000000"
        ctx.font = `300 ${fontSize}px 'Fraunces'`
        ctx.textBaseline = 'middle'
        
        const textX = iconSize + gap
        const textY = tempCanvas.height / 2 - (4 * scale)
        
        ctx.fillText(textLabel, textX, textY)

        const data = tempCanvas.toDataURL('image/png', 1.0)
        const link = document.createElement('a')
        // Filename includes theme
        link.setAttribute('download', `obscura-logo-${theme}-${Date.now()}.png`)
        link.setAttribute('href', data)
        link.click()

        console.log(`Full logo (${theme}) exported!`)
        document.body.style.cursor = original
      }
    }

    window.addEventListener('keydown', handleAction)
    gl.domElement.addEventListener('click', handleAction)
    
    return () => {
      window.removeEventListener('keydown', handleAction)
      gl.domElement.removeEventListener('click', handleAction)
    }
  }, [gl, scene, camera, theme]) // Re-run effect if theme changes

  return null
}

interface ObscuraBrandLogoProps {
  label?: string;
  theme?: 'light' | 'dark'; // Add theme prop
}

export default function ObscuraBrandLogo({ 
  label = "Obscura xyz", 
  theme = 'light' 
}: ObscuraBrandLogoProps) {
  
  // Text color based on theme: Light Blue on Black BG, Black on White BG
  const textColor = theme === 'light' ? '#b7d1ea' : '#000000'

  return (
    <div className="logo-container">
      <div className="tesseract-wrapper">
        <Canvas 
          gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
          pixelRatio={window.devicePixelRatio * 2}
          camera={{ 
            position: [0.664, 0.279, 3.935], 
            rotation: [-0.0722, 0.1669, 0.0122],
            fov: 75 
          }}
        >
          <ScreenshotHandler theme={theme} />
          <TesseractScene colorTheme={theme} />
        </Canvas>
      </div>
      <h1 
        className="logo-text"
        style={{ color: textColor }} // Apply text color
      >
        {label}
      </h1>
    </div>
  )
}
