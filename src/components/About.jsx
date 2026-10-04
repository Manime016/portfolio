import { memo } from 'react'
import aboutCards from '../data/aboutCards'

const InfoCard = memo(function InfoCard({ title, value }) {
  return (
    <article className="info-card">
      <p className="info-title">{title}</p>
      <p className="info-value">{value}</p>
    </article>
  )
})

const About = memo(function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-heading">
        <p className="section-label">01 / About</p>
        <h2>Building useful software with a backend-first mindset.</h2>
        <p className="section-copy">
          I&apos;m an MCA graduate focused on Python backend and full-stack development.
          I have practical experience from a 4-month academic internship and hands-on
          projects involving APIs, authentication, databases, media handling, and modular
          application architecture.
        </p>
      </div>
      <div className="about-cards">
        {aboutCards.map((card) => (
          <InfoCard key={card.title} title={card.title} value={card.value} />
        ))}
      </div>
    </section>
  )
})

export default About
