import { memo } from 'react'

const About = memo(function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-intro">
        <p className="section-kicker">About</p>
        <h2>I like software that is simple on the surface and solid underneath.</h2>
      </div>

      <div className="about-layout">
        <div className="about-copy">
          <p className="large-copy">
            My work sits close to the backend: designing REST APIs, connecting applications to databases, handling authentication, payments, media, and the business rules that make products actually work.
          </p>
          <p>
            I build with Python, FastAPI and Flask, and have worked with MySQL, MongoDB, SQLAlchemy and background processing. My projects also include full-stack applications using React and Node.js, alongside practical team experience during a four-month internship at Excerpt Technologies.
          </p>
        </div>

        <div className="about-stats">
          <div><strong>8.21</strong><span>MCA CGPA</span></div>
          <div><strong>5</strong><span>Featured projects</span></div>
          <div><strong>4 mo</strong><span>Industry internship</span></div>
          <div><strong>Python</strong><span>Primary stack</span></div>
        </div>
      </div>
    </section>
  )
})

export default About
