import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, ChevronRight, HeartPulse, GraduationCap, AlertTriangle, 
  Dog, Users, Mountain, Flame, TreePine, Lightbulb, UploadCloud, 
  Info, CheckCircle2, ArrowLeft, ArrowRight, Sparkles 
} from 'lucide-react';
import { useNavigate } from 'react-router';

const CATEGORIES = [
  { id: 'medical', label: 'Medical & Health', icon: HeartPulse, color: 'text-rose-400' },
  { id: 'education', label: 'Education', icon: GraduationCap, color: 'text-blue-400' },
  { id: 'emergency', label: 'Emergency Relief', icon: AlertTriangle, color: 'text-amber-400' },
  { id: 'animals', label: 'Animals & Pets', icon: Dog, color: 'text-orange-400' },
  { id: 'community', label: 'Community Projects', icon: Users, color: 'text-emerald-400' },
  { id: 'memorial', label: 'Memorial & Funeral', icon: Mountain, color: 'text-slate-300' },
  { id: 'sports', label: 'Sports & Teams', icon: Flame, color: 'text-red-400' },
  { id: 'environment', label: 'Environment', icon: TreePine, color: 'text-green-400' },
  { id: 'other', label: 'Other', icon: Lightbulb, color: 'text-yellow-400' },
];

const STEPS = [
  { id: 1, label: 'Category' },
  { id: 2, label: 'Basic Info' },
  { id: 3, label: 'Your Story' },
  { id: 4, label: 'Payment' },
  { id: 5, label: 'Preview' },
];

