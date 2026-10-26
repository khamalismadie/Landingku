const projects = [
  {
    title: 'Ideabank',
    description: 'Mindmap-powered idea management system with AI assistance. Open source project for capturing, connecting, and developing ideas visually.',
    stack: ['Next.js', 'React', 'PostgreSQL', 'TypeScript'],
    link: 'https://github.com/khamalismadie/ideabank',
    emoji: '💡',
  },
  {
    title: 'Lumina Wallet',
    description: 'Production-ready cryptocurrency wallet platform focused on usability, security, and modern user experience.',
    stack: ['React', 'Node.js'],
    link: 'https://luminawallet.org',
    emoji: '💰',
  },
  {
    title: 'Copyku AI',
    description: 'Indonesian AI copywriting assistant that generates persuasive, conversion-focused marketing content.',
    stack: ['OpenAI API', 'Prompt Engineering'],
    link: 'https://clawhub.ai/khamalismadie/copyku',
    emoji: '✍️',
  },
  {
    title: 'Lakuin',
    description: 'Product experimentation platform turning ideas into practical digital solutions. Serves as a live portfolio showcasing various projects.',
    stack: ['Next.js', 'Full-Stack JS'],
    link: 'https://lakuin.my.id',
    emoji: '🧪',
  },
  {
    title: 'Component Atlas',
    description: 'Interactive visual map for React codebases — dependency graphs, re-render heatmaps, and bundle size analysis for developers.',
    stack: ['TypeScript', 'React'],
    link: 'https://github.com/khamalismadie/Component-atlas',
    emoji: '🗺️',
  },
  {
    title: 'PromptKit',
    description: 'Auto-selects and applies prompting frameworks from 56+ options for structured AI prompts. Supports multiple languages.',
    stack: ['Prompt Engineering', 'OpenAI API'],
    link: 'https://clawhub.ai/khamalismadie/skills/promptkit',
    emoji: '⚡',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Featured Work</h2>
        </header>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-header">
                <span className="project-emoji">{project.emoji}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-stack">
                {project.stack.map((tech, i) => (
                  <span key={i} className="skill-tag">{tech}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
