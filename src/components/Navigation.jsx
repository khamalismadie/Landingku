import { useState, useEffect } from 'react'

const navItems = ['home', 'about', 'experience', 'skills', 'projects', 'services', 'contact']

export default function Navigation({ activeSection, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll and close on Escape while the mobile menu is open
  useEffect(() => {
    if (!isMenuOpen) return
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isMenuOpen])

  const handleNavigate = (e, id) => {
    e.preventDefault()
    setIsMenuOpen(false)
    onNavigate(id)
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => handleNavigate(e, 'home')}>
          <span className="logo-text">Ismadie</span>
        </a>
        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span style={isMenuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}></span>
          <span style={isMenuOpen ? { opacity: 0 } : {}}></span>
          <span style={isMenuOpen ? { transform: 'rotate(-45deg) translate(7px, -6px)' } : {}}></span>
        </button>
        {isMenuOpen && (
          <div
            className="nav-backdrop"
            aria-hidden="true"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
        <ul id="nav-menu" className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={(e) => handleNavigate(e, item)}
                aria-current={activeSection === item ? 'location' : undefined}
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
