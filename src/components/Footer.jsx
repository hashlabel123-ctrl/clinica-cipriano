import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const NAV = ['Início', 'Sobre', 'Tratamentos', 'Unidades', 'Contato']
const NAV_TO = ['/', '/sobre', '/tratamentos', '/unidades', '/contato']
const TREATS = [
  ['Implantes', '/tratamentos/implante'],
  ['Facetas', '/tratamentos/facetas'],
  ['Harmonização', '/tratamentos/harmonizacao'],
  ['Clareamento', '/tratamentos/clareamento'],
  ['Reabilitação', '/tratamentos/reabilitacao'],
  ['Lentes', '/tratamentos/lentes'],
  ['Clínica Geral', '/tratamentos/clinica-geral'],
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#04060B' }}>
      {/* Watermark */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none"
        style={{ fontFamily: 'Cormorant Garamond', fontSize: 200, color: 'rgba(200,169,110,0.015)', lineHeight: 1, whiteSpace: 'nowrap' }}
      >
        CIPRIANO
      </div>

      {/* Gold top line */}
      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #C8A96E, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Col 1: Brand */}
        <div className="flex flex-col gap-5">
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond', fontWeight: 600, fontSize: 24, color: '#C8A96E', letterSpacing: '0.2em' }}>
              CIPRIANO
            </div>
            <div style={{ height: 1, background: '#C8A96E', opacity: 0.4, marginTop: 4 }} />
            <div style={{ fontFamily: 'Outfit', fontWeight: 200, fontSize: 10, color: '#9A8A72', letterSpacing: '0.2em', marginTop: 6 }}>
              ODONTOLOGIA & ESTÉTICA DE ALTO PADRÃO
            </div>
          </div>
          <p style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#9A8A72', lineHeight: 1.8 }}>
            RJ · SP
          </p>
          <div className="flex gap-4 mt-2">
            {[
              { href: 'https://instagram.com/clinica.cipriano', label: '@clinica.cipriano' },
              { href: 'https://instagram.com/dr.borsato', label: '@dr.borsato' },
              { href: 'https://instagram.com/iscipriano', label: '@iscipriano' },
            ].map(s => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="transition-opacity hover:opacity-70"
              >
                <span style={{ color: '#C8A96E' }}><InstagramIcon size={16} /></span>
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Nav */}
        <div className="flex flex-col gap-4">
          <span style={{ fontFamily: 'Outfit', fontSize: 10, letterSpacing: '0.25em', color: '#C8A96E', textTransform: 'uppercase' }}>
            Navegação
          </span>
          {NAV.map((n, i) => (
            <Link
              key={n}
              to={NAV_TO[i]}
              style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#9A8A72', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#EDE8E0'}
              onMouseLeave={e => e.currentTarget.style.color = '#9A8A72'}
            >
              {n}
            </Link>
          ))}
        </div>

        {/* Col 3: Treatments */}
        <div className="flex flex-col gap-4">
          <span style={{ fontFamily: 'Outfit', fontSize: 10, letterSpacing: '0.25em', color: '#C8A96E', textTransform: 'uppercase' }}>
            Tratamentos
          </span>
          {TREATS.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#9A8A72', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#EDE8E0'}
              onMouseLeave={e => e.currentTarget.style.color = '#9A8A72'}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Col 4: Contact */}
        <div className="flex flex-col gap-4">
          <span style={{ fontFamily: 'Outfit', fontSize: 10, letterSpacing: '0.25em', color: '#C8A96E', textTransform: 'uppercase' }}>
            Contato
          </span>
          <a
            href="mailto:ciprianoodontologia@gmail.com"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#9A8A72', textDecoration: 'none' }}
          >
            <Mail size={13} color="#C8A96E" />
            ciprianoodontologia@gmail.com
          </a>
          <a
            href="https://wa.me/5521975370857"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#9A8A72', textDecoration: 'none' }}
          >
            <Phone size={13} color="#C8A96E" />
            RJ: +55 21 97537-0857
          </a>
          <a
            href="https://wa.me/5511916066384"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#9A8A72', textDecoration: 'none' }}
          >
            <Phone size={13} color="#C8A96E" />
            SP: +55 11 91606-6384
          </a>
          <a
            href="https://instagram.com/clinica.cipriano"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#9A8A72', textDecoration: 'none' }}
          >
            <Instagram size={13} color="#C8A96E" />
            @clinica.cipriano
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="relative z-10 px-8 py-6 text-center"
        style={{ borderTop: '1px solid rgba(200,169,110,0.08)' }}
      >
        <p style={{ fontFamily: 'Outfit', fontSize: 11, color: '#9A8A72', letterSpacing: '0.05em', margin: 0 }}>
          © 2025 Clínica Cipriano. Todos os profissionais possuem registros ativos no Conselho Federal de Odontologia.
        </p>
      </div>
    </footer>
  )
}
