import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'
import GoldLine from '../components/GoldLine'
import CTASection from '../components/CTASection'
import TreatmentCard from '../components/TreatmentCard'

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: 'rgba(200,169,110,0.15)' }}
      onClick={() => setOpen(o => !o)}
    >
      <div className="flex items-center justify-between py-5 gap-4">
        <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: 20, color: '#EDE8E0', margin: 0, flex: 1 }}>{question}</h3>
        {open ? <ChevronUp size={16} color="#C8A96E" /> : <ChevronDown size={16} color="#C8A96E" />}
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

const RELATED_TREATMENTS = [
  { num: 1, title: 'Implantes Dentários', desc: 'Solução definitiva para dentes perdidos.', img: 'https://odontologiacipriano.com.br/wp-content/uploads/2022/02/implantodontia.jpg', to: '/tratamentos/implante' },
  { num: 2, title: 'Facetas de Resina', desc: 'Dentes perfeitamente alinhados e brancos.', img: 'https://odontologiacipriano.com.br/wp-content/uploads/2022/02/facetas-de-resina.jpg', to: '/tratamentos/facetas' },
  { num: 3, title: 'Harmonização Orofacial', desc: 'Equilíbrio estético do sorriso e da face.', img: 'https://odontologiacipriano.com.br/wp-content/uploads/2022/02/Harmonizacao-Orafacial-removebg-preview.png', to: '/tratamentos/harmonizacao' },
  { num: 4, title: 'Lentes de Contato Dental', desc: 'Ultrafinas e naturais. Perfeição estética.', img: 'https://odontologiacipriano.com.br/wp-content/uploads/2022/02/lentes-viotto.jpg', to: '/tratamentos/lentes' },
]

export default function TreatmentPage({ name, label, description, image, fullText, faq, extraContent, relatedIndexes = [0, 1, 2] }) {
  const contentRef = useRef(null)
  const faqRef = useRef(null)
  const relRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true })
  const faqInView = useInView(faqRef, { once: true })
  const relInView = useInView(relRef, { once: true })

  const related = relatedIndexes.map(i => RELATED_TREATMENTS[i]).filter(Boolean)

  return (
    <div>
      {/* Hero */}
      <section
        className="relative flex items-end grain overflow-hidden"
        style={{ minHeight: '65vh', background: '#080C14' }}
      >
        {image && (
          <div className="absolute inset-0">
            <img src={image} alt={name} crossOrigin="anonymous" className="w-full h-full object-cover opacity-25" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #080C14 30%, rgba(8,12,20,0.6) 100%)' }} />
          </div>
        )}
        <div className="relative z-10 max-w-4xl px-8 lg:px-16 pb-20 pt-40 mx-0">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: 'Outfit', fontSize: 11, color: '#C8A96E', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 16 }}
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
      <section ref={contentRef} className="py-24 px-8" style={{ background: '#F8F5F0' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <p style={{ fontFamily: 'Outfit', fontSize: 11, color: '#C8A96E', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              O QUE É
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(28px, 3vw, 38px)', color: '#080C14', margin: 0 }}>
              Entenda o tratamento
            </h2>
            <GoldLine />
            {(fullText || [description]).map((p, i) => (
              <p key={i} style={{ fontFamily: 'DM Sans', fontSize: 16, color: '#6B7A8D', lineHeight: 1.9 }}>{p}</p>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5"
          >
            {image && (
              <img
                src={image}
                alt={name}
                crossOrigin="anonymous"
                className="w-full rounded-sm"
                style={{ border: '1px solid rgba(200,169,110,0.2)' }}
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* Extra content */}
      {extraContent && (
        <section className="py-16 px-8" style={{ background: '#F2EEE8' }}>
          <div className="max-w-6xl mx-auto">{extraContent}</div>
        </section>
      )}

      {/* CTA intermediário */}
      <section className="py-20 px-8 text-center grain" style={{ background: '#0D1421' }}>
        <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(24px, 3vw, 36px)', color: '#EDE8E0', marginBottom: 24 }}>
          Pronto para transformar o seu sorriso?
        </p>
        <a
          href="https://wa.me/5521973623797"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 transition-all duration-300"
          style={{ background: '#C8A96E', color: '#080C14', fontFamily: 'Outfit', fontWeight: 500, fontSize: 12, letterSpacing: '0.15em', textDecoration: 'none' }}
          onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
          onMouseLeave={e => e.currentTarget.style.filter = 'none'}
        >
          AGENDAR CONSULTA GRATUITA
        </a>
      </section>

      {/* FAQ */}
      {faq && faq.length > 0 && (
        <section ref={faqRef} className="py-24 px-8 grain" style={{ background: '#080C14' }}>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p style={{ fontFamily: 'Outfit', fontSize: 11, color: '#C8A96E', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 12 }}>
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
      <section ref={relRef} className="py-24 px-8" style={{ background: '#F8F5F0' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={relInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p style={{ fontFamily: 'Outfit', fontSize: 11, color: '#C8A96E', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 12 }}>
              EXPLORE MAIS
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(28px, 3vw, 40px)', color: '#080C14', margin: 0 }}>
              Outros tratamentos
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" style={{ background: '#080C14', padding: 24, borderRadius: 2 }}>
            {related.map((t, i) => (
              <motion.div
                key={t.to}
                initial={{ opacity: 0, y: 20 }}
                animate={relInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TreatmentCard {...t} gradient={false} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
