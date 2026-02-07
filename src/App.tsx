import './App.css'
import TesseractScene from './TesseractScene'

function App() {
  return (
    <div className="page">
      <main className="hero">
        <section className="hero-copy">
          <p className="eyebrow">AI-native studio</p>
          <h1>
            Intelligence,
            <span className="accent"> refracted.</span>
          </h1>
          <p className="subcopy">
            Obscura builds, tunes, and deploys AI systems that feel like magic—
            grounded in rigorous engineering and measurable outcomes.
          </p>
          <div className="cta-row">
            <button className="primary-cta">Book a build session</button>
            <button className="ghost-cta">See case studies</button>
          </div>
        </section>
        <section className="hero-visual">
          <TesseractScene />
        </section>
      </main>
    </div>
  )
}

export default App
