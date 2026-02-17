import ObscuraBrandLogo from './components/ObscuraBrandLogo'
import './App.css'

function App() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw' }}>
      {/* Light Theme (Legacy/Default) */}
      <div style={{ flex: 1, background: '#000000', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <ObscuraBrandLogo theme="light" />
        <div style={{ position: 'absolute', bottom: 10, right: 10, color: '#333', fontSize: '10px' }}>Light Theme</div>
      </div>
      
      {/* Dark Theme (New) */}
      <div style={{ flex: 1, background: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
         <ObscuraBrandLogo theme="dark" />
         <div style={{ position: 'absolute', bottom: 10, right: 10, color: '#ccc', fontSize: '10px' }}>Dark Theme</div>
      </div>
    </main>
  )
}

export default App
