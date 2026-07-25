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
        <p className="section-label">About Me</p>
        <h2>
          I&apos;m a Python developer with hands-on experience in building backend systems and full stack web applications.
        </h2>
        <p className="section-copy">
          I enjoy solving complex problems and turning ideas into real-world applications. I follow clean code practices and I love learning new technologies.
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

