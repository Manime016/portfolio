import { memo } from 'react'

const Internship = memo(function Internship() {
  return (
    <section id="internship" className="section internship-section">
      <div className="section-heading">
        <p className="section-label">04 / Experience</p>
        <h2>Full Stack & Android UI/UX Developer Intern</h2>
        <p className="section-copy">
          Excerpt Technologies Pvt. Ltd. • Bengaluru • On-site • Feb 2026 — Jun 2026
        </p>
      </div>

      <div className="detail-card experience-card">
        <div className="experience-badge">4 MONTHS</div>
        <ul>
          <li>Contributed to full-stack feature development within an agile team following weekly sprint cycles.</li>
          <li>Worked across REST API integration, debugging, testing, collaborative code reviews, and deployment workflows.</li>
          <li>Developed responsive web and mobile UI features using React.js, HTML, CSS, and React Native/Expo.</li>
          <li>Worked with backend developers and designers to translate requirements and UI designs into application features.</li>
          <li>Used Git-based version control and gained practical exposure to development and production environments.</li>
        </ul>
      </div>
    </section>
  )
})

export default Internship
