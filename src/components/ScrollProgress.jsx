import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0
      if (barRef.current) barRef.current.style.width = pct + '%'
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, height: 2,
      zIndex: 9999, background: 'rgba(200,169,110,0.15)',
    }}>
      <div
        ref={barRef}
        style={{
          height: '100%', width: '0%',
          background: 'linear-gradient(to right, #A88B5A, #E8C97A, #C8A96E)',
          transition: 'width 0.1s linear',
        }}
      />
    </div>
  )
}
