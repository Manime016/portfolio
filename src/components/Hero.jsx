import { memo } from 'react'

const PROFILE_IMAGE_URL =
  import.meta.env.VITE_PROFILE_IMAGE_URL ||
  'https://drive.google.com/thumbnail?id=1YqnWHyRvoLkX72vFeQgwDsDBjdmzg08J&sz=w2000'

const Hero = memo(function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-intro">
        <p className="eyebrow"><span /> Open to Python / Backend opportunities</p>
        <p className="hero-overline">PYTHON BACKEND · FULL-STACK · BENGALURU</p>
        <h1>Building the<br /><em>logic behind</em><br />useful products.</h1>
        <p className="hero-lede">
          I&apos;m Manikanta L., an MCA graduate who builds APIs, backend systems and full-stack applications with Python, FastAPI, Flask, MySQL and modern web technologies.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="button button-solid">View selected work <span>↗</span></a>
          <a href="#contact" className="button button-ghost">Start a conversation <span>→</span></a>
        </div>
        <div className="hero-links">
          <a href="https://github.com/Manime016" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://linkedin.com/in/manikanta-l" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="mailto:lmanikanta016@gmail.com">lmanikanta016@gmail.com ↗</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image-wrap">
          <div className="hero-photo" role="img" aria-label="Portrait of Manikanta L" style={{ backgroundImage: `url("${PROFILE_IMAGE_URL}")` }} />
          <div className="hero-image-label">
            <span>MANIKANTA L.</span>
            <span>SOFTWARE DEVELOPER</span>
          </div>
        </div>
        <div className="hero-side-note">
          <span>Currently focused on</span>
          <strong>APIs / DATABASES / SYSTEM DESIGN</strong>
        </div>
      </div>

      <div className="hero-bottom">
        <span>Scroll to explore</span>
        <div className="hero-line" />
        <span>01 — 06</span>
      </div>
    </section>
  )
})

export default Hero
