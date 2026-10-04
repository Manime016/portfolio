import nodemailer from 'nodemailer'

function sanitize(value) {
  if (typeof value !== 'string') return ''
  return value.replace(/[<>"'&]/g, '').trim()
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const name = sanitize(req.body?.name)
  const email = sanitize(req.body?.email)
  const subject = sanitize(req.body?.subject)
  const message = sanitize(req.body?.message)

  if (!name || !email || !subject || !message) return res.status(400).json({ error: 'Please complete all fields.' })
  if (name.length > 100 || email.length > 254 || subject.length > 200 || message.length > 5000) return res.status(400).json({ error: 'One or more fields are too long.' })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'Please enter a valid email address.' })

  const requiredEnv = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASSWORD', 'CONTACT_EMAIL']
  const missingEnv = requiredEnv.filter((key) => !process.env[key])
  if (missingEnv.length) {
    console.error('Contact email configuration missing:', missingEnv.join(', '))
    return res.status(503).json({ error: 'Online email delivery is not configured yet.' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
    })
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio contact form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    })
    return res.status(200).json({ message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Contact email error:', error)
    return res.status(500).json({ error: 'Unable to deliver the message right now.' })
  }
}
