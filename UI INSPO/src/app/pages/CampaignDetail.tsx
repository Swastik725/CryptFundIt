import React, { useState, useEffect } from 'react';
import { CheckCircle2, MapPin, Facebook, Twitter, Mail, Link as LinkIcon, MessageCircle, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const DONATION_TIERS = [10, 25, 50, 100];
const CUSTOM_TIER = 'Custom';

const MOCK_DONATIONS = [
  { id: 1, name: "David Wilson", amount: 100, message: "Thinking of Emma and the whole family. Stay strong!", time: "2 hours ago", avatar: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=100&q=80" },
  { id: 2, name: "Anonymous", amount: 50, message: "", time: "4 hours ago", avatar: "" },
  { id: 3, name: "Jessica Chen", amount: 200, message: "Sending prayers your way. Emma is such a brave little girl.", time: "5 hours ago", avatar: "https://images.unsplash.com/photo-1601613553336-578111ced09c?w=100&q=80" },
  { id: 4, name: "Mark Anderson", amount: 25, message: "Hope this helps a little.", time: "6 hours ago", avatar: "" },
  { id: 5, name: "Sarah & John", amount: 500, message: "We are with you every step of the way!", time: "1 day ago", avatar: "" },
  { id: 6, name: "Anonymous", amount: 10, message: "", time: "1 day ago", avatar: "" },
  { id: 7, name: "The Miller Family", amount: 150, message: "Wishing Emma a speedy recovery.", time: "2 days ago", avatar: "" },
  { id: 8, name: "Robert Taylor", amount: 100, message: "Stay strong!", time: "2 days ago", avatar: "" },
  { id: 9, name: "Anonymous", amount: 20, message: "God bless.", time: "3 days ago", avatar: "" },
  { id: 10, name: "Linda Evans", amount: 75, message: "Sending love and positive thoughts.", time: "3 days ago", avatar: "https://images.unsplash.com/photo-1594318223885-20dc4b889f9e?w=100&q=80" },
];

export function CampaignDetail() {
  const [selectedTier, setSelectedTier] = useState<number | string>(50);
  const [showStickyDonate, setShowStickyDonate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button on mobile when scrolled down a bit past the hero
      if (window.scrollY > 400 && window.innerWidth < 1024) {
        setShowStickyDonate(true);
      } else {
        setShowStickyDonate(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen text-slate-600 dark:text-[#9CA3AF] transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6 py-10 lg:py-12 flex flex-col lg:flex-row gap-12 relative z-10">
        
        {/* LEFT COLUMN */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="w-full lg:w-[65%] shrink-0"
        >
          {/* HERO IMAGE */}
          <div className="w-full aspect-video rounded-[32px] overflow-hidden bg-slate-100/50 dark:bg-[#1F2937]/40 border border-slate-200/50 dark:border-white/5 shadow-md relative transition-colors duration-500">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1650174378624-c9ab2c99e512?w=1200&q=80" 
              alt="Hospital patient being cared for"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 dark:from-[#1F2937] dark:via-[#1F2937]/40 to-transparent opacity-80 transition-colors duration-500"></div>
          </div>

          {/* TITLE & ORGANIZER */}
          <h1 className="text-[36px] md:text-[42px] font-bold text-slate-900 dark:text-white leading-[1.2] mt-10 tracking-tight transition-colors duration-500">
            Help Emma Get Life-Saving Surgery
          </h1>
          
          <div className="flex items-center gap-4 mt-8 bg-white/60 dark:bg-[#111827]/40 backdrop-blur-md border border-slate-200 dark:border-white/5 rounded-2xl p-4 w-max shadow-sm transition-colors duration-500">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 shrink-0 transition-colors duration-500">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1594318223885-20dc4b889f9e?w=100&q=80" 
                alt="Sarah Mitchell"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-bold text-slate-900 dark:text-white transition-colors duration-500">Sarah Mitchell</span>
                <CheckCircle2 className="w-[18px] h-[18px] text-[#14B8A6] fill-[#14B8A6]/20" />
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5 text-[#14B8A6]" />
                <span className="text-[14px] text-slate-500 dark:text-[#9CA3AF] font-medium transition-colors duration-500">Greater Noida, India</span>
              </div>
            </div>
          </div>

          <hr className="my-12 border-slate-200 dark:border-white/5 transition-colors duration-500" />

          {/* STORY SECTION */}
          <section>
            <h2 className="text-[28px] font-bold text-slate-900 dark:text-white mb-8 tracking-tight transition-colors duration-500">The Story</h2>
            <div className="text-[16px] font-medium text-slate-600 dark:text-[#9CA3AF] leading-[1.8] space-y-6 transition-colors duration-500">
              <p>
                Our 7-year-old daughter, Emma, was recently diagnosed with a rare congenital heart defect. As parents, hearing that your child needs immediate, complex open-heart surgery is the most terrifying news imaginable. Emma has always been a bright, energetic little girl who loves painting, playing with our golden retriever, Max, and dreaming of becoming a veterinarian.
              </p>
              <p>
                Over the past few months, she started experiencing severe fatigue and shortness of breath. After multiple visits to specialists and extensive testing, the doctors informed us that the defect is worsening rapidly. The surgery she needs is highly specialized and is not covered by our standard insurance policy.
              </p>
              <p>
                The procedure, along with the required post-operative care, hospital stay, and specialized medications, will cost approximately <span className="text-slate-900 dark:text-white font-bold transition-colors duration-500">₹20,000</span> out-of-pocket. We have exhausted our savings and have taken out as many loans as we can, but we are still significantly short of the goal. Time is of the essence, and the doctors have recommended proceeding with the surgery within the next month.
              </p>
              <p>
                We are humbly reaching out to our community, friends, and kind strangers for help. Any contribution, no matter how small, will bring us one step closer to getting Emma the life-saving treatment she desperately needs. If you are unable to donate, sharing this campaign with your network would mean the world to us.
              </p>
            </div>
          </section>

          {/* UPDATES SECTION */}
          <section className="mt-16">
            <h2 className="text-[28px] font-bold text-slate-900 dark:text-white mb-8 tracking-tight transition-colors duration-500">Updates</h2>
            <div className="bg-white/60 dark:bg-[#111827]/40 backdrop-blur-md p-8 rounded-[24px] border border-slate-200 dark:border-white/5 mb-6 shadow-sm transition-colors duration-500">
              <span className="text-[14px] font-bold text-[#14B8A6] block mb-3 uppercase tracking-widest">3 days ago</span>
              <p className="text-[16px] font-medium text-slate-600 dark:text-[#9CA3AF] leading-relaxed transition-colors duration-500">
                Thank you so much to everyone who has donated so far! We are completely overwhelmed by the love and support. Emma had another checkup yesterday, and the doctors are optimistic, but they stressed the urgency of getting her into surgery soon. Please keep sharing!
              </p>
            </div>
            <div className="bg-white/60 dark:bg-[#111827]/40 backdrop-blur-md p-8 rounded-[24px] border border-slate-200 dark:border-white/5 mb-6 shadow-sm transition-colors duration-500">
              <span className="text-[14px] font-bold text-[#14B8A6] block mb-3 uppercase tracking-widest">1 week ago</span>
              <p className="text-[16px] font-medium text-slate-600 dark:text-[#9CA3AF] leading-relaxed transition-colors duration-500">
                We've just launched the campaign. Emma is resting a lot these days but her spirits are high. She drew a picture for all her "helpers" today. We're keeping our fingers crossed.
              </p>
            </div>
          </section>

          {/* RECENT DONATIONS */}
          <section className="mt-16">
            <h2 className="text-[28px] font-bold text-slate-900 dark:text-white mb-8 tracking-tight transition-colors duration-500">Recent Supporters ({MOCK_DONATIONS.length})</h2>
            <div className="flex flex-col bg-white/60 dark:bg-[#1F2937]/50 backdrop-blur-lg border border-slate-200 dark:border-white/5 rounded-[32px] p-4 shadow-sm transition-colors duration-500">
              {MOCK_DONATIONS.map((donation, index) => (
                <div key={donation.id} className={`flex gap-5 p-5 rounded-2xl transition-colors hover:bg-slate-50 dark:hover:bg-white/5 ${index !== MOCK_DONATIONS.length - 1 ? 'border-b border-slate-100 dark:border-white/5' : ''}`}>
                  <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-[#111827] shrink-0 overflow-hidden flex items-center justify-center border border-[#14B8A6]/30 shadow-sm transition-colors duration-500">
                    {donation.avatar ? (
                      <img src={donation.avatar} alt={donation.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[#14B8A6] text-[20px] font-bold">{donation.name.charAt(0)}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[18px] font-bold text-slate-900 dark:text-white transition-colors duration-500">{donation.name}</span>
                      <span className="text-[18px] font-bold text-[#10B981]">₹{donation.amount}</span>
                    </div>
                    {donation.message && (
                      <p className="text-[15px] font-medium text-slate-600 dark:text-[#9CA3AF] italic mb-3 bg-slate-50 dark:bg-[#111827]/40 p-4 rounded-xl border border-slate-200 dark:border-white/5 transition-colors duration-500">"{donation.message}"</p>
                    )}
                    <span className="text-[13px] font-medium text-slate-400 dark:text-white/40 transition-colors duration-500">{donation.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-5 mt-8 bg-white/60 dark:bg-[#111827]/40 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-[16px] rounded-[16px] hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-300 shadow-sm hover:-translate-y-1 active:scale-95">
              See all supporters
            </button>
          </section>

        </motion.div>

        {/* RIGHT COLUMN (STICKY) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="w-full lg:w-[35%]"
        >
          <div className="lg:sticky lg:top-[104px] bg-white/80 dark:bg-[#1F2937]/70 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[32px] p-8 lg:p-10 shadow-lg shadow-slate-200/50 dark:shadow-black/10 transition-colors duration-500">
            
            {/* PROGRESS */}
            <div className="mb-8">
              <div className="text-[42px] font-bold text-[#10B981] leading-none mb-3 tracking-tight">
                ₹12,500
              </div>
              <div className="text-[16px] font-medium text-slate-500 dark:text-[#9CA3AF] mb-8 transition-colors duration-500">
                raised of <span className="text-slate-900 dark:text-white font-bold transition-colors duration-500">₹20,000</span> goal
              </div>
              
              <div className="w-full h-3 bg-slate-100 dark:bg-[#111827] rounded-full overflow-hidden mb-8 border border-slate-200 dark:border-white/5 transition-colors duration-500">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '62%' }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[#14B8A6] to-[#10B981] rounded-full relative" 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-[#111827]/60 rounded-[20px] p-5 border border-slate-200 dark:border-white/5 transition-colors duration-500">
                  <div className="text-[28px] font-bold text-slate-900 dark:text-white transition-colors duration-500">234</div>
                  <div className="text-[14px] font-medium text-slate-500 dark:text-[#9CA3AF] transition-colors duration-500">Supporters</div>
                </div>
                <div className="bg-slate-50 dark:bg-[#111827]/60 rounded-[20px] p-5 border border-slate-200 dark:border-white/5 transition-colors duration-500">
                  <div className="text-[28px] font-bold text-slate-900 dark:text-white transition-colors duration-500">12</div>
                  <div className="text-[14px] font-medium text-slate-500 dark:text-[#9CA3AF] transition-colors duration-500">Days left</div>
                </div>
              </div>
            </div>

            <hr className="my-10 border-slate-200 dark:border-white/5 transition-colors duration-500" />

            {/* DONATION TIERS */}
            <div>
              <h3 className="text-[18px] font-bold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors duration-500">Choose Your Impact</h3>
              <div className="flex flex-col gap-4">
                {DONATION_TIERS.map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setSelectedTier(tier)}
                    className={`w-full h-[60px] rounded-[16px] border-2 text-[18px] font-bold flex items-center justify-between px-8 transition-all duration-300 ${
                      selectedTier === tier 
                        ? 'border-[#14B8A6] bg-[#14B8A6]/10 text-[#14B8A6] scale-[1.02]' 
                        : 'border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-white hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/10'
                    }`}
                  >
                    <span>₹{tier}</span>
                  </button>
                ))}
                <button
                    onClick={() => setSelectedTier(CUSTOM_TIER)}
                    className={`w-full h-[60px] rounded-[16px] border-2 text-[18px] font-bold flex items-center justify-between px-8 transition-all duration-300 ${
                      selectedTier === CUSTOM_TIER 
                        ? 'border-[#14B8A6] bg-[#14B8A6]/10 text-[#14B8A6] scale-[1.02]' 
                        : 'border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-white hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/10'
                    }`}
                  >
                    <span>Custom Amount</span>
                  </button>
              </div>
            </div>

            {/* DONATE BUTTON */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full h-[64px] mt-10 bg-[#F472B6] hover:bg-[#F472B6]/90 text-white text-[18px] font-bold rounded-[16px] shadow-md transition-colors duration-300 overflow-hidden group tracking-wide"
            >
              <span className="relative z-10">Donate Now</span>
            </motion.button>
            <div className="flex items-center justify-center gap-2 mt-5 text-slate-500 dark:text-[#9CA3AF] font-medium transition-colors duration-500">
              <Shield className="w-5 h-5 text-[#10B981]" />
              <span className="text-[14px]">Secure & Encrypted</span>
            </div>

            <hr className="my-10 border-slate-200 dark:border-white/5 transition-colors duration-500" />

            {/* SHARE SECTION */}
            <div>
              <h3 className="text-[16px] font-bold text-slate-900 dark:text-white mb-5 transition-colors duration-500">Share this campaign</h3>
              <div className="flex gap-4">
                {[Facebook, Twitter, MessageCircle, Mail, LinkIcon].map((Icon, i) => (
                  <button key={i} className="w-[52px] h-[52px] flex items-center justify-center rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-[#14B8A6]/10 hover:border-slate-300 dark:hover:border-[#14B8A6]/30 hover:text-[#14B8A6] text-slate-700 dark:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </button>
                ))}
              </div>
            </div>

            <hr className="my-10 border-slate-200 dark:border-white/5 transition-colors duration-500" />

            {/* ORGANIZER CARD */}
            <div className="bg-white/60 dark:bg-[#111827]/40 p-6 rounded-[24px] border border-slate-200 dark:border-white/5 shadow-sm transition-colors duration-500">
              <h3 className="text-[14px] font-bold text-slate-500 dark:text-[#9CA3AF] uppercase tracking-widest mb-5 transition-colors duration-500">About the Organizer</h3>
              <div className="flex items-center gap-5 mb-6">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden shrink-0 border border-[#14B8A6]/30 shadow-sm">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1594318223885-20dc4b889f9e?w=100&q=80" 
                    alt="Sarah Mitchell"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[18px] font-bold text-slate-900 dark:text-white transition-colors duration-500">Sarah Mitchell</span>
                    <CheckCircle2 className="w-[18px] h-[18px] text-[#14B8A6] fill-[#14B8A6]/20" />
                  </div>
                  <span className="text-[14px] text-slate-500 dark:text-[#9CA3AF] font-medium transition-colors duration-500">Member since 2023</span>
                </div>
              </div>
              <button className="w-full py-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white font-bold rounded-[16px] hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 active:scale-95 shadow-sm">
                Contact Organizer
              </button>
            </div>

          </div>
        </motion.div>
      </div>

      {/* MOBILE STICKY DONATE BUTTON */}
      <AnimatePresence>
        {showStickyDonate && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 p-5 pb-8 bg-white/95 dark:bg-[#1F2937]/95 backdrop-blur-xl border-t border-slate-200 dark:border-white/10 z-50 lg:hidden shadow-2xl transition-colors duration-500"
          >
            <button className="w-full h-[60px] bg-[#F472B6] hover:bg-[#F472B6]/90 text-white rounded-[16px] text-[18px] font-bold shadow-md transition-colors duration-300 tracking-wide active:scale-95">
              Donate Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
