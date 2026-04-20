import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TESTIMONIALS = [
  { quote: 'Gostei muito do resultado. A cirurgia foi tranquila e profissional.', name: 'Bruno Alves', city: 'Rio de Janeiro' },
  { quote: 'A cirurgia foi super tranquila e não senti nenhuma dor. Equipe incrível.', name: 'Rafael Andrade', city: 'São Paulo' },
  { quote: 'Amei o resultado, estou com um novo sorriso. Me sinto outra pessoa.', name: 'Eduarda Barros', city: 'Rio de Janeiro' },
  { quote: 'Todos da clínica muito atenciosos e adorei o resultado. Recomendo!', name: 'Vitor Lima', city: 'São Paulo' },
]

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {Array(5).fill(0).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C8A96E">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    if (paused) return
    timer.current = setInterval(() => {
      setCurrent(c => (c + 1) % TESTIMONIALS.length)
    }, 4000)
    return () => clearInterval(timer.current)
  }, [paused])

  const visible = [
    TESTIMONIALS[current % TESTIMONIALS.length],
    TESTIMONIALS[(current + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(current + 2) % TESTIMONIALS.length],
  ]

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {visible.map((t, i) => (
        <motion.div
          key={`${current}-${i}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="glass-card p-10 flex flex-col"
        >
          <Stars />
          <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 20, color: '#EDE8E0', lineHeight: 1.6, flex: 1 }}>
            "{t.quote}"
          </p>
          <div className="mt-6 flex flex-col gap-1">
            <span style={{ fontFamily: 'Outfit', fontSize: 14, color: '#C8A96E' }}>{t.name}</span>
            <span style={{ fontFamily: 'Outfit', fontSize: 12, color: '#9A8A72' }}>{t.city}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
