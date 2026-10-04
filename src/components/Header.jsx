import { memo } from 'react'
import navigation from '../data/navigation'

const RESUME_URL =
  import.meta.env.VITE_RESUME_URL ||
  'https://drive.google.com/file/d/1THj26NB8hGI1c-KfhIWeqyUlg52AXTdD/view?usp=sharing'

const Header = memo(function Header() {
  return (
    <header className="site-header">
      <a href="#home" className="brand" aria-label="Manikanta L home">
        <span className="brand-mark">ML</span>
        <span className="brand-name">Manikanta L.</span>
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        <ul>
          {navigation.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>

      <a href={RESUME_URL} target="_blank" rel="noreferrer" className="header-resume">
        <span>Resume</span><span>↗</span>
      </a>
    </header>
  )
})

export default Header
