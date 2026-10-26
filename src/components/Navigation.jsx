import { useState, useEffect } from 'react'

const navItems = ['home', 'about', 'experience', 'skills', 'projects', 'services', 'contact']

export default function Navigation({ activeSection, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigate = (e, id) => {
    e.preventDefault()
    setIsMenuOpen(false)
    onNavigate(id)
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => handleNavigate(e, 'home')}>
          <span className="logo-text">Ismadie</span>
        </a>
        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span style={isMenuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}></span>
          <span style={isMenuOpen ? { opacity: 0 } : {}}></span>
          <span style={isMenuOpen ? { transform: 'rotate(-45deg) translate(7px, -6px)' } : {}}></span>
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} role="menubar">
          {navItems.map((item) => (
            <li key={item} role="none">
              <a
                href={`#${item}`}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={(e) => handleNavigate(e, item)}
                role="menuitem"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
