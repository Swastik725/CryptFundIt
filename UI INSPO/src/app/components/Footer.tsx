import React from 'react';
import { Link } from 'react-router';
import { Heart, Twitter, Linkedin, Instagram, Github, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="relative w-full border-t border-white/30 dark:border-white/10 bg-white/10 dark:bg-[#111827]/10 backdrop-blur-3xl transition-colors duration-500 z-10 mt-20 shadow-[0_-8px_32px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_-8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] overflow-hidden">
      {/* Ambient Orbs for Glassmorphism Depth in Footer */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#EAB464]/10 dark:bg-[#EAB464]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#A7754D]/10 dark:bg-[#A7754D]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#EAB464] to-[#A7754D] flex items-center justify-center shadow-lg shadow-[#EAB464]/20 group-hover:shadow-[#EAB464]/40 transition-all duration-300">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="text-[22px] font-bold text-slate-900 dark:text-white tracking-tight transition-colors">
                CryptFundIt
              </span>
            </Link>
            <p className="text-slate-500 dark:text-[#9CA3AF] text-[15px] leading-relaxed mb-8 max-w-sm transition-colors">
              The premium, transparent crowdfunding platform powering the next generation of changemakers. Built for absolute trust and global impact.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 dark:text-[#9CA3AF] hover:text-[#EAB464] dark:hover:text-[#EAB464] hover:border-[#EAB464]/30 dark:hover:border-[#EAB464]/30 bg-slate-50 dark:bg-white/5 hover:bg-[#EAB464]/5 dark:hover:bg-[#EAB464]/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-slate-900 dark:text-white font-bold text-[16px] mb-6 transition-colors">Platform</h4>
            <ul className="space-y-4">
              {['Discover Campaigns', 'Start a Fundraiser', 'How it Works', 'Pricing', 'Success Stories'].map((link, i) => (
                <li key={i}>
                  <Link to="#" className="text-[15px] text-slate-500 dark:text-[#9CA3AF] hover:text-[#EAB464] dark:hover:text-[#EAB464] transition-colors inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 dark:text-white font-bold text-[16px] mb-6 transition-colors">Resources</h4>
            <ul className="space-y-4">
              {['Help Center', 'Trust & Safety', 'Developer API', 'Community', 'Blog'].map((link, i) => (
                <li key={i}>
                  <Link to="#" className="text-[15px] text-slate-500 dark:text-[#9CA3AF] hover:text-[#EAB464] dark:hover:text-[#EAB464] transition-colors inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-900 dark:text-white font-bold text-[16px] mb-6 transition-colors">Stay Updated</h4>
            <p className="text-slate-500 dark:text-[#9CA3AF] text-[14px] mb-4 transition-colors">
              Get the latest inspiring stories and platform updates directly in your inbox.
            </p>
            <div className="flex relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full h-12 bg-slate-50 dark:bg-[#111827]/50 border border-slate-200 dark:border-white/10 rounded-xl pl-4 pr-12 text-[14px] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#9CA3AF]/60 focus:outline-none focus:ring-2 focus:ring-[#EAB464]/50 focus:border-[#EAB464] transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 w-8 h-8 flex items-center justify-center rounded-lg bg-[#EAB464] hover:bg-[#EAB464]/90 text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors">
          <p className="text-[14px] text-slate-500 dark:text-[#9CA3AF] transition-colors">
            © {new Date().getFullYear()} CryptFundIt. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[14px]">
            <Link to="#" className="text-slate-500 dark:text-[#9CA3AF] hover:text-[#EAB464] dark:hover:text-[#EAB464] transition-colors">Terms of Service</Link>
            <Link to="#" className="text-slate-500 dark:text-[#9CA3AF] hover:text-[#EAB464] dark:hover:text-[#EAB464] transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-slate-500 dark:text-[#9CA3AF] hover:text-[#EAB464] dark:hover:text-[#EAB464] transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
