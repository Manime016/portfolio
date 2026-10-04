import { memo } from 'react'

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
          FastAPI, Flask, MySQL, and modern web technologies. I care about
          clean architecture, reliable APIs, and interfaces that feel good to use.
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

      <div className="hero-panel">
        <div className="hero-panel__glow" />
        <div className="code-window">
          <div className="code-window__bar">
            <span /><span /><span />
            <small>manikanta.py</small>
          </div>
          <pre>{`class Developer:
    stack = [
        "Python",
        "FastAPI",
        "Flask",
        "MySQL"
    ]

    focus = "Backend systems"
    learning = True`}</pre>
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
