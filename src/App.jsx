
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function AppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  // Check if we should show loading screen (on initial load or theme change)

  return (
    <ThemeProvider>
      <div className="ps5-app">
        <AnimatePresence mode="wait">
 
            <>
              <Navigation key="nav" />
              <main className="page-content">
                <AppRoutes key="routes" />
              </main>
              <Footer />
            </>
          
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}

export default App

