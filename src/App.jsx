import { useState, useEffect, useCallback } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'services', 'contact']

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const sectionHeight = section.offsetHeight
          const sectionTop = section.offsetTop - 150
          if (currentScroll > sectionTop && currentScroll <= sectionTop + sectionHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = useCallback((id) => {
    const target = document.getElementById(id)
    if (target) {
      const navHeight = document.querySelector('.nav')?.offsetHeight ?? 72
      window.scrollTo({
        top: target.offsetTop - navHeight,
        behavior: 'smooth'
      })
    }
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      <main id="main-content">
        <Hero onNavigate={scrollToSection} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <Contact onNavigate={scrollToSection} />
      </main>
      <Footer onNavigate={scrollToSection} />
    </>
  )
}

export default App
