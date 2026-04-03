import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const CATEGORIES = [
  "Medical & Health",
  "Education",
  "Emergency Relief",
  "Animals & Pets",
  "Community Projects",
  "Memorial & Funeral",
  "Environment",
  "Other"
];

interface Campaign {
  id: string;
  category: string;
  title: string;
  fundraiser: string;
  raised: number;
  goal: number;
  progress: number;
  supporters: number;
  daysLeft: number;
  image: string;
  trending?: boolean;
}

const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: "c1",
    category: "Medical & Health",
    title: "Help Emma Get Life-Saving Surgery",
    fundraiser: "by Sarah Mitchell",
    raised: 12500,
    goal: 20000,
    progress: 62.5,
    supporters: 234,
    daysLeft: 12,
    image: "https://images.unsplash.com/photo-1758206523860-0583e7b51a5e?w=600&q=80",
    trending: true
  },
  {
    id: "c2",
    category: "Education",
    title: "Scholarship Fund for Underprivileged Students",
    fundraiser: "by Michael Rodriguez",
    raised: 8750,
    goal: 15000,
    progress: 58.3,
    supporters: 127,
    daysLeft: 18,
    image: "https://images.unsplash.com/flagged/photo-1574098335395-18cf525e45d6?w=600&q=80",
    trending: false
  },
  {
    id: "c3",
    category: "Emergency Relief",
    title: "Flood Relief for Affected Families",
    fundraiser: "by Community Relief Org",
    raised: 45200,
    goal: 50000,
    progress: 90.4,
    supporters: 892,
    daysLeft: 5,
    image: "https://images.unsplash.com/photo-1664868035693-7d3cba76826b?w=600&q=80",
    trending: true
  },
  {
    id: "c4",
    category: "Animals & Pets",
    title: "Save the Local Animal Shelter",
    fundraiser: "by Paw Protectors",
    raised: 3000,
    goal: 10000,
    progress: 30,
    supporters: 45,
    daysLeft: 22,
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80",
    trending: false
  },
  {
    id: "c5",
    category: "Community Projects",
    title: "Build a New Playground for Kids",
    fundraiser: "by Neighborhood Watch",
    raised: 17000,
    goal: 20000,
    progress: 85,
    supporters: 310,
    daysLeft: 8,
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
    trending: true
  },
  {
    id: "c6",
    category: "Environment",
    title: "Reforestation Project in the Amazon",
    fundraiser: "by Earth Guardians",
    raised: 7500,
    goal: 50000,
    progress: 15,
    supporters: 112,
    daysLeft: 30,
    image: "https://images.unsplash.com/photo-1518398092300-56acec05c92c?w=600&q=80",
    trending: false
  }
];

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
}

