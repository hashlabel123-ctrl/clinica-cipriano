import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function GoldLine({ className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ width: 0 }}
      animate={inView ? { width: 60 } : { width: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`h-px bg-gold ${className}`}
    />
  )
}
