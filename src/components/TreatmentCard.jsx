import { Link } from 'react-router-dom'

const GRADIENTS = [
  'linear-gradient(135deg, #0D1421 0%, #1A2540 70%, rgba(200,169,110,0.18) 100%)',
  'linear-gradient(135deg, #111827 0%, #1C2B44 70%, rgba(200,169,110,0.14) 100%)',
  'linear-gradient(135deg, #0A1628 0%, #162038 70%, rgba(200,169,110,0.22) 100%)',
  'linear-gradient(135deg, #0F1B2E 0%, #192840 70%, rgba(200,169,110,0.16) 100%)',
]

export default function TreatmentCard({ num, title, desc, description, img, image, to }) {
  const text = description || desc || ''
  const src = image || img || null
  const idx = ((Number(num) || 1) - 1) % GRADIENTS.length

  return (
    <Link to={to} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        style={{
          background: '#0D1421',
          border: '1px solid rgba(200,169,110,0.12)',
          padding: 28,
          transition: 'transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.35s ease, border-color 0.35s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-8px)'
          e.currentTarget.style.borderColor = 'rgba(200,169,110,0.4)'
          e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.5)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.borderColor = 'rgba(200,169,110,0.12)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        <div style={{ fontFamily: 'Outfit', fontWeight: 200, fontSize: 40, color: 'rgba(200,169,110,0.18)', lineHeight: 1, marginBottom: 16 }}>
          {String(num).padStart(2, '0')}
        </div>

        <div style={{
          height: 200, marginBottom: 20, borderRadius: 2, overflow: 'hidden',
          background: GRADIENTS[idx],
          position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {src ? (
            <img
              src={src}
              alt={title}
              onError={e => { e.currentTarget.style.display = 'none' }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0, filter: 'grayscale(15%) brightness(0.9)' }}
            />
          ) : null}
          <span style={{
            fontFamily: 'Cormorant Garamond', fontStyle: 'italic',
            fontSize: 13, color: 'rgba(200,169,110,0.5)',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            position: 'relative', zIndex: 1,
          }}>
            {title}
          </span>
        </div>

        <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: 21, color: '#EDE8E0', margin: '0 0 10px', lineHeight: 1.2 }}>
          {title}
        </h3>
        <p style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#9A8A72', lineHeight: 1.7, margin: '0 0 18px' }}>
          {text}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 24, height: 1, background: '#C8A96E' }} />
          <span style={{ fontFamily: 'Outfit', fontSize: 10, color: '#C8A96E', letterSpacing: '0.15em' }}>
            VER TRATAMENTO →
          </span>
        </div>
      </div>
    </Link>
  )
}
