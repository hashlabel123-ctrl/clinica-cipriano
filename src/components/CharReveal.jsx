import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CharReveal({ text, className = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <span ref={ref} className={className}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="char-span"
          style={{
            animationDelay: inView ? `${delay + i * 0.03}s` : '9999s',
            animationPlayState: inView ? 'running' : 'paused',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}
