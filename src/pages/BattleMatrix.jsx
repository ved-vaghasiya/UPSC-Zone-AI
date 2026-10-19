import React, { useState } from 'react';
import { Swords, Award, CheckCircle2, XCircle } from 'lucide-react';
import { benchmarkData } from '../utils/navigation';
import { RealDataGuarantee } from '../components/RealDataGuarantee';

export const BattleMatrix = () => {
  const { He, Ue, We, Ge } = benchmarkData;
  const allOpponents = [...Ue, ...We, ...Ge];
  const [selectedOpponentId, setSelectedOpponentId] = useState(allOpponents[0].id);
  const [dimensionFilter, setDimensionFilter] = useState('all');

  const opponent = allOpponents.find((c) => c.id === selectedOpponentId) || allOpponents[0];

  const dimensions = [
    { id: 'all', label: 'All Dimensions' },
    { id: 'mains', label: 'Mains Evaluation Speed & Depth' },
    { id: 'prelims', label: 'Prelims PYQs & Traps' },
    { id: 'mentor', label: '24/7 IAS Mentorship' },
    { id: 'ca', label: 'Daily Current Affairs & PIB' },
    { id: 'pricing', label: 'Annual Pricing & Value' }
  ];

  return (
    <div className="space-y-10 reveal-on-scroll is-visible">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Swords className="w-3.5 h-3.5" />
          <span>Section 5 • Interactive Head-to-Head Arena</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight">
          Interactive Battle Matrix:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
            UPSC ZONE AI vs Anyone
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Select any coaching institute, generic chatbot, or AI startup from the list below to see the exact head-to-head empirical breakdown. Proving why UPSC ZONE AI is superior in every parameter.
        </p>
      </div>

      <RealDataGuarantee compact={true} />

      {/* Opponent Selection Arena */}
      <div className="glass-panel-2026 rounded-3xl p-6 sm:p-8 space-y-5 hover-lift border border-slate-700/60 shadow-2xl relative overflow-hidden bg-grid-pattern">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <label className="text-sm font-semibold text-white flex items-center gap-2">
            <span>Select Opponent to Challenge:</span>
          </label>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Showing verified metrics for:</span>
            <span className="font-bold text-amber-400">{opponent.name}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Traditional Offline Delhi Coachings:
            </div>
            <div className="flex flex-wrap gap-2">
              {Ue.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedOpponentId(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedOpponentId === item.id
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                      : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Generic Silicon Valley AI Apps:
            </div>
            <div className="flex flex-wrap gap-2">
              {We.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedOpponentId(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedOpponentId === item.id
                      ? 'bg-blue-500 text-white font-bold shadow-md shadow-blue-500/20'
                      : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              New AI UPSC Startups:
            </div>
            <div className="flex flex-wrap gap-2">
              {Ge.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedOpponentId(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedOpponentId === item.id
                      ? 'bg-purple-500 text-white font-bold shadow-md shadow-purple-500/20'
                      : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dimension Filter Bar */}
        <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
          {dimensions.map((dim) => (
            <button
              key={dim.id}
              onClick={() => setDimensionFilter(dim.id)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                dimensionFilter === dim.id
                  ? 'bg-slate-800 text-amber-400 border border-amber-500/40 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {dim.label}
            </button>
          ))}
        </div>
      </div>

      {/* Side-by-Side Faceoff */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Challenger Card */}
        <div className="glass-panel-danger rounded-3xl p-6 sm:p-7 space-y-6 hover-lift border border-red-500/40 shadow-xl">
          <div className="flex items-center justify-between border-b border-red-500/20 pb-4">
            <div>
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Challenger</span>
              <h3 className="text-2xl font-bold text-white font-serif">{opponent.name}</h3>
              <p className="text-xs text-slate-300 mt-0.5">{opponent.locationOrType}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-extrabold text-white font-serif">
                {opponent.scoreOutOf100} <span className="text-xs text-slate-300">/ 100</span>
              </div>
              <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider">Audited Rating</span>
            </div>
          </div>

          <div className="space-y-4 text-xs">
            {(dimensionFilter === 'all' || dimensionFilter === 'mains') && (
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-red-500/20 space-y-1">
                <div className="text-slate-300 font-medium">Mains Answer Copy Evaluation Speed:</div>
                <div className="text-sm font-bold text-red-400">{opponent.mainsEvalTime}</div>
                <div className="text-slate-200 text-[11px] leading-relaxed pt-1">{opponent.mainsFeedbackDepth}</div>
              </div>
            )}

            {(dimensionFilter === 'all' || dimensionFilter === 'prelims') && (
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-red-500/20 space-y-1">
                <div className="text-slate-300 font-medium">Prelims Question Engine &amp; Traps:</div>
                <div className="text-slate-200 text-[11px] leading-relaxed">{opponent.prelimsDrillQuality}</div>
              </div>
            )}

            {(dimensionFilter === 'all' || dimensionFilter === 'mentor') && (
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-red-500/20 space-y-1">
                <div className="text-slate-300 font-medium">Personal Mentorship Availability:</div>
                <div className="text-slate-200 text-[11px] leading-relaxed">{opponent.mentorAvailability}</div>
              </div>
            )}

            {(dimensionFilter === 'all' || dimensionFilter === 'ca') && (
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-red-500/20 space-y-1">
                <div className="text-slate-300 font-medium">Current Affairs &amp; PIB Grounding:</div>
                <div className="text-slate-200 text-[11px] leading-relaxed">{opponent.currentAffairsIntegration}</div>
              </div>
            )}

            {(dimensionFilter === 'all' || dimensionFilter === 'pricing') && (
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-red-500/20 space-y-1">
                <div className="text-slate-300 font-medium">Total Cost Commitment:</div>
                <div className="text-sm font-bold text-red-400">{opponent.typicalFee}</div>
                <div className="text-slate-300 text-[11px]">Cost per evaluated answer: {opponent.costPerAnswer}</div>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-slate-800">
            <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">Primary Drawbacks:</div>
            <ul className="space-y-1.5 text-xs text-slate-200">
              {opponent.keyWeaknesses.map((w, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* UPSC ZONE AI Victor Card */}
        <div className="glass-panel-gold rounded-3xl p-6 sm:p-7 space-y-6 shadow-2xl border-2 border-amber-500/60 relative overflow-hidden hover-lift">
          <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider">
            Clear Victor
          </div>
          <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Undisputed Champion</span>
              <h3 className="text-2xl font-bold text-white font-serif flex items-center gap-2">
                <span>UPSC ZONE AI</span>
                <Award className="w-5 h-5 text-amber-400" />
              </h3>
              <p className="text-xs text-emerald-400 mt-0.5">Continuous 24/7 Civil Services Intelligence</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-extrabold text-amber-400 font-serif">
                99.4 <span className="text-xs text-amber-300">/ 100</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">#1 Everytime Everywhere</span>
            </div>
          </div>

          <div className="space-y-4 text-xs">
            {(dimensionFilter === 'all' || dimensionFilter === 'mains') && (
              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-amber-500/20 space-y-1">
                <div className="text-amber-400 font-medium">Mains Answer Copy Evaluation Speed:</div>
                <div className="text-sm font-bold text-emerald-400">&lt; 15 Seconds (Instant 24x7)</div>
                <div className="text-amber-100 text-[11px] leading-relaxed pt-1">
                  Comprehensive 10-point UPSC rubric: Intro hook, Multi-dimensional headers, Flowchart recommendations, Keywords, and Marks out of 10/15/20.
                </div>
              </div>
            )}

            {(dimensionFilter === 'all' || dimensionFilter === 'prelims') && (
              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-amber-500/20 space-y-1">
                <div className="text-amber-400 font-medium">Prelims Question Engine &amp; Traps:</div>
                <div className="text-amber-100 text-[11px] leading-relaxed">
                  30 Years (1995-2024) of official UPSC Prelims questions with statement pair logic, extreme keyword traps, and official UPSC answer keys.
                </div>
              </div>
            )}

            {(dimensionFilter === 'all' || dimensionFilter === 'mentor') && (
              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-amber-500/20 space-y-1">
                <div className="text-amber-400 font-medium">Personal Mentorship Availability:</div>
                <div className="text-amber-100 text-[11px] leading-relaxed">
                  24/7 Personal IAS Mentor. Available at 2 AM or during library study breaks. Instant personalized revision schedules and weakness remediation.
                </div>
              </div>
            )}

            {(dimensionFilter === 'all' || dimensionFilter === 'ca') && (
              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-amber-500/20 space-y-1">
                <div className="text-amber-400 font-medium">Current Affairs &amp; PIB Grounding:</div>
                <div className="text-amber-100 text-[11px] leading-relaxed">
                  Daily automated extraction from PIB, The Hindu, Indian Express, PRS, and Sansad TV. Micro-tagged to GS 1, 2, 3, and 4 syllabus headings.
                </div>
              </div>
            )}

            {(dimensionFilter === 'all' || dimensionFilter === 'pricing') && (
              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-amber-500/20 space-y-1">
                <div className="text-amber-400 font-medium">Total Cost Commitment:</div>
                <div className="text-sm font-bold text-emerald-400">₹1,999 - ₹4,999 / year (Flat)</div>
                <div className="text-emerald-400 text-[11px]">Unlimited answer copy evaluations at ₹0 extra cost.</div>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-amber-500/20">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Why UPSC ZONE AI Wins Decisively:</div>
            <ul className="space-y-1.5 text-xs text-slate-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Zero wait time: iterate 5 answers daily instead of waiting 15 days</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Saves up to ₹3,00,000+ compared to offline Delhi coaching</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Strict civil services grounding: no generic ChatGPT sycophancy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
