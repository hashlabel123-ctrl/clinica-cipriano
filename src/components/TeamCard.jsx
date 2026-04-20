import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
const InstagramIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function TeamCard({ initials, name, role, instagram, bio, cro }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 })

  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, perspective: 800 }}
      className="flex flex-col gap-6"
    >
      {/* Photo placeholder */}
      {/* Substituir por foto profissional */}
      <div
        className="w-full rounded-sm flex flex-col items-center justify-center gap-3 relative overflow-hidden"
        style={{
          height: 380,
          background: 'radial-gradient(ellipse at center, #131C2E 0%, #0D1421 100%)',
          border: '1px solid rgba(200,169,110,0.3)',
        }}
      >
        <span style={{ fontFamily: 'Cormorant Garamond', fontSize: 80, color: 'rgba(200,169,110,0.25)', lineHeight: 1 }}>
          {initials}
        </span>
        <span style={{ fontFamily: 'Outfit', fontWeight: 300, color: '#EDE8E0', fontSize: 16 }}>{name}</span>
        <span style={{ fontFamily: 'Outfit', fontWeight: 200, color: '#C8A96E', fontSize: 12, letterSpacing: '0.1em' }}>
          @{instagram}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: 28, color: '#EDE8E0', margin: 0 }}>{name}</h3>
          {cro && <p style={{ fontFamily: 'Outfit', fontSize: 11, color: '#9A8A72', margin: '4px 0 0', letterSpacing: '0.1em' }}>CRO {cro}</p>}
        </div>
        <p style={{ fontFamily: 'Outfit', fontSize: 12, color: '#C8A96E', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{role}</p>
        <p style={{ fontFamily: 'DM Sans', fontSize: 14, color: '#9A8A72', lineHeight: 1.8, margin: 0 }}>{bio}</p>
        <a
          href={`https://instagram.com/${instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 mt-2"
          style={{ color: '#C8A96E', textDecoration: 'none', fontFamily: 'Outfit', fontSize: 13 }}
        >
          <InstagramIcon size={14} />
          @{instagram}
        </a>
      </div>
    </motion.div>
  )
}
