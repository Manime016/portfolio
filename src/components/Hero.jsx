import { memo } from 'react'

const PROFILE_IMAGE_URL =
  import.meta.env.VITE_PROFILE_IMAGE_URL ||
  'https://drive.google.com/thumbnail?id=1YqnWHyRvoLkX72vFeQgwDsDBjdmzg08J&sz=w2000'

const Hero = memo(function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-line" aria-hidden="true" />
      <div className="hero-copy">
        <div className="hero-kicker">
          <span className="status-dot" />
          Available for Python / Backend opportunities
          <span className="kicker-arrow">↗</span>
        </div>
        <p className="pretitle">HELLO, I&apos;M</p>
        <h1>Manikanta <span>L.</span></h1>
        <p className="subtitle">Python Backend / Full-Stack Developer</p>
        <p className="hero-description">I build practical web applications and backend systems with Python, FastAPI, Flask, MySQL, and modern web technologies — with a focus on clean architecture, reliable APIs, and products that feel intentional.</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">Explore My Work <span>↗</span></a>
          <a href="#contact" className="btn btn-secondary">Let&apos;s Talk <span>→</span></a>
        </div>
        <div className="social-links">
          <a href="https://github.com/Manime016" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          <a href="https://linkedin.com/in/manikanta-l" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          <a href="mailto:lmanikanta016@gmail.com">Email <span>↗</span></a>
        </div>
        <div className="hero-proof">
          <div><strong>8.21</strong><span>MCA CGPA</span></div>
          <div><strong>04</strong><span>Featured projects</span></div>
          <div><strong>01</strong><span>Industry internship</span></div>
        </div>
      </div>
      <div className="hero-panel hero-profile">
        <div className="hero-orbit-glow" aria-hidden="true" />
        <div className="profile-frame">
          <div className="hero-photo" role="img" aria-label="Portrait of Manikanta L" style={{ backgroundImage: `url("${PROFILE_IMAGE_URL}")` }} />
          <div className="profile-caption"><span>MANIKANTA L.</span><span>PYTHON / BACKEND</span></div>
        </div>
        <div className="hero-metric">
          <div><span className="metric-label">CURRENT FOCUS</span><strong>Backend systems</strong></div>
          <span className="metric-arrow">↗</span>
        </div>
      </div>
    </section>
  )
})

export default Hero
