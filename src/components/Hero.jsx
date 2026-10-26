import { useRef } from 'react'

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
          <h1 className="hero-title">
            Ismadie
          </h1>
          <p className="hero-subtitle">
            Full-Stack JavaScript Developer
          </p>
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
            <a href="https://github.com/khamalismadie" target="_blank" rel="noopener noreferrer" className="hero-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://upwork.com/freelancers/ismadie" target="_blank" rel="noopener noreferrer" className="hero-link" aria-label="Upwork">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 14.661s.39-.028.645.19c.25.214.02.644.02.644s-.26.374-.874.374c-.614 0-2.176-.17-2.176-.17s-1.553-.17-1.928-.17c-.38 0-.594.24-.594.24s-.45.24-.94-.24c-.49-.48-.79-1.2-.79-1.2s-.21-.36-.21-.63c0-.27.14-.48.14-.48s.07-.23.54-.24h2.17s.75-.015 1.104.045c.36.06.49.26.49.26s.17.25.46.24c.29-.01.48-.25.48-.25s.09-.16.29-.15c.2.01 1.32.1 1.32.1s.73.1 1.01.25c.28.15.43.44.43.44s.16.24.1.63c-.06.39-.27 1.16-.27 1.16z"/>
              </svg>
            </a>
            <a href="https://lakuin.my.id" target="_blank" rel="noopener noreferrer" className="hero-link" aria-label="Portfolio">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </a>
            <a href="https://ko-fi.com/ismadie" target="_blank" rel="noopener noreferrer" className="hero-link" aria-label="Ko-fi">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.785c-.101.253-.354.455-.648.455H6.754a.754.754 0 01-.648-.455c-.101-.253.025-.538.253-.715l3.447-2.67V9.58c0-.414.336-.75.75-.75s.75.336.75.75v4.82l3.447 2.67c.228.177.354.462.253.715z"/>
              </svg>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value">44+</div>
              <div className="stat-label">Repositories</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">94+</div>
              <div className="stat-label">Stars</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">56</div>
              <div className="stat-label">Followers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
