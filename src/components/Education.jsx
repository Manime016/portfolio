import { memo } from 'react'

const Education = memo(function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-heading">
        <p className="section-label">05 / Education</p>
        <h2>Education</h2>
      </div>

      <div className="education-list">
        <article className="education-item education-item--featured">
          <div className="education-year">2026</div>
          <div>
            <p className="education-degree">Master of Computer Applications (MCA)</p>
            <h3>AMC Engineering College</h3>
            <p>Bannerghatta, Bengaluru • Visvesvaraya Technological University (VTU), Belagavi</p>
            <strong>CGPA 8.21 / 10.00</strong>
          </div>
        </article>

        <article className="education-item">
          <div className="education-year">2024</div>
          <div>
            <p className="education-degree">Bachelor of Computer Applications (BCA)</p>
            <h3>Government First Grade College, Vijayanagar</h3>
            <p>Bengaluru • Bangalore University</p>
          </div>
        </article>

        <article className="education-item">
          <div className="education-year">12th</div>
          <div>
            <p className="education-degree">CBSE</p>
            <h3>Jawahar Navodaya Vidyalaya, Shivamogga</h3>
            <strong>82%</strong>
          </div>
        </article>

        <article className="education-item">
          <div className="education-year">10th</div>
          <div>
            <p className="education-degree">CBSE</p>
            <h3>Jawahar Navodaya Vidyalaya, Shivamogga</h3>
            <strong>84%</strong>
          </div>
        </article>
      </div>
    </section>
  )
})

export default Education
