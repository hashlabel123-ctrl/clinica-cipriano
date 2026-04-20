import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);
import PageHero from '../components/PageHero'

function FloatField({ label, type = 'text', name, as, options, rows }) {
  const [val, setVal] = useState('')
  const Tag = as || 'input'
  return (
    <div className="float-label-group">
      {as === 'select' ? (
        <>
          <select name={name} value={val} onChange={e => setVal(e.target.value)}>
            <option value="" disabled hidden />
            {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          <label style={{ top: val ? 2 : 20, fontSize: val ? 11 : 14, color: val ? '#C8A96E' : '#9A8A72', letterSpacing: val ? '0.1em' : 0, textTransform: val ? 'uppercase' : 'none' }}>
            {label}
          </label>
        </>
      ) : as === 'textarea' ? (
        <>
          <textarea name={name} rows={rows || 4} placeholder=" " value={val} onChange={e => setVal(e.target.value)} />
          <label>{label}</label>
        </>
      ) : (
        <>
          <input type={type} name={name} placeholder=" " value={val} onChange={e => setVal(e.target.value)} />
          <label>{label}</label>
        </>
      )}
    </div>
  )
}

export default function Contato() {
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true })
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div>
      <PageHero
        label="ENTRE EM CONTATO"
        title="Vamos conversar sobre"
        titleGold="o seu sorriso."
        subtitle="Agende sua avaliação gratuita. Nossa equipe responderá em até 24 horas."
      />

      <section className="py-24 px-8" style={{ background: '#F8F5F0' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-sm"
            style={{ background: '#080C14', border: '1px solid rgba(200,169,110,0.15)' }}
          >
            <p style={{ fontFamily: 'Outfit', fontSize: 11, color: '#C8A96E', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 32 }}>
              FORMULÁRIO DE CONTATO
            </p>
            {sent ? (
              <div className="text-center py-12">
                <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 28, color: '#C8A96E' }}>
                  Mensagem enviada!
                </p>
                <p style={{ fontFamily: 'DM Sans', fontSize: 15, color: '#9A8A72', marginTop: 12 }}>
                  Nossa equipe entrará em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <FloatField label="Nome completo" name="nome" />
                <FloatField label="E-mail" type="email" name="email" />
                <FloatField label="Telefone / WhatsApp" name="telefone" />
                <FloatField
                  label="Unidade preferida"
                  as="select"
                  name="unidade"
                  options={[
                    { value: 'rj', label: 'Rio de Janeiro — Barra da Tijuca' },
                    { value: 'sp', label: 'São Paulo — Aclimação' },
                  ]}
                />
                <FloatField
                  label="Tratamento de interesse"
                  as="select"
                  name="tratamento"
                  options={[
                    { value: 'implante', label: 'Implantes Dentários' },
                    { value: 'facetas', label: 'Facetas de Resina' },
                    { value: 'harmonizacao', label: 'Harmonização Orofacial' },
                    { value: 'clareamento', label: 'Clareamento Dental' },
                    { value: 'reabilitacao', label: 'Reabilitação Oral' },
                    { value: 'lentes', label: 'Lentes de Contato Dental' },
                    { value: 'geral', label: 'Clínica Geral' },
                    { value: 'outro', label: 'Outro' },
                  ]}
                />
                <FloatField label="Mensagem" as="textarea" name="mensagem" rows={4} />
                <button
                  type="submit"
                  className="px-10 py-4 self-start transition-all duration-300"
                  style={{ background: '#C8A96E', color: '#080C14', fontFamily: 'Outfit', fontWeight: 500, fontSize: 12, letterSpacing: '0.15em', border: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
                  onMouseLeave={e => e.currentTarget.style.filter = 'none'}
                >
                  ENVIAR MENSAGEM →
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col gap-5">
              <p style={{ fontFamily: 'Outfit', fontSize: 11, color: '#C8A96E', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                INFORMAÇÕES DE CONTATO
              </p>
              <h2 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 36, color: '#080C14', margin: 0 }}>
                Estamos aqui para você.
              </h2>
            </div>

            {[
              { icon: <Mail size={18} color="#C8A96E" />, label: 'E-mail', val: 'ciprianoodontologia@gmail.com', href: 'mailto:ciprianoodontologia@gmail.com' },
              { icon: <Phone size={18} color="#C8A96E" />, label: 'WhatsApp Geral', val: '+55 21 97362-3797', href: 'https://wa.me/5521973623797' },
              { icon: <Phone size={18} color="#C8A96E" />, label: 'WhatsApp RJ', val: '+55 21 97537-0857', href: 'https://wa.me/5521975370857' },
              { icon: <Phone size={18} color="#C8A96E" />, label: 'WhatsApp SP', val: '+55 11 91606-6384', href: 'https://wa.me/5511916066384' },
              { icon: <InstagramIcon size={18} />, label: 'Instagram', val: '@clinica.cipriano', href: 'https://instagram.com/clinica.cipriano' },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
                style={{ textDecoration: 'none' }}
              >
                <div className="mt-0.5">{item.icon}</div>
                <div>
                  <p style={{ fontFamily: 'Outfit', fontSize: 10, color: '#C8A96E', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 4px' }}>{item.label}</p>
                  <p style={{ fontFamily: 'DM Sans', fontSize: 15, color: '#6B7A8D', margin: 0, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#080C14'}
                    onMouseLeave={e => e.currentTarget.style.color = '#6B7A8D'}
                  >{item.val}</p>
                </div>
              </a>
            ))}

            <div style={{ height: 1, background: 'rgba(200,169,110,0.2)' }} />

            <div className="flex flex-col gap-4">
              <p style={{ fontFamily: 'Outfit', fontSize: 11, color: '#C8A96E', letterSpacing: '0.25em', textTransform: 'uppercase', margin: 0 }}>
                UNIDADES
              </p>
              {[
                { city: 'Rio de Janeiro', addr: 'Av. Alm. Júlio de Sá Bierrenbach, 200 — Barra da Tijuca' },
                { city: 'São Paulo', addr: 'Rua Castro Alves, 457 — Aclimação' },
              ].map(u => (
                <div key={u.city} className="flex items-start gap-3">
                  <MapPin size={16} color="#C8A96E" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: 13, color: '#080C14', margin: '0 0 2px' }}>{u.city}</p>
                    <p style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#9A8A72', margin: 0 }}>{u.addr}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
