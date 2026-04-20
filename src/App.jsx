import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom'
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

function AnimatedOutlet() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  )
}

function Layout() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <AnimatedOutlet />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/tratamentos', element: <Tratamentos /> },
      { path: '/tratamentos/implante', element: <Implante /> },
      { path: '/tratamentos/facetas', element: <Facetas /> },
      { path: '/tratamentos/harmonizacao', element: <Harmonizacao /> },
      { path: '/tratamentos/clareamento', element: <Clareamento /> },
      { path: '/tratamentos/reabilitacao', element: <Reabilitacao /> },
      { path: '/tratamentos/lentes', element: <Lentes /> },
      { path: '/tratamentos/clinica-geral', element: <ClinicaGeral /> },
      { path: '/unidades', element: <Unidades /> },
      { path: '/contato', element: <Contato /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
