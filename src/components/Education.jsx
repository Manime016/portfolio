import { memo } from 'react'

const Education = memo(function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-heading">
        <p className="section-label">Education</p>
        <h2>Master of Computer Applications (MCA)</h2>
        <p className="section-copy">VTU, Karnataka &bull; 2021 - 2023</p>
      </div>
    </section>
  )
})

export default Education

