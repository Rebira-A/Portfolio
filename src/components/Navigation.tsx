import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Architecture', path: '/architecture' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-100 bg-brand-black/90 backdrop-blur-sm border-b border-neutral-900 px-6 py-6 h-20 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold tracking-tighter uppercase group">
        <span className="text-white group-hover:text-neutral-400 transition-colors">Rebira</span>
        <span className="text-neutral-500 group-hover:text-white transition-colors"> Adugna</span>
      </Link>
      
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

      <div className="md:hidden flex gap-4 text-[10px] font-mono">
         <Link to="/contact" className="text-white underline">HIRE</Link>
      </div>
    </nav>
  );
}
