import { BotIcon, ZapIcon, CloudIcon } from './icons'

const highlights = [
  { icon: BotIcon, title: 'AI & SaaS', text: 'Building AI-powered SaaS applications and workflow automation' },
  { icon: ZapIcon, title: 'Fast Shipping', text: 'Shipping fast, production-ready Next.js applications' },
  { icon: CloudIcon, title: 'Scalable Systems', text: 'Architecting scalable full-stack systems' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <header className="section-header">
          <span className="section-label">About</span>
          <h2 className="section-title">Who I Am</h2>
        </header>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Full-Stack JavaScript Developer with years of hands-on experience shipping production software —
              from fintech platforms to AI-powered products. Building modern web applications, SaaS products,
              and AI-powered solutions for startups and businesses.
            </p>
            <p className="about-detail">
              Focused on clean code, scalability, and real business impact. Currently open to full-time,
              contract, and freelance opportunities. Based in Indonesia, available for remote work worldwide.
            </p>
            <div className="about-highlights">
              {highlights.map(({ icon: Icon, title, text }) => (
                <div key={title} className="highlight-item">
                  <div className="highlight-icon"><Icon /></div>
                  <div className="highlight-content">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-info">
            <div className="info-card">
              <h3>Location</h3>
              <p>Indonesia • Open to Remote</p>
            </div>
            <div className="info-card">
              <h3>Education</h3>
              <p>BSc in Information Technology</p>
              <p>International Open University (Current)</p>
            </div>
            <div className="info-card">
              <h3>GitHub Stats</h3>
              <p>44+ Repositories</p>
              <p>94+ Stars</p>
              <p>56 Followers</p>
            </div>
            <div className="info-card">
              <h3>Open To</h3>
              <p>Full-Time Roles</p>
              <p>Freelance Projects</p>
              <p>Long-Term Collaborations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
