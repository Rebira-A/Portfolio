import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Architecture', path: '/architecture' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-100 bg-brand-black/90 backdrop-blur-sm border-b border-neutral-900 px-6 py-6 h-20 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold tracking-tighter uppercase group z-[210]">
        <span className="text-white group-hover:text-neutral-400 transition-colors">Rebira</span>
        <span className="text-neutral-500 group-hover:text-white transition-colors"> Adugna</span>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-10">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path} 
            className="relative text-[10px] font-mono tracking-widest uppercase transition-colors"
          >
            <span className={location.pathname === item.path ? 'text-white' : 'text-neutral-500 hover:text-white'}>
              {item.name}
            </span>
            {location.pathname === item.path && (
              <motion.div 
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 w-full h-[1px] bg-white"
              />
            )}
          </Link>
        ))}
      </div>

      {/* Mobile Toggle Button */}
      <button 
        onClick={toggleMenu}
        className="md:hidden z-[210] p-2 text-neutral-400 hover:text-white transition-colors"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for focus */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[190] md:hidden"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-24 right-6 left-6 max-w-sm ml-auto bg-[#0a0a0a] border border-white/10 z-[200] rounded-xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] md:hidden"
            >
              <div className="p-8 space-y-1">
                 <div className="mb-6 flex justify-between items-center">
                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">Navigation Protocol</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-white/20" />
                      <div className="w-1 h-1 bg-white/40" />
                      <div className="w-1 h-1 bg-white/60" />
                    </div>
                 </div>

                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link 
                      to={item.path} 
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between py-3 border-b border-white/5"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-mono text-white/30">0{i + 1}</span>
                        <span className={`text-lg font-bold tracking-widest uppercase transition-all duration-300 ${location.pathname === item.path ? 'text-white translate-x-2' : 'text-neutral-500 group-hover:text-white group-hover:translate-x-1'}`}>
                          {item.name}
                        </span>
                      </div>
                      {location.pathname === item.path && (
                        <motion.div 
                          layoutId="active-dot"
                          className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white]"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}

                <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                   <a 
                     href="https://github.com/Rebira678" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-[10px] font-mono text-white/40 hover:text-white uppercase tracking-widest flex items-center gap-2 transition-colors"
                   >
                     <span className="w-1 h-1 bg-white/20 rounded-full" /> Github
                   </a>
                   <a 
                     href="https://www.linkedin.com/in/rebira-adugna-6496b2373" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-[10px] font-mono text-white/40 hover:text-white uppercase tracking-widest flex items-center gap-2 transition-colors"
                   >
                     <span className="w-1 h-1 bg-white/20 rounded-full" /> LinkedIn
                   </a>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 text-center">
                 <p className="text-[8px] font-mono text-white/20 uppercase tracking-[0.2em]">R.ADUGNA // CORE_SYSTEM.v1</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
