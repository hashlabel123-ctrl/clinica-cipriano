import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import WhatsAppFloat from './components/WhatsAppFloat'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Tratamentos from './pages/Tratamentos'
import Implante from './pages/Implante'
import Facetas from './pages/Facetas'
import Harmonizacao from './pages/Harmonizacao'
import Clareamento from './pages/Clareamento'
import Reabilitacao from './pages/Reabilitacao'
import Lentes from './pages/Lentes'
import ClinicaGeral from './pages/ClinicaGeral'
import Unidades from './pages/Unidades'
import Contato from './pages/Contato'

const PAGE_TRANSITION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: 'easeInOut' },
}

function AnimatedPage({ children }) {
  return (
    <motion.div {...PAGE_TRANSITION}>
      {children}
    </motion.div>
  )
}

function AppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
        <Route path="/sobre" element={<AnimatedPage><Sobre /></AnimatedPage>} />
        <Route path="/tratamentos" element={<AnimatedPage><Tratamentos /></AnimatedPage>} />
        <Route path="/tratamentos/implante" element={<AnimatedPage><Implante /></AnimatedPage>} />
        <Route path="/tratamentos/facetas" element={<AnimatedPage><Facetas /></AnimatedPage>} />
        <Route path="/tratamentos/harmonizacao" element={<AnimatedPage><Harmonizacao /></AnimatedPage>} />
        <Route path="/tratamentos/clareamento" element={<AnimatedPage><Clareamento /></AnimatedPage>} />
        <Route path="/tratamentos/reabilitacao" element={<AnimatedPage><Reabilitacao /></AnimatedPage>} />
        <Route path="/tratamentos/lentes" element={<AnimatedPage><Lentes /></AnimatedPage>} />
        <Route path="/tratamentos/clinica-geral" element={<AnimatedPage><ClinicaGeral /></AnimatedPage>} />
        <Route path="/unidades" element={<AnimatedPage><Unidades /></AnimatedPage>} />
        <Route path="/contato" element={<AnimatedPage><Contato /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <AppRoutes />
      <Footer />
      <WhatsAppFloat />
    </BrowserRouter>
  )
}
