import React from 'react';
import { motion } from 'motion/react';
import { skills } from '../constants';

export default function Architecture() {
  return (
    <div className="pt-24 min-h-screen">
      <header className="mb-24">
        <h2 className="text-[10px] font-mono text-neutral-500 mb-4 tracking-widest uppercase">The Arsenal / Matrix</h2>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none mb-12">
          Technical <br/> <span className="outline-text">Architecture</span>
        </h1>
        <p className="max-w-2xl text-neutral-400 font-light text-lg">
          A granular view of the tools and methodologies used to engineering high-velocity logic systems. 
          Categorized by core functional domains.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, i) => (
          <motion.div 
            key={skill.category}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-12 border border-neutral-900 bg-neutral-900/10 hover:bg-neutral-800/20 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="p-4 bg-brand-black border border-neutral-800 group-hover:border-neutral-600 transition-colors">
                {skill.icon}
              </div>
              <span className="text-[10px] font-mono text-neutral-800 group-hover:text-neutral-500 italic uppercase tracking-widest">Logic Layer 0{i + 1}</span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight uppercase mb-4">{skill.category}</h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8 max-w-md">
              {skill.description}
            </p>

            <div className="space-y-4">
              <h4 className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest">Verified Tooling</h4>
              <div className="flex flex-wrap gap-2">
                 {skill.tools.map((tool) => (
                    <span key={tool} className="text-[10px] font-mono text-neutral-400 border border-neutral-800 px-3 py-1 group-hover:text-white group-hover:border-neutral-600 transition-colors uppercase">
                      {tool}
                    </span>
                 ))}
              </div>
            </div>

            {/* Matrix Visual Accent */}
            <div className="absolute bottom-0 right-0 p-4 font-mono text-[80px] text-neutral-900 leading-none select-none -z-10 group-hover:text-neutral-800 transition-colors hidden sm:block">
              {skill.category.split(' ')[0]}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-neutral-900 pt-12">
         <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-tight text-white mb-6">Core Methodology</h4>
            <div className="space-y-2 text-xs font-mono text-neutral-500 uppercase tracking-widest leading-loose">
               <p>01 / Clean Architecture</p>
               <p>02 / Repository Pattern</p>
               <p>03 / Stateless Logic Layers</p>
               <p>04 / Atomic State Management</p>
            </div>
         </div>
         <div className="md:col-span-2 bg-neutral-900/20 p-12 border border-neutral-800 italic">
            <p className="text-neutral-300 leading-relaxed font-light text-lg">
              "Logic is not static. My infrastructure choices are driven by the necessity of high-velocity deployment while maintaining strict architectural boundaries to prevent technical debt."
            </p>
         </div>
      </div>
    </div>
  );
}
