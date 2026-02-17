import ObscuraBrandLogo from './components/ObscuraBrandLogo'
import './App.css'

function App() {
  return (
    <main style={{ 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr', 
      gridTemplateRows: '1fr 1fr',
      height: '100vh', 
      width: '100vw',
      background: '#111' 
    }}>
      {/* Short instructions */}
      <div style={{ 
        position: 'fixed', 
        top: 20, 
        left: '50%', 
        transform: 'translateX(-50%)', 
        zIndex: 100,
        background: 'rgba(0,0,0,0.8)',
        color: '#fff',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '12px',
        pointerEvents: 'none',
        border: '1px solid #333'
      }}>
        Press <b>'P'</b> for Full Logo | Press <b>'I'</b> for Isolated Icon
      </div>

      {/* Row 1: Full Logos */}
      <div style={{ background: '#000000', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', border: '1px solid #222' }}>
        <ObscuraBrandLogo theme="light" />
        <div style={{ position: 'absolute', bottom: 10, left: 10, color: '#444', fontSize: '10px' }}>Light Full (Black BG)</div>
      </div>
      
      <div style={{ background: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', border: '1px solid #eee' }}>
         <ObscuraBrandLogo theme="dark" />
         <div style={{ position: 'absolute', bottom: 10, left: 10, color: '#ccc', fontSize: '10px' }}>Dark Full (White BG)</div>
      </div>

      {/* Row 2: Isolated Icons */}
      <div style={{ background: '#000000', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', border: '1px solid #222' }}>
        <ObscuraBrandLogo theme="light" showText={false} />
        <div style={{ position: 'absolute', bottom: 10, left: 10, color: '#444', fontSize: '10px' }}>Light Icon Only</div>
      </div>
      
      <div style={{ background: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', border: '1px solid #eee' }}>
         <ObscuraBrandLogo theme="dark" showText={false} />
         <div style={{ position: 'absolute', bottom: 10, left: 10, color: '#ccc', fontSize: '10px' }}>Dark Icon Only</div>
      </div>
    </main>
  )
}

export default App
