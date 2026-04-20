import { useRef, Suspense, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'
import CTASection from '../components/CTASection'
import GoldLine from '../components/GoldLine'
import ThreeDScene from '../components/ThreeDScene'

/* ─── DATA ────────────────────────────────────── */
const C = '#C8A96E'
const NIGHT = '#080C14'
const CREAM = '#F8F5F0'
const CARD = '#0D1421'

const TREATMENTS = [
  { n: '01', title: 'Implantes Dentários', desc: 'Solução definitiva para dentes perdidos. Do unitário à reabilitação total.', img: 'https://odontologiacipriano.com.br/wp-content/uploads/2022/02/implantodontia.jpg', to: '/tratamentos/implante' },
  { n: '02', title: 'Facetas de Resina', desc: 'Dentes perfeitamente alinhados e brancos. Transformação em uma sessão.', img: 'https://odontologiacipriano.com.br/wp-content/uploads/2022/02/facetas-de-resina.jpg', to: '/tratamentos/facetas' },
  { n: '03', title: 'Harmonização Orofacial', desc: 'Equilíbrio estético do sorriso e da face. Arte e ciência em perfeita harmonia.', img: 'https://odontologiacipriano.com.br/wp-content/uploads/2022/02/Harmonizacao-Orafacial-removebg-preview.png', to: '/tratamentos/harmonizacao' },
  { n: '04', title: 'Clareamento Dental', desc: 'O sorriso mais branco da sua vida. Tecnologia e segurança sem igual.', img: 'https://odontologiacipriano.com.br/wp-content/uploads/2022/02/100615tecnicasclareamento-1024x1024.jpg', to: '/tratamentos/clareamento' },
  { n: '05', title: 'Reabilitação Oral', desc: 'Restauração completa da estética e função bucal. Seu novo sorriso começa aqui.', img: 'https://odontologiacipriano.com.br/wp-content/uploads/2022/02/reabilitacao-oral.jpg', to: '/tratamentos/reabilitacao' },
  { n: '06', title: 'Lentes de Contato Dental', desc: 'Ultrafinas e naturais. A perfeição estética que você sempre sonhou.', img: 'https://odontologiacipriano.com.br/wp-content/uploads/2022/02/lentes-viotto.jpg', to: '/tratamentos/lentes' },
  { n: '07', title: 'Clínica Geral', desc: 'Prevenção, diagnóstico e cuidado completo para toda a família.', img: 'https://odontologiacipriano.com.br/wp-content/uploads/2022/02/clinico-geral.jpg', to: '/tratamentos/clinica-geral' },
  { n: '08', title: 'Harmonização Facial', desc: '8 procedimentos estéticos para rejuvenescer, harmonizar e realçar sua beleza.', img: null, to: '/tratamentos/harmonizacao' },
]

const STATS = [
  { value: '2', label: 'Unidades' },
  { value: '7+', label: 'Especialidades' },
  { value: '5★', label: 'Avaliação' },
  { value: '100%', label: 'Satisfação' },
]

const TESTIMONIALS = [
  { quote: 'Gostei muito do resultado. A cirurgia foi tranquila e profissional.', name: 'Bruno Alves', city: 'Rio de Janeiro' },
  { quote: 'Não senti nenhuma dor. Equipe incrível, me senti cuidado o tempo todo.', name: 'Rafael Andrade', city: 'São Paulo' },
  { quote: 'Amei o resultado. Estou com um novo sorriso — me sinto outra pessoa.', name: 'Eduarda Barros', city: 'Rio de Janeiro' },
  { quote: 'Todos muito atenciosos. Adorei o resultado. Recomendo de olhos fechados!', name: 'Vitor Lima', city: 'São Paulo' },
]

const HARM = [
  { icon: '⬡', name: 'Toxina Botulínica', desc: 'Rugas, assimetrias e bruxismo' },
  { icon: '◎', name: 'Preenchimento Facial', desc: 'Volume com ácido hialurônico' },
  { icon: '◇', name: 'Preenchimento Labial', desc: 'Lábios definidos e naturais' },
  { icon: '✦', name: 'Microagulhamento', desc: 'Colágeno e pele renovada' },
  { icon: '◈', name: 'Bioestimuladores', desc: 'Radiesse e Sculptra' },
  { icon: '◉', name: 'Skinbooster', desc: 'Hidratação profunda' },
  { icon: '▽', name: 'Lipo Enzimática', desc: 'Redução de papada' },
  { icon: '◁', name: 'Rinomodelação', desc: 'Correção nasal sem cirurgia' },
]

/* ─── USE REVEAL HOOK ────────────────────────── */
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.disconnect() } },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

