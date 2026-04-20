import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTASection({ title = 'Agende sua consulta', subtitle = 'Duas unidades. Um padrão: excelência.' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 text-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #080C14 0%, #0D1421 100%)' }}
    >
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 h-px w-3/4"
        style={{ background: 'linear-gradient(to right, transparent, #C8A96E, transparent)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
          style={{ fontFamily: 'Outfit', fontSize: 11, letterSpacing: '0.25em', color: '#C8A96E', textTransform: 'uppercase' }}
        >
          AGENDE SUA AVALIAÇÃO
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 1.1, margin: 0 }}
        >
          <span style={{ color: '#EDE8E0' }}>Seu novo sorriso</span><br />
          <span style={{ color: '#C8A96E' }}>começa hoje.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.4 }}
          style={{ fontFamily: 'DM Sans', color: '#9A8A72', fontSize: 16 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <a
            href="https://wa.me/5521975370857"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-sm transition-all duration-300 hover:opacity-90"
            style={{
              fontFamily: 'Outfit', fontWeight: 400, letterSpacing: '0.1em',
              border: '1px solid #C8A96E', color: '#C8A96E', textDecoration: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#C8A96E'; e.currentTarget.style.color = '#080C14' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C8A96E' }}
          >
            WHATSAPP RJ — (21) 97537-0857
          </a>
          <a
            href="https://wa.me/5511916066384"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-sm transition-all duration-300"
            style={{
              fontFamily: 'Outfit', fontWeight: 400, letterSpacing: '0.1em',
              border: '1px solid #C8A96E', color: '#C8A96E', textDecoration: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#C8A96E'; e.currentTarget.style.color = '#080C14' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C8A96E' }}
          >
            WHATSAPP SP — (11) 91606-6384
          </a>
        </motion.div>
      </div>
    </section>
  )
}
