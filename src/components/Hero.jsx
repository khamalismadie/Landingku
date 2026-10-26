import { site } from '../data'
import { GithubIcon, BriefcaseIcon, LayersIcon, CoffeeIcon } from './icons'

const socialLinks = [
  { href: site.github, label: 'GitHub', Icon: GithubIcon },
  { href: site.upwork, label: 'Upwork', Icon: BriefcaseIcon },
  { href: site.domain, label: 'Portfolio', Icon: LayersIcon },
  { href: site.kofi, label: 'Ko-fi', Icon: CoffeeIcon },
]

export default function Hero({ onNavigate }) {
  const handleNavigate = (e, id) => {
    e.preventDefault()
    onNavigate(id)
  }

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">Available for Projects</span>
          <h1 className="hero-title">Ismadie</h1>
          <p className="hero-subtitle">Full-Stack JavaScript Developer</p>
          <p className="hero-description">
            Building modern web applications, SaaS products, and AI-powered solutions —
            focused on clean code, scalability, and real business impact.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary" onClick={(e) => handleNavigate(e, 'projects')}>
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => handleNavigate(e, 'contact')}>
              Get in Touch
            </a>
          </div>
          <div className="hero-links">
            {socialLinks.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="hero-link" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
