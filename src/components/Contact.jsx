import { memo, useState, useCallback } from 'react'

const initialFormState = { name: '', email: '', subject: '', message: '' }

const ContactInfo = memo(function ContactInfo() {
  return (
    <div className="contact-info-card">
      <div>
        <p className="info-title">Email</p>
        <p className="info-value">manikanta016@gmail.com</p>
      </div>
      <div>
        <p className="info-title">Phone</p>
        <p className="info-value">+91 7019364686</p>
      </div>
      <div>
        <p className="info-title">Location</p>
        <p className="info-value">Bangalore, India</p>
      </div>
      <div>
        <p className="info-title">LinkedIn</p>
        <p className="info-value">*********</p>
      </div>
    </div>
  )
})

function Contact() {
  const [formData, setFormData] = useState(initialFormState)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = useCallback((event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }, [])

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Unable to send message. Please try again later.')
      }

      setStatus({ type: 'success', message: 'Message sent successfully — I will reply soon.' })
      setFormData(initialFormState)
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setSubmitting(false)
    }
  }, [formData])

  return (
    <section id="contact" className="section contact-section">
      <div className="section-heading">
        <p className="section-label">Contact Me</p>
        <h2>Let&apos;s connect and build something together.</h2>
      </div>
      <div className="contact-grid">
        <ContactInfo />
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Your Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </label>
            <label>
              Your Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </label>
          </div>
          <label>
            Subject
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />
          </label>
          <label>
            Your Message
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
          </label>
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
          {status.message ? (
            <p className={`status-message ${status.type}`}>{status.message}</p>
          ) : null}
        </form>
      </div>
    </section>
  )
}

export default Contact

