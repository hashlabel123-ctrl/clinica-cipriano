import { motion } from 'framer-motion'

export default function PageHero({ label, title, titleGold, subtitle, image }) {
  return (
    <section
      className="relative flex items-center justify-center grain"
      style={{
        minHeight: '55vh',
        background: image
          ? 'transparent'
          : '#080C14',
      }}
    >
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(8,12,20,0.7) 0%, rgba(8,12,20,0.9) 100%)' }} />
        </div>
      )}

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: 'Outfit', fontSize: 11, letterSpacing: '0.25em', color: '#C8A96E', textTransform: 'uppercase', marginBottom: 24 }}
          >
            {label}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(42px, 7vw, 72px)', color: '#EDE8E0', margin: 0, lineHeight: 1.1 }}
        >
          {title}{' '}
          {titleGold && <span style={{ color: '#C8A96E' }}>{titleGold}</span>}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ fontFamily: 'DM Sans', fontSize: 17, color: '#9A8A72', marginTop: 20, lineHeight: 1.7 }}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-8 h-px"
          style={{ background: '#C8A96E' }}
        />
      </div>
    </section>
  )
}
