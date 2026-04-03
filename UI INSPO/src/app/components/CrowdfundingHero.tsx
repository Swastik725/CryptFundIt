import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Star, ShieldCheck, TrendingUp, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

const CARDS = [
  {
    id: 1,
    category: "Medical",
    title: "Help Emma Get Life-Saving Surgery",
    fundraiser: "by Sarah Mitchell",
    raised: "₹12,500",
    goal: "₹20,000",
    progress: 62,
    supporters: 234,
    daysLeft: 12,
    image: "https://images.unsplash.com/photo-1758206523860-0583e7b51a5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaG9zcGl0YWwlMjBjaGlsZHxlbnwxfHx8fDE3NzUxODkwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    category: "Education",
    title: "Scholarship Fund for Underprivileged Students",
    fundraiser: "by Michael Rodriguez",
    raised: "₹8,750",
    goal: "₹15,000",
    progress: 58,
    supporters: 127,
    daysLeft: 18,
    image: "https://images.unsplash.com/flagged/photo-1574098335395-18cf525e45d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjaGlsZHJlbiUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzUxODkwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    category: "Emergency",
    title: "Flood Relief for Affected Families",
    fundraiser: "by Community Relief Org",
    raised: "₹45,200",
    goal: "₹50,000",
    progress: 90,
    supporters: 892,
    daysLeft: 5,
    image: "https://images.unsplash.com/photo-1664868035693-7d3cba76826b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vZCUyMGRpc2FzdGVyJTIwcmVsaWVmfGVufDF8fHx8MTc3NTE3MDI5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function CrowdfundingHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax transform for the background video (gentle parallax)
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // Add a soft fade out effect as the user scrolls
  const opacityOut = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleDown = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div className="w-full flex flex-col items-center pb-[100px] font-['Inter',sans-serif] relative transition-colors duration-500">
      {/* HERO SECTION */}
      <div ref={heroRef} className="relative w-full">
        <div className="w-full flex flex-col items-center justify-center px-5 md:px-6 pt-[100px] md:pt-[140px] pb-[100px] min-h-[calc(100vh-72px)] relative z-10 overflow-hidden bg-white/40 dark:bg-[#111827]/40 backdrop-blur-2xl transition-colors duration-500">
          
          {/* Ambient Glassmorphic Orbs */}
          <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-[#EAB464]/20 dark:bg-[#EAB464]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[#A7754D]/20 dark:bg-[#A7754D]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/30 dark:bg-white/5 rounded-full blur-[150px] pointer-events-none mix-blend-overlay" />

          {/* PARALLAX VIDEO BACKGROUND (Elegant Flowing Motion) */}
        <motion.div 
          style={{ y: videoY }}
          className="absolute top-[-5%] left-0 w-full h-[110%] z-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-[0.03] grayscale mix-blend-multiply dark:grayscale-0 dark:opacity-60 dark:mix-blend-luminosity transition-opacity duration-500"
          >
            {/* Standard elegant abstract dark waves fallback */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-dark-waves-loop-42354-large.mp4" type="video/mp4" />
          </video>
          {/* Pure CSS flowing fallback layer in case video fails */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50 dark:from-[#111827] dark:via-[#111827]/90 dark:to-[#111827] z-[-1] transition-colors duration-500" />
        </motion.div>

        {/* GRADIENT OVERLAY FOR READABILITY */}
        <div className="absolute inset-0 bg-white/40 dark:bg-[#111827]/40 z-[1] transition-colors duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#111827] to-transparent z-[1] h-32 bottom-0 top-auto transition-colors duration-500"></div>

        {/* MAIN CONTENT WRAPPER - REFINED GLASSMORPHISM */}
        <motion.div
          style={{ opacity: opacityOut, scale: scaleDown }}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-[1000px] mx-auto flex flex-col items-center bg-white/10 dark:bg-[#111827]/10 backdrop-blur-3xl border border-white/30 dark:border-white/10 rounded-[40px] p-8 md:p-14 shadow-[0_8px_32px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] dark:hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:bg-white/20 dark:hover:bg-[#111827]/20 transition-all duration-500 group"
        >
          {/* Subtle elegant inner glow for glassmorphism */}
          <div className="absolute inset-0 rounded-[40px] border border-white/40 dark:border-white/5 pointer-events-none transition-colors duration-500 mix-blend-overlay" />
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 dark:bg-[#111827]/10 backdrop-blur-3xl border border-white/30 dark:border-white/10 text-[#A7754D] dark:text-[#EAB464] text-[12px] font-bold uppercase tracking-widest mb-6 shadow-[0_4px_16px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_4px_16px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-500 hover:scale-105 hover:bg-white/20 dark:hover:bg-[#111827]/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Trusted by 10M+ Changemakers
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 text-[44px] md:text-[56px] lg:text-[72px] font-extrabold text-slate-900 dark:text-[#DCCCBB] leading-[1.1] max-w-[850px] text-center tracking-tight transition-colors duration-500"
          >
            Turn Hope Into Help in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAB464] to-[#A7754D]">Minutes</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-[18px] lg:text-[22px] font-medium text-slate-500 dark:text-[#DCCCBB] leading-[1.6] max-w-[700px] text-center transition-colors duration-500"
          >
            Start your fundraiser for free. Get support from people who care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col md:flex-row gap-5 md:gap-6 w-full md:w-auto justify-center"
          >
            <Link to="/create" className="h-[60px] flex items-center justify-center px-12 bg-gradient-to-r from-[#EAB464] to-[#A7754D] hover:from-[#A7754D] hover:to-[#A7754D] text-white rounded-2xl text-[18px] font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 w-full md:w-auto group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">Start a Fundraiser <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" /></span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </Link>
            <Link to="/browse" className="h-[60px] flex items-center justify-center px-12 bg-white/10 dark:bg-white/5 backdrop-blur-3xl border border-white/30 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 text-slate-900 dark:text-[#DCCCBB] rounded-2xl text-[18px] font-bold transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] hover:-translate-y-1 w-full md:w-auto">
              Browse Causes
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center text-[15px] font-medium text-slate-600 dark:text-[#DCCCBB] bg-white/10 dark:bg-[#111827]/10 backdrop-blur-3xl border border-white/30 dark:border-white/10 rounded-3xl px-8 py-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] transition-all duration-500 hover:bg-white/20 dark:hover:bg-[#111827]/20"
          >
            <span className="flex items-center gap-2 group cursor-default"><Star className="w-5 h-5 text-[#EAB464] dark:text-[#EAB464] fill-current group-hover:scale-110 transition-transform" /> 4.9/5 rating</span>
            <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-200 dark:bg-white/20"></span>
            <span className="flex items-center gap-2 group cursor-default"><ShieldCheck className="w-5 h-5 text-[#A7754D] dark:text-[#EAB464] group-hover:scale-110 transition-transform" /> Secure payments</span>
            <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-200 dark:bg-white/20"></span>
            <span className="flex items-center gap-2 group cursor-default"><TrendingUp className="w-5 h-5 text-[#A7754D] dark:text-[#EAB464] group-hover:scale-110 transition-transform" /> ₹400B+ raised</span>
          </motion.div>
        </motion.div>
      </div>
      </div>

      {/* FEATURED CAUSES SECTION */}
      <div className="mt-[80px] w-full max-w-[1200px] mx-auto px-5 md:px-6 relative z-10">
        
        {/* Background Ambient Orbs for Glassmorphism Depth */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#EAB464]/10 dark:bg-[#EAB464]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#A7754D]/10 dark:bg-[#A7754D]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[36px] md:text-[42px] font-bold text-slate-900 dark:text-[#DCCCBB] text-center mb-12 tracking-tight transition-colors duration-500 relative z-10"
        >
          Featured Causes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/10 dark:bg-[#111827]/10 backdrop-blur-3xl border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:-translate-y-2 hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] dark:hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-500 group flex flex-col hover:bg-white/20 dark:hover:bg-[#111827]/20"
            >
              <Link to={`/campaign/${card.id}`} className="flex flex-col h-full">
                <div className="relative w-full aspect-video overflow-hidden bg-slate-100/50 dark:bg-[#111827]/50 shrink-0 transition-colors duration-500">
                  <ImageWithFallback
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-[#111827]/80 to-transparent opacity-80 mix-blend-multiply dark:mix-blend-normal"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/10 dark:bg-[#111827]/10 backdrop-blur-3xl border border-white/30 dark:border-white/10 text-[#A7754D] dark:text-[#EAB464] text-[12px] font-bold px-3 py-1.5 rounded-full shadow-[0_4px_16px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_4px_16px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] tracking-wide transition-colors duration-500">
                      {card.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10 bg-gradient-to-b from-white/10 to-white/30 dark:from-[#111827]/10 dark:to-[#111827]/30">
                  <h3 className="text-[20px] font-bold text-slate-900 dark:text-[#DCCCBB] leading-[1.4] mb-3 line-clamp-2 group-hover:text-[#A7754D] dark:group-hover:text-[#EAB464] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 dark:text-[#DCCCBB] mb-6 flex-1 font-medium transition-colors duration-500">{card.fundraiser}</p>
                  
                  <div className="w-full h-2 bg-slate-200 dark:bg-[#111827]/80 rounded-full mb-4 overflow-hidden border border-slate-200/50 dark:border-white/5 relative transition-colors duration-500">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${card.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#EAB464] to-[#A7754D] dark:to-[#EAB464] rounded-full relative" 
                    />
                  </div>
                  
                  <div className="flex justify-between items-end mb-4">
                    <div className="text-[18px] font-bold text-[#A7754D] dark:text-[#EAB464] transition-colors duration-500">{card.raised} <span className="text-[14px] font-medium text-slate-500 dark:text-[#DCCCBB]">raised</span></div>
                    <div className="text-[14px] text-slate-500 dark:text-[#DCCCBB] font-medium transition-colors duration-500">of {card.goal}</div>
                  </div>
                  
                  <div className="text-[13px] text-slate-500 dark:text-[#DCCCBB] pt-5 border-t border-slate-200 dark:border-white/10 flex items-center font-medium tracking-wide transition-colors duration-500">
                    {card.supporters} SUPPORTERS <span className="mx-3 text-slate-300 dark:text-white/20">•</span> {card.daysLeft} DAYS LEFT
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