export function CreateFundraiser() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category: '',
    title: '',
    goal: '',
    location: '',
    story: '',
    photoAdded: false,
    walletNetwork: 'Ethereum',
    walletAddress: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    if (step === 1 && !formData.category) {
      newErrors.category = 'Please select a category';
    }
    if (step === 2) {
      if (!formData.title.trim()) newErrors.title = 'Title is required';
      if (!formData.goal.trim()) newErrors.goal = 'Goal amount is required';
      if (!formData.location.trim()) newErrors.location = 'Location is required';
    }
    if (step === 3) {
      if (!formData.story.trim() || formData.story.length < 50) newErrors.story = 'Please provide a detailed story (min 50 characters)';
    }
    if (step === 4) {
      if (!formData.walletAddress.trim()) newErrors.walletAddress = 'Wallet/Bank credentials are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => Math.min(prev + 1, 5));
    }
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleLaunch = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Redirect after success
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 1500);
  };

  const isStepComplete = (stepId: number) => step > stepId;
  const isStepActive = (stepId: number) => step === stepId;

  if (isSuccess) {
    return (
      <div className="w-full min-h-[calc(100vh-72px)] flex items-center justify-center relative z-10 px-4 bg-white dark:bg-transparent transition-colors duration-500">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white/80 dark:bg-[#1F2937]/70 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-[32px] p-10 max-w-md w-full text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-black/20 transition-colors duration-500"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-r from-[#EAB464] to-[#A7754D] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-[28px] font-bold text-slate-900 dark:text-white mb-4 transition-colors">Fundraiser Launched!</h2>
          <p className="text-slate-500 dark:text-[#9CA3AF] text-[16px] mb-8 transition-colors">Your campaign is now live and ready to receive donations. Redirecting you home...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen text-slate-900 dark:text-slate-200 relative z-10 pb-24 bg-white dark:bg-transparent transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 pt-8 md:pt-12">
        
        {/* PROGRESS INDICATOR */}
        <div className="max-w-[800px] mx-auto mb-20 relative">
          <div className="absolute top-[28px] left-0 w-full h-2 bg-slate-100 dark:bg-white/5 rounded-full shadow-inner -z-10 transition-colors" />
          <div 
            className="absolute top-[28px] left-0 h-2 bg-gradient-to-r from-[#EAB464] to-[#A7754D] rounded-full shadow-sm -z-10 transition-all duration-700 ease-out" 
            style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }} 
          />
          
          <div className="flex justify-between items-start">
            {STEPS.map((s) => {
              const active = isStepActive(s.id);
              const complete = isStepComplete(s.id);
              
              return (
                <div key={s.id} className="flex flex-col items-center w-[80px]">
                  <motion.div 
                    animate={{ 
                      scale: active ? 1.1 : 1,
                    }}
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 mb-4 backdrop-blur-sm transition-all duration-500 ${complete ? 'bg-white dark:bg-[#1F2937] border-[#EAB464] shadow-sm' : active ? 'bg-[#EAB464]/10 border-[#EAB464]' : 'bg-white/50 dark:bg-[#1F2937]/50 border-slate-200 dark:border-white/10'}`}
                  >
                    {complete ? (
                      <Check className="w-7 h-7 text-[#EAB464]" />
                    ) : (
                      <span className={`text-[18px] font-bold ${active ? 'text-[#EAB464]' : 'text-slate-400 dark:text-[#9CA3AF]'}`}>{s.id}</span>
                    )}
                  </motion.div>
                  <span className={`text-[14px] font-bold hidden md:block whitespace-nowrap tracking-wide transition-colors ${active ? 'text-[#EAB464]' : complete ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-[#9CA3AF]'}`}>
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          
          {/* MAIN FORM AREA */}
          <div className="flex-1 w-full max-w-[800px] mx-auto lg:mx-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 dark:bg-[#1F2937]/70 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-[32px] p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-black/10 min-h-[500px] flex flex-col transition-colors duration-500"
              >

                {/* STEP 1: CATEGORY */}
                {step === 1 && (
                  <div className="flex flex-col h-full">
                    <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 dark:text-white mb-3 transition-colors">What are you fundraising for?</h2>
                    <p className="text-[16px] text-slate-500 dark:text-[#9CA3AF] mb-8 transition-colors">Choose the category that best describes your cause.</p>
                    
                    {errors.category && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 text-red-500 dark:text-red-400 text-[14px] bg-red-50 dark:bg-red-400/10 border border-red-200 dark:border-red-400/20 p-3 rounded-xl transition-colors">
                        {errors.category}
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-auto">
                      {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        const isSelected = formData.category === cat.id;
                        return (
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            key={cat.id}
                            onClick={() => {
                              setFormData({...formData, category: cat.id});
                              setErrors({...errors, category: ''});
                            }}
                            className={`p-6 rounded-2xl border-2 flex flex-col items-center justify-center gap-4 transition-all duration-200 ${
                              isSelected 
                                ? 'bg-[#EAB464]/10 border-[#EAB464] shadow-sm' 
                                : 'bg-slate-50/50 dark:bg-white/5 border-slate-200 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/10'
                            }`}
                          >
                            <Icon className={`w-10 h-10 transition-colors ${isSelected ? 'text-[#EAB464]' : cat.color}`} />
                            <span className={`text-[15px] font-medium transition-colors ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-[#9CA3AF]'}`}>{cat.label}</span>
                          </motion.button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2: BASIC INFO */}
                {step === 2 && (
                  <div className="flex flex-col h-full">
                    <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 dark:text-white mb-8 transition-colors">Tell us about your fundraiser</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-[14px] font-medium text-slate-500 dark:text-[#9CA3AF] mb-2 transition-colors">Campaign Title <span className="text-red-500 dark:text-red-400">*</span></label>
                        <input 
                          type="text"
                          value={formData.title}
                          onChange={(e) => setFormData({...formData, title: e.target.value})}
                          maxLength={80}
                          placeholder="e.g., Help Emma Get Life-Saving Surgery"
                          className={`w-full h-14 bg-white dark:bg-[#111827]/50 border rounded-2xl px-5 text-[16px] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#9CA3AF]/50 focus:outline-none focus:ring-2 focus:bg-slate-50 dark:focus:bg-white/5 transition-all ${errors.title ? 'border-red-500 dark:border-red-400/50 focus:ring-red-500/50 dark:focus:ring-red-400/50' : 'border-slate-300 dark:border-white/10 focus:border-[#EAB464] focus:ring-[#EAB464]/50'}`}
                        />
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-[12px] text-slate-400 dark:text-[#9CA3AF]/80 transition-colors">Keep it clear and compelling</span>
                          <span className="text-[12px] text-slate-400 dark:text-[#9CA3AF]/80 transition-colors">{formData.title.length}/80</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[14px] font-medium text-slate-500 dark:text-[#9CA3AF] mb-2 transition-colors">Fundraising Goal <span className="text-red-500 dark:text-red-400">*</span></label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                            <span className="text-[18px] text-slate-400 dark:text-[#9CA3AF] group-focus-within:text-[#EAB464] transition-colors">₹</span>
                          </div>
                          <input 
                            type="number"
                            value={formData.goal}
                            onChange={(e) => setFormData({...formData, goal: e.target.value})}
                            placeholder="20,000"
                            className={`w-full h-14 bg-white dark:bg-[#111827]/50 border rounded-2xl pl-10 pr-5 text-[16px] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#9CA3AF]/50 focus:outline-none focus:ring-2 focus:bg-slate-50 dark:focus:bg-white/5 transition-all ${errors.goal ? 'border-red-500 dark:border-red-400/50 focus:ring-red-500/50 dark:focus:ring-red-400/50' : 'border-slate-300 dark:border-white/10 focus:border-[#EAB464] focus:ring-[#EAB464]/50'}`}
                          />
                        </div>
                        <span className="text-[12px] text-slate-400 dark:text-[#9CA3AF]/80 mt-2 block transition-colors">Set a realistic target amount</span>
                      </div>

                      <div>
                        <label className="block text-[14px] font-medium text-slate-500 dark:text-[#9CA3AF] mb-2 transition-colors">Your Location <span className="text-red-500 dark:text-red-400">*</span></label>
                        <input 
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({...formData, location: e.target.value})}
                          placeholder="City, State, Country"
                          className={`w-full h-14 bg-white dark:bg-[#111827]/50 border rounded-2xl px-5 text-[16px] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#9CA3AF]/50 focus:outline-none focus:ring-2 focus:bg-slate-50 dark:focus:bg-white/5 transition-all ${errors.location ? 'border-red-500 dark:border-red-400/50 focus:ring-red-500/50 dark:focus:ring-red-400/50' : 'border-slate-300 dark:border-white/10 focus:border-[#EAB464] focus:ring-[#EAB464]/50'}`}
                        />
                        <span className="text-[12px] text-slate-400 dark:text-[#9CA3AF]/80 mt-2 block transition-colors">Where is this fundraiser based?</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: YOUR STORY */}
                {step === 3 && (
                  <div className="flex flex-col h-full">
                    <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 dark:text-white mb-2 transition-colors">Share your story</h2>
                    <p className="text-[16px] text-slate-500 dark:text-[#9CA3AF] mb-8 transition-colors">Help people understand why this matters.</p>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="w-full bg-white dark:bg-[#111827]/50 border border-slate-300 dark:border-white/10 rounded-2xl overflow-hidden flex flex-col focus-within:ring-2 focus-within:ring-[#EAB464]/50 focus-within:border-[#EAB464] transition-all">
                          {/* Fake Rich Text Toolbar */}
                          <div className="w-full h-12 border-b border-slate-200 dark:border-white/10 flex items-center px-4 gap-2 bg-slate-50 dark:bg-transparent">
                            <button className="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center text-slate-500 dark:text-[#9CA3AF] font-bold font-serif transition-colors">B</button>
                            <button className="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center text-slate-500 dark:text-[#9CA3AF] italic font-serif transition-colors">I</button>
                            <button className="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center text-slate-500 dark:text-[#9CA3AF] underline font-serif transition-colors">U</button>
                            <div className="w-px h-5 bg-slate-300 dark:bg-white/10 mx-1 transition-colors"></div>
                            <button className="px-2 h-8 rounded hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center text-slate-500 dark:text-[#9CA3AF] text-[14px] transition-colors">Link</button>
                          </div>
                          <textarea 
                            value={formData.story}
                            onChange={(e) => setFormData({...formData, story: e.target.value})}
                            placeholder="Tell your story in detail. Why are you fundraising? Who will benefit? How will funds be used?"
                            className="w-full min-h-[240px] bg-transparent p-5 text-[15px] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#9CA3AF]/50 focus:outline-none resize-y"
                          />
                        </div>
                        {errors.story && (
                          <span className="text-red-500 dark:text-red-400 text-[13px] mt-2 block transition-colors">{errors.story}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-[14px] font-medium text-slate-500 dark:text-[#9CA3AF] mb-3 transition-colors">Add photos or video</label>
                        <div 
                          onClick={() => setFormData({...formData, photoAdded: true})}
                          className={`w-full h-[180px] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all ${
                            formData.photoAdded 
                              ? 'bg-[#EAB464]/10 border-[#EAB464]/50' 
                              : 'bg-slate-50 dark:bg-[#111827]/50 border-slate-300 dark:border-white/20 hover:border-[#EAB464]/50 hover:bg-slate-100 dark:hover:bg-white/5'
                          }`}
                        >
                          {formData.photoAdded ? (
                            <>
                              <CheckCircle2 className="w-10 h-10 text-[#EAB464] mb-3" />
                              <span className="text-slate-900 dark:text-white font-medium text-[15px] transition-colors">Media uploaded successfully!</span>
                              <span className="text-slate-500 dark:text-[#9CA3AF] text-[13px] mt-1 transition-colors">Click to change</span>
                            </>
                          ) : (
                            <>
                              <UploadCloud className="w-10 h-10 text-slate-400 dark:text-[#9CA3AF] mb-3 transition-colors" />
                              <span className="text-slate-900 dark:text-white font-medium text-[15px] transition-colors">Drag & drop or click to upload</span>
                              <span className="text-slate-500 dark:text-[#9CA3AF] text-[13px] mt-1 transition-colors">JPG, PNG, MP4 (max 50MB)</span>
                            </>
                          )}
                        </div>

                        <div className="mt-4 bg-[#EAB464]/10 border border-[#EAB464]/20 rounded-xl p-4 flex gap-3 items-start">
                          <Info className="w-5 h-5 text-[#EAB464] shrink-0 mt-0.5" />
                          <p className="text-[14px] text-[#A7754D] dark:text-[#EAB464] leading-relaxed transition-colors">
                            <span className="font-semibold text-slate-900 dark:text-white transition-colors">Pro tip:</span> Campaigns with high-quality photos or videos raise up to 4x more funds on average.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: PAYMENT DETAILS */}
                {step === 4 && (
                  <div className="flex flex-col h-full">
                    <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-2">Payment Details</h2>
                    <p className="text-[16px] text-[#9CA3AF] mb-8">Where should we send your collected funds?</p>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-[14px] font-medium text-[#9CA3AF] mb-2">Network / Bank Type <span className="text-red-400">*</span></label>
                        <select 
                          value={formData.walletNetwork}
                          onChange={(e) => setFormData({...formData, walletNetwork: e.target.value})}
                          className="w-full h-14 bg-[#111827]/50 border border-white/10 rounded-2xl px-5 text-[16px] text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/50 focus:border-[#14B8A6] transition-all cursor-pointer"
                        >
                          <option value="Ethereum" className="bg-[#111827] text-white">Ethereum (ETH) Wallet</option>
                          <option value="Polygon" className="bg-[#111827] text-white">Polygon (MATIC) Wallet</option>
                          <option value="Solana" className="bg-[#111827] text-white">Solana (SOL) Wallet</option>
                          <option value="Bank" className="bg-[#111827] text-white">Direct Bank Transfer (Fiat)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[14px] font-medium text-[#9CA3AF] mb-2">
                          {formData.walletNetwork === 'Bank' ? 'Bank Account / IBAN' : 'Wallet Address'} <span className="text-red-400">*</span>
                        </label>
                        <input 
                          type="text"
                          value={formData.walletAddress}
                          onChange={(e) => setFormData({...formData, walletAddress: e.target.value})}
                          placeholder={formData.walletNetwork === 'Bank' ? "Enter your Account Number or IBAN" : "0x..."}
                          className={`w-full h-14 bg-[#111827]/50 border rounded-2xl px-5 text-[16px] text-white placeholder-[#9CA3AF]/50 focus:outline-none focus:ring-2 focus:bg-white/5 transition-all ${errors.walletAddress ? 'border-red-400/50 focus:ring-red-400/50' : 'border-white/10 focus:border-[#14B8A6] focus:ring-[#14B8A6]/50'}`}
                        />
                        {errors.walletAddress && (
                          <span className="text-red-400 text-[13px] mt-2 block">{errors.walletAddress}</span>
                        )}
                        <span className="text-[12px] text-[#9CA3AF] mt-2 block">
                          {formData.walletNetwork === 'Bank' ? 'Funds will be securely transferred to this account.' : 'Make sure you have access to this wallet address to withdraw your funds.'}
                        </span>
                      </div>

                      <div className="mt-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <p className="text-[14px] text-emerald-100 leading-relaxed">
                          Your credentials are encrypted and stored securely. You can update your payment method later in your dashboard settings.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: PREVIEW */}
                {step === 5 && (
                  <div className="flex flex-col h-full">
                    <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-8">Review your fundraiser</h2>
                    
                    <div className="bg-[#111827]/50 border border-white/5 rounded-2xl p-6 mb-8">
                      <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
                        <div>
                          <span className="text-[12px] font-bold text-[#14B8A6] uppercase tracking-wider mb-2 block">Campaign Preview</span>
                          <h3 className="text-[20px] font-bold text-white leading-tight mb-2">{formData.title || "Untitled Campaign"}</h3>
                          <div className="text-[16px] font-medium text-emerald-400">Goal: ₹{formData.goal || "0"}</div>
                        </div>
                        <button onClick={() => setStep(2)} className="text-[13px] font-medium text-[#14B8A6] hover:text-white px-3 py-1.5 bg-[#14B8A6]/10 rounded-lg transition-colors">Edit</button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <span className="text-[13px] text-[#9CA3AF] block mb-1">Category</span>
                          <div className="text-[15px] font-medium text-white">{CATEGORIES.find(c => c.id === formData.category)?.label || "Not selected"}</div>
                        </div>
                        <div>
                          <span className="text-[13px] text-[#9CA3AF] block mb-1">Location</span>
                          <div className="text-[15px] font-medium text-white">{formData.location || "Not specified"}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <span className="text-[13px] text-[#9CA3AF] block mb-1">Payment Method</span>
                          <div className="text-[15px] font-medium text-white">{formData.walletNetwork}</div>
                        </div>
                        <div>
                          <span className="text-[13px] text-[#9CA3AF] block mb-1">Destination</span>
                          <div className="text-[15px] font-medium text-white font-mono">{formData.walletAddress ? `${formData.walletAddress.substring(0, 6)}...${formData.walletAddress.substring(formData.walletAddress.length - 4)}` : "Not specified"}</div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-[13px] text-[#9CA3AF] block">Story</span>
                          <button onClick={() => setStep(3)} className="text-[13px] font-medium text-[#14B8A6] hover:text-white transition-colors">Edit</button>
                        </div>
                        <p className="text-[14px] text-[#9CA3AF] line-clamp-3 leading-relaxed bg-[#111827] p-4 rounded-xl border border-white/5">
                          {formData.story || "No story provided yet."}
                        </p>
                      </div>
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-2xl p-6 mb-8 transition-colors">
                      <h4 className="text-[16px] font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" /> Ready to Launch Checklist
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-[14px] text-slate-700 dark:text-white transition-colors">
                          <CheckCircle2 className={`w-4 h-4 transition-colors ${formData.title.length > 10 ? 'text-emerald-500 dark:text-emerald-400' : 'text-slate-300 dark:text-[#9CA3AF]'}`} />
                          Campaign title is clear and specific
                        </li>
                        <li className="flex items-center gap-3 text-[14px] text-slate-700 dark:text-white transition-colors">
                          <CheckCircle2 className={`w-4 h-4 transition-colors ${formData.story.length >= 50 ? 'text-emerald-500 dark:text-emerald-400' : 'text-slate-300 dark:text-[#9CA3AF]'}`} />
                          Story explains why you need help
                        </li>
                        <li className="flex items-center gap-3 text-[14px] text-slate-700 dark:text-white transition-colors">
                          <CheckCircle2 className={`w-4 h-4 transition-colors ${formData.photoAdded ? 'text-emerald-500 dark:text-emerald-400' : 'text-slate-300 dark:text-[#9CA3AF]'}`} />
                          Photo or video added
                        </li>
                        <li className="flex items-center gap-3 text-[14px] text-slate-700 dark:text-white transition-colors">
                          <CheckCircle2 className={`w-4 h-4 transition-colors ${formData.goal ? 'text-emerald-500 dark:text-emerald-400' : 'text-slate-300 dark:text-[#9CA3AF]'}`} />
                          Goal amount is realistic
                        </li>
                        <li className="flex items-center gap-3 text-[14px] text-slate-700 dark:text-white transition-colors">
                          <CheckCircle2 className={`w-4 h-4 transition-colors ${formData.walletAddress ? 'text-emerald-500 dark:text-emerald-400' : 'text-slate-300 dark:text-[#9CA3AF]'}`} />
                          Payment credentials provided
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* BOTTOM NAVIGATION BUTTONS */}
                <div className="mt-auto pt-8 flex justify-between items-center border-t border-slate-200 dark:border-white/5 transition-colors">
                  {step > 1 ? (
                    <button 
                      onClick={handleBack}
                      className="px-6 py-3 rounded-2xl border border-slate-300 dark:border-white/10 text-slate-600 dark:text-white font-medium text-[15px] hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                    >
                      Back
                    </button>
                  ) : <div></div>}
                  
                  {step < 5 ? (
                    <motion.button 
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleNext}
                      className="px-8 py-3 rounded-2xl bg-gradient-to-r from-[#EAB464] to-[#A7754D] hover:opacity-90 text-white font-bold text-[16px] transition-all shadow-md flex items-center gap-2"
                    >
                      Next Step <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  ) : (
                    <motion.button 
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleLaunch}
                      disabled={isSubmitting}
                      className="px-8 py-3 rounded-2xl bg-gradient-to-r from-[#EAB464] to-[#A7754D] hover:opacity-90 text-white font-bold text-[16px] transition-all shadow-md disabled:opacity-50 flex items-center gap-2"
                    >
                      {isSubmitting ? 'Launching...' : 'Launch My Fundraiser'} <Sparkles className="w-5 h-5" />
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* SIDE PANEL (TIPS) */}
          <div className="w-full lg:w-[320px] shrink-0">
            <div className="lg:sticky lg:top-28 bg-white/60 dark:bg-[#111827]/40 border border-slate-200 dark:border-white/5 rounded-[24px] p-6 shadow-sm transition-colors duration-500">
              <h3 className="text-[16px] font-bold text-[#A7754D] dark:text-[#EAB464] mb-5 flex items-center gap-2 transition-colors">
                <Lightbulb className="w-5 h-5" /> Tips for Success
              </h3>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#EAB464]/10 text-[#A7754D] dark:text-[#EAB464] flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5 transition-colors">1</div>
                  <p className="text-[14px] text-slate-500 dark:text-[#9CA3AF] leading-relaxed transition-colors">Set a realistic, achievable goal based on actual costs.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#EAB464]/10 text-[#A7754D] dark:text-[#EAB464] flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5 transition-colors">2</div>
                  <p className="text-[14px] text-slate-500 dark:text-[#9CA3AF] leading-relaxed transition-colors">Share your story authentically—be honest about your situation.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#EAB464]/10 text-[#A7754D] dark:text-[#EAB464] flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5 transition-colors">3</div>
                  <p className="text-[14px] text-slate-500 dark:text-[#9CA3AF] leading-relaxed transition-colors">Add high-quality photos or video. They build trust instantly.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#EAB464]/10 text-[#A7754D] dark:text-[#EAB464] flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5 transition-colors">4</div>
                  <p className="text-[14px] text-slate-500 dark:text-[#9CA3AF] leading-relaxed transition-colors">Update your supporters regularly to keep momentum.</p>
                </li>
              </ul>

              <div className="bg-slate-50 dark:bg-[#111827] rounded-xl p-4 border border-slate-200 dark:border-white/5 transition-colors">
                <p className="text-[14px] font-medium text-emerald-600 dark:text-emerald-400 leading-snug transition-colors">
                  Campaigns that follow these tips raise <span className="text-white bg-emerald-500/80 dark:bg-emerald-500/20 px-1.5 rounded transition-colors">3x more</span> on average!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
