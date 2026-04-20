import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

export default function Unidades() {
  const rjRef = useRef(null)
  const spRef = useRef(null)
  const rjInView = useInView(rjRef, { once: true })
  const spInView = useInView(spRef, { once: true })

  return (
    <div>
      <PageHero
        label="NOSSAS UNIDADES"
        title="Onde você nos"
        titleGold="encontra."
        subtitle="Duas unidades estrategicamente localizadas para atender você com excelência no Rio de Janeiro e em São Paulo."
      />

      {/* RJ */}
      <section ref={rjRef} className="py-24 px-8 grain" style={{ background: '#080C14' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={rjInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <p style={{ fontFamily: 'Outfit', fontSize: 11, color: '#C8A96E', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              RIO DE JANEIRO
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(32px, 4vw, 48px)', color: '#EDE8E0', margin: 0, lineHeight: 1.2 }}>
              Barra da Tijuca
            </h2>
            <div style={{ height: 1, background: 'rgba(200,169,110,0.3)', width: 60 }} />
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} color="#C8A96E" style={{ marginTop: 3, flexShrink: 0 }} />
                <p style={{ fontFamily: 'DM Sans', fontSize: 15, color: '#9A8A72', margin: 0, lineHeight: 1.7 }}>
                  Av. Alm. Júlio de Sá Bierrenbach, 200<br />Barra da Tijuca — Rio de Janeiro, RJ
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} color="#C8A96E" style={{ flexShrink: 0 }} />
                <a href="https://wa.me/5521975370857" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: 'DM Sans', fontSize: 15, color: '#9A8A72', textDecoration: 'none' }}>
                  +55 21 97537-0857
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} color="#C8A96E" style={{ flexShrink: 0 }} />
                <p style={{ fontFamily: 'DM Sans', fontSize: 15, color: '#9A8A72', margin: 0 }}>
                  Seg–Sex: 9h–19h · Sáb: 9h–14h
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/5521975370857"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 mt-2 self-start transition-all duration-300"
              style={{ background: '#C8A96E', color: '#080C14', fontFamily: 'Outfit', fontWeight: 500, fontSize: 12, letterSpacing: '0.15em', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
              onMouseLeave={e => e.currentTarget.style.filter = 'none'}
            >
              WHATSAPP RJ
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={rjInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.8!2d-43.365!3d-23.012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBarra+da+Tijuca!5e0!3m2!1spt!2sbr!4v1620000000000"
              width="100%"
              height="380"
              style={{ border: '1px solid rgba(200,169,110,0.2)', borderRadius: 2 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Rio de Janeiro"
            />
          </motion.div>
        </div>
      </section>

      {/* SP */}
      <section ref={spRef} className="py-24 px-8" style={{ background: '#F8F5F0' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={spInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5!2d-46.634!3d-23.568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAclima%C3%A7%C3%A3o!5e0!3m2!1spt!2sbr!4v1620000000001"
              width="100%"
              height="380"
              style={{ border: '1px solid rgba(200,169,110,0.2)', borderRadius: 2 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa São Paulo"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={spInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p style={{ fontFamily: 'Outfit', fontSize: 11, color: '#C8A96E', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              SÃO PAULO
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(32px, 4vw, 48px)', color: '#080C14', margin: 0, lineHeight: 1.2 }}>
              Aclimação
            </h2>
            <div style={{ height: 1, background: 'rgba(200,169,110,0.5)', width: 60 }} />
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} color="#C8A96E" style={{ marginTop: 3, flexShrink: 0 }} />
                <p style={{ fontFamily: 'DM Sans', fontSize: 15, color: '#6B7A8D', margin: 0, lineHeight: 1.7 }}>
                  Rua Castro Alves, 457<br />Aclimação — São Paulo, SP
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} color="#C8A96E" style={{ flexShrink: 0 }} />
                <a href="https://wa.me/5511916066384" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: 'DM Sans', fontSize: 15, color: '#6B7A8D', textDecoration: 'none' }}>
                  +55 11 91606-6384
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} color="#C8A96E" style={{ flexShrink: 0 }} />
                <p style={{ fontFamily: 'DM Sans', fontSize: 15, color: '#6B7A8D', margin: 0 }}>
                  Seg–Sex: 9h–19h · Sáb: 9h–14h
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/5511916066384"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 mt-2 self-start transition-all duration-300"
              style={{ background: '#C8A96E', color: '#080C14', fontFamily: 'Outfit', fontWeight: 500, fontSize: 12, letterSpacing: '0.15em', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
              onMouseLeave={e => e.currentTarget.style.filter = 'none'}
            >
              WHATSAPP SP
            </a>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
