import { Canvas } from '@react-three/fiber'
import TesseractScene from './TesseractScene'
import '../App.css'

interface ObscuraBrandLogoProps {
  label?: string;
  isItalic?: boolean;
}

export default function ObscuraBrandLogo({ label = "Obscura xyz", isItalic = true }: ObscuraBrandLogoProps) {
  return (
    <div className="logo-container">
      <div className="tesseract-wrapper">
        <Canvas camera={{ position: [0, 0, 4], fov: 75 }}>
          <TesseractScene />
        </Canvas>
      </div>
      <h1 className={`logo-text ${isItalic ? 'italic' : ''}`}>
        {label}
      </h1>
    </div>
  )
}
