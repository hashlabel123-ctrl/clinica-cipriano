import { useRef, Suspense } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'
import TreatmentCard from '../components/TreatmentCard'
import TeamCard from '../components/TeamCard'
import TestimonialCarousel from '../components/TestimonialCarousel'
import Marquee from '../components/Marquee'
import GoldLine from '../components/GoldLine'
import CTASection from '../components/CTASection'
import ThreeDScene from '../components/ThreeDScene'

const TREATMENTS = [
  { num: 1, title: 'Implantes Dentários', desc: 'Solução definitiva para dentes perdidos. Do unitário à reabilitação total.', img: 'https://odontologiacipriano.com.br/wp-content/uploads/2022/02/implantodontia.jpg', to: '/tratamentos/implante' },
  { num: 2, title: 'Facetas de Resina', desc: 'Dentes perfeitamente alinhados e brancos. Transformação em uma sessão.', img: 'https://odontologiacipriano.com.br/wp-content/uploads/2022/02/facetas-de-resina.jpg', to: '/tratamentos/facetas' },
  { num: 3, title: 'Harmonização Orofacial', desc: 'Equilíbrio estético do sorriso e da face. Arte e ciência em perfeita harmonia.', img: 'https://odontologiacipriano.com.br/wp-content/uploads/2022/02/Harmonizacao-Orafacial-removebg-preview.png', to: '/tratamentos/harmonizacao' },
  { num: 4, title: 'Clareamento Dental', desc: 'O sorriso mais branco da sua vida. Tecnologia e segurança sem igual.', img: 'https://odontologiacipriano.com.br/wp-content/uploads/2022/02/100615tecnicasclareamento-1024x1024.jpg', to: '/tratamentos/clareamento' },
  { num: 5, title: 'Reabilitação Oral', desc: 'Restauração completa da estética e função bucal. Seu novo sorriso começa aqui.', img: 'https://odontologiacipriano.com.br/wp-content/uploads/2022/02/reabilitacao-oral.jpg', to: '/tratamentos/reabilitacao' },
  { num: 6, title: 'Lentes de Contato Dental', desc: 'Ultrafinas e naturais. A perfeição estética que você sempre sonhou.', img: 'https://odontologiacipriano.com.br/wp-content/uploads/2022/02/lentes-viotto.jpg', to: '/tratamentos/lentes' },
  { num: 7, title: 'Clínica Geral', desc: 'Prevenção, diagnóstico e cuidado completo para toda a família.', img: 'https://odontologiacipriano.com.br/wp-content/uploads/2022/02/clinico-geral.jpg', to: '/tratamentos/clinica-geral' },
  { num: 8, title: 'Harmonização Facial', desc: '8 procedimentos estéticos para rejuvenescer, harmonizar e realçar sua beleza.', img: null, to: '/tratamentos/harmonizacao' },
]

const HARMONIZATION = [
  { icon: '💉', name: 'Toxina Botulínica', desc: 'Rugas, assimetrias e bruxismo tratados com precisão' },
  { icon: '✦', name: 'Preenchimento Facial', desc: 'Volume e contorno com ácido hialurônico' },
  { icon: '◎', name: 'Preenchimento Labial', desc: 'Lábios definidos, volumosos e naturais' },
  { icon: '◈', name: 'Microagulhamento', desc: 'Estímulo de colágeno para pele renovada' },
  { icon: '◇', name: 'Bioestimuladores', desc: 'Radiesse e Sculptra para firmeza e qualidade da pele' },
  { icon: '◉', name: 'Skinbooster', desc: 'Hidratação profunda com ácido hialurônico' },
  { icon: '▽', name: 'Lipo Enzimática', desc: 'Redução não cirúrgica da papada' },
  { icon: '◁', name: 'Rinomodelação', desc: 'Correção nasal sem cirurgia com ácido hialurônico' },
]

function Particle({ style }) {
  return <div className="absolute rounded-full pointer-events-none" style={{ width: 2, height: 2, background: 'rgba(200,169,110,0.4)', ...style }} />
}

