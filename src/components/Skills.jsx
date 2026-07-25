import { memo } from 'react'
import skills from '../data/skills'

const SkillCard = memo(function SkillCard({ label, subtitle }) {
  return (
    <div className="skill-card">
      <strong>{label}</strong>
      <span>{subtitle}</span>
    </div>
  )
})

const Skills = memo(function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading">
        <p className="section-label">Skills</p>
        <h2>Technical skills I use to build apps.</h2>
      </div>
      <div className="skill-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.label} label={skill.label} subtitle={skill.subtitle} />
        ))}
      </div>
    </section>
  )
})

export default Skills

