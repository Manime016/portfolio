import { memo } from 'react'

const Internship = memo(function Internship() {
  return (
    <section id="internship" className="section experience-section">
      <div className="section-intro section-intro-row">
        <div>
          <p className="section-kicker">Experience</p>
          <h2>Where I learned to ship with a team.</h2>
        </div>
        <span className="experience-period">FEB 2026 — JUN 2026</span>
      </div>

      <div className="experience-layout">
        <div className="experience-company">
          <p>Excerpt Technologies Pvt. Ltd.</p>
          <h3>Full Stack & Android<br />UI/UX Developer Intern</h3>
          <span>Bengaluru · On-site</span>
        </div>
        <div className="experience-details">
          <p className="large-copy">Four months of practical development inside an agile team, working across interfaces, APIs, testing, reviews and deployment workflows.</p>
          <ul>
            <li>Built responsive web and mobile UI features with React.js, HTML, CSS and React Native/Expo.</li>
            <li>Integrated REST APIs and worked alongside backend developers and designers.</li>
            <li>Contributed to debugging, testing, weekly sprint cycles and collaborative code reviews.</li>
            <li>Used Git-based workflows across development and production environments.</li>
          </ul>
        </div>
      </div>
    </section>
  )
})

export default Internship