function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 right-10 flex flex-col items-center gap-3 hidden lg:flex">
      <span style={{
        fontFamily: 'Outfit', fontWeight: 200, fontSize: 10, color: '#C8A96E',
        letterSpacing: '0.3em', writingMode: 'vertical-rl', textOrientation: 'mixed',
      }}>
        SCROLL
      </span>
      <motion.div
        animate={{ scaleY: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ width: 1, height: 40, background: '#C8A96E', transformOrigin: 'top' }}
      />
    </div>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])

  const philosophyRef = useRef(null)
  const { scrollYProgress: philScroll } = useScroll({ target: philosophyRef, offset: ['start end', 'end start'] })
  const img1Y = useTransform(philScroll, [0, 1], ['0px', '-40px'])
  const img2Y = useTransform(philScroll, [0, 1], ['0px', '-20px'])
  const img3Y = useTransform(philScroll, [0, 1], ['0px', '-60px'])

  const statsRef = useRef(null)
  const treatRef = useRef(null)
  const teamRef = useRef(null)
  const harmRef = useRef(null)
  const unitsRef = useRef(null)

  const statsInView = useInView(statsRef, { once: true })
  const treatInView = useInView(treatRef, { once: true })
  const teamInView = useInView(teamRef, { once: true })
  const harmInView = useInView(harmRef, { once: true })
  const unitsInView = useInView(unitsRef, { once: true })

  const particles = Array.from({ length: 30 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationName: `float${(i % 3) + 1}`,
    animationDuration: `${4 + Math.random() * 4}s`,
    animationDelay: `${Math.random() * 4}s`,
    animationIterationCount: 'infinite',
    opacity: 0.3 + Math.random() * 0.4,
  }))

  return (
    <div>
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden grain"
        style={{ minHeight: '100vh', background: '#080C14' }}
      >
        {particles.map((p, i) => <Particle key={i} style={p} />)}

        {/* 3D canvas right */}
        <motion.div
          style={{ y: heroY }}
          className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 hidden lg:block"
        >
          <Suspense fallback={null}>
            <ThreeDScene />
          </Suspense>
        </motion.div>

        {/* Gradient overlay between text and canvas */}
        <div
          className="absolute inset-0 hidden lg:block pointer-events-none"
          style={{ background: 'linear-gradient(to right, #080C14 38%, rgba(8,12,20,0.6) 60%, transparent 100%)' }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-screen px-8 lg:px-16 pt-32 pb-20">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontFamily: 'Outfit', fontWeight: 300, fontSize: 11, color: '#C8A96E', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 24 }}
            >
              ODONTOLOGIA · ESTÉTICA · EXCELÊNCIA
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(44px, 6vw, 72px)', color: '#EDE8E0', lineHeight: 1.1, margin: 0 }}
            >
              Sorrisos que
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(44px, 6vw, 72px)', color: '#C8A96E', lineHeight: 1.1, margin: 0, marginBottom: 24 }}
            >
              definem histórias.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{ fontFamily: 'DM Sans', fontSize: 17, color: '#9A8A72', lineHeight: 1.8, maxWidth: 480, marginBottom: 0 }}
            >
              Uma clínica de referência em odontologia estética e harmonização facial.
              Barra da Tijuca, Rio de Janeiro · Aclimação, São Paulo.
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              style={{ height: 1, background: '#C8A96E', margin: '32px 0' }}
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/5521973623797"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-sm font-medium transition-all duration-300"
                style={{ background: '#C8A96E', color: '#080C14', fontFamily: 'Outfit', fontWeight: 500, letterSpacing: '0.1em', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
                onMouseLeave={e => e.currentTarget.style.filter = 'none'}
              >
                AGENDAR CONSULTA
              </a>
              <Link
                to="/sobre"
                className="px-8 py-4 text-sm transition-all duration-300"
                style={{
                  fontFamily: 'Outfit', letterSpacing: '0.1em',
                  border: '1px solid #C8A96E', color: '#C8A96E', textDecoration: 'none',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,169,110,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                CONHECER A CLÍNICA
              </Link>
            </motion.div>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* ─── STATS ─── */}
      <section
        ref={statsRef}
        className="relative py-20 px-8"
        style={{ background: '#F8F5F0', overflow: 'hidden' }}
      >
        {/* Decorative square */}
        <div className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none"
          style={{ background: 'rgba(200,169,110,0.06)', transform: 'rotate(15deg) translate(20%, 20%)' }} />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { num: 2, suf: '', label: 'Unidades RJ e SP' },
              { num: 7, suf: '+', label: 'Especialidades' },
              { num: 5, suf: '★', label: 'Avaliações' },
              { num: 100, suf: '%', label: 'Satisfação Garantida' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center py-10 px-6 relative"
                style={{ borderRight: i < 3 ? '1px solid rgba(200,169,110,0.2)' : 'none' }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={statsInView ? { width: 40 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="h-px mb-6"
                  style={{ background: '#C8A96E' }}
                />
                <span style={{ fontFamily: 'Outfit', fontWeight: 200, fontSize: 72, color: '#080C14', lineHeight: 1 }}>
                  <AnimatedCounter target={s.num} suffix={s.suf} />
                </span>
                <span style={{ fontFamily: 'Outfit', fontWeight: 300, fontSize: 11, color: '#9A8A72', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 12, textAlign: 'center' }}>
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TREATMENTS ─── */}
      <section
        ref={treatRef}
        className="relative py-24 px-8 grain"
        style={{ background: '#080C14' }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={treatInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p style={{ fontFamily: 'Outfit', fontSize: 11, color: '#C8A96E', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 16 }}>
              NOSSAS ESPECIALIDADES
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(38px, 5vw, 56px)', color: '#EDE8E0', margin: 0, lineHeight: 1.1 }}>
              Uma clínica. Múltiplas
            </h2>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(38px, 5vw, 56px)', color: '#C8A96E', margin: '0 0 16px' }}>
              transformações.
            </h2>
            <p style={{ fontFamily: 'DM Sans', fontSize: 16, color: '#9A8A72', maxWidth: 560, lineHeight: 1.8 }}>
              Do implante à harmonização facial — tratamentos de excelência para cada fase do seu sorriso.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TREATMENTS.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 30 }}
                animate={treatInView ? { opacity: 1, y: 0 } : {}}
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
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section
        ref={philosophyRef}
        className="relative py-24 px-8 overflow-hidden"
        style={{ background: '#F8F5F0' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <p style={{ fontFamily: 'Outfit', fontSize: 11, color: '#C8A96E', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              NOSSA FILOSOFIA
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(32px, 4vw, 48px)', color: '#080C14', margin: 0, lineHeight: 1.2 }}>
              A arte de transformar vidas através do sorriso.
            </h2>
            <p style={{ fontFamily: 'DM Sans', fontSize: 16, color: '#6B7A8D', lineHeight: 1.9 }}>
              Na Clínica Cipriano, acreditamos que um sorriso vai muito além da estética. É expressão, é confiança, é identidade. Por isso, cada tratamento é desenvolvido com rigor técnico, materiais de alto padrão e um olhar artístico único para o rosto e a personalidade de cada paciente.
            </p>
            <p style={{ fontFamily: 'DM Sans', fontSize: 16, color: '#6B7A8D', lineHeight: 1.9 }}>
              Com unidades na Barra da Tijuca e em São Paulo, atendemos pacientes que buscam o que há de mais avançado em odontologia estética e harmonização facial — sem abrir mão do cuidado, do acolhimento e da excelência em cada detalhe.
            </p>
            <GoldLine className="mt-2" />
            <Link
              to="/sobre"
              style={{ fontFamily: 'Outfit', fontSize: 12, color: '#C8A96E', letterSpacing: '0.15em', textDecoration: 'none', marginTop: 8 }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              CONHECER NOSSA HISTÓRIA →
            </Link>
          </div>

          {/* Image stack */}
          <div className="lg:col-span-5 relative h-96 lg:h-[520px]">
            <motion.div
              style={{ y: img3Y }}
              className="absolute bottom-0 right-0 w-3/4 h-4/5 overflow-hidden rounded-sm shadow-2xl"
              animate={{ rotate: -3 }}
            >
              <img
                src="https://odontologiacipriano.com.br/wp-content/uploads/2022/02/reabilitacao-oral.jpg"
                alt="Reabilitação" crossOrigin="anonymous"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              style={{ y: img2Y }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-4/5 overflow-hidden rounded-sm shadow-2xl"
              animate={{ rotate: 0 }}
            >
              <img
                src="https://odontologiacipriano.com.br/wp-content/uploads/2022/02/facetas-de-resina.jpg"
                alt="Facetas" crossOrigin="anonymous"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              style={{ y: img1Y }}
              className="absolute top-0 left-0 w-3/4 h-4/5 overflow-hidden rounded-sm shadow-2xl"
              animate={{ rotate: 5 }}
            >
              <img
                src="https://odontologiacipriano.com.br/wp-content/uploads/2022/02/lentes-viotto.jpg"
                alt="Lentes" crossOrigin="anonymous"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section
        ref={teamRef}
        className="relative py-24 px-8 grain overflow-hidden"
        style={{ background: '#0D1421' }}
      >
        {/* Decorative asterisk */}
        <div
          className="absolute top-12 right-16 text-9xl pointer-events-none select-none"
          style={{ fontFamily: 'Cormorant Garamond', color: 'rgba(200,169,110,0.04)', fontSize: 300, lineHeight: 1, transform: 'rotate(15deg)' }}
        >
          ✦
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p style={{ fontFamily: 'Outfit', fontSize: 11, color: '#C8A96E', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 12 }}>
              A EQUIPE
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(32px, 5vw, 48px)', color: '#EDE8E0', margin: 0 }}>
              Os especialistas por trás do seu sorriso.
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
                bio="Especialista em implantodontia e reabilitação oral, o Dr. Borsato combina precisão técnica e sensibilidade estética para devolver sorrisos que transformam vidas. Co-fundador da Clínica Cipriano."
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
                bio="Co-fundadora da Clínica Cipriano, especialista em harmonização orofacial e estética dental. Sua abordagem une ciência e arte para criar resultados que respeitam a singularidade de cada rosto."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── HARMONIZAÇÃO FACIAL ─── */}
      <section
        ref={harmRef}
        className="relative py-24 px-8 overflow-hidden"
        style={{ background: '#F2EEE8' }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={harmInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(36px, 5vw, 52px)', color: '#080C14', margin: 0, lineHeight: 1.1 }}>
              Harmonização Orofacial
            </h2>
            <p style={{ fontFamily: 'DM Sans', fontSize: 16, color: '#6B7A8D', marginTop: 12 }}>
              A arte de equilibrar beleza, juventude e funcionalidade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HARMONIZATION.map((h, i) => (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, y: 20 }}
                animate={harmInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white p-6 flex flex-col gap-3 cursor-pointer transition-all duration-300 group"
                style={{ borderBottom: '2px solid transparent' }}
                onMouseEnter={e => { e.currentTarget.style.borderBottomColor = '#C8A96E'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.borderBottomColor = 'transparent'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <span style={{ fontSize: 22, color: '#C8A96E' }}>{h.icon}</span>
                <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: 20, color: '#080C14', margin: 0 }}>{h.name}</h3>
                <p style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#9A8A72', lineHeight: 1.7, margin: 0 }}>{h.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/tratamentos/harmonizacao"
              className="inline-block px-8 py-4 text-xs transition-all duration-300"
              style={{
                fontFamily: 'Outfit', letterSpacing: '0.15em',
                border: '1px solid #080C14', color: '#080C14', textDecoration: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#080C14'; e.currentTarget.style.color = '#C8A96E' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#080C14' }}
            >
              VER TODOS OS PROCEDIMENTOS →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="relative py-24 px-8 grain overflow-hidden" style={{ background: '#080C14' }}>
        <Marquee
          text="TRANSFORMANDO VIDAS · ATRAVÉS DO SORRISO · DESDE O PRIMEIRO DIA"
          className="mb-16 opacity-30"
          style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', color: '#C8A96E', fontSize: 20 }}
        />
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(32px, 4vw, 48px)', color: '#EDE8E0', margin: 0 }}>
              O que dizem nossos pacientes
            </h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ─── UNITS ─── */}
      <section
        ref={unitsRef}
        className="relative py-24 px-8"
        style={{ background: '#F8F5F0' }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={unitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(32px, 4vw, 48px)', color: '#080C14', margin: 0 }}>
              Onde nos encontrar
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                city: 'RIO DE JANEIRO',
                address: 'Av. Alm. Júlio de Sá Bierrenbach, 200 — Barra da Tijuca',
                phone: '+55 21 97537-0857',
                href: 'https://wa.me/5521975370857',
                map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.8!2d-43.365!3d-23.012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBarra+da+Tijuca!5e0!3m2!1spt!2sbr!4v1620000000000',
              },
              {
                city: 'SÃO PAULO',
                address: 'Rua Castro Alves, 457 — Aclimação',
                phone: '+55 11 91606-6384',
                href: 'https://wa.me/5511916066384',
                map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5!2d-46.634!3d-23.568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAclima%C3%A7%C3%A3o!5e0!3m2!1spt!2sbr!4v1620000000001',
              },
            ].map((u, i) => (
              <motion.div
                key={u.city}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                animate={unitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col gap-5 p-6 rounded-sm"
                style={{ border: '1px solid rgba(200,169,110,0.2)', background: '#FFFFFF' }}
              >
                <p style={{ fontFamily: 'Outfit', fontSize: 11, color: '#C8A96E', letterSpacing: '0.25em', margin: 0 }}>{u.city}</p>
                <iframe
                  src={u.map}
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: 2 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${u.city}`}
                />
                <p style={{ fontFamily: 'DM Sans', fontSize: 14, color: '#6B7A8D', margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <MapPin size={14} color="#C8A96E" />
                  {u.address}
                </p>
                <a
                  href={u.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: 'DM Sans', fontSize: 14, color: '#6B7A8D', display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}
                >
                  <Phone size={14} color="#C8A96E" />
                  {u.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <CTASection />
    </div>
  )
}
