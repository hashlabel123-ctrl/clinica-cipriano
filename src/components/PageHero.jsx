import { motion } from 'framer-motion'

export default function PageHero({ label, title, titleGold, subtitle, image }) {
  return (
    <section style={{
      minHeight: '55vh',
      background: '#080C14',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {image && (
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src={image}
            alt=""
            onError={e => { e.currentTarget.style.display = 'none' }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3, display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,12,20,0.7) 0%, rgba(8,12,20,0.9) 100%)' }} />
        </div>
      )}

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '120px 48px 80px', maxWidth: 800, margin: '0 auto' }}>
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
          style={{ background: '#C8A96E', height: 1, margin: '32px auto 0' }}
        />
      </div>
    </section>
  )
}
