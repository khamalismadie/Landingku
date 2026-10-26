import { LightbulbIcon, WalletIcon, PenIcon, FlaskIcon, MapIcon, ZapIcon } from './icons'

const projects = [
  {
    title: 'Ideabank',
    description: 'Mindmap-powered idea management system with AI assistance. Open source project for capturing, connecting, and developing ideas visually.',
    stack: ['Next.js', 'React', 'PostgreSQL', 'TypeScript'],
    link: 'https://github.com/khamalismadie/ideabank',
    icon: LightbulbIcon,
  },
  {
    title: 'Lumina Wallet',
    description: 'Production-ready cryptocurrency wallet platform focused on usability, security, and modern user experience.',
    stack: ['React', 'Node.js'],
    link: 'https://luminawallet.org',
    icon: WalletIcon,
  },
  {
    title: 'Copyku AI',
    description: 'Indonesian AI copywriting assistant that generates persuasive, conversion-focused marketing content.',
    stack: ['OpenAI API', 'Prompt Engineering'],
    link: 'https://clawhub.ai/khamalismadie/copyku',
    icon: PenIcon,
  },
  {
    title: 'Lakuin',
    description: 'Product experimentation platform turning ideas into practical digital solutions. Serves as a live portfolio showcasing various projects.',
    stack: ['Next.js', 'Full-Stack JS'],
    link: 'https://lakuin.my.id',
    icon: FlaskIcon,
  },
  {
    title: 'Component Atlas',
    description: 'Interactive visual map for React codebases — dependency graphs, re-render heatmaps, and bundle size analysis for developers.',
    stack: ['TypeScript', 'React'],
    link: 'https://github.com/khamalismadie/Component-atlas',
    icon: MapIcon,
  },
  {
    title: 'PromptKit',
    description: 'Auto-selects and applies prompting frameworks from 56+ options for structured AI prompts. Supports multiple languages.',
    stack: ['Prompt Engineering', 'OpenAI API'],
    link: 'https://clawhub.ai/khamalismadie/skills/promptkit',
    icon: ZapIcon,
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
          {projects.map(({ icon: Icon, title, description, stack, link }) => (
            <article key={title} className="project-card">
              <div className="project-header">
                <span className="project-icon"><Icon /></span>
                <h3 className="project-title">{title}</h3>
              </div>
              <p className="project-description">{description}</p>
              <div className="project-stack">
                {stack.map((tech) => (
                  <span key={tech} className="skill-tag">{tech}</span>
                ))}
              </div>
              <a
                href={link}
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
