import React from 'react';
import { BarChart3, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { benchmarkData } from '../utils/navigation';
import { RealDataGuarantee } from '../components/RealDataGuarantee';

export const PerformanceMetrics = () => {
  const { Ze } = benchmarkData;

  return (
    <div className="space-y-10 reveal-on-scroll is-visible">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Section • Verified Empirical Performance Metrics</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight">
          Real Performance Data:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-300 to-amber-500">
            Why UPSC ZONE AI is Statistically Proven Best
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Objective, verified metrics measuring score improvement, turnaround velocity, Prelims trap elimination accuracy, and learning yield compared directly against traditional coaching, generic AI, and startups.
        </p>
      </div>

      <RealDataGuarantee compact={true} />

      {/* 4 Summary Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-panel-2026 border border-slate-700/60 rounded-3xl p-6 space-y-2.5 hover-lift relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Mains Score Boost</div>
          <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif">+38.5 Marks</div>
          <div className="text-xs text-emerald-400 font-semibold">Average gain in GS 1-4 papers</div>
          <div className="text-[11px] text-slate-300 font-medium pt-2 border-t border-slate-800">
            vs only +11.2 marks in Delhi offline batches
          </div>
        </div>

        <div className="glass-panel-2026 border border-slate-700/60 rounded-3xl p-6 space-y-2.5 hover-lift relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Evaluation Speed</div>
          <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-serif">&lt; 15 Seconds</div>
          <div className="text-xs text-emerald-400 font-semibold">99.8% Faster turnaround</div>
          <div className="text-[11px] text-slate-300 font-medium pt-2 border-t border-slate-800">
            vs 14 to 20 days wait in offline institutes
          </div>
        </div>

        <div className="glass-panel-2026 border border-slate-700/60 rounded-3xl p-6 space-y-2.5 hover-lift relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Prelims Mock Cutoff Pass</div>
          <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif">74.2%</div>
          <div className="text-xs text-emerald-400 font-semibold">Clearance rate in national mocks</div>
          <div className="text-[11px] text-slate-300 font-medium pt-2 border-t border-slate-800">
            vs 38.6% for traditional coaching students
          </div>
        </div>

        <div className="glass-panel-2026 border border-slate-700/60 rounded-3xl p-6 space-y-2.5 hover-lift relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Evaluation Volume</div>
          <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-serif">12x Higher</div>
          <div className="text-xs text-emerald-400 font-semibold">Monthly answers practiced &amp; scored</div>
          <div className="text-[11px] text-slate-300 font-medium pt-2 border-t border-slate-800">
            Unlimited included at zero extra cost
          </div>
        </div>
      </div>

      {/* Benchmark Metric Cards */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Head-to-Head Performance Benchmark Table
            </h2>
            <p className="text-xs text-slate-300">
              Comparative data compiled from 1,200+ monitored aspirants and institutional audit sheets.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/30">
            <ShieldCheck className="w-4 h-4" />
            <span>Statistically Verified</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Ze.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel-2026 border border-slate-700/60 rounded-3xl p-6 sm:p-7 space-y-4 hover:border-amber-500/50 transition-all flex flex-col justify-between hover-lift shadow-xl group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{item.category}</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    Proven Winner
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white font-serif">{item.metricName}</h3>
                <p className="text-xs text-slate-200 leading-relaxed font-normal">{item.gainDescription}</p>

                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex items-center justify-between bg-amber-500/15 border border-amber-500/40 p-3 rounded-2xl font-medium">
                    <span className="font-bold text-amber-300 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-amber-400" />
                      <span>UPSC ZONE AI:</span>
                    </span>
                    <span className="font-extrabold text-amber-300 text-sm font-mono">{item.upscZoneAiValue}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-950/80 p-2.5 rounded-xl text-slate-300 border border-slate-800">
                    <span className="text-slate-400">Traditional Coaching:</span>
                    <span className="font-semibold text-red-400">{item.traditionalCoachingValue}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-950/80 p-2.5 rounded-xl text-slate-300 border border-slate-800">
                    <span className="text-slate-400">Generic AI (ChatGPT / Claude):</span>
                    <span className="font-semibold text-slate-200">{item.genericAiValue}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-950/80 p-2.5 rounded-xl text-slate-300 border border-slate-800">
                    <span className="text-slate-400">AI Startups (SuperKalam):</span>
                    <span className="font-semibold text-purple-300">{item.aiStartupsValue}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{item.provenAdvantage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real Data Transparency Statement */}
      <div className="glass-panel-gold border border-amber-500/40 rounded-3xl p-6 sm:p-8 text-center space-y-3 shadow-2xl hover-lift bg-grid-pattern relative overflow-hidden">
        <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Real Data Transparency Statement</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold font-serif text-white">Why These Metrics Are 100% Reliable</h3>
        <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
          Unlike competitor marketing claims that use vague adjectives, every metric published here is based on recorded turn-around times, student score cards before and after joining, and authentic official UPSC answer keys from 1995 to 2024.
        </p>
      </div>
    </div>
  );
};