function CampaignCard({ campaign, delay = 0, compact = false }: { campaign: Campaign, delay?: number, compact?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`bg-white/10 dark:bg-[#111827]/10 backdrop-blur-3xl border border-white/30 dark:border-white/10 rounded-[20px] overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:-translate-y-2 hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] dark:hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-500 hover:bg-white/20 dark:hover:bg-[#111827]/20 group flex flex-col h-full ${compact ? 'w-[300px] shrink-0' : 'w-full'}`}
    >
      <Link to={`/campaign/${campaign.id}`} className="flex flex-col h-full">
        <div className="relative w-full aspect-video overflow-hidden bg-slate-100 dark:bg-[#111827] shrink-0 transition-colors duration-500">
          <ImageWithFallback
            src={campaign.image}
            alt={campaign.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 dark:from-[#111827] to-transparent opacity-80 mix-blend-multiply dark:mix-blend-normal"></div>
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-white/10 dark:bg-[#111827]/10 backdrop-blur-3xl border border-white/30 dark:border-white/10 text-[#A7754D] dark:text-[#EAB464] text-[12px] font-bold px-3 py-1.5 rounded-full shadow-[0_4px_16px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_4px_16px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] tracking-wide transition-colors duration-500">
              {campaign.category}
            </span>
          </div>
        </div>
        <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10 bg-gradient-to-b from-transparent to-white/40 dark:to-[#111827]/40">
          <h3 className="text-[20px] font-bold text-slate-900 dark:text-[#DCCCBB] leading-[1.4] mb-3 line-clamp-2 group-hover:text-[#A7754D] dark:group-hover:text-[#EAB464] transition-colors duration-300">
            {campaign.title}
          </h3>
          <p className="text-[14px] text-slate-500 dark:text-[#DCCCBB] mb-6 flex-1 font-medium transition-colors duration-500">{campaign.fundraiser}</p>
          
          <div className="w-full h-2 bg-slate-200 dark:bg-[#111827]/80 rounded-full mb-4 overflow-hidden border border-slate-200/50 dark:border-white/5 relative transition-colors duration-500">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${Math.min(campaign.progress, 100)}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#EAB464] to-[#A7754D] dark:to-[#EAB464] rounded-full relative" 
            />
          </div>
          
          <div className="flex justify-between items-end mb-4">
            <div className="text-[18px] font-bold text-[#A7754D] dark:text-[#EAB464] transition-colors duration-500">{formatCurrency(campaign.raised)} <span className="text-[14px] font-medium text-slate-500 dark:text-[#DCCCBB]">raised</span></div>
            <div className="text-[14px] text-slate-500 dark:text-[#DCCCBB] font-medium transition-colors duration-500">of {formatCurrency(campaign.goal)}</div>
          </div>
          
          <div className="text-[13px] text-slate-500 dark:text-[#DCCCBB] pt-5 border-t border-slate-200 dark:border-white/10 flex items-center font-medium tracking-wide transition-colors duration-500">
            {campaign.supporters.toLocaleString()} SUPPORTERS <span className="mx-3 text-slate-300 dark:text-white/20">•</span> {campaign.daysLeft} DAYS LEFT
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function Browse() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [maxGoal, setMaxGoal] = useState<number>(100000);
  const [location, setLocation] = useState<string>("All");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const filteredCampaigns = useMemo(() => {
    return MOCK_CAMPAIGNS.filter(c => {
      if (searchQuery && !c.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      if (selectedCategories.length > 0 && !selectedCategories.includes("All Categories") && !selectedCategories.includes(c.category)) return false;
      if (c.goal > maxGoal) return false;
      return true;
    });
  }, [searchQuery, selectedCategories, maxGoal]);

  const trendingCampaigns = MOCK_CAMPAIGNS.filter(c => c.trending);
  const nearlyFundedCampaigns = MOCK_CAMPAIGNS.filter(c => c.progress > 80);

  const FilterContent = () => (
    <div className="flex flex-col w-full h-full p-6 pb-24 md:p-0 md:pb-0 overflow-y-auto md:overflow-visible transition-colors duration-500">
      <div className="flex items-center justify-between md:hidden mb-6">
        <h2 className="text-[20px] font-bold text-slate-900 dark:text-[#DCCCBB] transition-colors">Filters</h2>
        <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 text-slate-500 dark:text-[#DCCCBB] hover:text-[#EAB464] transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* CATEGORIES */}
      <div className="mb-8">
        <h3 className="text-[14px] font-bold uppercase text-slate-900 dark:text-[#DCCCBB] tracking-widest mb-4 transition-colors">Categories</h3>
        <div className="flex flex-col gap-1">
          <label className="flex items-center gap-3 p-2 hover:bg-slate-100 dark:hover:bg-[#EAB464]/10 rounded-xl cursor-pointer transition-colors group">
            <input 
              type="checkbox" 
              checked={selectedCategories.length === 0}
              onChange={() => setSelectedCategories([])}
              className="w-4 h-4 rounded border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 text-[#EAB464] focus:ring-0 focus:ring-offset-0 checked:bg-[#EAB464] transition-all cursor-pointer" 
            />
            <span className="text-[14px] font-medium text-slate-500 dark:text-[#DCCCBB] group-hover:text-slate-900 dark:group-hover:text-white transition-colors">All Categories</span>
          </label>
          {CATEGORIES.map(cat => (
            <label key={cat} className="flex items-center gap-3 p-2 hover:bg-slate-100 dark:hover:bg-[#EAB464]/10 rounded-xl cursor-pointer transition-colors group">
              <input 
                type="checkbox" 
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="w-4 h-4 rounded border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 text-[#EAB464] focus:ring-0 focus:ring-offset-0 checked:bg-[#EAB464] transition-all cursor-pointer" 
              />
              <span className="text-[14px] font-medium text-slate-500 dark:text-[#DCCCBB] group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* LOCATION */}
      <div className="mb-8">
        <h3 className="text-[14px] font-bold uppercase text-slate-900 dark:text-[#DCCCBB] tracking-widest mb-4 transition-colors">Location</h3>
        <div className="flex flex-col gap-3">
          {["All", "Local (within 50km)", "National", "International"].map(loc => (
            <label key={loc} className="flex items-center gap-3 px-2 cursor-pointer group">
              <input 
                type="radio" 
                name="location" 
                checked={location === loc}
                onChange={() => setLocation(loc)}
                className="w-4 h-4 text-[#EAB464] bg-white dark:bg-white/5 border-slate-300 dark:border-white/20 focus:ring-0 cursor-pointer"
              />
              <span className="text-[14px] font-medium text-slate-500 dark:text-[#DCCCBB] group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{loc}</span>
            </label>
          ))}
        </div>
      </div>

      {/* GOAL AMOUNT */}
      <div className="mb-8">
        <h3 className="text-[14px] font-bold uppercase text-slate-900 dark:text-[#DCCCBB] tracking-widest mb-4 transition-colors">Goal Amount</h3>
        <div className="px-2">
          <input 
            type="range" 
            min="0" 
            max="100000" 
            step="1000"
            value={maxGoal}
            onChange={e => setMaxGoal(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 dark:bg-[#111827]/50 rounded-lg appearance-none cursor-pointer accent-[#EAB464]"
          />
          <div className="mt-4 text-[14px] font-bold text-[#A7754D] dark:text-[#EAB464] transition-colors">
            Up to {formatCurrency(maxGoal)}
          </div>
        </div>
      </div>

      {/* URGENCY */}
      <div className="mb-8">
        <h3 className="text-[14px] font-bold uppercase text-slate-900 dark:text-[#DCCCBB] tracking-widest mb-4 transition-colors">Urgency</h3>
        <div className="flex flex-col gap-1">
          {[
            { id: "soon", label: "Ending soon (< 7 days)" },
            { id: "nearly", label: "Nearly funded (> 80%)" },
            { id: "new", label: "Just launched (< 7 days old)" }
          ].map(opt => (
            <label key={opt.id} className="flex items-center gap-3 p-2 hover:bg-slate-100 dark:hover:bg-[#EAB464]/10 rounded-xl cursor-pointer transition-colors group">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 text-[#EAB464] focus:ring-0 focus:ring-offset-0 checked:bg-[#EAB464] transition-all cursor-pointer" 
              />
              <span className="text-[14px] font-medium text-slate-500 dark:text-[#DCCCBB] group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* APPLY BTN (Mobile only) */}
      <button 
        onClick={() => setIsMobileFilterOpen(false)}
        className="w-full h-[52px] bg-gradient-to-r from-[#EAB464] to-[#A7754D] hover:from-[#A7754D] hover:to-[#A7754D] text-white rounded-[16px] text-[16px] font-bold md:hidden mt-auto transition-transform active:scale-95 shadow-md"
      >
        Apply Filters
      </button>
    </div>
  );

  return (
    <div className="w-full min-h-screen pb-[100px] text-slate-500 dark:text-[#DCCCBB] transition-colors duration-500">
      {/* HEADER SECTION */}
      <div className="w-full bg-white/10 dark:bg-[#111827]/10 backdrop-blur-3xl border-b border-white/30 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] py-10 px-6 mt-[72px] transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative max-w-[600px] mx-auto group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none transition-colors group-focus-within:text-[#EAB464] text-slate-500 dark:text-[#DCCCBB]">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search campaigns by name or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[56px] bg-white dark:bg-[#1F2937]/40 border border-slate-200 dark:border-white/10 rounded-[16px] pl-14 pr-5 text-[16px] text-slate-900 dark:text-[#DCCCBB] placeholder-slate-400 dark:placeholder-[#DCCCBB] focus:outline-none focus:ring-2 focus:ring-[#EAB464]/50 focus:border-[#EAB464] focus:bg-white dark:focus:bg-[#1F2937]/60 transition-all duration-300 shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-6 pt-10 pb-20 relative z-10">
        
        {/* MOBILE FILTER TOGGLE */}
        <div className="flex md:hidden justify-between items-center mb-8">
          <button 
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 px-5 py-3 bg-white/10 dark:bg-[#111827]/10 backdrop-blur-3xl border border-white/30 dark:border-white/10 rounded-xl text-[14px] font-bold text-slate-900 dark:text-[#DCCCBB] shadow-[0_8px_32px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] active:scale-95 transition-all hover:bg-white/20 dark:hover:bg-[#111827]/20"
          >
            <Filter className="w-4 h-4 text-[#EAB464]" /> Filters
          </button>
          
          <div className="flex items-center gap-2 bg-white/10 dark:bg-[#111827]/10 backdrop-blur-3xl border border-white/30 dark:border-white/10 rounded-xl px-4 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] transition-colors duration-500">
            <span className="text-[14px] text-slate-500 dark:text-[#DCCCBB]">Sort:</span>
            <span className="text-[14px] font-bold text-slate-900 dark:text-[#DCCCBB] flex items-center gap-1">Trending <ChevronDown className="w-4 h-4 text-[#EAB464]" /></span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          
          {/* DESKTOP SIDEBAR */}
          <div className="hidden md:block w-[240px] lg:w-[280px] shrink-0 bg-white/10 dark:bg-[#111827]/10 backdrop-blur-3xl border border-white/30 dark:border-white/10 rounded-[24px] p-6 sticky top-[120px] shadow-[0_8px_32px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] transition-colors duration-500">
            <FilterContent />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 min-w-0 w-full">
            
            {/* TRENDING NOW */}
            {trendingCampaigns.length > 0 && !searchQuery && selectedCategories.length === 0 && (
              <div className="mb-14">
                <h2 className="text-[28px] font-bold text-slate-900 dark:text-[#DCCCBB] mb-6 tracking-tight transition-colors">Trending Now</h2>
                <div className="flex gap-8 overflow-x-auto pb-8 -mx-5 px-5 md:mx-0 md:px-0 snap-x snap-mandatory hide-scrollbar">
                  {trendingCampaigns.map((c, i) => (
                    <div key={c.id} className="snap-start scroll-ml-5 md:scroll-ml-0">
                      <CampaignCard campaign={c} delay={i * 0.15} compact={true} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NEARLY FUNDED */}
            {nearlyFundedCampaigns.length > 0 && !searchQuery && selectedCategories.length === 0 && (
              <div className="mb-14">
                <h2 className="text-[28px] font-bold text-slate-900 dark:text-[#DCCCBB] mb-6 tracking-tight transition-colors">Almost There - Help Push Them Over</h2>
                <div className="flex gap-8 overflow-x-auto pb-8 -mx-5 px-5 md:mx-0 md:px-0 snap-x snap-mandatory hide-scrollbar">
                  {nearlyFundedCampaigns.map((c, i) => (
                    <div key={c.id} className="snap-start scroll-ml-5 md:scroll-ml-0">
                      <CampaignCard campaign={c} delay={i * 0.15} compact={true} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ALL CAMPAIGNS HEADER */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <h2 className="text-[16px] font-bold text-slate-900 dark:text-[#DCCCBB] transition-colors">Showing {filteredCampaigns.length} campaigns</h2>
              
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2 cursor-pointer group">
                  <span className="text-[14px] text-slate-500 dark:text-[#DCCCBB] transition-colors group-hover:text-slate-900 dark:group-hover:text-white">Sort by:</span>
                  <span className="text-[14px] font-bold text-slate-900 dark:text-[#DCCCBB] flex items-center gap-1 transition-colors group-hover:text-[#EAB464] dark:group-hover:text-[#EAB464]">
                    Trending <ChevronDown className="w-4 h-4" />
                  </span>
                </div>
                <div className="w-px h-6 bg-slate-200 dark:bg-white/10 transition-colors"></div>
                <div className="flex items-center gap-1 bg-white/10 dark:bg-[#111827]/10 backdrop-blur-3xl border border-white/30 dark:border-white/10 rounded-xl p-1.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] transition-colors duration-500">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'text-white bg-[#EAB464] shadow-sm' : 'text-slate-500 dark:text-[#DCCCBB] hover:text-[#EAB464] hover:bg-slate-50 dark:hover:bg-[#EAB464]/10'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'text-white bg-[#EAB464] shadow-sm' : 'text-slate-500 dark:text-[#DCCCBB] hover:text-[#EAB464] hover:bg-slate-50 dark:hover:bg-[#EAB464]/10'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* MAIN GRID */}
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" 
              : "flex flex-col gap-8"
            }>
              {filteredCampaigns.map((c, i) => (
                <div key={c.id} className={viewMode === 'list' ? "w-full max-w-[900px]" : ""}>
                  <CampaignCard campaign={c} delay={i * 0.1} compact={false} />
                </div>
              ))}
            </div>

            {filteredCampaigns.length === 0 && (
              <div className="text-center py-20 bg-white/60 dark:bg-[#111827]/40 backdrop-blur-xl rounded-[32px] border border-slate-200 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-sm transition-colors duration-500">
                <div className="w-20 h-20 bg-[#EAB464]/10 border border-[#EAB464]/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Search className="w-8 h-8 text-[#EAB464]" />
                </div>
                <h3 className="text-[24px] font-bold text-slate-900 dark:text-[#DCCCBB] mb-3 tracking-tight transition-colors">No campaigns found</h3>
                <p className="text-[16px] text-slate-500 dark:text-[#DCCCBB] max-w-[400px] mx-auto mb-10 leading-relaxed transition-colors">Try adjusting your filters or search query to find what you're looking for.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategories([]); setMaxGoal(100000); }}
                  className="px-10 py-4 bg-gradient-to-r from-[#EAB464] to-[#A7754D] hover:from-[#A7754D] hover:to-[#A7754D] text-white font-bold rounded-[16px] text-[16px] transition-transform duration-300 shadow-md hover:-translate-y-1 active:scale-95"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {filteredCampaigns.length > 0 && (
              <div className="mt-20 text-center">
                <button className="px-10 py-4 bg-white/60 dark:bg-[#111827]/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 text-slate-900 dark:text-[#DCCCBB] rounded-[16px] text-[16px] font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-sm hover:-translate-y-1 active:scale-95 inline-flex items-center justify-center tracking-wide">
                  Load more campaigns
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* MOBILE FILTER MODAL */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#111827]/60 dark:bg-[#111827]/80 backdrop-blur-sm z-40 md:hidden transition-colors"
              onClick={() => setIsMobileFilterOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-xl border-t border-slate-200 dark:border-white/10 rounded-t-[32px] z-50 h-[85vh] md:hidden shadow-2xl flex flex-col transition-colors duration-500"
            >
              <div className="w-full flex justify-center py-5 border-b border-slate-200 dark:border-white/5 transition-colors">
                <div className="w-16 h-1.5 bg-slate-300 dark:bg-[#DCCCBB]/30 rounded-full transition-colors"></div>
              </div>
              <div className="flex-1 overflow-y-auto">
                <FilterContent />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}