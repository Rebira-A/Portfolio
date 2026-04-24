import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Github, Globe, Code2, Cpu, ExternalLink } from 'lucide-react';
import { projects } from '../constants';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold uppercase mb-8">Logic Error: Project Not Found</h1>
        <Link to="/work" className="text-xs font-mono underline uppercase tracking-widest text-neutral-500 hover:text-white">Return to Archive</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen">
      <Link 
        to="/work" 
        className="inline-flex items-center gap-2 group text-[10px] font-mono text-neutral-500 hover:text-white transition-colors mb-16 uppercase tracking-[0.2em]"
      >
        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
        Back to Archive
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
        <div className="lg:col-span-8">
           <motion.h1 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none mb-12"
           >
             {project.title}
           </motion.h1>

           <div className="space-y-12 text-neutral-400 font-light leading-relaxed text-lg max-w-3xl">
              <p>{project.longDescription}</p>
              
              <div className="bg-neutral-900/20 p-12 border-l-2 border-white">
                 <h4 className="text-[10px] font-mono text-neutral-600 mb-6 uppercase tracking-widest flex items-center gap-2">
                   <Code2 className="w-4 h-4" /> Architectural Reasoning
                 </h4>
                 <p className="text-xl text-neutral-200 italic leading-relaxed">
                   "{project.choice}"
                 </p>
              </div>

              <p>
                This project was built with a focus on "MVP-First" high-velocity development. 
                By utilizing a {project.tags.join(' and ')} stack, we ensured that the initial 
                deployment could handle modular expansion without introducing heavy technical debt.
              </p>
           </div>
        </div>

        <div className="lg:col-span-4 space-y-12">
           <div className="border border-neutral-900 p-8 space-y-8">
              <div>
                 <h3 className="text-[10px] font-mono text-neutral-600 mb-4 uppercase tracking-widest font-bold">Metadata</h3>
                 <div className="space-y-4">
                    <div className="flex justify-between border-b border-neutral-900 pb-2">
                       <span className="text-[10px] font-mono text-neutral-700 uppercase">Role</span>
                       <span className="text-[10px] font-mono text-white uppercase">Lead Architect</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-900 pb-2">
                       <span className="text-[10px] font-mono text-neutral-700 uppercase">Status</span>
                       <span className="text-[10px] font-mono text-white uppercase tracking-tighter italic">V.1.0 Stable</span>
                    </div>
                 </div>
              </div>

              <div>
                 <h3 className="text-[10px] font-mono text-neutral-600 mb-4 uppercase tracking-widest font-bold">Tech Stack</h3>
                 <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-mono border border-neutral-800 px-3 py-1 text-neutral-500 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                 </div>
              </div>

              <div className="space-y-4 pt-4">
                 <a 
                   href={project.github || "#"} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="w-full bg-white text-black py-4 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors"
                 >
                   <Github className="w-4 h-4" /> Source Code
                 </a>
                 <button 
                   className="w-full border border-neutral-800 text-neutral-500 py-4 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2 hover:border-white hover:text-white transition-colors"
                 >
                   <Globe className="w-4 h-4" /> Live Protocol
                 </button>
              </div>
           </div>

           <div className="bg-neutral-900/40 p-8 border border-neutral-800 group">
              <Cpu className="w-6 h-6 text-neutral-700 mb-6 group-hover:text-white transition-colors" />
              <h3 className="text-[10px] font-mono text-neutral-500 mb-2 uppercase tracking-widest">Efficiency Stat</h3>
              <p className="text-xs text-neutral-400 font-mono italic">
                Optimized for sub-200ms <br/>
                First Contentful Paint <br/>
                & atomic state consistency.
              </p>
           </div>
        </div>
      </div>
      
      {/* Next Project Hint */}
      <div className="border-t border-neutral-900 pt-16 flex justify-center">
         <div className="text-center group cursor-pointer" onClick={() => {
            const nextIdx = (projects.findIndex(p => p.id === id) + 1) % projects.length;
            navigate(`/work/${projects[nextIdx].id}`);
         }}>
            <p className="text-[10px] font-mono text-neutral-700 uppercase tracking-widest mb-4 group-hover:text-neutral-500 transition-colors italic">Next Transmission</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase group-hover:outline-text transition-all duration-300">
               {projects[(projects.findIndex(p => p.id === id) + 1) % projects.length].title}
            </h2>
         </div>
      </div>
    </div>
  );
}
