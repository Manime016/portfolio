import { memo } from 'react'
import navigation from '../data/navigation'

const RESUME_URL =
  import.meta.env.VITE_RESUME_URL ||
  'https://drive.google.com/uc?export=download&id=1I9-7JVf9BED-A9pRC3UiMFP8J-fboYoc'

const Header = memo(function Header() {
  return (
    <header className="site-header">
      <a href="#home" className="brand" aria-label="Manikanta L home">
        <span className="brand-mark">ML</span><span>Manikanta L</span>
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        <span className="nav-index">MENU</span>
        <ul>{navigation.map((link, index) => <li key={link}><a href={`#${link.toLowerCase()}`}><span>0{index + 1}</span>{link}</a></li>)}</ul>
      </nav>
      <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn btn-outline">Resume <span>↗</span></a>
    </header>
  )
})

export default Header
