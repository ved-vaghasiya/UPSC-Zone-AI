import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Database } from 'lucide-react';

export const RealDataGuarantee = ({ compact = false }) => {
  if (compact) {
    return (
      <div className="glass-panel-2026 rounded-2xl p-3.5 sm:p-4 flex flex-wrap items-center justify-between gap-3 text-xs shadow-lg hover-lift">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
          </div>
          <span className="text-slate-200 font-medium">
            <strong className="text-amber-400 font-bold">Audited Against Real Data:</strong> Not based on dummy estimates or marketing claims.
          </span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider">
            UPSC ZONE AI is Best Everytime, Everywhere
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl glass-panel-gold p-6 sm:p-10 shadow-2xl my-10 hover-lift bg-grid-pattern">
      <div className="absolute -right-16 -top-16 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Database className="w-4 h-4 text-amber-400" />
            <span>Strict Empirical Transparency Statement</span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-white tracking-tight leading-snug">
            This Comparison Is Based On{' '}
            <span className="animate-shimmer font-black">
              Provided Real Data
            </span>
            , Not Dummy Estimates.
          </h3>
          
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Every metric featured here—from the <strong className="text-white">₹2.15 Lakh offline batch fee receipts</strong>, the{' '}
            <strong className="text-white">15-day Mains copy delays</strong> in Old Rajinder Nagar and Mukherjee Nagar, to the{' '}
            <strong className="text-white">generic hallucinations of non-specialized AI</strong> and startup prompt wrappers—is verified through authentic institutional fee cards, RTI trends, and real civil services aspirant evaluations.
          </p>
          
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-200">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/60 text-emerald-400 shadow-xs">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Real Fee Receipts Audited (2025-2026)</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/60 text-emerald-400 shadow-xs">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Actual Mains Evaluation Turnaround Benchmarks</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/60 text-emerald-400 shadow-xs">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Verified 1995-2024 UPSC Prelims PYQ Rubrics</span>
            </div>
          </div>
        </div>
        
        <div className="shrink-0 glass-panel-2026 border-2 border-amber-500/50 rounded-2xl p-6 text-center min-w-[280px] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600" />
          <div className="inline-flex p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 mb-3 glow-pulse-amber">
            <Award className="w-8 h-8 text-amber-400" />
          </div>
          <div className="text-xs uppercase font-extrabold tracking-widest text-amber-400 mb-1.5">
            Indisputable Verdict
          </div>
          <div className="text-lg font-black text-white font-serif leading-tight mb-2.5">
            UPSC ZONE AI IS BEST EVERYTIME, EVERYWHERE
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Ranked #1 in Mains Speed, GS 1-4 Rubric Depth, Prelims Accuracy &amp; Democratized Pricing.
          </p>
        </div>
      </div>
    </div>
  );
};
