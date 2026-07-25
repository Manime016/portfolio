import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import compression from 'compression'

dotenv.config()

const app = express()
const PORT = process.env.SERVER_PORT || 4000

// Security headers
app.use(helmet())

// Compression
app.use(compression())

// CORS
app.use(cors())

// Body parsing with size limit
app.use(express.json({ limit: '10kb' }))

// Rate limiting for contact API
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window per IP
  message: { error: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
})

app.use('/api/contact', contactLimiter)

// Helper to sanitize strings
function sanitize(value) {
  if (typeof value !== 'string') return ''
  return value.replace(/[<>"'&]/g, '').trim()
}

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body

  // Sanitize inputs
  const sanitizedName = sanitize(name)
  const sanitizedEmail = sanitize(email)
  const sanitizedSubject = sanitize(subject)
  const sanitizedMessage = sanitize(message)

  if (!sanitizedName || !sanitizedEmail || !sanitizedSubject || !sanitizedMessage) {
    return res.status(400).json({ error: 'Missing required contact fields.' })
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(sanitizedEmail)) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Portfolio contact form: ${sanitizedSubject}`,
      replyTo: sanitizedEmail,
      text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\nSubject: ${sanitizedSubject}\n\nMessage:\n${sanitizedMessage}`,
      html: `<p><strong>Name:</strong> ${sanitizedName}</p>
             <p><strong>Email:</strong> ${sanitizedEmail}</p>
             <p><strong>Subject:</strong> ${sanitizedSubject}</p>
             <p><strong>Message:</strong><br/>${sanitizedMessage.replace(/\n/g, '<br/>')}</p>`,
    })

    return res.status(200).json({ message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Email send error:', error)
    return res.status(500).json({ error: 'Failed to send email.' })
  }
})

app.listen(PORT, () => {
  console.log(`Contact server running on http://localhost:${PORT}`)
})
