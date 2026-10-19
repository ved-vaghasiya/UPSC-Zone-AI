import React, { useState } from 'react';
import { Calculator, Home, BookOpen, Sparkles } from 'lucide-react';
import { RealDataGuarantee } from '../components/RealDataGuarantee';

export const SavingsCalculator = () => {
  const [location, setLocation] = useState('delhi');
  const [answersPerWeek, setAnswersPerWeek] = useState(10);
  const [includeGs, setIncludeGs] = useState(true);
  const [includeTestSeries, setIncludeTestSeries] = useState(true);
  const [includeOptional, setIncludeOptional] = useState(true);

  // Calculate living expenses
  const livingCost = (() => {
    switch (location) {
      case 'delhi':
        return 240000;
      case 'state-capital':
        return 120000;
      case 'home':
        return 0;
      default:
        return 240000;
    }
  })();

  // Calculate tuition packages
  const coachingCost = (() => {
    let cost = 0;
    if (includeGs) cost += 175000;
    if (includeOptional) cost += 50000;
    if (includeTestSeries) cost += 30000;
    return cost;
  })();

  const totalTraditional = livingCost + coachingCost;
  const upscZoneCost = 4999;
  const totalSavings = Math.max(0, totalTraditional - upscZoneCost);
  const savingsPercent = Math.round((totalSavings / (totalTraditional || 1)) * 100);
  const yearlyAnswers = answersPerWeek * 52;
  const daysWaitingSaved = Math.round((14 / 20) * yearlyAnswers);

  return (
    <div className="space-y-10 reveal-on-scroll is-visible">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <Calculator className="w-3.5 h-3.5" />
          <span>Section 7 • Aspirant Budget &amp; Productivity Calculator</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight">
          Interactive Aspirant{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">
            Savings &amp; Output Calculator
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Calculate your exact financial savings and prep acceleration. Compare your planned offline coaching &amp; living budget with UPSC ZONE AI's comprehensive digital platform.
        </p>
      </div>

      <RealDataGuarantee compact={true} />

      {/* Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs */}
        <div className="lg:col-span-7 glass-panel-2026 rounded-3xl p-6 sm:p-8 space-y-6 hover-lift border border-slate-700/60 shadow-2xl relative overflow-hidden bg-grid-pattern">
          <h2 className="text-xl font-bold font-serif text-white">Your Preparation Parameters</h2>

          {/* Location Choice */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Home className="w-4 h-4 text-amber-400" />
              <span>Study Location / Residency Model:</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setLocation('delhi')}
                className={`p-3 rounded-xl text-left border transition-all ${
                  location === 'delhi'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-semibold shadow-inner'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-900'
                }`}
              >
                <div className="text-xs font-bold">Delhi (ORN / Karol Bagh)</div>
                <div className="text-[11px] text-slate-400 mt-1">₹20,000/mo rent &amp; mess</div>
              </button>

              <button
                type="button"
                onClick={() => setLocation('state-capital')}
                className={`p-3 rounded-xl text-left border transition-all ${
                  location === 'state-capital'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-semibold shadow-inner'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-900'
                }`}
              >
                <div className="text-xs font-bold">State Hub (Prayagraj / Hyd)</div>
                <div className="text-[11px] text-slate-400 mt-1">₹10,000/mo rent &amp; food</div>
              </button>

              <button
                type="button"
                onClick={() => setLocation('home')}
                className={`p-3 rounded-xl text-left border transition-all ${
                  location === 'home'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-semibold shadow-inner'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-900'
                }`}
              >
                <div className="text-xs font-bold">Study from Home</div>
                <div className="text-[11px] text-slate-400 mt-1">₹0 relocation cost</div>
              </button>
            </div>
          </div>

          {/* Coaching Packages Checkboxes */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Offline Coaching Packages Planned:</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={includeGs}
                    onChange={(e) => setIncludeGs(e.target.checked)}
                    className="w-4 h-4 text-amber-500 rounded focus:ring-amber-500 accent-amber-500"
                  />
                  <span className="text-xs text-slate-200 font-medium">GS Foundation Classroom Course (Vajiram/Vision)</span>
                </div>
                <span className="text-xs font-bold text-red-400">₹1,75,000</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={includeOptional}
                    onChange={(e) => setIncludeOptional(e.target.checked)}
                    className="w-4 h-4 text-amber-500 rounded focus:ring-amber-500 accent-amber-500"
                  />
                  <span className="text-xs text-slate-200 font-medium">Optional Subject Classroom Batch</span>
                </div>
                <span className="text-xs font-bold text-red-400">₹50,000</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={includeTestSeries}
                    onChange={(e) => setIncludeTestSeries(e.target.checked)}
                    className="w-4 h-4 text-amber-500 rounded focus:ring-amber-500 accent-amber-500"
                  />
                  <span className="text-xs text-slate-200 font-medium">Mains Test Series with Evaluation</span>
                </div>
                <span className="text-xs font-bold text-red-400">₹30,000</span>
              </label>
            </div>
          </div>

          {/* Range Slider for Weekly Answers */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-300">Target Mains Answers Written per Week:</span>
              <span className="font-extrabold text-amber-400 text-sm">
                {answersPerWeek} Answers / week ({yearlyAnswers} / year)
              </span>
            </div>
            <input
              type="range"
              min="3"
              max="25"
              step="1"
              value={answersPerWeek}
              onChange={(e) => setAnswersPerWeek(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-950 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-medium">
              <span>3 answers (Casual)</span>
              <span>10 answers (Standard Serious)</span>
              <span>25 answers (Rank Holder Mode)</span>
            </div>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 glass-panel-gold rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-amber-500/60 hover-lift relative overflow-hidden">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Your Financial ROI</span>
                <h3 className="text-xl font-bold font-serif text-white mt-0.5">Annual Budget Audit</h3>
              </div>
              <div className="text-right">
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-black">
                  {savingsPercent}% SAVINGS
                </span>
              </div>
            </div>

            <div className="glass-panel-2026 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-1 shadow-lg">
              <div className="text-xs text-slate-300 uppercase tracking-wider font-semibold">
                Total Money Kept in Your Bank
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 font-serif">
                ₹{totalSavings.toLocaleString('en-IN')}
              </div>
              <div className="text-xs text-emerald-300 font-medium pt-1">
                Saved compared to traditional offline Delhi preparation
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Total Traditional Cost:</span>
                <span className="font-bold text-red-400">₹{totalTraditional.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">UPSC ZONE AI Complete Access:</span>
                <span className="font-bold text-emerald-400">₹{upscZoneCost.toLocaleString('en-IN')} / year</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Mains Answers Evaluated:</span>
                <span className="font-bold text-white">{yearlyAnswers} Answers (Unlimited ₹0)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Waiting Time Saved:</span>
                <span className="font-bold text-amber-400">~{daysWaitingSaved} Days of Copy Waiting</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-slate-300 space-y-2">
            <div className="font-bold text-amber-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>The Smart Aspirant Advantage:</span>
            </div>
            <p className="leading-relaxed">
              With UPSC ZONE AI, you get instant evaluation, 24/7 IAS mentorship, and full GS 1-4 syllabus mastery from the comfort of your study desk without risking your family's hard-earned savings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
