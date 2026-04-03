import React from 'react';
import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion } from 'motion/react';

export function Layout() {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-white dark:bg-[#111827] text-slate-900 dark:text-[#DCCCBB] font-['Inter',sans-serif] transition-colors duration-500">
      {/* GLOBAL ANIMATED BACKGROUND BLOBS - SOFT, ELEGANT */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 80, -30, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] min-w-[400px] min-h-[400px] bg-[#EAB464]/20 dark:bg-[#EAB464]/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[140px] opacity-60 dark:opacity-40"
        />
        <motion.div
          animate={{
            x: [0, -80, 50, 0],
            y: [0, 80, -30, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] min-w-[500px] min-h-[500px] bg-[#A7754D]/15 dark:bg-[#A7754D]/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[160px] opacity-50 dark:opacity-30"
        />
        <motion.div
          animate={{
            x: [0, 50, -80, 0],
            y: [0, 50, -50, 0],
            scale: [1, 0.9, 1.05, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[60%] w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] bg-[#DCCCBB]/60 dark:bg-[#DCCCBB]/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[140px] opacity-50 dark:opacity-30"
        />
      </div>

      <Navbar />
      
      <div className="relative flex-1 z-10 pt-[72px]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
