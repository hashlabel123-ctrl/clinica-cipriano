import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function TreatmentCard({ num, title, description, image, to, gradient = false }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

  const handleMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleMouseLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 800 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group glass-card p-8 flex flex-col gap-4 cursor-pointer"
    >
      <span style={{ fontFamily: 'Outfit', fontWeight: 200, fontSize: 48, color: 'rgba(200,169,110,0.2)', lineHeight: 1 }}>
        {String(num).padStart(2, '0')}
      </span>

      {gradient ? (
        <div className="w-full h-48 rounded-sm flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #F8F5F0 0%, #C8A96E33 100%)' }}>
          <span style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', color: '#C8A96E', fontSize: 18 }}>
            Harmonização Facial
          </span>
        </div>
      ) : (
        <img
          src={image}
          alt={title}
         
          className="w-full h-48 object-cover rounded-sm"
          style={{ filter: 'grayscale(30%)', transition: 'filter 0.3s' }}
          onMouseEnter={e => e.target.style.filter = 'grayscale(0%)'}
          onMouseLeave={e => e.target.style.filter = 'grayscale(30%)'}
        />
      )}

      <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: 22, color: '#EDE8E0', margin: 0 }}>{title}</h3>
      <p style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#9A8A72', lineHeight: 1.7, margin: 0 }}>{description}</p>

      <div className="card-line mt-1" />

      <Link
        to={to}
        style={{ fontFamily: 'Outfit', fontSize: 11, color: '#C8A96E', letterSpacing: '0.15em', textDecoration: 'none' }}
      >
        VER TRATAMENTO →
      </Link>
    </motion.div>
  )
}