/* ─── INLINE REVEAL STYLES ──────────────────── */
const revealStyle = {
  opacity: 0,
  transform: 'translateY(32px)',
  transition: 'opacity 0.75s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94)',
}
// When .revealed is added: opacity 1, transform none
// Injected via global CSS in index.css via useEffect
const globalRevealCSS = `.revealed { opacity: 1 !important; transform: none !important; }`

/* ─── TREATMENT CARD ────────────────────────── */
function TCard({ t, index }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      style={{ ...revealStyle, transitionDelay: `${index * 0.07}s` }}
    >
      <Link to={t.to} style={{ textDecoration: 'none', display: 'block' }}>
        <div className="treatment-card" style={{ padding: 28 }}>
          <div style={{ fontFamily: 'Outfit', fontWeight: 200, fontSize: 40, color: 'rgba(200,169,110,0.18)', lineHeight: 1, marginBottom: 16 }}>
            {t.n}
          </div>

          <div style={{ height: 200, overflow: 'hidden', marginBottom: 20, borderRadius: 2, background: '#131C2E' }}>
            {t.img ? (
              <img
                src={t.img}
                alt={t.title}
                crossOrigin="anonymous"
                className="card-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            ) : (
              <div style={{
                width: '100%', height: '100%',
                background: 'linear-gradient(135deg, #131C2E 0%, rgba(200,169,110,0.15) 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', color: C, fontSize: 16, textAlign: 'center', padding: '0 16px' }}>
                  Harmonização Facial
                </span>
              </div>
            )}
          </div>

          <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: 21, color: '#EDE8E0', margin: '0 0 10px' }}>
            {t.title}
          </h3>
          <p style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#9A8A72', lineHeight: 1.7, margin: '0 0 18px' }}>
            {t.desc}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 24, height: 1, background: C, transition: 'width 0.3s' }} />
            <span style={{ fontFamily: 'Outfit', fontSize: 10, color: C, letterSpacing: '0.15em' }}>
              VER TRATAMENTO <span className="card-arrow">→</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

