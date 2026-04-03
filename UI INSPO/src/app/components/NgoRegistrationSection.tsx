import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Globe, Zap, ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'react-router';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Verified Trust Badge',
    description: 'Gain instant credibility with our zero-knowledge proof verification system.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Accept donations seamlessly from over 150 countries with auto-conversion.',
  },
  {
    icon: Zap,
    title: 'Instant Settlements',
    description: 'No more waiting days for funds. Access your raised capital instantly.',
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub25wcm9maXQlMjB0ZWFtJTIwd29ya2luZyUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NzUxOTc2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1758599668547-2b1192c10abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXIlMjBkaXZlcnNlfGVufDF8fHx8MTc3NTE5NzgyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1769837230054-7f3a7356dde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZXZlbnQlMjBvcmdhbml6YXRpb258ZW58MXx8fHwxNzc1MTk3ODIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1758876203342-fc14c0bba67c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzc1MTEwNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
];

export function NgoRegistrationSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 relative z-10">
        
        <div className="relative bg-white/10 dark:bg-[#111827]/10 backdrop-blur-3xl border border-white/30 dark:border-white/10 rounded-[40px] overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] transition-colors duration-500">
          
          {/* Subtle Inner Gradients */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#EAB464]/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#A7754D]/10 to-transparent pointer-events-none" />
          <div className="absolute inset-0 rounded-[40px] border border-white/30 dark:border-white/5 pointer-events-none transition-colors duration-500 mix-blend-overlay" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Content Side */}
            <div className="p-10 md:p-16 flex flex-col justify-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 w-max mb-8 transition-colors">
                <Building2 className="w-4 h-4 text-[#A7754D] dark:text-[#EAB464]" />
                <span className="text-[13px] font-bold tracking-wide uppercase text-slate-700 dark:text-[#DCCCBB]">For Organizations</span>
              </div>
              
              <h2 className="text-[36px] md:text-[44px] font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6 transition-colors">
                Amplify your impact as a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAB464] to-[#A7754D]">Verified NGO</span>
              </h2>
              
              <p className="text-[16px] md:text-[18px] text-slate-500 dark:text-[#9CA3AF] leading-relaxed mb-10 max-w-[480px] transition-colors">
                Join thousands of verified nonprofits leveraging our secure infrastructure to raise capital faster and more transparently than ever before.
              </p>

              <div className="space-y-6 mb-12">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-white/5 flex items-center justify-center shrink-0 mt-1 transition-colors">
                        <Icon className="w-5 h-5 text-[#A7754D] dark:text-[#EAB464]" />
                      </div>
                      <div>
                        <h4 className="text-[16px] font-bold text-slate-900 dark:text-white mb-1 transition-colors">{benefit.title}</h4>
                        <p className="text-[14px] text-slate-500 dark:text-[#9CA3AF] leading-relaxed transition-colors">{benefit.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link to="/register-ngo" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#EAB464] to-[#A7754D] hover:opacity-90 text-white rounded-2xl text-[16px] font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 group">
                  Register Organization
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/ngo-benefits" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-[#111827]/50 hover:bg-slate-50 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white rounded-2xl text-[16px] font-bold transition-all duration-300 flex items-center justify-center">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative h-full min-h-[400px] lg:min-h-full overflow-hidden bg-slate-900">
              <div className="absolute inset-0 bg-slate-900/10 dark:bg-black/20 z-10 mix-blend-overlay" />
              
              <AnimatePresence>
                <motion.img 
                  key={currentImageIndex}
                  src={galleryImages[currentImageIndex]}
                  alt="Nonprofit team collaborating"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </AnimatePresence>
              
              {/* Floating Verification Badge overlay */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 right-12 z-20 bg-white/10 dark:bg-[#111827]/10 backdrop-blur-3xl border border-white/30 dark:border-white/10 p-4 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] flex items-center gap-4 transition-all duration-500 hover:bg-white/20 dark:hover:bg-[#111827]/20"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-[13px] text-slate-500 dark:text-[#9CA3AF] font-medium transition-colors">Status</div>
                  <div className="text-[15px] font-bold text-slate-900 dark:text-white transition-colors">Verified Partner</div>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
