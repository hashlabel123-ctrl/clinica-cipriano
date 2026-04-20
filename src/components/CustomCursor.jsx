import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const mouse = useRef({ x: -100, y: -100 })
  const pos = useRef({ x: -100, y: -100 })
  const hovering = useRef(false)
  const raf = useRef(null)

  useEffect(() => {
    // Touch devices: hide cursor
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = e => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    const onEnter = () => { hovering.current = true }
    const onLeave = () => { hovering.current = false }

    window.addEventListener('mousemove', onMove, { passive: true })

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    addHoverListeners()

    const loop = () => {
      // Fast lerp — 0.25 so ring follows closely, no perceptible lag
      pos.current.x += (mouse.current.x - pos.current.x) * 0.25
      pos.current.y += (mouse.current.y - pos.current.y) * 0.25

      const dot = dotRef.current
      const ring = ringRef.current

      if (dot) {
        dot.style.transform = `translate(${mouse.current.x - 4}px,${mouse.current.y - 4}px)`
        dot.style.opacity = hovering.current ? '0' : '1'
      }
      if (ring) {
        const s = hovering.current ? 56 : 36
        ring.style.transform = `translate(${pos.current.x - s / 2}px,${pos.current.y - s / 2}px)`
        ring.style.width = s + 'px'
        ring.style.height = s + 'px'
        ring.style.opacity = hovering.current ? '0.5' : '1'
        ring.style.borderColor = hovering.current ? 'rgba(200,169,110,0.8)' : '#C8A96E'
      }

      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 99999,
          width: 8, height: 8, borderRadius: '50%',
          background: '#C8A96E', pointerEvents: 'none',
          transition: 'opacity 0.2s',
          willChange: 'transform',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 99998,
          borderRadius: '50%', pointerEvents: 'none',
          border: '1px solid #C8A96E',
          transition: 'width 0.25s ease, height 0.25s ease, opacity 0.2s, border-color 0.2s',
          willChange: 'transform',
        }}
      />
    </>
  )
}
