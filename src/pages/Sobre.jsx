import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import TeamCard from '../components/TeamCard'
import GoldLine from '../components/GoldLine'
import CTASection from '../components/CTASection'

const DIFFERENTIALS = [
  { title: 'Atendimento Humanizado', desc: 'Cada paciente é tratado com atenção, carinho e respeito em cada etapa.' },
  { title: 'Profissionais Registrados no CFO', desc: 'Todos os especialistas possuem registro ativo no Conselho Federal de Odontologia.' },
  { title: 'Materiais de Alto Padrão', desc: 'Utilizamos apenas materiais certificados, importados e de reconhecida qualidade.' },
  { title: 'Sedação Consciente Disponível', desc: 'Procedimentos com total conforto e segurança para pacientes ansiosos.' },
  { title: 'Duas Unidades: RJ e SP', desc: 'Presença em Barra da Tijuca e Aclimação para servir todo o Brasil.' },
]

export default function Sobre() {
  const diffRef = useRef(null)
  const teamRef = useRef(null)
  const diffInView = useInView(diffRef, { once: true })
  const teamInView = useInView(teamRef, { once: true })

  return (
    <div>
      <PageHero
        label="SOBRE A CLÍNICA"
        title="Excelência em cada"
        titleGold="detalhe."
        subtitle="Conheça a história, a equipe e os valores que fazem da Clínica Cipriano uma referência em odontologia e estética."
      />

      {/* História */}
      <section className="relative py-24 px-8 overflow-hidden" style={{ background: '#F8F5F0' }}>
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ fontFamily: 'Cormorant Garamond', fontSize: 280, color: 'rgba(200,169,110,0.04)', lineHeight: 1, overflow: 'hidden' }}
        >
          2003
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
              <p style={{ fontFamily: 'Outfit', fontSize: 11, color: '#C8A96E', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                NOSSA HISTÓRIA
              </p>
              <h2 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(32px, 4vw, 44px)', color: '#080C14', margin: 0, lineHeight: 1.2 }}>
                Uma clínica construída sobre confiança e resultados.
              </h2>
              <GoldLine />
            </div>
            <div className="flex flex-col gap-6">
              <p style={{ fontFamily: 'DM Sans', fontSize: 16, color: '#6B7A8D', lineHeight: 1.9 }}>
                A Clínica Cipriano nasceu da visão de oferecer odontologia de excelência com um atendimento que vai muito além do tratamento clínico. Fundada por profissionais apaixonados pela transformação de sorrisos, a clínica rapidamente se tornou referência nas cidades de Rio de Janeiro e São Paulo.
              </p>
              <p style={{ fontFamily: 'DM Sans', fontSize: 16, color: '#6B7A8D', lineHeight: 1.9 }}>
                Nossa missão é clara: transformar vidas através da saúde bucal e da estética facial, com rigor científico, tecnologia de ponta e um olhar artístico único. Cada tratamento é personalizado, cada resultado é construído com dedicação e cuidado.
              </p>
              <p style={{ fontFamily: 'DM Sans', fontSize: 16, color: '#6B7A8D', lineHeight: 1.9 }}>
                Acreditamos que beleza e saúde caminham juntas. Por isso, integramos odontologia estética, implantodontia, reabilitação oral e harmonização orofacial em um único espaço de excelência — para que nossos pacientes encontrem tudo o que precisam com a qualidade que merecem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="relative py-24 px-8 grain" style={{ background: '#0D1421' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p style={{ fontFamily: 'Outfit', fontSize: 11, color: '#C8A96E', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 12 }}>
              NOSSOS ESPECIALISTAS
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(32px, 4vw, 48px)', color: '#EDE8E0', margin: 0 }}>
              Conheça quem cuida do seu sorriso.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={teamInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TeamCard
                initials="DB"
                name="Dr. Borsato"
                instagram="dr.borsato"
                role="Implantodontia · Reabilitação Oral"
                cro="RJ 000000"
                bio="Especialista em implantodontia e reabilitação oral, o Dr. Borsato combina precisão técnica e sensibilidade estética para devolver sorrisos que transformam vidas. Formado pela Faculdade de Odontologia da UFRJ, com especialização em implantes dentários e reabilitação protética. Co-fundador da Clínica Cipriano."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={teamInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <TeamCard
                initials="IC"
                name="Dra. Cipriano"
                instagram="iscipriano"
                role="Harmonização Orofacial · Estética Dental"
                cro="SP 000000"
                bio="Co-fundadora da Clínica Cipriano, especialista em harmonização orofacial e estética dental. Sua abordagem une ciência e arte para criar resultados que respeitam a singularidade de cada rosto. Referência nacional em procedimentos estéticos faciais minimamente invasivos."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section ref={diffRef} className="py-24 px-8" style={{ background: '#F2EEE8' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={diffInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p style={{ fontFamily: 'Outfit', fontSize: 11, color: '#C8A96E', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 12 }}>
              POR QUE ESCOLHER A CIPRIANO
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(32px, 4vw, 46px)', color: '#080C14', margin: 0 }}>
              Nossos diferenciais
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIALS.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                animate={diffInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 flex flex-col gap-4 rounded-sm"
                style={{ border: '1px solid rgba(200,169,110,0.15)' }}
              >
                <CheckCircle size={20} color="#C8A96E" />
                <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: 22, color: '#080C14', margin: 0 }}>{d.title}</h3>
                <p style={{ fontFamily: 'DM Sans', fontSize: 14, color: '#9A8A72', lineHeight: 1.7, margin: 0 }}>{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
