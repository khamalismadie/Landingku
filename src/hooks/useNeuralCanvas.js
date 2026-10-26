import { useEffect, useRef, useCallback } from 'react'

export function useNeuralCanvas(canvasRef, options = {}) {
  const {
    particleDensity = 15000,
    maxDistance = 120,
    mouseRadius = 150,
    particleColor = 'rgba(124, 58, 237, 0.8)',
    lineColor = 'rgba(124, 58, 237, 0.3)',
  } = options

  const animationRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: null, y: null, radius: mouseRadius })
  const lastTimeRef = useRef(0)
  const fpsInterval = 1000 / 60 // 60fps cap

  const initParticles = useCallback((canvas) => {
    const particles = []
    const numberOfParticles = Math.floor((canvas.width * canvas.height) / particleDensity)
    for (let i = 0; i < numberOfParticles; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size: Math.random() * 3 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        density: Math.random() * 30 + 1,
      })
    }
    particlesRef.current = particles
  }, [particleDensity])

  const drawParticle = useCallback((ctx, particle) => {
    ctx.fillStyle = particleColor
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
  }, [particleColor])

  const updateParticle = useCallback((particle, mouse, canvas) => {
    if (mouse.x === null || mouse.y === null) {
      // Return to base position when mouse is out
      if (particle.x !== particle.baseX) {
        particle.x += (particle.baseX - particle.x) * 0.1
      }
      if (particle.y !== particle.baseY) {
        particle.y += (particle.baseY - particle.y) * 0.1
      }
    } else {
      const dx = mouse.x - particle.x
      const dy = mouse.y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const maxDistance = mouse.radius

      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance
        const forceDirectionX = dx / distance || 0
        const forceDirectionY = dy / distance || 0
        particle.x -= forceDirectionX * force * particle.density
        particle.y -= forceDirectionY * force * particle.density
      } else {
        if (particle.x !== particle.baseX) {
          particle.x += (particle.baseX - particle.x) * 0.1
        }
        if (particle.y !== particle.baseY) {
          particle.y += (particle.baseY - particle.y) * 0.1
        }
      }
    }

    particle.x += particle.vx
    particle.y += particle.vy

    if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
    if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
  }, [])

  const connectParticles = useCallback((ctx, particles) => {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x
        const dy = particles[a].y - particles[b].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance) {
          const opacity = 1 - distance / maxDistance
          ctx.strokeStyle = lineColor.replace('0.3', String(opacity * 0.3))
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(particles[a].x, particles[a].y)
          ctx.lineTo(particles[b].x, particles[b].y)
          ctx.stroke()
        }
      }
    }
  }, [maxDistance, lineColor])

  const animate = useCallback((ctx, canvas) => {
    const now = performance.now()
    const delta = now - lastTimeRef.current

    if (delta >= fpsInterval) {
      lastTimeRef.current = now - (delta % fpsInterval)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current

      particles.forEach(p => {
        updateParticle(p, mouse, canvas)
        drawParticle(ctx, p)
      })
      connectParticles(ctx, particles)
    }

    animationRef.current = requestAnimationFrame(() => animate(ctx, canvas))
  }, [updateParticle, drawParticle, connectParticles])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles(canvas)
    }

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.x
      mouseRef.current.y = e.y
    }

    const handleMouseOut = () => {
      mouseRef.current.x = null
      mouseRef.current.y = null
    }

    resizeCanvas()
    animate(ctx, canvas)

    window.addEventListener('resize', resizeCanvas, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseOut)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [canvasRef, initParticles, animate])

  return null
}
