import { memo } from 'react'

const Internship = memo(function Internship() {
  return (
    <section id="internship" className="section internship-section">
      <div className="section-heading">
        <p className="section-label">Internship</p>
        <h2>Fulltack Developer Internship</h2>
      </div>
      <div className="detail-card">
        <div>
          <p className="info-title">Excerpt technologies private ltd, &bull; onsite</p>
          <p className="info-value">feb 2026 - Jun 2026</p>
        </div>
        <ul>
          <li>Contributed to feature development within an agile software development team following weekly sprint cycles.</li>
          <li>Worked on REST API integration, debugging, testing, production deployments, and collaborative code reviews.</li>
          <li>Collaborated with the team to implement new features and fix issues.</li>
          <li>Developed responsive UI screens and application features while coordinating with backend developers and designers.</li>

        </ul>
      </div>
    </section>
  )
})

export default Internship

