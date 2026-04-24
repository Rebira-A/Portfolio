import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Loader2, Send, Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="col-span-1 md:col-span-4 border-l border-neutral-900 pl-12 space-y-24">
           <header className="mb-24">
             <h2 className="text-[10px] font-mono text-neutral-500 mb-4 tracking-widest uppercase italic">Transmission / Protocol</h2>
             <h1 className="text-5xl font-bold tracking-tighter uppercase leading-none">
               Get In <br/> <span className="outline-text">Touch</span>
             </h1>
           </header>

           <div className="space-y-12">
              <div className="space-y-4">
                 <h3 className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest leading-none">Electronic Mail</h3>
                 <a href="mailto:rebikman9@gmail.com" className="text-xl font-light text-neutral-300 hover:text-white transition-colors block border-b border-neutral-900 pb-2">
                   rebikman9@gmail.com
                 </a>
              </div>

              <div className="space-y-4">
                 <h3 className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest leading-none">Professional Networks</h3>
                 <div className="space-y-4 text-xl font-light text-neutral-300">
                    <a href="https://www.linkedin.com/in/rebira-adugna-6496b2373" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-between group border-b border-neutral-900 pb-2">
                       <span>LinkedIn</span>
                       <Linkedin className="w-4 h-4 text-neutral-800 group-hover:text-white transition-colors" />
                    </a>
                    <a href="https://github.com/Rebira678" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-between group border-b border-neutral-900 pb-2">
                       <span>Github</span>
                       <Github className="w-4 h-4 text-neutral-800 group-hover:text-white transition-colors" />
                    </a>
                 </div>
              </div>
           </div>
        </div>

        <div className="col-span-1 md:col-span-8 bg-neutral-900/10 border border-neutral-900 p-12 md:p-24">
           <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="space-y-4 group">
                  <label className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block transition-colors group-focus-within:text-white underline decoration-neutral-800 underline-offset-4">Identity / Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="ENTER FULL NAME"
                    className="w-full bg-transparent border-b border-neutral-800 py-4 text-sm focus:outline-none focus:border-white transition-all duration-300 placeholder:text-neutral-900"
                  />
                </div>
                <div className="space-y-4 group">
                  <label className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block transition-colors group-focus-within:text-white underline decoration-neutral-800 underline-offset-4">Endpoint / Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="EMAIL_ADDR_01"
                    className="w-full bg-transparent border-b border-neutral-800 py-4 text-sm focus:outline-none focus:border-white transition-all duration-300 placeholder:text-neutral-900"
                  />
                </div>
              </div>

              <div className="space-y-4 group">
                <label className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block transition-colors group-focus-within:text-white underline decoration-neutral-800 underline-offset-4">Message / Logic Buffer</label>
                <textarea 
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="DESCRIBE PROJECT ARCHITECTURE OR INQUIRY"
                  className="w-full bg-transparent border border-neutral-800 p-6 text-sm focus:outline-none focus:border-white transition-all duration-300 resize-none placeholder:text-neutral-900"
                />
              </div>

              <div className="flex flex-col gap-6">
                <button 
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="w-full bg-white text-black py-6 text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-neutral-200 transition-all active:scale-[0.98] disabled:bg-neutral-800 disabled:text-neutral-600"
                >
                  {status === 'submitting' ? <Loader2 className="w-5 h-5 animate-spin" /> : 
                   status === 'success' ? <CheckCircle2 className="w-5 h-5" /> : 
                   <><Send className="w-4 h-4" /> Initialize Transmission</>}
                  {status === 'success' ? 'Transmission Successful' : status === 'submitting' ? 'Processing Protocols' : 'Secure Talent'}
                </button>

                <div className="text-center">
                  <span className="text-[9px] font-mono text-neutral-700 uppercase tracking-widest block mb-4 italic">OR Use Direct Protocol</span>
                  <a 
                    href="mailto:rebikman9@gmail.com"
                    className="inline-flex items-center gap-2 text-[10px] font-mono text-neutral-500 hover:text-white transition-colors uppercase tracking-[0.2em] underline decoration-neutral-900 underline-offset-4"
                  >
                    <Mail className="w-3 h-3" /> SMTP Direct Link
                  </a>
                </div>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-[10px] font-mono text-white/40 uppercase text-center italic tracking-widest"
                    >
                      "Logic received. Deployment of reply scheduled in T-5 business protocols."
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-[10px] font-mono text-red-700 uppercase text-center italic tracking-widest"
                    >
                      "Connection failed. Protocol error 0xFC. Please retry or contact directly via SMTP."
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
           </form>
        </div>
      </div>
    </div>
  );
}
