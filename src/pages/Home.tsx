import { motion } from 'motion/react';
import { ArrowUpRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, skills } from '../constants';

export default function Home() {
  return (
    <div className="pt-24 space-y-32">
      {/* Hero Section */}
      <section>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] text-white uppercase"
        >
          Engineering <br/> 
          <span className="outline-text">Scalable Logic</span> <br/>
          & AI Systems
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 max-w-2xl"
        >
          <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
            Full-stack Web Developer & AI Training Engineer. 
            Focused on high-velocity development through clean architectural separation.
          </p>
          <div className="mt-8 flex gap-8 font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
             <div className="flex flex-col">
               <span className="text-white">500+</span>
               <span>Algo Solved</span>
             </div>
             <div className="flex flex-col">
               <span className="text-white">MERN / RLHF</span>
               <span>Core Stack</span>
             </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="col-span-1 md:col-span-4 space-y-12">
           <div className="border-l border-neutral-800 pl-6">
              <h3 className="text-[10px] font-mono text-neutral-500 mb-8 tracking-widest uppercase">Featured Work</h3>
              <div className="space-y-16">
                {projects.slice(0, 2).map((project, i) => (
                  <Link 
                    key={project.id}
                    to={`/work/${project.id}`}
                    className="block group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                       <h4 className="text-sm font-bold uppercase transition-colors group-hover:text-white leading-none">{project.title}</h4>
                       <ArrowUpRight className="w-3 h-3 text-neutral-800 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{project.description}</p>
                  </Link>
                ))}
              </div>
              <Link to="/work" className="inline-block mt-12 text-[10px] font-mono text-white underline tracking-widest uppercase">View All Projects</Link>
           </div>
           
           <div className="bg-neutral-900/40 p-8 border border-neutral-800">
             <h3 className="text-[10px] font-mono text-neutral-500 mb-4 tracking-widest uppercase">Status</h3>
             <p className="text-xs text-neutral-300 font-mono leading-relaxed">
               CURRENTLY OPTIMIZING <br/>
               BACKEND VELOCITY <br/>
               & NEURAL WEIGHTS
             </p>
           </div>
        </div>

        <div className="col-span-1 md:col-span-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-neutral-900/30 p-12 border-t-2 border-white mb-12"
          >
            <h3 className="text-[10px] font-mono text-neutral-500 mb-6 tracking-widest uppercase">Philosophy</h3>
            <p className="text-2xl md:text-4xl leading-tight text-neutral-200 font-light italic">
              "Efficiency is not just about code execution, but the time-to-market of complex logic. Distill complexity into high-velocity value."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {skills.map((skill, i) => (
                <div 
                  key={i} 
                  className="group border border-neutral-900 p-8 hover:bg-neutral-900/40 hover:border-neutral-700 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    {skill.icon}
                  </div>
                  <div className="mb-4 text-neutral-500 group-hover:text-white transition-colors">{skill.icon}</div>
                  <h4 className="text-xs font-bold uppercase mb-2 tracking-tight">{skill.category}</h4>
                  <p className="text-[9px] font-mono text-neutral-600 leading-relaxed uppercase tracking-widest group-hover:text-neutral-400 transition-colors">
                    {skill.tools.join(' / ')}
                  </p>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
