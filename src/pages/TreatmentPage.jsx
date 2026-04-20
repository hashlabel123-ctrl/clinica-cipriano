import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'
import GoldLine from '../components/GoldLine'
import CTASection from '../components/CTASection'
import TreatmentCard from '../components/TreatmentCard'

const C = '#C8A96E'
const NIGHT = '#080C14'
const CARD = '#0D1421'
const CREAM = '#F8F5F0'

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{ borderBottom: '1px solid rgba(200,169,110,0.15)', cursor: 'pointer' }}
      onClick={() => setOpen(o => !o)}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', gap: 16 }}>
        <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: 20, color: '#EDE8E0', margin: 0, flex: 1 }}>{question}</h3>
        {open ? <ChevronUp size={16} color={C} /> : <ChevronDown size={16} color={C} />}
      </div>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <p style={{ fontFamily: 'DM Sans', fontSize: 15, color: '#9A8A72', lineHeight: 1.8, paddingBottom: 20, margin: 0 }}>{answer}</p>
      </motion.div>
    </div>
  )
}

const RELATED = [
  { num: 1, title: 'Implantes Dentários', desc: 'Solução definitiva para dentes perdidos.', to: '/tratamentos/implante' },
  { num: 2, title: 'Facetas de Resina', desc: 'Dentes perfeitamente alinhados e brancos.', to: '/tratamentos/facetas' },
  { num: 3, title: 'Harmonização Orofacial', desc: 'Equilíbrio estético do sorriso e da face.', to: '/tratamentos/harmonizacao' },
  { num: 4, title: 'Lentes de Contato Dental', desc: 'Ultrafinas e naturais. Perfeição estética.', to: '/tratamentos/lentes' },
]

export default function TreatmentPage({ name, label, description, image, fullText, faq, extraContent, relatedIndexes = [0, 1, 2] }) {
  const contentRef = useRef(null)
  const faqRef = useRef(null)
  const relRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true })
  const faqInView = useInView(faqRef, { once: true })
  const relInView = useInView(relRef, { once: true })

  const related = relatedIndexes.map(i => RELATED[i]).filter(Boolean)

  return (
    <div>
      {/* Hero */}
      <section style={{ minHeight: '65vh', background: NIGHT, position: 'relative', overflow: 'hidden' }}>
        {image && (
          <div style={{ position: 'absolute', inset: 0 }}>
            <img
              src={image}
              alt={name}
              onError={e => { e.currentTarget.style.display = 'none' }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.25, display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #080C14 30%, rgba(8,12,20,0.6) 100%)' }} />
          </div>
        )}
        <div style={{ position: 'relative', zIndex: 10, paddingTop: 180, paddingBottom: 80, paddingLeft: 64, paddingRight: 64 }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: 'Outfit', fontSize: 11, color: C, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 16 }}
          >
            {label || 'TRATAMENTOS'}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(40px, 6vw, 64px)', color: '#EDE8E0', margin: 0, lineHeight: 1.1 }}
          >
            {name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ fontFamily: 'DM Sans', fontSize: 17, color: '#9A8A72', marginTop: 16, maxWidth: 560, lineHeight: 1.8 }}
          >
            {description}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section ref={contentRef} style={{ background: CREAM, padding: '80px 64px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <p style={{ fontFamily: 'Outfit', fontSize: 11, color: C, letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              O QUE É
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(28px, 3vw, 38px)', color: NIGHT, margin: 0 }}>
              Entenda o tratamento
            </h2>
            <GoldLine />
            {(fullText || [description]).map((p, i) => (
              <p key={i} style={{ fontFamily: 'DM Sans', fontSize: 16, color: '#6B7A8D', lineHeight: 1.9, margin: 0 }}>{p}</p>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {image ? (
              <img
                src={image}
                alt={name}
                onError={e => { e.currentTarget.parentElement.style.display = 'none' }}
                style={{ width: '100%', borderRadius: 2, display: 'block', border: '1px solid rgba(200,169,110,0.2)' }}
              />
            ) : (
              <div style={{
                width: '100%', aspectRatio: '4/3', borderRadius: 2,
                background: 'linear-gradient(135deg, #0D1421 0%, #1A2540 70%, rgba(200,169,110,0.15) 100%)',
                border: '1px solid rgba(200,169,110,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', color: 'rgba(200,169,110,0.4)', fontSize: 18 }}>{name}</span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Extra content */}
      {extraContent && (
        <section style={{ background: '#F2EEE8', padding: '64px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>{extraContent}</div>
        </section>
      )}

      {/* CTA intermediário */}
      <section style={{ background: CARD, padding: '80px 64px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(24px, 3vw, 36px)', color: '#EDE8E0', marginBottom: 24 }}>
          Pronto para transformar o seu sorriso?
        </p>
        <a
          href="https://wa.me/5521973623797"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block', padding: '16px 40px',
            background: C, color: NIGHT,
            fontFamily: 'Outfit', fontWeight: 500, fontSize: 12, letterSpacing: '0.15em',
            textDecoration: 'none', transition: 'filter 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
          onMouseLeave={e => e.currentTarget.style.filter = 'none'}
        >
          AGENDAR CONSULTA GRATUITA
        </a>
      </section>

      {/* FAQ */}
      {faq && faq.length > 0 && (
        <section ref={faqRef} style={{ background: NIGHT, padding: '80px 64px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: 48 }}
            >
              <p style={{ fontFamily: 'Outfit', fontSize: 11, color: C, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 12 }}>
                DÚVIDAS FREQUENTES
              </p>
              <h2 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 36, color: '#EDE8E0', margin: 0 }}>
                Perguntas & Respostas
              </h2>
            </motion.div>
            {faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <FAQItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Related treatments */}
      <section ref={relRef} style={{ background: CREAM, padding: '80px 64px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={relInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 48 }}
          >
            <p style={{ fontFamily: 'Outfit', fontSize: 11, color: C, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 12 }}>
              EXPLORE MAIS
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(28px, 3vw, 40px)', color: NIGHT, margin: 0 }}>
              Outros tratamentos
            </h2>
          </motion.div>
          <div style={{ background: NIGHT, padding: 24, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {related.map((t, i) => (
              <motion.div
                key={t.to}
                initial={{ opacity: 0, y: 20 }}
                animate={relInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TreatmentCard {...t} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