/* ─── TESTIMONIAL ───────────────────────────── */
function Testimonials() {
  const ref = useRef()
  useEffect(() => {
    let idx = 0
    const items = ref.current?.querySelectorAll('.t-item')
    if (!items?.length) return
    items[0].style.opacity = '1'
    items[0].style.transform = 'translateY(0)'
    const interval = setInterval(() => {
      items[idx].style.opacity = '0'
      items[idx].style.transform = 'translateY(-16px)'
      idx = (idx + 1) % items.length
      items[idx].style.opacity = '1'
      items[idx].style.transform = 'translateY(0)'
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative', minHeight: 200 }}>
      {TESTIMONIALS.map((t, i) => (
        <div
          key={i}
          className="t-item"
          style={{
            position: i === 0 ? 'relative' : 'absolute',
            top: 0, left: 0, right: 0,
            opacity: 0,
            transform: 'translateY(16px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
            {Array(5).fill(0).map((_, s) => (
              <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill={C}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 22, color: '#EDE8E0', lineHeight: 1.55, marginBottom: 20 }}>
            "{t.quote}"
          </p>
          <div>
            <div style={{ fontFamily: 'Outfit', fontSize: 13, color: C }}>{t.name}</div>
            <div style={{ fontFamily: 'Outfit', fontWeight: 200, fontSize: 11, color: '#9A8A72' }}>{t.city}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── HOME ──────────────────────────────────── */
export default function Home() {
  // Inject reveal CSS once
  useEffect(() => {
    const id = 'reveal-css'
    if (!document.getElementById(id)) {
      const s = document.createElement('style')
      s.id = id
      s.textContent = globalRevealCSS
      document.head.appendChild(s)
    }
  }, [])

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroContentY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const heroBgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  const statsRef = useReveal()
  const philRef = useReveal()
  const teamRef = useReveal()
  const harmRef = useReveal()
  const testRef = useReveal()
  const unitsRef = useReveal()

  return (
    <div style={{ background: NIGHT }}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="grain-overlay"
        style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: NIGHT }}
      >
        {/* 3D canvas */}
        <motion.div
          style={{ y: heroBgY, position: 'absolute', inset: 0 }}
          className="hidden lg:block"
        >
          <div style={{ position: 'absolute', right: 0, top: 0, width: '58%', height: '100%' }}>
            <Suspense fallback={null}>
              <ThreeDScene />
            </Suspense>
          </div>
        </motion.div>

        {/* Gradient over canvas */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(to right, #080C14 42%, rgba(8,12,20,0.75) 65%, rgba(8,12,20,0.1) 100%)',
        }} className="hidden lg:block" />

        {/* Decorative horizontal lines */}
        <div style={{ position: 'absolute', top: '20%', left: 0, right: 0, height: 1, background: 'rgba(200,169,110,0.04)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '80%', left: 0, right: 0, height: 1, background: 'rgba(200,169,110,0.04)', pointerEvents: 'none' }} />

        {/* Content */}
        <motion.div
          style={{ y: heroContentY, position: 'relative', zIndex: 10 }}
        >
          <div style={{
            maxWidth: 580, padding: '0 48px',
            paddingTop: 'calc(104px + 12vh)', paddingBottom: '80px',
            display: 'flex', flexDirection: 'column',
          }}>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}
            >
              <div style={{ width: 32, height: 1, background: C }} />
              <span className="section-label">ODONTOLOGIA · ESTÉTICA · EXCELÊNCIA</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-display"
              style={{ fontSize: 'clamp(46px, 6.5vw, 80px)', marginBottom: 0 }}
            >
              Sorrisos que
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-display h-display-gold"
              style={{ fontSize: 'clamp(46px, 6.5vw, 80px)', marginBottom: 28 }}
            >
              definem histórias.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.95 }}
              className="body-text"
              style={{ maxWidth: 460, marginBottom: 36 }}
            >
              Uma clínica de referência em odontologia estética e harmonização facial.
              <br />
              <span style={{ color: C }}>Barra da Tijuca, RJ</span> · <span style={{ color: C }}>Aclimação, SP</span>
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 1, delay: 1.1 }}
              style={{ height: 1, background: C, marginBottom: 36 }}
            />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}
            >
              <a href="https://wa.me/5521973623797" target="_blank" rel="noopener noreferrer" className="btn-gold">
                Agendar Consulta
              </a>
              <Link to="/sobre" className="btn-outline">
                Conhecer a Clínica
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 40, right: 48, zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }} className="hidden lg:flex">
          <span style={{
            fontFamily: 'Outfit', fontWeight: 200, fontSize: 9, color: C,
            letterSpacing: '0.3em', writingMode: 'vertical-rl',
          }}>SCROLL</span>
          <div style={{ width: 1, height: 48, background: C, opacity: 0.4,
            animation: 'scrollDrop 1.8s ease-in-out infinite' }} />
        </div>

        {/* Bottom gradient fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
          background: 'linear-gradient(to bottom, transparent, #080C14)',
          pointerEvents: 'none', zIndex: 5,
        }} />
      </section>

      {/* ══════════════════════════════════════
          STATS
      ══════════════════════════════════════ */}
      <section style={{ background: CREAM, position: 'relative', padding: '80px 48px', overflow: 'hidden' }}>
        {/* Decorative watermark */}
        <div style={{
          position: 'absolute', bottom: -40, right: -20,
          fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontWeight: 300,
          fontSize: 200, color: 'rgba(200,169,110,0.06)', lineHeight: 1,
          pointerEvents: 'none', userSelect: 'none', whiteSpace: 'nowrap',
        }}>
          Cipriano
        </div>

        <div
          ref={statsRef}
          style={{ ...revealStyle, maxWidth: 1200, margin: '0 auto' }}
        >
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
          }}>
            {STATS.map((s, i) => (
              <div
                key={s.label}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  padding: '40px 32px',
                  borderRight: i < 3 ? '1px solid rgba(200,169,110,0.2)' : 'none',
                }}
              >
                <div style={{ width: 32, height: 1, background: C, marginBottom: 24 }} />
                <span style={{
                  fontFamily: 'Outfit', fontWeight: 200, fontSize: 72,
                  color: NIGHT, lineHeight: 1, letterSpacing: '-0.02em',
                }}>
                  {s.value}
                </span>
                <span style={{
                  fontFamily: 'Outfit', fontWeight: 300, fontSize: 10,
                  color: '#9A8A72', letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: 12,
                }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TREATMENTS
      ══════════════════════════════════════ */}
      <section className="grain-overlay" style={{ background: NIGHT, padding: '100px 48px', position: 'relative' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <span className="section-label">NOSSAS ESPECIALIDADES</span>
            <h2 className="h-display" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginTop: 16, marginBottom: 0 }}>
              Uma clínica.{' '}
              <em style={{ color: C }}>Múltiplas transformações.</em>
            </h2>
            <p className="body-text" style={{ maxWidth: 520, marginTop: 16 }}>
              Do implante à harmonização facial — tratamentos de excelência para cada fase do seu sorriso.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 16,
          }}>
            {TREATMENTS.map((t, i) => <TCard key={t.n} t={t} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PHILOSOPHY / EDITORIAL SPREAD
      ══════════════════════════════════════ */}
      <section style={{ background: CREAM, padding: '100px 48px', overflow: 'hidden', position: 'relative' }}>
        <div
          ref={philRef}
          style={{ ...revealStyle, maxWidth: 1200, margin: '0 auto' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            {/* Text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <span className="section-label">NOSSA FILOSOFIA</span>
              <h2 className="h-display h-display-dark" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
                A arte de transformar vidas através do sorriso.
              </h2>
              <GoldLine />
              <p className="body-text body-text-dark">
                Na Clínica Cipriano, acreditamos que um sorriso vai muito além da estética. É expressão, é confiança, é identidade. Por isso, cada tratamento é desenvolvido com rigor técnico, materiais de alto padrão e um olhar artístico único para o rosto e a personalidade de cada paciente.
              </p>
              <p className="body-text body-text-dark">
                Com unidades na Barra da Tijuca e em São Paulo, atendemos pacientes que buscam o que há de mais avançado em odontologia estética e harmonização facial.
              </p>
              <div>
                <Link to="/sobre" className="btn-outline-dark">
                  Conhecer Nossa História
                </Link>
              </div>
            </div>

            {/* Image stack editorial */}
            <div style={{ position: 'relative', height: 560 }}>
              <div style={{
                position: 'absolute', bottom: 0, right: 0,
                width: '75%', height: '80%',
                transform: 'rotate(-3deg)',
                overflow: 'hidden', borderRadius: 2,
                boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
                border: '6px solid #fff',
              }}>
                <img src="https://odontologiacipriano.com.br/wp-content/uploads/2022/02/reabilitacao-oral.jpg"
                  crossOrigin="anonymous" alt="Reabilitação"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{
                position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
                width: '72%', height: '75%',
                overflow: 'hidden', borderRadius: 2,
                boxShadow: '0 24px 64px rgba(0,0,0,0.25)',
                border: '6px solid #fff',
              }}>
                <img src="https://odontologiacipriano.com.br/wp-content/uploads/2022/02/facetas-de-resina.jpg"
                  crossOrigin="anonymous" alt="Facetas"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{
                position: 'absolute', top: 0, left: 0,
                width: '68%', height: '72%',
                transform: 'rotate(4deg)',
                overflow: 'hidden', borderRadius: 2,
                boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
                border: '6px solid #fff',
              }}>
                <img src="https://odontologiacipriano.com.br/wp-content/uploads/2022/02/lentes-viotto.jpg"
                  crossOrigin="anonymous" alt="Lentes"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              {/* Gold accent */}
              <div style={{
                position: 'absolute', top: -16, right: -16,
                width: 80, height: 80,
                border: `1px solid ${C}`,
                borderRadius: 0,
                opacity: 0.4,
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TEAM
      ══════════════════════════════════════ */}
      <section className="grain-overlay" style={{ background: '#0A0F1C', padding: '100px 48px', position: 'relative' }}>
        {/* Huge decorative char */}
        <div style={{
          position: 'absolute', top: 0, right: -40, fontSize: 380,
          fontFamily: 'Cormorant Garamond', fontStyle: 'italic',
          color: 'rgba(200,169,110,0.025)', lineHeight: 1, pointerEvents: 'none',
          userSelect: 'none', overflow: 'hidden',
        }}>C</div>

        <div
          ref={teamRef}
          style={{ ...revealStyle, maxWidth: 1100, margin: '0 auto' }}
        >
          <div style={{ marginBottom: 64 }}>
            <span className="section-label">A EQUIPE</span>
            <h2 className="h-display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', marginTop: 16 }}>
              Os especialistas por trás do seu sorriso.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
            {[
              {
                init: 'DB', name: 'Dr. Borsato', ig: 'dr.borsato',
                role: 'Implantodontia · Reabilitação Oral',
                bio: 'Especialista em implantodontia e reabilitação oral, combina precisão técnica e sensibilidade estética para devolver sorrisos que transformam vidas. Co-fundador da Clínica Cipriano.',
              },
              {
                init: 'IC', name: 'Dra. Cipriano', ig: 'iscipriano',
                role: 'Harmonização Orofacial · Estética Dental',
                bio: 'Co-fundadora da Clínica Cipriano, especialista em harmonização orofacial e estética dental. Sua abordagem une ciência e arte para criar resultados que respeitam a singularidade de cada rosto.',
              },
            ].map(p => (
              <div key={p.name} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {/* Photo placeholder */}
                {/* Substituir por foto profissional */}
                <div style={{
                  height: 400, width: '100%', position: 'relative', overflow: 'hidden',
                  border: `1px solid rgba(200,169,110,0.2)`,
                  background: 'radial-gradient(ellipse at 30% 40%, #1a2440 0%, #080C14 70%)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8,
                }}>
                  <span style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 96, color: 'rgba(200,169,110,0.15)', lineHeight: 1 }}>
                    {p.init}
                  </span>
                  <span style={{ fontFamily: 'Outfit', fontWeight: 300, fontSize: 16, color: '#EDE8E0' }}>{p.name}</span>
                  <span style={{ fontFamily: 'Outfit', fontWeight: 200, fontSize: 11, color: C, letterSpacing: '0.1em' }}>@{p.ig}</span>
                  {/* Corner decorations */}
                  <div style={{ position: 'absolute', top: 16, left: 16, width: 24, height: 24, borderTop: `1px solid ${C}`, borderLeft: `1px solid ${C}`, opacity: 0.4 }} />
                  <div style={{ position: 'absolute', bottom: 16, right: 16, width: 24, height: 24, borderBottom: `1px solid ${C}`, borderRight: `1px solid ${C}`, opacity: 0.4 }} />
                </div>

                <div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: 28, color: '#EDE8E0', margin: '0 0 6px' }}>{p.name}</h3>
                  <p style={{ fontFamily: 'Outfit', fontSize: 11, color: C, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 16px' }}>{p.role}</p>
                  <p className="body-text" style={{ marginBottom: 16 }}>{p.bio}</p>
                  <a
                    href={`https://instagram.com/${p.ig}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: C, textDecoration: 'none', fontFamily: 'Outfit', fontSize: 12 }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill={C}>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @{p.ig}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HARMONIZAÇÃO FACIAL
      ══════════════════════════════════════ */}
      <section style={{ background: '#F2EEE8', padding: '100px 48px', position: 'relative', overflow: 'hidden' }}>
        <div
          ref={harmRef}
          style={{ ...revealStyle, maxWidth: 1200, margin: '0 auto' }}
        >
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 className="h-display h-display-dark" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}>
              Harmonização Orofacial
            </h2>
            <p className="body-text body-text-dark" style={{ marginTop: 12 }}>
              A arte de equilibrar beleza, juventude e funcionalidade.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {HARM.map((h, i) => (
              <div
                key={h.name}
                style={{
                  background: '#fff', padding: '28px 24px',
                  borderBottom: '2px solid transparent',
                  transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
                  cursor: 'pointer',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderBottomColor = C
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderBottomColor = 'transparent'
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'
                  e.currentTarget.style.transform = 'none'
                }}
              >
                <div style={{ fontSize: 22, color: C, marginBottom: 14 }}>{h.icon}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: 19, color: NIGHT, margin: '0 0 8px' }}>{h.name}</h3>
                <p style={{ fontFamily: 'DM Sans', fontSize: 12, color: '#9A8A72', lineHeight: 1.6 }}>{h.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/tratamentos/harmonizacao" className="btn-outline-dark">
              Ver Todos os Procedimentos
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="grain-overlay" style={{ background: NIGHT, padding: '100px 48px', position: 'relative' }}>
        {/* Marquee top */}
        <div style={{ overflow: 'hidden', marginBottom: 64 }}>
          <div className="marquee-track" style={{ opacity: 0.22 }}>
            {Array(10).fill('TRANSFORMANDO VIDAS · ATRAVÉS DO SORRISO · DESDE O PRIMEIRO DIA ·').map((t, i) => (
              <span key={i} style={{
                fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 18, color: C,
                padding: '0 32px', whiteSpace: 'nowrap',
              }}>{t}</span>
            ))}
          </div>
        </div>

        <div ref={testRef} style={{ ...revealStyle, maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
            <div>
              <span className="section-label">DEPOIMENTOS</span>
              <h2 className="h-display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', marginTop: 16 }}>
                O que dizem nossos pacientes.
              </h2>
              <div style={{ marginTop: 32 }}>
                <GoldLine />
              </div>
              <p className="body-text" style={{ marginTop: 24 }}>
                A confiança dos nossos pacientes é o maior reconhecimento do nosso trabalho. Cada sorriso transformado é uma história que nos motiva a ser ainda melhores.
              </p>
            </div>

            <div style={{
              background: 'rgba(13,20,33,0.8)', border: '1px solid rgba(200,169,110,0.15)',
              padding: 40, backdropFilter: 'blur(20px)',
            }}>
              <Testimonials />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          UNITS
      ══════════════════════════════════════ */}
      <section style={{ background: CREAM, padding: '100px 48px' }}>
        <div ref={unitsRef} style={{ ...revealStyle, maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="section-label">NOSSAS UNIDADES</span>
            <h2 className="h-display h-display-dark" style={{ fontSize: 'clamp(32px, 4vw, 52px)', marginTop: 16 }}>
              Onde nos encontrar
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            {[
              {
                city: 'RIO DE JANEIRO', neighborhood: 'Barra da Tijuca',
                address: 'Av. Alm. Júlio de Sá Bierrenbach, 200', phone: '+55 21 97537-0857',
                wa: 'https://wa.me/5521975370857',
                map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14699.36!2d-43.365!3d-23.012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBarra+da+Tijuca!5e0!3m2!1spt!2sbr!4v1620000000000',
              },
              {
                city: 'SÃO PAULO', neighborhood: 'Aclimação',
                address: 'Rua Castro Alves, 457', phone: '+55 11 91606-6384',
                wa: 'https://wa.me/5511916066384',
                map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5!2d-46.634!3d-23.568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAclima%C3%A7%C3%A3o!5e0!3m2!1spt!2sbr!4v1620000000001',
              },
            ].map(u => (
              <div
                key={u.city}
                style={{
                  border: '1px solid rgba(200,169,110,0.2)', overflow: 'hidden',
                  background: '#fff',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                }}
              >
                <iframe
                  src={u.map}
                  width="100%" height="240"
                  style={{ display: 'block', border: 0, filter: 'grayscale(15%)' }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${u.city}`}
                />
                <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span className="section-label">{u.city}</span>
                  <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: 24, color: NIGHT, margin: 0 }}>{u.neighborhood}</h3>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <MapPin size={14} color={C} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontFamily: 'DM Sans', fontSize: 14, color: '#6B7A8D' }}>{u.address}</span>
                  </div>
                  <a href={u.wa} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
                    <Phone size={14} color={C} />
                    <span style={{ fontFamily: 'DM Sans', fontSize: 14, color: '#6B7A8D' }}>{u.phone}</span>
                  </a>
                  <a href={u.wa} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ marginTop: 8, textAlign: 'center', fontSize: 10 }}>
                    WhatsApp {u.city === 'RIO DE JANEIRO' ? 'RJ' : 'SP'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
