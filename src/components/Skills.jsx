export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Expertise</h2>
        </header>
        <div className="skills-grid">
          <article className="skill-category">
            <div className="category-icon">⚡</div>
            <h3>Frontend</h3>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Tailwind CSS</span>
            </div>
          </article>

          <article className="skill-category">
            <div className="category-icon">💻</div>
            <h3>Backend</h3>
            <div className="skill-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">REST APIs</span>
            </div>
          </article>

          <article className="skill-category">
            <div className="category-icon">🗄️</div>
            <h3>Database</h3>
            <div className="skill-tags">
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">SQL</span>
            </div>
          </article>

          <article className="skill-category">
            <div className="category-icon">🤖</div>
            <h3>AI & Automation</h3>
            <div className="skill-tags">
              <span className="skill-tag">OpenAI API</span>
              <span className="skill-tag">Prompt Engineering</span>
              <span className="skill-tag">AI Workflow Automation</span>
            </div>
          </article>

          <article className="skill-category">
            <div className="category-icon">🔧</div>
            <h3>DevOps & Tools</h3>
            <div className="skill-tags">
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Vercel</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
            </div>
          </article>

          <article className="skill-category">
            <div className="category-icon">☁️</div>
            <h3>Cloud & Hosting</h3>
            <div className="skill-tags">
              <span className="skill-tag">Vercel</span>
              <span className="skill-tag">Netlify</span>
              <span className="skill-tag">Cloudflare</span>
            </div>
          </article>
        </div>
        <div className="certifications">
          <h3 className="certifications-title">Education</h3>
          <div className="cert-grid">
            <article className="cert-item">
              <div className="cert-badge">🎓</div>
              <div className="cert-info">
                <h4>BSc in Information Technology</h4>
                <p>International Open University (Current)</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
