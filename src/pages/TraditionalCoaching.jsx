import React, { useState } from 'react';
import {
  Building,
  AlertTriangle,
  Clock,
  Users,
  DollarSign,
  Calendar,
  HelpCircle,
  CheckCircle2,
  MapPin,
  XCircle,
  Award
} from 'lucide-react';
import { benchmarkData } from '../utils/navigation';
import { RealDataGuarantee } from '../components/RealDataGuarantee';

export const TraditionalCoaching = () => {
  const { He, Ue } = benchmarkData;
  const [selectedId, setSelectedId] = useState(Ue[0].id);
  const selectedCoaching = Ue.find((c) => c.id === selectedId) || Ue[0];

  return (
    <div className="space-y-10 reveal-on-scroll is-visible">
      {/* Page Title & Intro */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Building className="w-3.5 h-3.5" />
          <span>Section 1 • Traditional Offline & Hybrid Coachings</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight">
          UPSC ZONE AI vs{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
            Traditional Delhi Coachings
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Comparing UPSC ZONE AI against Old Rajinder Nagar and Mukherjee Nagar powerhouses like{' '}
          <strong>Vajiram & Ravi, Vision IAS, Drishti IAS, ForumIAS, and Next IAS</strong>. Audited on actual student fee receipts, evaluation speed, batch sizes, and 24/7 accessibility.
        </p>
      </div>

      <RealDataGuarantee compact={true} />

      {/* 6 Structural Bottlenecks */}
      <div className="glass-panel-2026 rounded-3xl p-6 sm:p-8 space-y-6 border border-red-500/30 shadow-2xl relative overflow-hidden bg-grid-pattern">
        <h2 className="text-xl sm:text-2xl font-bold font-serif text-white flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <span>The 6 Structural Bottlenecks of Traditional Delhi Coachings</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="glass-panel-danger rounded-2xl p-5 space-y-2.5 hover-lift border border-red-500/30">
            <div className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>1. The 14-20 Day Evaluation Delay</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              When you submit a 20-question Mains test in Delhi, you wait 2 to 3 weeks to get your copy back. By then, the question nuances are forgotten.{' '}
              <strong className="text-amber-300">UPSC ZONE AI returns in &lt; 15 seconds</strong>, allowing continuous daily improvement loops.
            </p>
          </div>

          <div className="glass-panel-danger rounded-2xl p-5 space-y-2.5 hover-lift border border-red-500/30">
            <div className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              <span>2. 450+ Student Lecture Halls</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              In ORN and Karol Bagh, 400 to 500 students sit elbow-to-elbow in basement classrooms. It is practically impossible to ask personalized doubts.{' '}
              <strong className="text-amber-300">UPSC ZONE AI provides a private 1-on-1 IAS mentor</strong> dedicated exclusively to you.
            </p>
          </div>

          <div className="glass-panel-danger rounded-2xl p-5 space-y-2.5 hover-lift border border-red-500/30">
            <div className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
              <DollarSign className="w-4 h-4" />
              <span>3. The ₹4.5 Lakh+ Cost Trap</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              Foundation fees (₹1.85L) + Optional (₹55k) + Test Series (₹30k) + Delhi PG rent & food (₹2.4L/year) easily burns through ₹4,50,000 to ₹5,20,000.{' '}
              <strong className="text-emerald-400">UPSC ZONE AI provides superior tech for only ₹4,999/year</strong>.
            </p>
          </div>

          <div className="glass-panel-danger rounded-2xl p-5 space-y-2.5 hover-lift border border-red-500/30">
            <div className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>4. Bulky Delayed Compilations</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              Monthly booklets (150-200 pages) arrive 30-45 days late, causing massive revision backlogs.{' '}
              <strong className="text-amber-300">UPSC ZONE AI synthesizes PIB, The Hindu, and Sansad TV daily</strong> with micro-topic GS tagging.
            </p>
          </div>

          <div className="glass-panel-danger rounded-2xl p-5 space-y-2.5 hover-lift border border-red-500/30">
            <div className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              <span>5. Rigid One-Size-Fits-All Pace</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              If you fall sick or have exams, missed lectures are gone or limited to glitchy portal replays.{' '}
              <strong className="text-amber-300">UPSC ZONE AI adapts dynamically</strong> to your schedule, whether you study at 5 AM or midnight.
            </p>
          </div>

          <div className="glass-panel-danger rounded-2xl p-5 space-y-2.5 hover-lift border border-red-500/30">
            <div className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>6. Junior Evaluator Inconsistency</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              Coaching copy checking is outsourced to freelance junior evaluators paid ₹60-₹90 per copy, resulting in 2-line subjective remarks.{' '}
              <strong className="text-emerald-400">UPSC ZONE AI executes an uncompromising 10-point rubric</strong> every single time.
            </p>
          </div>
        </div>
      </div>

      {/* Head-to-Head Section */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
            Select a Traditional Coaching to Compare Head-to-Head
          </h2>
          <p className="text-xs text-slate-300">
            Click any traditional institute below to see verified institutional metrics side-by-side with UPSC ZONE AI.
          </p>
        </div>

        {/* Buttons Selector */}
        <div className="flex flex-wrap gap-2">
          {Ue.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                selectedId === item.id
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20 scale-[1.02]'
                  : 'glass-panel-2026 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>{item.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${selectedId === item.id ? 'bg-slate-950 text-amber-300' : 'bg-slate-800 text-slate-300'}`}>
                Score: {item.scoreOutOf100}/100
              </span>
            </button>
          ))}
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Competitor Card */}
          <div className="glass-panel-danger rounded-3xl p-6 sm:p-7 space-y-5 hover-lift border border-red-500/40 shadow-xl">
            <div className="flex items-center justify-between border-b border-red-500/20 pb-4">
              <div>
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Traditional Coaching</span>
                <h3 className="text-2xl font-bold text-white font-serif">{selectedCoaching.name}</h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{selectedCoaching.locationOrType}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white font-serif">
                  {selectedCoaching.scoreOutOf100} <span className="text-xs text-slate-300 font-medium">/ 100</span>
                </div>
                <div className="text-[10px] text-red-400 font-bold">Ranked #2 or below</div>
              </div>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex justify-between items-start py-1.5 border-b border-red-500/10">
                <span className="text-slate-300">Typical Foundation Fee:</span>
                <span className="font-semibold text-red-400 text-right">{selectedCoaching.typicalFee}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-red-500/10">
                <span className="text-slate-300">Mains Copy Evaluation Speed:</span>
                <span className="font-semibold text-red-400 text-right">{selectedCoaching.mainsEvalTime}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-red-500/10">
                <span className="text-slate-300">Feedback Quality:</span>
                <span className="font-medium text-slate-200 text-right max-w-[60%]">{selectedCoaching.mainsFeedbackDepth}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-red-500/10">
                <span className="text-slate-300">Personal Mentorship:</span>
                <span className="font-medium text-slate-200 text-right max-w-[60%]">{selectedCoaching.mentorAvailability}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-red-500/10">
                <span className="text-slate-300">Cost per Evaluated Answer:</span>
                <span className="font-semibold text-red-400">{selectedCoaching.costPerAnswer}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-red-400 uppercase tracking-wider">Documented Student Disadvantages:</div>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {selectedCoaching.keyWeaknesses.map((w, idx) => (
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
              Ultimate Winner
            </div>
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">AI Civil Services Standard</span>
                <h3 className="text-2xl font-bold text-white font-serif flex items-center gap-2">
                  <span>{He.name}</span>
                  <Award className="w-5 h-5 text-amber-400" />
                </h3>
                <div className="text-xs text-emerald-400 mt-0.5 font-bold">
                  Autonomous, 24x7 IAS Preparation Engine
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-extrabold text-amber-400 font-serif">
                  99.4 <span className="text-xs text-amber-300">/ 100</span>
                </div>
                <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Rank #1 Everywhere</div>
              </div>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex justify-between items-start py-1.5 border-b border-amber-500/10">
                <span className="text-slate-200">All-Inclusive Fee:</span>
                <span className="font-extrabold text-emerald-400 text-right">{He.typicalFee}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-amber-500/10">
                <span className="text-slate-200">Mains Copy Evaluation Speed:</span>
                <span className="font-extrabold text-emerald-400 text-right">{He.mainsEvalTime}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-amber-500/10">
                <span className="text-slate-200">Feedback Quality:</span>
                <span className="font-medium text-amber-200 text-right max-w-[65%]">{He.mainsFeedbackDepth}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-amber-500/10">
                <span className="text-slate-200">Personal Mentorship:</span>
                <span className="font-medium text-amber-200 text-right max-w-[65%]">{He.mentorAvailability}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-amber-500/10">
                <span className="text-slate-200">Cost per Evaluated Answer:</span>
                <span className="font-extrabold text-emerald-400">{He.costPerAnswer}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Why UPSC ZONE AI Dominates:</div>
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

      {/* Bottom Summary Callout */}
      <div className="glass-panel-2026 rounded-3xl p-8 text-center space-y-3.5 border border-amber-500/30 hover-lift shadow-xl">
        <h3 className="text-lg sm:text-xl font-bold font-serif text-white">
          The Bottom Line: Don't Spend ₹2.5 Lakhs to Wait 2 Weeks for 1 Answer Copy
        </h3>
        <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
          UPSC ZONE AI delivers faster turnaround, objective 10-point rubric feedback, 24/7 personal mentorship, and saves you over ₹3,00,000 every single year.
        </p>
      </div>
    </div>
  );
};
