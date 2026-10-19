import React, { useState } from 'react';
import {
  Zap,
  Cpu,
  AlertTriangle,
  CreditCard,
  Layers,
  Flame,
  CheckCircle2,
  XCircle,
  Award
} from 'lucide-react';
import { benchmarkData } from '../utils/navigation';
import { RealDataGuarantee } from '../components/RealDataGuarantee';

export const AiStartups = () => {
  const { He, Ge } = benchmarkData;
  const [selectedId, setSelectedId] = useState(Ge[0].id);
  const selectedStartup = Ge.find((c) => c.id === selectedId) || Ge[0];

  return (
    <div className="space-y-10 reveal-on-scroll is-visible">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5" />
          <span>Section 3 • Comprehensive AI Startups Benchmark</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight">
          UPSC ZONE AI vs{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-amber-300 to-amber-500">
            SuperKalam, UPSC AI, Swaadesh &amp; PrepAIro
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Exhaustive empirical comparison against{' '}
          <strong>SuperKalam AI, UPSC AI (upsc.ai), Swaadesh AI, PrepAIro, UPSC Hindi AI, and SudoLearn</strong>. Why shallow prompt wrappers, restrictive credit burnout, and slow queues fail serious civil services aspirants.
        </p>
      </div>

      <RealDataGuarantee compact={true} />

      {/* Purpose-Built Architecture Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border-2 border-amber-500/40 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl hover-lift">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>Dedicated Civil Services AI Architecture</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Why UPSC ZONE AI is Not an API Prompt Wrapper:{' '}
              <span className="text-amber-400">Trained to Be India's Autonomous IAS Agent</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Most new startups simply wrap public OpenAI or Anthropic APIs with basic system prompts. They don't fine-tune weights or understand handwritten UPSC margins.{' '}
              <strong>UPSC ZONE AI is purpose-trained on 30 years of official UPSC exam trends</strong>, 2nd Administrative Reforms Commission (2nd ARC) recommendations, Law Commission reports, and NITI Aayog policy blueprints.
            </p>
            <p className="text-xs sm:text-sm text-amber-200/90 font-medium leading-relaxed">
              ⚡ <strong>Your Enrollment Direct Impact:</strong> Every rupee contributed via courses and test series on{' '}
              <a href="https://upsczone.in" target="_blank" rel="noopener noreferrer" className="underline font-bold text-amber-300 hover:text-amber-200">
                UPSC ZONE
              </a>{' '}
              is reinvested directly into high-accuracy compute clusters to train the AI agent—democratizing elite civil services mentoring for every Indian village, town, and city.
            </p>
          </div>

          <div className="shrink-0 bg-slate-950/90 border border-amber-500/30 p-5 rounded-xl text-center min-w-[240px] space-y-3">
            <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">Official Platform</div>
            <div className="text-xl font-bold text-amber-400 font-serif">UPSC ZONE</div>
            <a
              href="https://upsczone.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all hover:scale-105"
            >
              <span>Enroll in UPSC ZONE</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4 Hidden Pitfalls */}
      <div className="glass-panel-2026 rounded-3xl p-6 sm:p-8 space-y-6 border border-purple-500/30 shadow-2xl relative overflow-hidden bg-grid-pattern">
        <h2 className="text-xl sm:text-2xl font-bold font-serif text-white flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <span>The 4 Hidden Pitfalls of Early UPSC AI Startups</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="glass-panel-purple rounded-2xl p-5 space-y-2.5 hover-lift border border-purple-500/30">
            <div className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <CreditCard className="w-4 h-4" />
              <span>1. The Credit Burnout Trap</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              SuperKalam, Swaadesh &amp; PrepAIro impose daily 2-answer limits or charge ₹20-₹40 per evaluated copy. An active aspirant writing 100 answers/month burns through ₹3,000+ monthly.{' '}
              <strong className="text-emerald-400">UPSC ZONE AI offers unlimited evaluations.</strong>
            </p>
          </div>

          <div className="glass-panel-purple rounded-2xl p-5 space-y-2.5 hover-lift border border-purple-500/30">
            <div className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>2. Thin API Prompt Wrappers</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              Built quickly by software engineers with zero civil services background. They generate repetitive boilerplate critiques without authentic UPSC micro-rubric scoring.{' '}
              <strong className="text-amber-300">UPSC ZONE AI employs deep 10-point evaluation.</strong>
            </p>
          </div>

          <div className="glass-panel-purple rounded-2xl p-5 space-y-2.5 hover-lift border border-purple-500/30">
            <div className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <Flame className="w-4 h-4" />
              <span>3. Peak Hour Timeout Delays</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              During exam season or 10 PM study hours, startups show loading spinners or WhatsApp bot timeouts taking 2-5 minutes.{' '}
              <strong className="text-amber-300">UPSC ZONE AI responds consistently in under 15 seconds.</strong>
            </p>
          </div>

          <div className="glass-panel-purple rounded-2xl p-5 space-y-2.5 hover-lift border border-purple-500/30">
            <div className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>4. Flawed Hindi &amp; Optional Depth</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              Tools either lack authentic Hindi vocabulary or fail completely on Optionals (PSIR, Geography, Sociology, History, PubAd).{' '}
              <strong className="text-emerald-400">UPSC ZONE AI supports GS 1-4 and major Optionals in English and Hindi.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Startup Selector & Head to Head */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Select Any AI Startup to Compare Head-to-Head
            </h2>
            <p className="text-xs text-slate-300">
              Click any startup tool below to inspect audited metrics vs UPSC ZONE AI.
            </p>
          </div>
          <a
            href="https://upsczone.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-amber-400 hover:text-amber-300"
          >
            <span>Explore Courses on UPSC ZONE</span>
          </a>
        </div>

        <div className="flex flex-wrap gap-2">
          {Ge.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                selectedId === item.id
                  ? 'bg-purple-600 text-white font-bold shadow-lg shadow-purple-500/25 scale-[1.02]'
                  : 'glass-panel-2026 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>{item.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${selectedId === item.id ? 'bg-purple-950 text-white border border-purple-300/40' : 'bg-slate-800 text-slate-300'}`}>
                Score: {item.scoreOutOf100}/100
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Selected Startup Card */}
          <div className="glass-panel-purple rounded-3xl p-6 sm:p-7 space-y-5 hover-lift border border-purple-500/40 shadow-xl">
            <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
              <div>
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">AI Edtech Startup</span>
                <h3 className="text-2xl font-bold text-white font-serif">{selectedStartup.name}</h3>
                <div className="text-xs text-slate-300 mt-0.5">{selectedStartup.locationOrType}</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white font-serif">
                  {selectedStartup.scoreOutOf100} <span className="text-xs text-slate-300 font-medium">/ 100</span>
                </div>
                <div className="text-[10px] text-red-400 font-bold">Limited Capability</div>
              </div>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex justify-between items-start py-1.5 border-b border-purple-500/10">
                <span className="text-slate-300">Pricing / Plans:</span>
                <span className="font-semibold text-red-400 text-right">{selectedStartup.typicalFee}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-purple-500/10">
                <span className="text-slate-300">Evaluation Speed:</span>
                <span className="font-semibold text-slate-200 text-right">{selectedStartup.mainsEvalTime}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-purple-500/10">
                <span className="text-slate-300">Feedback Depth:</span>
                <span className="font-medium text-slate-200 text-right max-w-[65%]">{selectedStartup.mainsFeedbackDepth}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-purple-500/10">
                <span className="text-slate-300">Prelims Drill Engine:</span>
                <span className="font-medium text-slate-200 text-right max-w-[65%]">{selectedStartup.prelimsDrillQuality}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-purple-500/10">
                <span className="text-slate-300">Cost per Answer (Credits):</span>
                <span className="font-semibold text-red-400">{selectedStartup.costPerAnswer}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-red-400 uppercase tracking-wider">Startup Shortcomings:</div>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {selectedStartup.keyWeaknesses.map((w, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* UPSC ZONE AI Card */}
          <div className="glass-panel-gold rounded-3xl p-6 sm:p-7 space-y-5 shadow-2xl border-2 border-amber-500/60 relative overflow-hidden hover-lift">
            <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider">
              Specialized Superior Architecture
            </div>
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Comprehensive Civil Services Suite</span>
                <h3 className="text-2xl font-bold text-white font-serif flex items-center gap-2">
                  <span>{He.name}</span>
                  <Award className="w-5 h-5 text-amber-400" />
                </h3>
                <div className="text-xs text-emerald-400 mt-0.5 font-bold">
                  Unlimited Evaluations • Zero Credit Anxiety • UPSC ZONE
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-extrabold text-amber-400 font-serif">
                  99.4 <span className="text-xs text-amber-300">/ 100</span>
                </div>
                <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Rank #1 Overall</div>
              </div>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex justify-between items-start py-1.5 border-b border-amber-500/10">
                <span className="text-slate-200">Transparent Pricing:</span>
                <span className="font-extrabold text-emerald-400 text-right">{He.typicalFee} (All-in-one)</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-amber-500/10">
                <span className="text-slate-200">Evaluation Speed:</span>
                <span className="font-extrabold text-emerald-400 text-right">{He.mainsEvalTime}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-amber-500/10">
                <span className="text-slate-200">Feedback Depth:</span>
                <span className="font-medium text-amber-200 text-right max-w-[65%]">{He.mainsFeedbackDepth}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-amber-500/10">
                <span className="text-slate-200">Prelims Drill Engine:</span>
                <span className="font-medium text-amber-200 text-right max-w-[65%]">{He.prelimsDrillQuality}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-amber-500/10">
                <span className="text-slate-200">Answer Limit:</span>
                <span className="font-extrabold text-emerald-400">Unlimited (₹0 extra cost)</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Unmatched Advantages:</div>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {He.keyStrengths.map((str, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-amber-500/20 text-center">
              <a
                href="https://upsczone.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all hover:scale-105"
              >
                <span>Join Official Test Series on UPSC ZONE</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
