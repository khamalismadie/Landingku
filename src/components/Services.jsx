const services = [
  {
    icon: '☁️',
    title: 'SaaS Applications',
    items: ['Authentication systems', 'Subscription & billing', 'Admin dashboards', 'Multi-tenant platforms'],
  },
  {
    icon: '🌐',
    title: 'Web Applications',
    items: ['React & Next.js apps', 'API integrations', 'Internal business tools', 'Performance optimization'],
  },
  {
    icon: '🤖',
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
          {services.map((service, index) => (
            <article key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <ul className="service-list">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
