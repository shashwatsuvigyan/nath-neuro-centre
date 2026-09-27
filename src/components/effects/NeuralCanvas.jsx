import { useEffect, useRef } from 'react'

/**
 * Ambient interactive neural background.
 * Drifting nodes connected by glowing synapses, gently attracted to the cursor.
 * Purely decorative — the medical message stays in the foreground.
 */
export default function NeuralCanvas({ className = '', density = 90, interactive = true }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    let raf = 0
    let width = 0
    let height = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const mouse = { x: -9999, y: -9999 }
    const nodes = []

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    const seed = () => {
      nodes.length = 0
      const count = Math.max(24, Math.floor((width * height) / (1000 * (1000 / density))))
      for (let i = 0; i < count; i += 1) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.6 + 0.6,
          gold: Math.random() > 0.82,
        })
      }
    }

    const link = (a, b, dist) => {
      const max = 130
      if (dist > max) return
      const t = 1 - dist / max
      ctx.strokeStyle = a.gold && b.gold
        ? `rgba(212, 175, 55, ${t * 0.28})`
        : `rgba(0, 242, 254, ${t * 0.3})`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(a.x, a.y)
      ctx.lineTo(b.x, b.y)
      ctx.stroke()
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy

        if (interactive) {
          const dx = mouse.x - n.x
          const dy = mouse.y - n.y
          const d = Math.hypot(dx, dy)
          if (d < 160 && d > 0.01) {
            const pull = (160 - d) / 160
            n.x += (dx / d) * pull * 1.6
            n.y += (dy / d) * pull * 1.6
          }
        }

        if (n.x < -20) n.x = width + 20
        if (n.x > width + 20) n.x = -20
        if (n.y < -20) n.y = height + 20
        if (n.y > height + 20) n.y = -20
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          if (Math.abs(dx) > 130 || Math.abs(dy) > 130) continue
          link(a, b, Math.hypot(dx, dy))
        }
      }

      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = n.gold ? 'rgba(228, 193, 88, 0.85)' : 'rgba(0, 242, 254, 0.9)'
        ctx.fill()
      }

      raf = window.requestAnimationFrame(draw)
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    draw()

    const ro = new ResizeObserver(() => resize())
    if (canvas.parentElement) ro.observe(canvas.parentElement)
    if (interactive) {
      window.addEventListener('mousemove', onMove)
      window.addEventListener('mouseout', onLeave)
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [density, interactive])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ pointerEvents: 'none' }}
    />
  )
}