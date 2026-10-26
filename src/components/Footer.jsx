export default function Footer({ onNavigate }) {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavigate = (e, id) => {
    e.preventDefault()
    onNavigate(id)
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">Ismadie</div>
            <p>Full-Stack JavaScript Developer</p>
          </div>
          <nav className="footer-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavigate(e, link.id)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ismadie. All rights reserved.</p>
          <p>Built with React</p>
        </div>
      </div>
    </footer>
  )
}
