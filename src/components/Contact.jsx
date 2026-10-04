import { memo, useState, useCallback } from 'react'

const initialFormState = { name: '', email: '', subject: '', message: '' }

const Contact = memo(function Contact() {
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
      if (!response.ok) throw new Error('Unable to send message. Please try again later.')
      setStatus({ type: 'success', message: 'Message sent successfully — I will reply soon.' })
      setFormData(initialFormState)
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setSubmitting(false)
    }
  }, [formData])

  return (
    <section id="contact" className="contact-section">
      <div className="contact-heading">
        <p className="section-kicker">Contact</p>
        <h2>Let&apos;s build<br /><em>something useful.</em></h2>
        <p>Open to Python backend, full-stack and software development opportunities.</p>
      </div>

      <div className="contact-content">
        <div className="contact-details">
          <a href="mailto:lmanikanta016@gmail.com"><span>Email</span><strong>lmanikanta016@gmail.com ↗</strong></a>
          <a href="tel:+917019364686"><span>Phone</span><strong>+91 70193 64686 ↗</strong></a>
          <div><span>Based in</span><strong>Bengaluru, India</strong></div>
          <div className="contact-socials">
            <a href="https://github.com/Manime016" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://linkedin.com/in/manikanta-l" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-line"><label>Name<input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required /></label><label>Email<input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required /></label></div>
          <label>Subject<input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="What would you like to discuss?" required /></label>
          <label>Message<textarea name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell me about the role or project..." required /></label>
          <button type="submit" className="button button-solid" disabled={submitting}>{submitting ? 'Sending...' : 'Send message ↗'}</button>
          {status.message ? <p className={`status-message ${status.type}`}>{status.message}</p> : null}
        </form>
      </div>
    </section>
  )
})

export default Contact
