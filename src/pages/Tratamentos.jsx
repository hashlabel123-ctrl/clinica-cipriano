import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PageHero from '../components/PageHero'
import TreatmentCard from '../components/TreatmentCard'
import CTASection from '../components/CTASection'

const ALL_TREATMENTS = [
  { num: 1, title: 'Implantes Dentários', desc: 'Solução definitiva para dentes perdidos. Do unitário à reabilitação total.', img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=85', to: '/tratamentos/implante' },
  { num: 2, title: 'Facetas de Resina', desc: 'Dentes perfeitamente alinhados e brancos. Transformação em uma sessão.', img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e85?auto=format&fit=crop&w=900&q=85', to: '/tratamentos/facetas' },
  { num: 3, title: 'Harmonização Orofacial', desc: 'Equilíbrio estético do sorriso e da face. Arte e ciência em perfeita harmonia.', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85', to: '/tratamentos/harmonizacao' },
  { num: 4, title: 'Clareamento Dental', desc: 'O sorriso mais branco da sua vida. Tecnologia e segurança sem igual.', img: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=900&q=85', to: '/tratamentos/clareamento' },
  { num: 5, title: 'Reabilitação Oral', desc: 'Restauração completa da estética e função bucal. Seu novo sorriso começa aqui.', img: 'https://images.unsplash.com/photo-1588776814546-1ffbb172d4bc?auto=format&fit=crop&w=900&q=85', to: '/tratamentos/reabilitacao' },
  { num: 6, title: 'Lentes de Contato Dental', desc: 'Ultrafinas e naturais. A perfeição estética que você sempre sonhou.', img: 'https://images.unsplash.com/photo-1598256985030-4fd7dffb9e65?auto=format&fit=crop&w=900&q=85', to: '/tratamentos/lentes' },
  { num: 7, title: 'Clínica Geral', desc: 'Prevenção, diagnóstico e cuidado completo para toda a família.', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=85', to: '/tratamentos/clinica-geral' },
  { num: 8, title: 'Harmonização Facial', desc: '8 procedimentos estéticos para rejuvenescer, harmonizar e realçar sua beleza.', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85', to: '/tratamentos/harmonizacao' },
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

      <section ref={ref} className="py-24 px-8 grain" style={{ background: '#080C14' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ALL_TREATMENTS.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <TreatmentCard
                num={t.num}
                title={t.title}
                description={t.desc}
                image={t.img}
                to={t.to}
                gradient={!t.img}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
