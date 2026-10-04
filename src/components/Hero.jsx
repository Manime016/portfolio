import { memo } from 'react'

const PROFILE_IMAGE_URL =
  import.meta.env.VITE_PROFILE_IMAGE_URL ||
  'https://drive.google.com/thumbnail?id=1YqnWHyRvoLkX72vFeQgwDsDBjdmzg08J&sz=w2000'

const Hero = memo(function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <div className="hero-kicker">
          <span className="status-dot" />
          Open to Python / Backend opportunities
        </div>

        <p className="pretitle">Hello, I&apos;m</p>
        <h1>Manikanta <span>L.</span></h1>
        <p className="subtitle">Python Backend / Full-Stack Developer</p>

        <p className="hero-description">
          I build practical web applications and backend systems with Python,
          FastAPI, Flask, MySQL, and modern web technologies. I care about clean
          architecture, reliable APIs, and interfaces that feel good to use.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">Explore My Work <span>↗</span></a>
          <a href="#contact" className="btn btn-secondary">Let&apos;s Talk</a>
        </div>

        <div className="social-links">
          <a href="https://github.com/Manime016" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://linkedin.com/in/manikanta-l" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="mailto:imanikanta016@gmail.com">Email ↗</a>
        </div>
      </div>

      <div className="hero-panel hero-profile">
        <div className="hero-panel__glow" />
        <div className="profile-frame">
          <div className="gui-decor" aria-hidden="true">
            <span className="gui-ring" />
            <span className="gui-cross" />
            <span className="gui-label">SYSTEM / ONLINE</span>
            <span className="gui-line" />
          </div>
          <div
            className="hero-photo"
            role="img"
            aria-label="Portrait of Manikanta L"
            style={{ backgroundImage: `url("${PROFILE_IMAGE_URL}")` }}
          />
          <div className="profile-overlay">
            <span>PYTHON BACKEND</span>
            <span>FULL-STACK</span>
          </div>
        </div>
        <div className="hero-metric">
          <strong>8.21</strong>
          <span>MCA CGPA / 10</span>
        </div>
      </div>
    </section>
  )
})

export default Hero
