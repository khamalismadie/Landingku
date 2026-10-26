import { useEffect, useRef } from 'react'

export function useScrollAnimation(selector, options = {}) {
  useEffect(() => {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) return

    const animatedElements = document.querySelectorAll(selector)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, {
      threshold: defaultOptions.threshold,
      rootMargin: defaultOptions.rootMargin,
    })

    animatedElements.forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [selector, options.threshold, options.rootMargin])
}
