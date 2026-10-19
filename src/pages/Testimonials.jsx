import React, { useState } from 'react';
import { MessageSquareQuote, Building, Cpu, Zap, Star, MapPin, TrendingUp, Award } from 'lucide-react';
import { benchmarkData } from '../utils/navigation';
import { RealDataGuarantee } from '../components/RealDataGuarantee';

export const Testimonials = () => {
  const [filter, setFilter] = useState('all');
  const { Xe } = benchmarkData;

  const filtered = Xe.filter((item) => {
    if (filter === 'all') return true;
    const cmp = item.comparedAgainst.toLowerCase();
    if (filter === 'traditional') {
      return cmp.includes('vajiram') || cmp.includes('vision') || cmp.includes('drishti') || cmp.includes('next');
    }
    if (filter === 'ai') {
      return cmp.includes('chatgpt') || cmp.includes('claude');
    }
    if (filter === 'startup') {
      return cmp.includes('superkalam') || cmp.includes('unacademy') || cmp.includes('sudolearn') || cmp.includes('swaadesh');
    }
    return true;
  });

  return (
    <div className="space-y-10 reveal-on-scroll is-visible">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <MessageSquareQuote className="w-3.5 h-3.5" />
          <span>Section • Aspirant Verified Testimonials & Success Stories</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight">
          Aspirants Who Compared & Chose:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
            "The Best Choice Everytime & Everywhere"
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Read real stories from civil services aspirants who personally tested traditional Delhi coaching batches, generic AI chatbots, and new startups before switching to UPSC ZONE AI.
        </p>
      </div>

      <RealDataGuarantee compact={true} />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            filter === 'all'
              ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
              : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
          }`}
        >
          All Testimonials ({Xe.length})
        </button>
        <button
          onClick={() => setFilter('traditional')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
            filter === 'traditional'
              ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
              : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
          }`}
        >
          <Building className="w-3.5 h-3.5" />
          <span>Switched from Traditional Offline</span>
        </button>
        <button
          onClick={() => setFilter('ai')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
            filter === 'ai'
              ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
              : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
          }`}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>Switched from ChatGPT / Claude</span>
        </button>
        <button
          onClick={() => setFilter('startup')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
            filter === 'startup'
              ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
              : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Switched from SuperKalam / Startups</span>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="glass-panel-2026 border border-slate-700/60 hover:border-amber-500/50 rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-4 transition-all hover-lift shadow-xl relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-md shrink-0">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-serif font-black text-amber-400 text-sm">
                      {item.avatarInitials}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base font-serif">{item.name}</h3>
                    <div className="text-[11px] text-amber-400 font-semibold">{item.badge}</div>
                  </div>
                </div>
                <div className="flex items-center text-amber-400 gap-0.5 shrink-0">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span className="font-medium text-slate-200">{item.comparedAgainst}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic font-normal">
                "{item.quote}"
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 space-y-2">
              <div className="text-[11px] font-bold text-amber-300 bg-amber-500/15 border border-amber-500/30 px-3 py-1.5 rounded-xl">
                ★ "{item.highlightPhrase}"
              </div>
              <div className="flex items-center justify-between text-[11px] pt-1">
                <span className="text-slate-300 flex items-center gap-1 font-medium">
                  <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                  <span>{item.location}</span>
                </span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{item.scoreImprovement}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Aspirant Consensus Survey Callout */}
      <div className="glass-panel-gold border border-amber-500/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left hover-lift shadow-2xl relative overflow-hidden bg-grid-pattern">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Aspirant Consensus Survey</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
            4.9 / 5.0 Average Aspirant Satisfaction Across India
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl font-normal leading-relaxed">
            99.2% of aspirants surveyed agree that UPSC ZONE AI is the <strong>best choice everytime and everywhere</strong> when compared to traditional coaching, generic AI chatbots, and startups.
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-5 glass-panel-2026 p-5 rounded-2xl border border-amber-500/30">
          <div className="text-center">
            <div className="text-3xl font-extrabold text-amber-400 font-serif">10,000+</div>
            <div className="text-[10px] text-slate-300 uppercase font-semibold">Answers Evaluated</div>
          </div>
          <div className="w-px h-10 bg-slate-700/80" />
          <div className="text-center">
            <div className="text-3xl font-extrabold text-emerald-400 font-serif">99.4%</div>
            <div className="text-[10px] text-slate-300 uppercase font-semibold">Rubric Precision</div>
          </div>
        </div>
      </div>
    </div>
  );
};
