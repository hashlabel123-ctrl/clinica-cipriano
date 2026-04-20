import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail } from 'lucide-react'

const TREATMENTS = [
  { label: 'Implantes Dentários', to: '/tratamentos/implante' },
  { label: 'Facetas de Resina', to: '/tratamentos/facetas' },
  { label: 'Harmonização Orofacial', to: '/tratamentos/harmonizacao' },
  { label: 'Clareamento Dental', to: '/tratamentos/clareamento' },
  { label: 'Reabilitação Oral', to: '/tratamentos/reabilitacao' },
  { label: 'Lentes de Contato', to: '/tratamentos/lentes' },
  { label: 'Clínica Geral', to: '/tratamentos/clinica-geral' },
  { label: 'Harmonização Facial', to: '/tratamentos/harmonizacao' },
]

const NAV = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Tratamentos', to: '/tratamentos', dropdown: true },
  { label: 'Unidades', to: '/unidades' },
  { label: 'Contato', to: '/contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [mobile, setMobile] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setMobile(false), [location])

  return (
    <>
      {/* Top strip */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '8px 24px', gap: 20,
        background: 'rgba(4,6,11,0.95)',
        borderBottom: '1px solid rgba(200,169,110,0.08)',
      }}>
        <span style={{ fontFamily: 'Outfit', fontWeight: 300, fontSize: 10, color: '#C8A96E', letterSpacing: '0.3em' }}>
          RJ · SP
        </span>
        <span style={{ color: 'rgba(200,169,110,0.2)', fontSize: 10 }}>|</span>
        <a href="mailto:ciprianoodontologia@gmail.com" style={{
          display: 'flex', alignItems: 'center', gap: 6,
          fontFamily: 'Outfit', fontWeight: 300, fontSize: 10,
          color: '#9A8A72', textDecoration: 'none', letterSpacing: '0.05em',
        }}>
          <Mail size={9} color="#C8A96E" />
          ciprianoodontologia@gmail.com
        </a>
      </div>

      {/* Main nav */}
      <nav style={{
        position: 'fixed', top: 32, left: 0, right: 0, zIndex: 99,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 64px',
        height: 72,
        transition: 'background 0.4s ease, border-color 0.4s ease',
        background: scrolled ? 'rgba(8,12,20,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,169,110,0.1)' : '1px solid transparent',
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 3 }}>
          <span style={{ fontFamily: 'Cormorant Garamond', fontWeight: 600, fontSize: 20, color: '#C8A96E', letterSpacing: '0.25em' }}>
            CIPRIANO
          </span>
          <div style={{ height: 1, background: 'linear-gradient(to right, #C8A96E, transparent)', opacity: 0.7 }} />
          <span style={{ fontFamily: 'Outfit', fontWeight: 200, fontSize: 8, color: '#9A8A72', letterSpacing: '0.22em' }}>
            ODONTOLOGIA & ESTÉTICA
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }} className="hidden lg:flex">
          {NAV.map(link => (
            <div
              key={link.to}
              style={{ position: 'relative' }}
              onMouseEnter={() => link.dropdown && setDropdown(true)}
              onMouseLeave={() => link.dropdown && setDropdown(false)}
            >
              <Link
                to={link.to}
                className={`nav-link ${location.pathname === link.to || (link.dropdown && location.pathname.startsWith('/tratamentos')) ? 'active' : ''}`}
              >
                {link.label}
              </Link>

              <AnimatePresence>
                {link.dropdown && dropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    style={{
                      position: 'absolute', top: 28, left: -16,
                      background: 'rgba(6,9,16,0.98)',
                      border: '1px solid rgba(200,169,110,0.2)',
                      backdropFilter: 'blur(24px)',
                      padding: '8px 0',
                      minWidth: 260,
                      boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
                    }}
                  >
                    {TREATMENTS.map((t, i) => (
                      <Link
                        key={i}
                        to={t.to}
                        style={{ textDecoration: 'none' }}
                      >
                        <div style={{
                          padding: '10px 24px',
                          fontFamily: 'DM Sans', fontSize: 13, color: '#9A8A72',
                          display: 'flex', alignItems: 'center', gap: 10,
                          transition: 'color 0.2s, background 0.2s',
                        }}
                          onMouseEnter={e => { e.currentTarget.style.color = '#EDE8E0'; e.currentTarget.style.background = 'rgba(200,169,110,0.06)' }}
                          onMouseLeave={e => { e.currentTarget.style.color = '#9A8A72'; e.currentTarget.style.background = 'transparent' }}
                        >
                          <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#C8A96E', flexShrink: 0 }} />
                          {t.label}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a
            href="https://wa.me/5521973623797"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline hidden lg:inline-block"
            style={{ padding: '10px 24px', fontSize: 10 }}
          >
            Agendar Consulta
          </a>

          <button
            onClick={() => setMobile(o => !o)}
            className="lg:hidden"
            style={{ background: 'none', border: 'none', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                animate={mobile
                  ? i === 0 ? { rotate: 45, y: 10 }
                    : i === 1 ? { opacity: 0 }
                    : { rotate: -45, y: -10 }
                  : { rotate: 0, y: 0, opacity: 1 }
                }
                style={{ display: 'block', width: 22, height: 1, background: '#C8A96E' }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 98,
              background: 'rgba(4,6,11,0.98)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 36,
            }}
          >
            {NAV.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Link
                  to={link.to}
                  style={{
                    fontFamily: 'Cormorant Garamond', fontStyle: 'italic',
                    fontSize: 40, color: '#EDE8E0', textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              href="https://wa.me/5521973623797"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Agendar Consulta
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
