import { memo } from 'react'

const entries = [
  ['2026', 'Master of Computer Applications', 'AMC Engineering College', 'Bengaluru · VTU', 'CGPA 8.21 / 10'],
  ['2024', 'Bachelor of Computer Applications', 'Government First Grade College, Vijayanagar', 'Bengaluru · Bangalore University', ''],
  ['12th', 'CBSE', 'Jawahar Navodaya Vidyalaya, Shivamogga', '', '82%'],
  ['10th', 'CBSE', 'Jawahar Navodaya Vidyalaya, Shivamogga', '', '84%'],
]

const Education = memo(function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-intro">
        <p className="section-kicker">Education</p>
        <h2>Academic foundation.</h2>
      </div>
      <div className="education-table">
        {entries.map(([year, degree, school, place, result]) => (
          <article className="education-row" key={year + degree}>
            <span className="education-year">{year}</span>
            <div><h3>{degree}</h3><p>{school}</p>{place && <span>{place}</span>}</div>
            <strong>{result}</strong>
          </article>
        ))}
      </div>
    </section>
  )
})

export default Education
