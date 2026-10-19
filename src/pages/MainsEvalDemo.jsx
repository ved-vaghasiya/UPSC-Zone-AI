import React, { useState } from 'react';
import { FileCheck, BookOpen, Sparkles, Clock } from 'lucide-react';
import { benchmarkData } from '../utils/navigation';
import { RealDataGuarantee } from '../components/RealDataGuarantee';

export const MainsEvalDemo = () => {
  const [evaluatorTab, setEvaluatorTab] = useState('upsc-zone');
  const { Ye } = benchmarkData;
  const { question, upscZoneAiEvaluation, competitorFeedback } = Ye;

  return (
    <div className="space-y-10 reveal-on-scroll is-visible">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <FileCheck className="w-3.5 h-3.5" />
          <span>Section 6 • Live Mains Evaluation Quality Audit</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight">
          Real Mains Answer Evaluation:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
            The Quality Disparity
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          See exactly how a real student's GS-3 Mains answer is evaluated by <strong>UPSC ZONE AI</strong> versus traditional coaching red-pen scribbles, generic ChatGPT praise, and startup prompt wrappers.
        </p>
      </div>

      <RealDataGuarantee compact={true} />

      {/* Official UPSC Question Box */}
      <div className="glass-panel-2026 border border-amber-500/40 rounded-3xl p-6 sm:p-7 space-y-3 hover-lift shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            <span>Official UPSC GS-3 Question</span>
          </span>
          <span className="text-xs bg-slate-950/80 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full font-bold">
            15 Marks • 250 Words
          </span>
        </div>
        <p className="text-base sm:text-lg font-serif font-semibold text-white leading-relaxed">
          "{question}"
        </p>
      </div>

      {/* Evaluator Selector Tabs */}
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setEvaluatorTab('upsc-zone')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              evaluatorTab === 'upsc-zone'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-lg shadow-amber-500/25 scale-[1.02]'
                : 'glass-panel-2026 border border-slate-700/60 text-slate-200 hover:text-white hover:border-amber-500/40'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>UPSC ZONE AI (15 Seconds)</span>
            <span className="text-[10px] bg-slate-950 text-amber-300 px-2 py-0.5 rounded-full font-bold">Winner</span>
          </button>

          <button
            onClick={() => setEvaluatorTab('traditional')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              evaluatorTab === 'traditional'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white font-bold shadow-lg shadow-red-500/25'
                : 'glass-panel-2026 border border-slate-700/60 text-slate-200 hover:text-white hover:border-red-500/40'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Delhi Coaching (16 Days Wait)</span>
          </button>

          <button
            onClick={() => setEvaluatorTab('generic')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              evaluatorTab === 'generic'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold shadow-lg shadow-blue-500/25'
                : 'glass-panel-2026 border border-slate-700/60 text-slate-200 hover:text-white hover:border-blue-500/40'
            }`}
          >
            <span>ChatGPT-4o (Generic Praise)</span>
          </button>

          <button
            onClick={() => setEvaluatorTab('startup')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              evaluatorTab === 'startup'
                ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold shadow-lg shadow-purple-500/25'
                : 'glass-panel-2026 border border-slate-700/60 text-slate-200 hover:text-white hover:border-purple-500/40'
            }`}
          >
            <span>AI Startups (Prompt Wrapper)</span>
          </button>
        </div>

        {/* Tab 1: UPSC ZONE AI */}
        {evaluatorTab === 'upsc-zone' && (
          <div className="glass-panel-gold border-2 border-amber-500/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl hover-lift bg-grid-pattern relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-amber-500/20">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  UPSC ZONE AI Micro-Scoring Engine
                </span>
                <h3 className="text-2xl font-bold text-white font-serif flex items-center gap-2 mt-1">
                  <span>Score Awarded: {upscZoneAiEvaluation.totalMarksAwarded}</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {upscZoneAiEvaluation.percentile}
                  </span>
                </h3>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-xs text-slate-300">Turnaround Time:</div>
                <div className="text-sm font-bold text-emerald-400">⚡ 12.4 Seconds</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                10-Point UPSC Rubric Component Scoring:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {upscZoneAiEvaluation.breakdown.map((item, idx) => (
                  <div key={idx} className="glass-panel-2026 border border-amber-500/20 rounded-2xl p-4 space-y-1.5 hover-lift">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white text-xs">{item.component}</span>
                      <span className="text-xs font-bold text-amber-400 font-mono">{item.score}</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed font-normal">{item.feedback}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Missing High-Scoring UPSC Keywords Suggested:
              </div>
              <div className="flex flex-wrap gap-2">
                {upscZoneAiEvaluation.recommendedKeywords.map((kw, idx) => (
                  <span key={idx} className="text-xs bg-amber-500/15 border border-amber-500/30 text-amber-300 px-3 py-1 rounded-xl font-medium">
                    + {kw}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel-2026 border border-slate-700/60 rounded-2xl p-5 space-y-2">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Recommended 250-Word Model Answer Flow:
              </div>
              <p className="text-xs text-slate-200 font-mono leading-relaxed whitespace-pre-line">
                {upscZoneAiEvaluation.modelAnswerStructure}
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Traditional Coaching */}
        {evaluatorTab === 'traditional' && (
          <div className="glass-panel-danger border border-red-500/35 rounded-3xl p-6 sm:p-8 space-y-5 hover-lift shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-red-500/20">
              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Traditional Coaching Feedback</span>
                <h3 className="text-xl font-bold text-white font-serif mt-1">Vajiram / Vision Offline Copy Return</h3>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-300">Returned After:</div>
                <div className="text-sm font-bold text-red-400">16 Business Days</div>
              </div>
            </div>

            <div className="bg-slate-950/80 p-6 rounded-2xl border border-red-500/25 font-serif text-slate-200 text-sm leading-relaxed space-y-3">
              <div className="text-xs font-sans text-red-400 font-bold uppercase">Evaluator Red Pen Scribble:</div>
              <p className="italic text-slate-100">"{competitorFeedback.traditionalCoaching}"</p>
            </div>

            <div className="text-xs text-red-400 space-y-1">
              <p className="font-semibold text-red-300">Why this fails aspirants:</p>
              <ul className="list-disc list-inside text-slate-200 space-y-1">
                <li>Zero explanation of why 5/15 was awarded instead of 8/15.</li>
                <li>No committee, policy scheme, or factual suggestions provided.</li>
                <li>No diagram recommendations.</li>
                <li>16 days delay means the student cannot remember what they wrote.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 3: Generic AI */}
        {evaluatorTab === 'generic' && (
          <div className="glass-panel-blue border border-blue-500/35 rounded-3xl p-6 sm:p-8 space-y-5 hover-lift shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-blue-500/20">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Generic Silicon Valley LLM</span>
                <h3 className="text-xl font-bold text-white font-serif mt-1">ChatGPT-4o General Output</h3>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-300">Turnaround:</div>
                <div className="text-sm font-bold text-blue-400">4 Seconds</div>
              </div>
            </div>

            <div className="bg-slate-950/80 p-6 rounded-2xl border border-blue-500/25 text-slate-200 text-sm leading-relaxed space-y-3">
              <div className="text-xs text-blue-400 font-bold uppercase">Chatbot Response:</div>
              <p className="text-slate-100">"{competitorFeedback.genericAi}"</p>
            </div>

            <div className="text-xs text-blue-300 space-y-1">
              <p className="font-semibold text-blue-200">Why this misleads aspirants:</p>
              <ul className="list-disc list-inside text-slate-200 space-y-1">
                <li>False praise gives aspirants false confidence before actual UPSC Mains.</li>
                <li>Uses generic 8/10 score instead of official 15-mark GS scale.</li>
                <li>Zero understanding of India's SIGHT programme or National Green Hydrogen Mission.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 4: AI Startups */}
        {evaluatorTab === 'startup' && (
          <div className="glass-panel-purple border border-purple-500/35 rounded-3xl p-6 sm:p-8 space-y-5 hover-lift shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-purple-500/20">
              <div>
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">AI Edtech Startup</span>
                <h3 className="text-xl font-bold text-white font-serif mt-1">SuperKalam / SudoLearn Output</h3>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-300">Turnaround:</div>
                <div className="text-sm font-bold text-purple-400">55 Seconds (Queued)</div>
              </div>
            </div>

            <div className="bg-slate-950/80 p-6 rounded-2xl border border-purple-500/25 text-slate-200 text-sm leading-relaxed space-y-3">
              <div className="text-xs text-purple-400 font-bold uppercase">Basic Bot Evaluation:</div>
              <p className="text-slate-100">"{competitorFeedback.aiStartups}"</p>
            </div>

            <div className="text-xs text-purple-300 space-y-1">
              <p className="font-semibold text-purple-200">Limitations:</p>
              <ul className="list-disc list-inside text-slate-200 space-y-1">
                <li>Deducts 1 evaluation credit from a tight monthly quota.</li>
                <li>Generic 3-bullet advice without committee or case study depth.</li>
                <li>No line-by-line margin feedback on handwritten copies.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
