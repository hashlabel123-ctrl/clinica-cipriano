import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PageHero from '../components/PageHero'
import TreatmentCard from '../components/TreatmentCard'
import CTASection from '../components/CTASection'

const ALL_TREATMENTS = [
  { num: 1, title: 'Implantes Dentários', desc: 'Solução definitiva para dentes perdidos. Do unitário à reabilitação total.', to: '/tratamentos/implante' },
  { num: 2, title: 'Facetas de Resina', desc: 'Dentes perfeitamente alinhados e brancos. Transformação em uma sessão.', to: '/tratamentos/facetas' },
  { num: 3, title: 'Harmonização Orofacial', desc: 'Equilíbrio estético do sorriso e da face. Arte e ciência em perfeita harmonia.', to: '/tratamentos/harmonizacao' },
  { num: 4, title: 'Clareamento Dental', desc: 'O sorriso mais branco da sua vida. Tecnologia e segurança sem igual.', to: '/tratamentos/clareamento' },
  { num: 5, title: 'Reabilitação Oral', desc: 'Restauração completa da estética e função bucal. Seu novo sorriso começa aqui.', to: '/tratamentos/reabilitacao' },
  { num: 6, title: 'Lentes de Contato Dental', desc: 'Ultrafinas e naturais. A perfeição estética que você sempre sonhou.', to: '/tratamentos/lentes' },
  { num: 7, title: 'Clínica Geral', desc: 'Prevenção, diagnóstico e cuidado completo para toda a família.', to: '/tratamentos/clinica-geral' },
  { num: 8, title: 'Harmonização Facial', desc: '8 procedimentos estéticos para rejuvenescer, harmonizar e realçar sua beleza.', to: '/tratamentos/harmonizacao' },
]

export default function Tratamentos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div>
      <PageHero
        label="ESPECIALIDADES"
        title="Todos os nossos"
        titleGold="tratamentos."
        subtitle="Do cuidado preventivo à transformação estética completa — cada especialidade com o mesmo padrão de excelência."
      />

      <section ref={ref} style={{ background: '#080C14', padding: '80px 64px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {ALL_TREATMENTS.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <TreatmentCard {...t} />
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
