import { useState, useEffect, useRef } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  const canvasRef = useRef(null)

  // Neural Network Animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []
    let mouse = { x: null, y: null, radius: 150 }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    class Particle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.size = Math.random() * 3 + 1
        this.baseX = this.x
        this.baseY = this.y
        this.density = (Math.random() * 30) + 1
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
      }

      draw() {
        ctx.fillStyle = 'rgba(124, 58, 237, 0.8)'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }

      update() {
        let dx = mouse.x - this.x
        let dy = mouse.y - this.y
        let distance = Math.sqrt(dx * dx + dy * dy)
        let forceDirectionX = dx / distance
        let forceDirectionY = dy / distance
        let maxDistance = mouse.radius
        let force = (maxDistance - distance) / maxDistance
        let directionX = forceDirectionX * force * this.density
        let directionY = forceDirectionY * force * this.density

        if (distance < mouse.radius) {
          this.x -= directionX
          this.y -= directionY
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX
            this.x -= dx / 10
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY
            this.y -= dy / 10
          }
        }

        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }
    }

    const initParticles = () => {
      particles = []
      let numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000)
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvas.width
        let y = Math.random() * canvas.height
        particles.push(new Particle(x, y))
      }
    }

    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x
          let dy = particles[a].y - particles[b].y
          let distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            let opacity = 1 - (distance / 120)
            ctx.strokeStyle = `rgba(124, 58, 237, ${opacity * 0.3})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      connectParticles()
      animationId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      mouse.x = e.x
      mouse.y = e.y
    }

    const handleMouseOut = () => {
      mouse.x = null
      mouse.y = null
    }

    const handleResize = () => {
      resizeCanvas()
      initParticles()
    }

    resizeCanvas()
    initParticles()
    animate()

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Scroll & Parallax Effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      setScrolled(currentScroll > 100)

      // Active Nav Logic
      const sections = ['home', 'about', 'experience', 'skills', 'contact']
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const sectionHeight = section.offsetHeight
          const sectionTop = section.offsetTop - 150
          if (currentScroll > sectionTop && currentScroll <= sectionTop + sectionHeight) {
            setActiveSection(sectionId)
          }
        }
      }
    }

    const handleMouseMove = (e) => {
      // Parallax for orbs
      const orbs = document.querySelectorAll('.gradient-orb')
      const mouseX = e.clientX / window.innerWidth
      const mouseY = e.clientY / window.innerHeight

      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20
        const x = (mouseX - 0.5) * speed
        const y = (mouseY - 0.5) * speed
        orb.style.transform = `translate(${x}px, ${y}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    // Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(
      '.timeline-item, .skill-category, .info-card, .contact-link, .cert-item'
    )

    animatedElements.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const target = document.getElementById(id)
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Khamal Ismadie</span>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
            {['home', 'about', 'experience', 'skills', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <button className="nav-toggle" id="navToggle" onClick={toggleMenu}>
            <span style={isMenuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}></span>
            <span style={isMenuOpen ? { opacity: 0 } : {}}></span>
            <span style={isMenuOpen ? { transform: 'rotate(-45deg) translate(7px, -6px)' } : {}}></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-background">
          <canvas id="neuralCanvas" ref={canvasRef}></canvas>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Available for Projects</span>
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Khamal Ismadie</span>
            </h1>
            <p className="hero-subtitle">Tech & AI Enthusiast | Vibe Coder</p>
            <p className="hero-description">
              Crafting intelligent solutions at the intersection of AI, UX, and creative problem-solving.
              Specialized in prompt engineering, chatbots, and accessible design tools.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary" onClick={(e) => scrollToSection(e, 'contact')}>
                <span>Get in Touch</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#experience" className="btn btn-secondary" onClick={(e) => scrollToSection(e, 'experience')}>View Work</a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">14+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">52+</div>
                <div className="stat-label">Skills</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">11+</div>
                <div className="stat-label">Positions</div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Who I Am</span>
            <h2 className="section-title">About Me</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
                Experienced IT professional since 2012 with a focus on web development, design, and coding.
                Recently transitioned into AI and prompt engineering, building accessible tools at the
                intersection of AI, UX, and creative problem-solving.
              </p>
              <p className="about-detail">
                Specialized in developing chatbots, design tools, and prompt-based applications with an emphasis
                on usability and ethical innovation. My journey spans from IT specialist to business
                development, and now pioneering in the AI space.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🎯</div>
                  <div className="highlight-content">
                    <h3>Mission</h3>
                    <p>Creating accessible AI tools that empower users</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">💡</div>
                  <div className="highlight-content">
                    <h3>Innovation</h3>
                    <p>Bridging AI technology with human-centered design</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🚀</div>
                  <div className="highlight-content">
                    <h3>Growth</h3>
                    <p>Continuously learning and adapting to emerging tech</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-info">
              <div className="info-card">
                <h3>Location</h3>
                <p>📍 Bandung, West Java, Indonesia</p>
              </div>
              <div className="info-card">
                <h3>Education</h3>
                <p>🎓 Bachelor's in Information Technology</p>
                <p className="info-detail">International Open University (2021)</p>
              </div>
              <div className="info-card">
                <h3>Languages</h3>
                <p>🇮🇩 Bahasa Indonesia (Native)</p>
                <p>🇬🇧 English (Professional)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience" id="experience">
        <div className="container">
          <div className="section-header">
            <span className="section-label">My Journey</span>
            <h2 className="section-title">Work Experience</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>Vibe Coder</h3>
                    <p className="company">Fiverr · Contract</p>
                  </div>
                  <span className="timeline-date">Dec 2025 - Present</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>Prompt Engineer</h3>
                    <p className="company">FlowGPT · Freelance</p>
                  </div>
                  <span className="timeline-date">Sep 2023 - Present</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>Prompt Engineer</h3>
                    <p className="company">Promptbase · Freelance</p>
                  </div>
                  <span className="timeline-date">Jan 2025 - Present</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>UX/UI Designer</h3>
                    <p className="company">Upwork · Freelance</p>
                  </div>
                  <span className="timeline-date">Sep 2017 - Present</span>
                </div>
                <p className="timeline-description">
                  Creating wireframes, prototypes, style guides, and user flows. Designing UI elements
                  including navigation menus, search boxes, and widgets.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>Founder</h3>
                    <p className="company">MEDISQU</p>
                  </div>
                  <span className="timeline-date">Aug 2020 - Present</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>Business Development Specialist</h3>
                    <p className="company">PT. DNMR</p>
                  </div>
                  <span className="timeline-date">Jan 2019 - Present</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>Empower Canvassador</h3>
                    <p className="company">Canva · Contract</p>
                  </div>
                  <span className="timeline-date">Jan 2024 - Dec 2024</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>IT Specialist</h3>
                    <p className="company">PT. DNMR</p>
                  </div>
                  <span className="timeline-date">Dec 2012 - Jan 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What I Do</span>
            <h2 className="section-title">Skills & Expertise</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="category-icon">🤖</div>
              <h3>AI & Prompt Engineering</h3>
              <div className="skill-tags">
                <span className="skill-tag">Prompt Engineering</span>
                <span className="skill-tag">AI Development</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Chatbot Development</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="category-icon">🎨</div>
              <h3>Design</h3>
              <div className="skill-tags">
                <span className="skill-tag">UX/UI Design</span>
                <span className="skill-tag">Graphic Design</span>
                <span className="skill-tag">Adobe Photoshop</span>
                <span className="skill-tag">Adobe Illustrator</span>
                <span className="skill-tag">Interaction Design</span>
                <span className="skill-tag">User Personas</span>
                <span className="skill-tag">Branding</span>
                <span className="skill-tag">Canva</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="category-icon">💻</div>
              <h3>Development</h3>
              <div className="skill-tags">
                <span className="skill-tag">Web Development</span>
                <span className="skill-tag">Android Development</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="category-icon">📊</div>
              <h3>Business & Management</h3>
              <div className="skill-tags">
                <span className="skill-tag">Project Management</span>
                <span className="skill-tag">Strategic Planning</span>
                <span className="skill-tag">Entrepreneurship</span>
                <span className="skill-tag">Team Leadership</span>
                <span className="skill-tag">Small Business Management</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="category-icon">🚀</div>
              <h3>Digital Marketing</h3>
              <div className="skill-tags">
                <span className="skill-tag">SEO</span>
                <span className="skill-tag">Social Media Marketing</span>
                <span className="skill-tag">Data Analytics</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="category-icon">🛠️</div>
              <h3>Tools & Productivity</h3>
              <div className="skill-tags">
                <span className="skill-tag">Microsoft Office</span>
                <span className="skill-tag">Excel</span>
                <span className="skill-tag">Word</span>
              </div>
            </div>
          </div>

          <div className="certifications">
            <h3 className="certifications-title">Certifications & Learning</h3>
            <div className="cert-grid">
              <div className="cert-item">
                <div className="cert-badge">🏆</div>
                <div className="cert-info">
                  <h4>AI Foundations: Machine Learning</h4>
                  <p>LinkedIn · Jul 2025</p>
                </div>
              </div>
              <div className="cert-item">
                <div className="cert-badge">🏆</div>
                <div className="cert-info">
                  <h4>UX Foundations: Research</h4>
                  <p>LinkedIn · Mar 2023</p>
                </div>
              </div>
              <div className="cert-item">
                <div className="cert-badge">🎓</div>
                <div className="cert-info">
                  <h4>Professional Academy React Developer</h4>
                  <p>Digital Talent Scholarship · May-Aug 2022</p>
                </div>
              </div>
              <div className="cert-item">
                <div className="cert-badge">🎓</div>
                <div className="cert-info">
                  <h4>Professional Academy UI/UX Design</h4>
                  <p>Digital Talent Scholarship · Sep-Nov 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Let's Connect</span>
            <h2 className="section-title">Get in Touch</h2>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <p className="contact-intro">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                vision.
              </p>
              <div className="contact-links">
                <a href="https://www.linkedin.com/in/khamal-ismadie/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="link-icon">💼</div>
                  <div className="link-content">
                    <h4>LinkedIn</h4>
                    <p>Connect with me professionally</p>
                  </div>
                </a>
                <a href="https://www.fiverr.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="link-icon">🎯</div>
                  <div className="link-content">
                    <h4>Fiverr</h4>
                    <p>Hire me for your project</p>
                  </div>
                </a>
                <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="link-icon">💚</div>
                  <div className="link-content">
                    <h4>Upwork</h4>
                    <p>View my freelance profile</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="contact-cta">
              <div className="cta-card">
                <h3>Ready to work together?</h3>
                <p>Let's create something amazing</p>
                <a href="mailto:ismadiepro@gmail.com" className="btn btn-primary">
                  <span>Send Email</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">Khamal Ismadie</div>
              <p>Tech & AI Enthusiast | Vibe Coder</p>
            </div>
            <div className="footer-links">
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
              <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a>
              <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Khamal Ismadie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
