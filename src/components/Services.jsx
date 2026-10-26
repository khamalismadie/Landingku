import { CloudIcon, CodeIcon, BotIcon } from './icons'

const services = [
  {
    icon: CloudIcon,
    title: 'SaaS Applications',
    items: ['Authentication systems', 'Subscription & billing', 'Admin dashboards', 'Multi-tenant platforms'],
  },
  {
    icon: CodeIcon,
    title: 'Web Applications',
    items: ['React & Next.js apps', 'API integrations', 'Internal business tools', 'Performance optimization'],
  },
  {
    icon: BotIcon,
    title: 'AI-Powered Solutions',
    items: ['OpenAI/LLM integrations', 'AI assistants & chatbots', 'Content generation tools', 'Workflow automation'],
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Services</span>
          <h2 className="section-title">What I Build</h2>
        </header>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, items }) => (
            <article key={title} className="service-card">
              <div className="service-icon"><Icon /></div>
              <h3 className="service-title">{title}</h3>
              <ul className="service-list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
