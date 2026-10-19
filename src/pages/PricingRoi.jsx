import React from 'react';
import { DollarSign, ShieldCheck, CheckCircle2, PieChart, TrendingUp } from 'lucide-react';
import { benchmarkData } from '../utils/navigation';
import { RealDataGuarantee } from '../components/RealDataGuarantee';

export const PricingRoi = () => {
  const { Ke } = benchmarkData;

  return (
    <div className="space-y-10 reveal-on-scroll is-visible">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <DollarSign className="w-3.5 h-3.5" />
          <span>Section 4 • Comprehensive Pricing &amp; True Expense Audit</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight">
          Real Pricing &amp; ROI:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">
            The 98% Savings Revolution
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Comparing the full financial commitment of preparing for UPSC Civil Services. From astronomical Delhi offline living expenses to generic subscriptions versus UPSC ZONE AI's democratized all-inclusive pricing.
        </p>
      </div>

      <RealDataGuarantee compact={true} />

      {/* 3 Routes Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel-danger rounded-3xl p-6 sm:p-7 space-y-4 relative hover-lift border border-red-500/30 shadow-xl">
          <div className="text-xs font-bold text-red-400 uppercase tracking-wider">The Delhi Offline Route</div>
          <div className="text-3xl sm:text-4xl font-extrabold text-white font-serif">₹4,80,000+</div>
          <div className="text-xs text-slate-300">Average Annual Investment (Fees + Delhi Living)</div>
          <div className="space-y-2 pt-2 border-t border-red-500/20 text-xs text-slate-200">
            <div className="flex justify-between">
              <span className="text-slate-300">GS Foundation Batch:</span>
              <span className="font-semibold text-white">₹1,75,000 - ₹2,10,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-300">Optional Subject Batch:</span>
              <span className="font-semibold text-white">₹50,000 - ₹60,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-300">Mains Test Series:</span>
              <span className="font-semibold text-white">₹28,000 - ₹35,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-300">ORN Room Rent &amp; Food:</span>
              <span className="font-semibold text-red-400">₹2,40,000 / year</span>
            </div>
          </div>
          <div className="text-[11px] text-red-400 font-semibold pt-2">
            ⚠️ Financial strain on middle-class families with no guarantee of personalized guidance.
          </div>
        </div>

        <div className="glass-panel-blue rounded-3xl p-6 sm:p-7 space-y-4 relative hover-lift border border-blue-500/30 shadow-xl">
          <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">Generic AI + 3rd Party Mocks</div>
          <div className="text-3xl sm:text-4xl font-extrabold text-white font-serif">₹45,000+</div>
          <div className="text-xs text-slate-300">AI Subscriptions + External Coaching Test Series</div>
          <div className="space-y-2 pt-2 border-t border-blue-500/20 text-xs text-slate-200">
            <div className="flex justify-between">
              <span className="text-slate-300">ChatGPT Plus / Claude:</span>
              <span className="font-semibold text-white">₹21,000 / year</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-300">External Test Series:</span>
              <span className="font-semibold text-white">₹24,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-300">Startup Credit Top-ups:</span>
              <span className="font-semibold text-white">₹8,000 - ₹12,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-300">UPSC Syllabus Grounding:</span>
              <span className="font-semibold text-red-400">Missing / Inaccurate</span>
            </div>
          </div>
          <div className="text-[11px] text-slate-300 font-medium pt-2">
            ⚠️ Fragmented tools that require constant switching and still lack civil services pedagogy.
          </div>
        </div>

        <div className="glass-panel-gold rounded-3xl p-6 sm:p-7 space-y-4 relative shadow-2xl border-2 border-amber-500/60 hover-lift">
          <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider">
            Unbeatable Value
          </div>
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">UPSC ZONE AI (Complete Suite)</div>
          <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif">₹4,999</div>
          <div className="text-xs text-amber-200">Flat 1-Year All-Inclusive Access (Zero Hidden Fees)</div>
          <div className="space-y-2 pt-2 border-t border-amber-500/20 text-xs text-slate-200">
            <div className="flex justify-between">
              <span className="text-slate-200">Unlimited Mains 15s Eval:</span>
              <span className="font-bold text-emerald-400">Included (₹0 Extra)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-200">30-Year Prelims PYQ Traps:</span>
              <span className="font-bold text-emerald-400">Included</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-200">24/7 Dedicated IAS Mentor:</span>
              <span className="font-bold text-emerald-400">Included</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-200">Daily PIB / Hindu Synthesis:</span>
              <span className="font-bold text-emerald-400">Included</span>
            </div>
          </div>
          <div className="text-[11px] text-emerald-400 font-bold pt-2 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>Saves over ₹4,75,000 every single year!</span>
          </div>
        </div>
      </div>

      {/* Institutional Fee Table */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Institutional Fee Breakdown: Verified Real Data
            </h2>
            <p className="text-xs text-slate-400">
              Verified from official 2025-2026 fee admission brochures and Delhi rental audits.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Real Receipts Audited</span>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-950 border-b border-slate-800 text-slate-300">
                <th className="py-4 px-4 sm:px-6 font-semibold min-w-[180px]">Institution / Platform</th>
                <th className="py-4 px-4 sm:px-6 font-semibold min-w-[140px]">Foundation Fee</th>
                <th className="py-4 px-4 sm:px-6 font-semibold min-w-[140px]">Optional + Test Series</th>
                <th className="py-4 px-4 sm:px-6 font-semibold min-w-[160px]">Delhi Living Cost</th>
                <th className="py-4 px-4 sm:px-6 font-bold text-amber-400 min-w-[160px]">Total Annual Outlay</th>
                <th className="py-4 px-4 sm:px-6 font-semibold min-w-[140px]">Mains Eval Speed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {Ke.map((item, idx) => {
                const isUpscZone = item.institution.includes('UPSC ZONE AI');
                return (
                  <tr
                    key={idx}
                    className={isUpscZone ? 'bg-amber-500/10 border-2 border-amber-500/40' : 'hover:bg-slate-800/30'}
                  >
                    <td className="py-4 px-4 sm:px-6">
                      <div className={`font-bold ${isUpscZone ? 'text-amber-300 text-sm' : 'text-white'}`}>
                        {item.institution}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{item.type}</div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-300">{item.gsFoundationFee}</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-300">
                      {item.optionalFee} + {item.testSeriesFee}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-300">{item.delhiLivingCostAnnual}</td>
                    <td className="py-4 px-4 sm:px-6">
                      <span
                        className={`px-2.5 py-1 rounded-lg font-bold ${
                          isUpscZone
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-sm'
                            : 'text-red-400 bg-red-500/10 border border-red-500/20'
                        }`}
                      >
                        {item.totalAnnualExpense}
                      </span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold text-slate-200">{item.mainsEvalSpeed}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* True Cost Per Evaluated Answer */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 hover-lift">
        <h3 className="text-xl sm:text-2xl font-bold font-serif text-white flex items-center gap-2">
          <PieChart className="w-5 h-5 text-amber-400" />
          <span>True Cost Per Evaluated Mains Answer</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Serious aspirants aiming for top ranks write at least <strong>300 to 500 Mains answers</strong> throughout their 12-month preparation cycle. See how the economics compare:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-center space-y-2 hover-lift">
            <div className="text-xs text-slate-400 font-semibold uppercase">Traditional Coaching Test Series</div>
            <div className="text-3xl font-extrabold text-red-400 font-serif">₹180 - ₹250</div>
            <div className="text-xs text-slate-400">Per answer copy evaluated</div>
            <div className="text-[11px] text-red-400 font-medium pt-2">Takes 14-20 days; capped at only 16 tests</div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-center space-y-2 hover-lift">
            <div className="text-xs text-slate-400 font-semibold uppercase">AI Startups (SuperKalam)</div>
            <div className="text-3xl font-extrabold text-purple-400 font-serif">₹25 - ₹40</div>
            <div className="text-xs text-slate-400">Per answer copy (credit refills)</div>
            <div className="text-[11px] text-slate-400 font-medium pt-2">Strict daily quota limits; token exhaustion</div>
          </div>

          <div className="bg-slate-950 border-2 border-emerald-500/40 rounded-xl p-5 text-center space-y-2 bg-emerald-500/5 hover-lift">
            <div className="text-xs text-emerald-400 font-bold uppercase">UPSC ZONE AI</div>
            <div className="text-3xl font-extrabold text-emerald-400 font-serif">&lt; ₹8.3</div>
            <div className="text-xs text-slate-300 font-medium">Effective cost per answer (or ₹0 per extra answer)</div>
            <div className="text-[11px] text-emerald-400 font-bold pt-2">UNLIMITED evaluations, &lt; 15s instant return</div>
          </div>
        </div>
      </div>

      {/* Economic & Pedagogical Justification */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/30 border-2 border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6 hover-lift">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Economic &amp; Pedagogical Justification</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
            Why UPSC ZONE AI Offers Unmatched Value For Money &amp; Superior ROI
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            In competitive civil services exams, cost is not just about what you pay upfront—it is about what you receive per rupee invested. Here is why UPSC ZONE AI is the <strong>best choice everytime and everywhere</strong> regardless of price points:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-2.5 hover-lift">
            <div className="text-sm font-bold text-amber-400 font-serif flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>1. Zero Hidden Add-on Charges</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Traditional coachings charge extra for CSAT (₹25,000), extra for Mains Test Series (₹30,000), extra for Dipin Sir CA classes (₹25,000), and extra for Optional subjects (₹55,000). AI startups charge credit refill packs. With <strong>UPSC ZONE AI</strong>, ₹4,999 is all-inclusive with zero surprise fees.
            </p>
          </div>

          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-2.5 hover-lift">
            <div className="text-sm font-bold text-amber-400 font-serif flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>2. 10x Writing Practice Volume</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Writing 5 answers a day in offline coaching would cost ₹1,000 daily or require buying 5 separate test series. UPSC ZONE AI enables you to write and evaluate 150+ answers every month without paying a single extra rupee, dramatically accelerating muscle memory.
            </p>
          </div>

          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-2.5 hover-lift">
            <div className="text-sm font-bold text-amber-400 font-serif flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>3. Total Elimination of Relocation Costs</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Living in Old Rajinder Nagar or Karol Bagh consumes ₹2,40,000 per year in rent, electricity, and mess food alone—plus health hazards and library rush. UPSC ZONE AI delivers higher quality mentoring directly to your home anywhere in India.
            </p>
          </div>

          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-2.5 hover-lift">
            <div className="text-sm font-bold text-amber-400 font-serif flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>4. Measurable Output vs Passive Lectures</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              In classroom coachings, you spend 3 hours daily listening passively in a crowded hall of 450 students. In UPSC ZONE AI, every minute is active practice: solving Prelims PYQ elimination traps, writing answers, and getting 15-second corrections.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/20 text-xs text-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-bold text-white">The Ultimate ROI Conclusion:</div>
            <p className="text-slate-400">
              For less than the cost of 1 week of living expenses in Delhi, you gain 1 full year of continuous, 24/7 AI IAS mentorship and unlimited evaluation.
            </p>
          </div>
          <span className="shrink-0 px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold uppercase tracking-wider text-xs">
            Best Choice Everytime Everywhere
          </span>
        </div>
      </div>
    </div>
  );
};
