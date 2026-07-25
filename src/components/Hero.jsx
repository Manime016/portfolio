import { memo } from 'react'

const CLOUDINARY_IMAGE_URL =
  import.meta.env.VITE_CLOUDINARY_IMAGE_URL ||
  'https://res.cloudinary.com/demo/image/upload/v1690000000/sample.jpg'

const Hero = memo(function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <p className="pretitle">Hi, I&apos;m</p>
        <h1>Manikanta L</h1>
        <p className="subtitle">Python Full Stack Developer</p>
        <p className="hero-description">
          I build scalable web applications using Python, Flask, Django, FastAPI and MySQL.
          Passionate about clean code, problem solving and building impactful solutions.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
        <div className="social-links">
          <a href="https://github.com/Manime016" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/manikanta-l" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:lmanikanta016@gmail.com">Email</a>
        </div>
      </div>

      <div className="hero-panel">
        <div className="hero-panel__inner">
          <div
            className="hero-photo"
            aria-label="Profile photo"
style={{
  backgroundImage: 'url("https://drive.google.com/thumbnail?id=1YqnWHyRvoLkX72vFeQgwDsDBjdmzg08J&sz=w2000")'
}}          />
          <div className="hero-panel__content">
            <h2>Build fast, responsive apps</h2>
            <p>
              Creating polished experiences with clean architecture, modern Python stacks, and user-focused design.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Hero

