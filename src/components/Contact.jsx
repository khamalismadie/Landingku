import { site } from '../data'
import { GithubIcon, BriefcaseIcon, LayersIcon, CoffeeIcon } from './icons'

const channels = [
  { href: site.github, title: 'GitHub', text: '@khamalismadie · 44+ repos', Icon: GithubIcon },
  { href: site.upwork, title: 'Upwork', text: 'Hire me for your project', Icon: BriefcaseIcon },
  { href: site.domain, title: 'Portfolio', text: 'lakuin.my.id · View my work', Icon: LayersIcon },
  { href: site.kofi, title: 'Ko-fi', text: 'Support my work', Icon: CoffeeIcon },
]

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get in Touch</h2>
        </header>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              Open to full-time roles, freelance projects, and long-term collaborations.
              Let's build something useful together.
            </p>
            <nav className="contact-links" aria-label="Contact channels">
              {channels.map(({ href, title, text, Icon }) => (
                <a key={title} href={href} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="link-icon"><Icon /></div>
                  <div className="link-content">
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </a>
              ))}
            </nav>
          </div>
          <div className="contact-cta">
            <div className="cta-card">
              <h3>Let's Build Something</h3>
              <p>Have a project in mind?</p>
              <a href={`mailto:${site.email}`} className="btn btn-primary">
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
