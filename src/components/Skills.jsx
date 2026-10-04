import { memo } from 'react'
import skills from '../data/skills'

const Skills = memo(function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-intro section-intro-row">
        <div>
          <p className="section-kicker">Capabilities</p>
          <h2>The stack I reach for.</h2>
        </div>
        <p className="section-aside">Tools I&apos;ve used in projects and internship work—not a list of technologies I&apos;ve only read about.</p>
      </div>

      <div className="skills-editorial">
        {skills.map((skill) => (
          <div className="skill-row" key={skill.label}>
            <strong>{skill.label}</strong>
            <span>{skill.subtitle}</span>
            <span className="skill-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  )
})

export default Skills
