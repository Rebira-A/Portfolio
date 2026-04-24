import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Architecture from './pages/Architecture';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

function PageWrapper({ children }) {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-6 pb-24"
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/work" element={<PageWrapper><Work /></PageWrapper>} />
        <Route path="/work/:id" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
        <Route path="/architecture" element={<PageWrapper><Architecture /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-white selection:text-black">
        <Navigation />
        <div className="pt-20"> {/* Offset for fixed nav */}
          <AnimatedRoutes />
        </div>
        
        <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="text-center md:text-left">
             <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-1 font-bold">REBIRA ADUGNA // SCALE & VELOCITY</p>
             <p className="text-[8px] font-mono text-neutral-800 uppercase tracking-tighter">ASTU SOFTWARE ENGINEERING // A2SV ALUMNI</p>
           </div>
           
           <div className="flex gap-12 font-mono text-[9px] tracking-widest uppercase text-neutral-500">
              <a href="https://www.linkedin.com/in/rebira-adugna-6496b2373" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
              <a href="https://github.com/Rebira678" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GITHUB</a>
              <a href="mailto:rebikman9@gmail.com" className="hover:text-white transition-colors">SMTP</a>
           </div>
        </footer>
      </div>
    </Router>
  );
}
