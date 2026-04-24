import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, Code2 } from 'lucide-react';
import { projects } from '../constants';

export default function Work() {
  return (
    <div className="pt-24 min-h-screen">
      <header className="mb-24">
        <h2 className="text-[10px] font-mono text-neutral-500 mb-4 tracking-widest uppercase italic">Archive / Case Studies</h2>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none">
          Selected <span className="outline-text">Works</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-neutral-900/10 border border-neutral-900">
        {projects.map((project, i) => (
          <Link 
            key={project.id}
            to={`/work/${project.id}`}
            className="group block"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-black p-12 border border-neutral-900 hover:bg-neutral-900/20 transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-mono text-neutral-800 group-hover:text-neutral-500 transition-colors">0{i + 1}</span>
                <ArrowUpRight className="w-5 h-5 text-neutral-900 group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <h3 className="text-3xl font-bold tracking-tighter uppercase mb-6">{project.title}</h3>
              
              <p className="text-neutral-400 font-light leading-relaxed mb-12 flex-grow">
                {project.longDescription || project.description}
              </p>

              <div className="space-y-8 pt-8 border-t border-neutral-900">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[8px] font-mono border border-neutral-800 px-3 py-1 uppercase tracking-widest text-neutral-600 group-hover:text-neutral-300 group-hover:border-neutral-700 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-neutral-900/40 p-6">
                   <h4 className="text-[9px] font-mono text-neutral-600 mb-2 uppercase tracking-widest flex items-center gap-2">
                     <Code2 className="w-3 h-3" /> Architecture Choice
                   </h4>
                   <p className="text-xs text-neutral-400 italic">"{project.choice}"</p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <section className="mt-32 py-24 border-y border-neutral-900 text-center">
         <h2 className="text-[10px] font-mono text-neutral-500 mb-8 tracking-widest uppercase">Ongoing Development</h2>
         <p className="text-2xl md:text-4xl font-bold tracking-tight text-white uppercase italic">
            7 Projects / 7 Days Challenge Successfully Completed
         </p>
      </section>
    </div>
  );
}
