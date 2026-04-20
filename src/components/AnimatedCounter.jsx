import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { easeOutCubic } from '../utils/easing'

export default function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const start = performance.now()
    const num = parseFloat(target)
    const update = now => {
      const elapsed = now - start
      const t = Math.min(elapsed / duration, 1)
      setCount(Math.floor(easeOutCubic(t) * num))
      if (t < 1) requestAnimationFrame(update)
      else setCount(num)
    }
    requestAnimationFrame(update)
  }, [inView, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}
