import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileExploreOpen, setIsMobileExploreOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Initialize theme
  useEffect(() => {
    const isDarkTheme = document.documentElement.classList.contains('dark') || 
                       (!document.documentElement.classList.contains('light') && true);
    setIsDark(isDarkTheme);
    if (isDarkTheme) document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/10 dark:bg-[#111827]/10 backdrop-blur-3xl border-b border-white/30 dark:border-white/10 font-['Inter',sans-serif] transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-6 h-[72px] flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <Link to="/" className="text-[22px] font-bold tracking-tight text-slate-900 dark:text-white uppercase transition-colors">
              CRYPTFUNDIT
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/browse" className="text-[15px] font-medium text-slate-500 dark:text-[#DCCCBB] hover:text-[#EAB464] dark:hover:text-[#EAB464] transition-colors">Discover</Link>
            <div className="relative group">
              <button className="text-[15px] font-medium text-slate-500 dark:text-[#DCCCBB] group-hover:text-[#EAB464] transition-colors flex items-center gap-1 py-4">
                Explore <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-[80%] left-0 pt-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white/10 dark:bg-[#111827]/20 backdrop-blur-3xl border border-white/30 dark:border-white/10 rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] w-56 overflow-hidden flex flex-col py-2 transition-colors">
                  <Link to="/browse?filter=npos" className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-[#EAB464]/10 text-[14px] text-slate-500 dark:text-[#DCCCBB] hover:text-[#EAB464] transition-colors">Explore NPOs</Link>
                  <Link to="/browse?filter=ongoing" className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-[#EAB464]/10 text-[14px] text-slate-500 dark:text-[#DCCCBB] hover:text-[#EAB464] transition-colors">Ongoing Donations</Link>
                  <Link to="/browse?filter=success" className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-[#EAB464]/10 text-[14px] text-slate-500 dark:text-[#DCCCBB] hover:text-[#EAB464] transition-colors">Success Stories</Link>
                  <Link to="/browse?filter=urgent" className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-[#EAB464]/10 text-[14px] text-slate-500 dark:text-[#DCCCBB] hover:text-[#EAB464] transition-colors">Urgent Causes</Link>
                </div>
              </div>
            </div>
            <a href="#" className="text-[15px] font-medium text-slate-500 dark:text-[#DCCCBB] hover:text-[#EAB464] transition-colors">Fundraise</a>
            <a href="#" className="text-[15px] font-medium text-slate-500 dark:text-[#DCCCBB] hover:text-[#EAB464] transition-colors">How it works</a>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={toggleTheme} className="p-2 text-slate-500 dark:text-[#DCCCBB] hover:text-[#EAB464] transition-colors">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="p-2 text-slate-500 dark:text-[#DCCCBB] hover:text-[#EAB464] transition-colors">
              <Link to="/browse">
                <Search className="w-5 h-5" />
              </Link>
            </button>
            <Link to="/auth" className="text-[15px] font-medium text-slate-500 dark:text-[#DCCCBB] hover:text-slate-900 dark:hover:text-white transition-colors px-2">
              Sign in
            </Link>
            <Link to="/create" className="h-[48px] px-6 bg-[#EAB464] hover:bg-[#EAB464]/90 text-white rounded-2xl flex items-center justify-center text-[15px] font-bold transition-transform duration-300 shadow-sm hover:-translate-y-1">
              Start a Fundraiser
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 text-slate-500 dark:text-[#DCCCBB] hover:text-[#EAB464] transition-colors">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link to="/browse" className="p-2 text-slate-500 dark:text-[#DCCCBB] hover:text-[#EAB464] transition-colors">
              <Search className="w-5 h-5" />
            </Link>
            <button 
              className="p-2 text-[#EAB464]"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 dark:bg-[#111827]/60 backdrop-blur-sm z-[60] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white/10 dark:bg-[#111827]/10 backdrop-blur-3xl border-l border-white/30 dark:border-white/10 z-[70] shadow-[-8px_0_32px_0_rgba(0,0,0,0.05),inset_1px_0_1px_rgba(255,255,255,0.6)] dark:shadow-[-8px_0_32px_0_rgba(0,0,0,0.4),inset_1px_0_1px_rgba(255,255,255,0.05)] flex flex-col font-['Inter',sans-serif] md:hidden transition-colors"
            >
              <div className="p-5 flex justify-between items-center border-b border-slate-200 dark:border-white/5 transition-colors">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-[20px] font-bold tracking-tight text-slate-900 dark:text-white uppercase transition-colors">
                  CRYPTFUNDIT
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-500 dark:text-[#DCCCBB] hover:text-[#EAB464] transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-5 flex flex-col gap-6 flex-1 overflow-y-auto">
                <div className="flex flex-col gap-4">
                  <Link to="/browse" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-medium text-slate-800 dark:text-[#DCCCBB] hover:text-[#EAB464] transition-colors">Discover</Link>
                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={() => setIsMobileExploreOpen(!isMobileExploreOpen)}
                      className="flex items-center justify-between text-[16px] font-medium text-slate-800 dark:text-[#DCCCBB] hover:text-[#EAB464] transition-colors w-full"
                    >
                      Explore
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileExploreOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isMobileExploreOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col gap-4 pl-4 overflow-hidden border-l border-slate-200 dark:border-white/10 ml-2"
                        >
                          <Link to="/browse?filter=npos" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] text-slate-600 dark:text-[#DCCCBB] hover:text-[#A7754D]">Explore NPOs</Link>
                          <Link to="/browse?filter=ongoing" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] text-slate-600 dark:text-[#DCCCBB] hover:text-[#A7754D]">Ongoing Donations</Link>
                          <Link to="/browse?filter=success" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] text-slate-600 dark:text-[#DCCCBB] hover:text-[#A7754D]">Success Stories</Link>
                          <Link to="/browse?filter=urgent" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] text-slate-600 dark:text-[#DCCCBB] hover:text-[#A7754D]">Urgent Causes</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <a href="#" className="text-[16px] font-medium text-slate-800 dark:text-[#DCCCBB] hover:text-[#EAB464] transition-colors">Fundraise</a>
                  <a href="#" className="text-[16px] font-medium text-slate-800 dark:text-[#DCCCBB] hover:text-[#EAB464] transition-colors">How it works</a>
                </div>
                
                <hr className="border-slate-200 dark:border-white/5 transition-colors" />
                
                <div className="flex flex-col gap-4 mt-auto pb-8">
                  <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-medium text-slate-500 dark:text-[#DCCCBB] hover:text-slate-900 dark:hover:text-white transition-colors text-center py-2">Sign in</Link>
                  <Link to="/create" onClick={() => setIsMobileMenuOpen(false)} className="w-full h-[52px] bg-[#EAB464] hover:bg-[#EAB464]/90 text-white rounded-2xl flex items-center justify-center text-[16px] font-bold transition-transform duration-300 hover:-translate-y-1">
                    Start a Fundraiser
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
