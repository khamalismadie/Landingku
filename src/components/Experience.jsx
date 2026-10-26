const experiences = [
  {
    title: 'Full-Stack Developer',
    company: 'Freelance · Remote',
    date: '2022 — Present',
    description: 'Building modern web applications, SaaS products, and AI-powered solutions for startups and businesses worldwide. Specializing in Next.js, React, and Node.js ecosystems.',
  },
  {
    title: 'AI Product Developer',
    company: 'Personal Projects',
    date: '2023 — Present',
    description: 'Developing AI-powered tools including Copyku AI (Indonesian AI copywriting assistant) and PromptKit (prompt framework selector with 56+ options).',
  },
  {
    title: 'Web Development & Design',
    company: 'Lakuin.my.id',
    date: '2020 — Present',
    description: 'Product experimentation platform turning ideas into practical digital solutions. Building and shipping various web products and experiments.',
  },
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Work History</h2>
        </header>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <article key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <p className="company">{exp.company}</p>
                  </div>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                {exp.description && (
                  <p className="timeline-description">{exp.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
