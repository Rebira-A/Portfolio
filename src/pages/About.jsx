import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Github, Linkedin, Mail, FileText, Download, Check } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Simulate generation/manifestation of CV
    setTimeout(() => {
      setDownloading(false);
      // In a real app, window.open('/resume.pdf')
      alert("CV generated. Accessing local PDF protocol...");
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="col-span-1 md:col-span-8">
           <header className="mb-24">
             <h2 className="text-[10px] font-mono text-neutral-500 mb-4 tracking-widest uppercase">Identity / Context</h2>
             <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none mb-12">
               Rebira <br/> <span className="outline-text">Adugna</span>
             </h1>
             <p className="text-2xl md:text-3xl text-neutral-300 font-light leading-snug">
               Software Engineering student at ASTU, A2SV Alumni, and a dedicated advocate for algorithmic excellence.
             </p>
             
             <button 
              onClick={handleDownload}
              className="mt-12 group flex items-center gap-4 bg-white text-black px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all active:scale-[0.98]"
             >
               {downloading ? <Download className="w-4 h-4 animate-bounce" /> : <FileText className="w-4 h-4" />}
               {downloading ? 'Extracting PDF...' : 'Download Resume'}
             </button>
           </header>

           <div className="space-y-12 max-w-2xl text-neutral-400 font-light leading-relaxed text-lg">
              <p>
                My journey in software engineering is defined by a relentless pursuit of efficiency. 
                Whether I'm designing complex MERN stack applications or optimizing AI training pipelines using RLHF, 
                my focus remains on building high-velocity logic systems that deliver value instantly.
              </p>
              <p>
                As an A2SVian, I've cultivated a deep appreciation for collaborative problem-solving and rigorous 
                technical standards. My experimental "7 Projects in 7 Days" challenge was a testament to this, 
                pushing the boundaries of how quickly a robust architectural vision can be translated into functional, 
                tested production code.
              </p>
           </div>
        </div>

        <div className="col-span-1 md:col-span-4 border-l border-neutral-900 pl-12 space-y-24">
           <div>
              <h3 className="text-[10px] font-mono text-neutral-600 mb-6 tracking-widest uppercase italic">Education</h3>
              <div className="space-y-8">
                 <div>
                    <h4 className="text-sm font-bold uppercase text-white">Adama Science and Technology University</h4>
                    <p className="text-[10px] font-mono text-neutral-500 mt-1 uppercase">BSc. Software Engineering</p>
                 </div>
                 <div>
                    <h4 className="text-sm font-bold uppercase text-white">A2SV Alumni</h4>
                    <p className="text-[10px] font-mono text-neutral-500 mt-1 uppercase">Algorithm & Soft Skills Bootcamp</p>
                 </div>
              </div>
           </div>

           <div>
              <h3 className="text-[10px] font-mono text-neutral-600 mb-6 tracking-widest uppercase italic">Competitive Intelligence</h3>
              <div className="space-y-8">
                 <div className="bg-neutral-900/40 p-6 border border-neutral-900 group hover:border-neutral-700 transition-colors">
                    <Terminal className="w-5 h-5 text-neutral-700 mb-4 group-hover:text-white transition-colors" />
                    <h4 className="text-xs font-bold uppercase text-white mb-2">500+ Algorithmic Challenges</h4>
                    <p className="text-[10px] font-mono text-neutral-500 uppercase leading-relaxed">
                       Verified proficiency on LeetCode and Codeforces. Expert focus on Data Structures & Dynamic Programming.
                    </p>
                 </div>
              </div>
           </div>

           <div>
              <h3 className="text-[10px] font-mono text-neutral-600 mb-6 tracking-widest uppercase italic">Communication</h3>
              <div className="flex gap-6">
                 <a href="https://github.com/Rebira678" target="_blank" rel="noopener noreferrer" className="p-3 border border-neutral-800 hover:border-white transition-colors text-neutral-500 hover:text-white"><Github className="w-5 h-5" /></a>
                 <a href="https://www.linkedin.com/in/rebira-adugna-6496b2373" target="_blank" rel="noopener noreferrer" className="p-3 border border-neutral-800 hover:border-white transition-colors text-neutral-500 hover:text-white"><Linkedin className="w-5 h-5" /></a>
                 <a href="mailto:rebikman9@gmail.com" className="p-3 border border-neutral-800 hover:border-white transition-colors text-neutral-500 hover:text-white"><Mail className="w-5 h-5" /></a>
              </div>
           </div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-32 pt-12 border-t border-neutral-900 flex justify-between items-end"
      >
        <span className="text-[150px] font-extrabold text-neutral-900 leading-[0.7] select-none uppercase tracking-tighter">Velocity</span>
        <div className="mb-4 text-right">
           <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Architectural DNA</p>
           <p className="text-xs text-white uppercase italic">Clean Separation / Pure Performance</p>
        </div>
      </motion.div>
    </div>
  );
}
