import { ZapIcon, ServerIcon, DatabaseIcon, BotIcon, WrenchIcon, CloudIcon, GraduationCapIcon } from './icons'

const categories = [
  {
    icon: ZapIcon,
    title: 'Frontend',
    tags: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: ServerIcon,
    title: 'Backend',
    tags: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    icon: DatabaseIcon,
    title: 'Database',
    tags: ['PostgreSQL', 'MongoDB', 'SQL'],
  },
  {
    icon: BotIcon,
    title: 'AI & Automation',
    tags: ['OpenAI API', 'Prompt Engineering', 'AI Workflow Automation'],
  },
  {
    icon: WrenchIcon,
    title: 'DevOps & Tools',
    tags: ['Docker', 'Vercel', 'Git', 'GitHub'],
  },
  {
    icon: CloudIcon,
    title: 'Cloud & Hosting',
    tags: ['Vercel', 'Netlify', 'Cloudflare'],
  },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Expertise</h2>
        </header>
        <div className="skills-grid">
          {categories.map(({ icon: Icon, title, tags }) => (
            <article key={title} className="skill-category">
              <div className="category-icon"><Icon /></div>
              <h3>{title}</h3>
              <div className="skill-tags">
                {tags.map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="certifications">
          <h3 className="certifications-title">Education</h3>
          <div className="cert-grid">
            <article className="cert-item">
              <div className="cert-badge"><GraduationCapIcon /></div>
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
