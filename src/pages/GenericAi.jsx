import React, { useState } from 'react';
import {
  Cpu,
  AlertTriangle,
  FileText,
  DollarSign,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Award
} from 'lucide-react';
import { benchmarkData } from '../utils/navigation';
import { RealDataGuarantee } from '../components/RealDataGuarantee';

export const GenericAi = () => {
  const { He, We } = benchmarkData;
  const [selectedId, setSelectedId] = useState(We[0].id);
  const selectedAi = We.find((c) => c.id === selectedId) || We[0];

  return (
    <div className="space-y-10 reveal-on-scroll is-visible">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
          <Cpu className="w-3.5 h-3.5" />
          <span>Section 2 • Generic AI Chatbots & Silicon Valley LLMs</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight">
          UPSC ZONE AI vs{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-300">
            Generic AI (ChatGPT & Claude)
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Why relying on <strong>ChatGPT Plus ($20/mo), Claude 3.5, or Perplexity Pro</strong> for civil services preparation is dangerous. Generic AI lacks UPSC syllabus grounding, hallucinates Indian constitutional articles, and gives misleading praise.
        </p>
      </div>

      <RealDataGuarantee compact={true} />

      {/* 6 Reasons */}
      <div className="glass-panel-2026 rounded-3xl p-6 sm:p-8 space-y-6 border border-blue-500/30 shadow-2xl relative overflow-hidden bg-grid-pattern">
        <h2 className="text-xl sm:text-2xl font-bold font-serif text-white flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <span>Why Generic Chatbots Destroy UPSC Mains Marks</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="glass-panel-blue rounded-2xl p-5 space-y-2.5 hover-lift border border-blue-500/30">
            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              <span>1. "Sycophantic Flattery" Bias</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              ChatGPT is trained to please users. Even if an aspirant writes a completely unstructured, factually deficient answer, ChatGPT responds: <em>"Great job! Your answer is very well written!"</em>{' '}
              <strong className="text-amber-300">UPSC ZONE AI acts as a ruthless UPSC examiner</strong>, pointing out missing dimensions, weak hooks, and awarding realistic marks (e.g. 4/10).
            </p>
          </div>

          <div className="glass-panel-blue rounded-2xl p-5 space-y-2.5 hover-lift border border-blue-500/30">
            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              <span>2. Zero UPSC Marking Rubric</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              Generic LLMs don't know the exact demand of GS 1, 2, 3, and 4. They write broad essays rather than structured UPSC formats (Intro definition -&gt; Categorized Subheadings -&gt; Diagram suggestion -&gt; Balanced Way Forward).
            </p>
          </div>

          <div className="glass-panel-blue rounded-2xl p-5 space-y-2.5 hover-lift border border-blue-500/30">
            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              <span>3. Dangerous Legal Hallucinations</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              Generic models frequently invent non-existent Constitutional Articles, misquote Supreme Court case laws, and misattribute committee reports (e.g., confusing Sarkaria Commission with Punchhi Commission).{' '}
              <strong className="text-amber-300">UPSC ZONE AI is strictly grounded on official Indian legal documents.</strong>
            </p>
          </div>

          <div className="glass-panel-blue rounded-2xl p-5 space-y-2.5 hover-lift border border-blue-500/30">
            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <DollarSign className="w-4 h-4" />
              <span>4. Expensive $20/Month Cost Trap</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              ChatGPT Plus or Claude Pro costs $20/month plus GST (~₹21,000/year). And after paying ₹21,000, you still have no UPSC test series, no PYQs, and no Hindi medium support!{' '}
              <strong className="text-emerald-400">UPSC ZONE AI gives you the entire tailored suite for a fraction of that.</strong>
            </p>
          </div>

          <div className="glass-panel-blue rounded-2xl p-5 space-y-2.5 hover-lift border border-blue-500/30">
            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              <span>5. Cannot Read Handwritten Papers</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              Generic OCR garbles cursive Indian student handwriting, confuses side margin notes, and cannot evaluate handwritten flowcharts or India maps.{' '}
              <strong className="text-amber-300">UPSC ZONE AI features fine-tuned handwriting OCR built for UPSC answer sheets.</strong>
            </p>
          </div>

          <div className="glass-panel-blue rounded-2xl p-5 space-y-2.5 hover-lift border border-blue-500/30">
            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>6. No 1995-2024 Prelims Engine</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              Generic models don't maintain a systematic repository of 30-year UPSC Prelims questions with statement-elimination logic.{' '}
              <strong className="text-emerald-400">UPSC ZONE AI has 30 years of official Prelims PYQs tagged with trap diagnostics.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Selector & Head-to-Head */}
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {We.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                selectedId === item.id
                  ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/25 scale-[1.02]'
                  : 'glass-panel-2026 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>{item.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${selectedId === item.id ? 'bg-blue-950 text-white border border-blue-300/40' : 'bg-slate-800 text-slate-300'}`}>
                Score: {item.scoreOutOf100}/100
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Selected Generic Card */}
          <div className="glass-panel-blue rounded-3xl p-6 sm:p-7 space-y-5 hover-lift border border-blue-500/40 shadow-xl">
            <div className="flex items-center justify-between border-b border-blue-500/20 pb-4">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Generic Silicon Valley AI</span>
                <h3 className="text-2xl font-bold text-white font-serif">{selectedAi.name}</h3>
                <div className="text-xs text-slate-300 mt-0.5">{selectedAi.locationOrType}</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white font-serif">
                  {selectedAi.scoreOutOf100} <span className="text-xs text-slate-300 font-medium">/ 100</span>
                </div>
                <div className="text-[10px] text-red-400 font-bold">Unsuitable for UPSC</div>
              </div>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex justify-between items-start py-1.5 border-b border-blue-500/10">
                <span className="text-slate-300">Subscription Cost:</span>
                <span className="font-semibold text-red-400 text-right">{selectedAi.typicalFee}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-blue-500/10">
                <span className="text-slate-300">Mains Evaluation Quality:</span>
                <span className="font-medium text-slate-200 text-right max-w-[65%]">{selectedAi.mainsFeedbackDepth}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-blue-500/10">
                <span className="text-slate-300">Hallucination Risk:</span>
                <span className="font-semibold text-red-400 text-right max-w-[65%]">{selectedAi.hallucinationRisk}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-blue-500/10">
                <span className="text-slate-300">Prelims PYQ Capabilities:</span>
                <span className="font-medium text-slate-200 text-right max-w-[65%]">{selectedAi.prelimsDrillQuality}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-red-400 uppercase tracking-wider">Critical Weaknesses for UPSC:</div>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {selectedAi.keyWeaknesses.map((w, idx) => (
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
              UPSC Specialist
            </div>
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Trained On UPSC Pedagogy</span>
                <h3 className="text-2xl font-bold text-white font-serif flex items-center gap-2">
                  <span>{He.name}</span>
                  <Award className="w-5 h-5 text-amber-400" />
                </h3>
                <div className="text-xs text-emerald-400 mt-0.5 font-bold">
                  Zero Hallucination • UPSC Standard Vocabulary
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-extrabold text-amber-400 font-serif">
                  99.4 <span className="text-xs text-amber-300">/ 100</span>
                </div>
                <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Perfect 10-Rubric Match</div>
              </div>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex justify-between items-start py-1.5 border-b border-amber-500/10">
                <span className="text-slate-200">Annual Pricing:</span>
                <span className="font-extrabold text-emerald-400 text-right">{He.typicalFee} (Includes All Modules)</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-amber-500/10">
                <span className="text-slate-200">Mains Evaluation Quality:</span>
                <span className="font-medium text-amber-200 text-right max-w-[65%]">{He.mainsFeedbackDepth}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-amber-500/10">
                <span className="text-slate-200">Hallucination Risk:</span>
                <span className="font-extrabold text-emerald-400 text-right">{He.hallucinationRisk}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-amber-500/10">
                <span className="text-slate-200">Prelims PYQ Capabilities:</span>
                <span className="font-medium text-amber-200 text-right max-w-[65%]">{He.prelimsDrillQuality}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Civil Services Specialization:</div>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {He.keyStrengths.map((str, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
