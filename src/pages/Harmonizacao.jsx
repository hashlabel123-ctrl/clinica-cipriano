import TreatmentPage from './TreatmentPage'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const PROCEDURES = [
  { name: 'Toxina Botulínica', icon: '⬡', full: 'Aplicação de toxina botulínica para tratar rugas dinâmicas, assimetrias faciais e bruxismo. Resultado natural e duração de 4 a 6 meses. Procedimento rápido, sem necessidade de recuperação.' },
  { name: 'Preenchimento Facial', icon: '◎', full: 'Restauração de volume e definição de contorno facial com ácido hialurônico. Resultados imediatos com naturalidade e segurança absoluta. Ideal para maçãs do rosto, têmporas e região mentoniana.' },
  { name: 'Preenchimento Labial', icon: '◇', full: 'Definição e volumização dos lábios com ácido hialurônico de alta qualidade. Técnica personalizada para cada paciente, respeitando a harmonia do rosto e a anatomia labial natural.' },
  { name: 'Microagulhamento', icon: '✦', full: 'Estímulo de produção de colágeno e elastina com microagulhamento profissional. Indicado para rejuvenescimento, redução de poros, cicatrizes e manchas. Pele mais firme e uniforme em poucas sessões.' },
  { name: 'Bioestimuladores', icon: '◈', full: 'Radiesse, Sculptra e outros bioestimuladores de colágeno para tratar flacidez e melhorar a qualidade da pele de forma gradual e natural. Resultados duradouros de até 2 anos.' },
  { name: 'Skinbooster', icon: '◉', full: 'Hidratação profunda da pele com microinjeções de ácido hialurônico não reticulado. Pele mais luminosa, hidratada e com aparência de saúde renovada. Resultado progressivo ao longo de 3 sessões.' },
  { name: 'Lipo Enzimática de Papada', icon: '▽', full: 'Redução não cirúrgica da papada com aplicação de enzimas específicas que promovem a dissolução de gordura localizada. Sem cirurgia, sem corte, com resultado progressivo em 2 a 4 sessões.' },
  { name: 'Rinomodelação', icon: '◁', full: 'Correção e harmonização do nariz sem cirurgia, utilizando ácido hialurônico para suavizar imperfeições, elevar a ponta nasal e criar simetria. Resultado imediato com duração de 12 a 18 meses.' },
]

function ProceduresGrid({ inView }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
      {PROCEDURES.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          className="p-6 flex flex-col gap-3 rounded-sm"
          style={{ background: '#F8F5F0', border: '1px solid rgba(200,169,110,0.15)' }}
        >
          <span style={{ fontSize: 20, color: '#C8A96E' }}>{p.icon}</span>
          <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: 20, color: '#080C14', margin: 0 }}>{p.name}</h3>
          <p style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#9A8A72', lineHeight: 1.7, margin: 0 }}>{p.full}</p>
        </motion.div>
      ))}
    </div>
  )
}

function ExtraContent() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref}>
      <p style={{ fontFamily: 'Outfit', fontSize: 11, color: '#C8A96E', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 16 }}>
        PROCEDIMENTOS DISPONÍVEIS
      </p>
      <h2 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 36, color: '#080C14', margin: '0 0 8px' }}>
        8 procedimentos para realçar sua beleza
      </h2>
      <ProceduresGrid inView={inView} />
    </div>
  )
}

export default function Harmonizacao() {
  return (
    <TreatmentPage
      name="Harmonização Orofacial"
      label="ESTÉTICA FACIAL"
      description="A arte de equilibrar beleza, juventude e funcionalidade através de procedimentos minimamente invasivos."
      image="/images/harmonizacao.jpg"
      fullText={[
        'A Harmonização Orofacial é uma especialidade da odontologia que utiliza técnicas minimamente invasivas para equilibrar as proporções do rosto, realçar traços naturais e combater os sinais do envelhecimento.',
        'Na Clínica Cipriano, cada plano de tratamento é individualizado, considerando as características únicas do rosto, o estilo de vida e os objetivos de cada paciente. Utilizamos apenas produtos aprovados pela ANVISA, de marcas líderes mundiais.',
      ]}
      extraContent={<ExtraContent />}
      faq={[
        { q: 'Quanto tempo dura cada procedimento?', a: 'A maioria dos procedimentos é realizada em 30 a 60 minutos, com resultado imediato ou progressivo, sem necessidade de afastamento das atividades diárias.' },
        { q: 'Os procedimentos são seguros?', a: 'Sim, quando realizados por profissionais habilitados com produtos regulamentados pela ANVISA. Na Clínica Cipriano, todos os procedimentos seguem os mais rigorosos protocolos de segurança.' },
        { q: 'Quanto tempo dura o resultado?', a: 'Depende do procedimento: toxina botulínica dura 4 a 6 meses, preenchimentos com ácido hialurônico de 12 a 18 meses, bioestimuladores até 2 anos.' },
      ]}
      relatedIndexes={[0, 1, 3]}
    />
  )
}
