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
  { label: 'Lentes de Contato Dental', to: '/tratamentos/lentes' },
  { label: 'Clínica Geral', to: '/tratamentos/clinica-geral' },
  { label: 'Harmonização Facial', to: '/tratamentos/harmonizacao' },
]

const NAV_LINKS = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Tratamentos', to: '/tratamentos', hasDropdown: true },
  { label: 'Unidades', to: '/unidades' },
  { label: 'Contato', to: '/contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [mobile, setMobile] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobile(false) }, [location])

  return (
    <>
      {/* Top bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-2 px-6"
        style={{ background: 'rgba(8,12,20,0.9)', borderBottom: '1px solid rgba(200,169,110,0.1)' }}
      >
        <div className="flex items-center gap-6">
          <span style={{ fontFamily: 'Outfit', fontWeight: 300, fontSize: 11, color: '#C8A96E', letterSpacing: '0.2em' }}>
            RJ · SP
          </span>
          <span style={{ color: 'rgba(200,169,110,0.3)', fontSize: 10 }}>·</span>
          <a
            href="mailto:ciprianoodontologia@gmail.com"
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'Outfit', fontWeight: 300, fontSize: 11, color: '#9A8A72', textDecoration: 'none', letterSpacing: '0.05em' }}
          >
            <Mail size={10} color="#C8A96E" />
            ciprianoodontologia@gmail.com
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className="fixed left-0 right-0 z-40 flex items-center justify-between px-8 lg:px-16 transition-all duration-300"
        style={{
          top: 32,
          height: 72,
          background: scrolled ? 'rgba(8,12,20,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(200,169,110,0.12)' : 'none',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="flex flex-col items-start">
            <span style={{ fontFamily: 'Cormorant Garamond', fontWeight: 600, fontSize: 22, color: '#C8A96E', letterSpacing: '0.2em' }}>
              CIPRIANO
            </span>
            <div style={{ height: 1, background: '#C8A96E', width: '100%', marginTop: 2, opacity: 0.6 }} />
            <span style={{ fontFamily: 'Outfit', fontWeight: 200, fontSize: 9, color: '#9A8A72', letterSpacing: '0.2em', marginTop: 3 }}>
              ODONTOLOGIA & ESTÉTICA
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <div
              key={link.to}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setDropdown(true)}
              onMouseLeave={() => link.hasDropdown && setDropdown(false)}
            >
              <Link
                to={link.to}
                style={{
                  fontFamily: 'Outfit',
                  fontWeight: 300,
                  fontSize: 13,
                  letterSpacing: '0.15em',
                  color: location.pathname === link.to ? '#C8A96E' : '#EDE8E0',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { if (location.pathname !== link.to) e.currentTarget.style.color = '#C8A96E' }}
                onMouseLeave={e => { if (location.pathname !== link.to) e.currentTarget.style.color = '#EDE8E0' }}
              >
                {link.label.toUpperCase()}
              </Link>

              {/* Treatments Dropdown */}
              <AnimatePresence>
                {link.hasDropdown && dropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-8 left-0 p-6 rounded-sm"
                    style={{
                      background: 'rgba(8,12,20,0.98)',
                      border: '1px solid rgba(200,169,110,0.2)',
                      backdropFilter: 'blur(20px)',
                      minWidth: 480,
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 4,
                    }}
                  >
                    {TREATMENTS.map(t => (
                      <Link
                        key={t.to + t.label}
                        to={t.to}
                        className="px-4 py-3 flex items-center gap-3 group rounded-sm transition-colors"
                        style={{ textDecoration: 'none' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,169,110,0.08)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      >
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#C8A96E', opacity: 0.5 }} />
                        <span style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#EDE8E0' }}>{t.label}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/5521973623797"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block px-6 py-3 text-xs transition-all duration-300"
          style={{
            fontFamily: 'Outfit', fontWeight: 400, letterSpacing: '0.15em',
            border: '1px solid #C8A96E', color: '#C8A96E', textDecoration: 'none',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#C8A96E'; e.currentTarget.style.color = '#080C14' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C8A96E' }}
        >
          AGENDAR CONSULTA
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMobile(o => !o)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <motion.span
            animate={mobile ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px"
            style={{ background: '#C8A96E' }}
          />
          <motion.span
            animate={mobile ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-px"
            style={{ background: '#C8A96E' }}
          />
          <motion.span
            animate={mobile ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px"
            style={{ background: '#C8A96E' }}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-8"
            style={{ background: 'rgba(8,12,20,0.98)' }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={link.to}
                  style={{
                    fontFamily: 'Cormorant Garamond',
                    fontStyle: 'italic',
                    fontSize: 36,
                    color: '#EDE8E0',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              href="https://wa.me/5521973623797"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 mt-4"
              style={{
                fontFamily: 'Outfit', fontSize: 12, letterSpacing: '0.15em',
                border: '1px solid #C8A96E', color: '#C8A96E', textDecoration: 'none',
              }}
            >
              AGENDAR CONSULTA
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
