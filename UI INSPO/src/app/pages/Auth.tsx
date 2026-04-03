import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, Fingerprint, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

export function Auth() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const navigate = useNavigate();

  const formatAadhaar = (val: string) => {
    // Keep only digits and max 12
    const cleaned = val.replace(/\D/g, '').substring(0, 12);
    const chunks = cleaned.match(/.{1,4}/g);
    return chunks ? chunks.join(' ') : cleaned;
  };

  const handleAadhaarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAadhaar(formatAadhaar(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth action
    navigate("/");
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-72px)] flex items-center justify-center font-['Inter',sans-serif] px-4 py-12 md:p-6 text-[#9CA3AF]">
      {/* REFINED GLASSMORPHISM FORM CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        className="relative z-10 w-full max-w-[480px] rounded-[32px] bg-[#1F2937]/70 backdrop-blur-lg border border-white/10 shadow-xl shadow-black/20 p-8 md:p-10"
      >
        
        {/* LOGO & HEADER */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#14B8A6] flex items-center justify-center shadow-md border border-white/10">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-[28px] font-bold tracking-tight text-white uppercase">
              CRYPTFUNDIT
            </span>
          </Link>
          
          <motion.div
            key={isSignUp ? 'signup-title' : 'signin-title'}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-[28px] md:text-[32px] font-bold text-white mb-3 leading-tight tracking-tight">
              {isSignUp ? "Create an account" : "Welcome back"}
            </h1>
            <p className="text-[15px] text-[#9CA3AF] font-medium">
              {isSignUp 
                ? "Verify your profile with Aadhaar to start campaigning."
                : "Sign in to access your verified account."}
            </p>
          </motion.div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence mode="wait">
            {isSignUp && (
              <motion.div
                initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
                exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="space-y-2 pb-1">
                  <label className="block text-[14px] font-medium text-[#9CA3AF] ml-1">Full Name</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none transition-colors group-focus-within:text-[#14B8A6] text-[#9CA3AF]">
                      <User className="h-5 w-5" />
                    </div>
                    <input
                      type="text"
                      required={isSignUp}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full pl-12 pr-5 py-4 bg-[#111827]/50 border border-white/10 rounded-2xl text-white placeholder-[#9CA3AF]/50 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/50 focus:border-[#14B8A6] transition-all duration-300 font-medium"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-2">
            <label className="block text-[14px] font-medium text-[#9CA3AF] ml-1">Email Address</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none transition-colors group-focus-within:text-[#14B8A6] text-[#9CA3AF]">
                <Mail className="h-5 w-5" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-12 pr-5 py-4 bg-[#111827]/50 border border-white/10 rounded-2xl text-white placeholder-[#9CA3AF]/50 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/50 focus:border-[#14B8A6] transition-all duration-300 font-medium"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[14px] font-medium text-[#9CA3AF] ml-1">
              Aadhaar Number <span className="text-[#F472B6]">*</span>
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none transition-colors group-focus-within:text-[#14B8A6] text-[#9CA3AF]">
                <Fingerprint className="h-5 w-5" />
              </div>
              <input
                type="text"
                required
                value={aadhaar}
                onChange={handleAadhaarChange}
                className="block w-full pl-12 pr-5 py-4 bg-[#111827]/50 border border-white/10 rounded-2xl text-white placeholder-[#9CA3AF]/50 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/50 focus:border-[#14B8A6] transition-all duration-300 font-mono tracking-[0.1em] text-[16px]"
                placeholder="0000 0000 0000"
                maxLength={14}
              />
            </div>
            <div className="mt-3 flex items-start gap-2 text-[13px] text-[#9CA3AF] px-2 font-medium">
              <ShieldCheck className="w-5 h-5 text-[#10B981] shrink-0" />
              <span>Mandatory for identity verification to prevent fraud. Your data is encrypted.</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="block text-[14px] font-medium text-[#9CA3AF]">Password</label>
              {!isSignUp && (
                <a href="#" className="text-[13px] font-medium text-[#14B8A6] hover:text-white transition-colors">
                  Forgot password?
                </a>
              )}
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none transition-colors group-focus-within:text-[#14B8A6] text-[#9CA3AF]">
                <Lock className="h-5 w-5" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-12 pr-5 py-4 bg-[#111827]/50 border border-white/10 rounded-2xl text-white placeholder-[#9CA3AF]/50 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/50 focus:border-[#14B8A6] transition-all duration-300 font-medium tracking-widest"
                placeholder="••••••••"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="relative w-full py-4 px-6 bg-[#14B8A6] hover:bg-[#14B8A6]/90 rounded-2xl text-white text-[16px] font-bold shadow-md transition-all duration-300 flex justify-center items-center gap-3 group mt-10 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {isSignUp ? "Create account" : "Sign in"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </form>

        {/* TOGGLE */}
        <div className="mt-8 text-center text-[14px] font-medium text-[#9CA3AF]">
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <button 
                onClick={() => setIsSignUp(false)}
                className="font-bold text-[#14B8A6] hover:text-white transition-colors ml-1"
              >
                Sign in
              </button>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <button 
                onClick={() => setIsSignUp(true)}
                className="font-bold text-[#14B8A6] hover:text-white transition-colors ml-1"
              >
                Sign up
              </button>
            </>
          )}
        </div>
        
      </motion.div>
    </div>
  );
}
