import React, { useState } from 'react';
import {
  Sparkles,
  Layers,
  Cpu,
  Zap,
  DollarSign,
  ChevronRight,
  Award,
  ArrowRight,
  XCircle,
  CheckCircle2,
  BarChart3,
  MessageSquareQuote,
  Star,
  Swords,
  Clock,
  BookOpen,
  ShieldCheck
} from 'lucide-react';
import { translations, benchmarkData, getPageUrl } from '../utils/navigation';
import { RealDataGuarantee } from '../components/RealDataGuarantee';

export const Overview = ({ onNavigate, language = 'en' }) => {
  const [activeHeroTab, setActiveHeroTab] = useState('gs2');
  const t = translations[language];
  const { qe, Je, Ze, Xe } = benchmarkData;

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const heroQuestions = {
    gs2: {
      tag: 'GS-2 Polity & Governance',
      meta: '150 Words • 10 Marks',
      prompt: '"Examine the role of the Inter-State Council in strengthening cooperative federalism in India."',
      bars: [
        { label: '1. Intro Hook & Art. 263 Sarkaria Cite', score: '9.0 / 10', pct: '90%', color: 'from-emerald-500 to-emerald-400', scoreColor: 'text-emerald-400' },
        { label: '2. PESTEL Body & Punchhi Commission', score: '8.8 / 10', pct: '88%', color: 'from-amber-500 to-amber-400', scoreColor: 'text-amber-300' },
        { label: '3. Pragmatic Way Forward & 2nd ARC', score: '9.2 / 10', pct: '92%', color: 'from-emerald-500 to-emerald-400', scoreColor: 'text-emerald-400' }
      ],
      time: '14.2s (Zero Delay)',
      score: '9.0 / 10'
    },
    gs3: {
      tag: 'GS-3 Economy & Energy',
      meta: '250 Words • 15 Marks',
      prompt: '"Analyze the role of the National Green Hydrogen Mission in achieving India\'s Panchamrit climate targets."',
      bars: [
        { label: '1. SIGHT Scheme & Financial Outlay', score: '8.9 / 10', pct: '89%', color: 'from-emerald-500 to-emerald-400', scoreColor: 'text-emerald-400' },
        { label: '2. Value Chain & Electrolyser Bottlenecks', score: '8.5 / 10', pct: '85%', color: 'from-amber-500 to-amber-400', scoreColor: 'text-amber-300' },
        { label: '3. Strategic Clean Energy Way Forward', score: '9.1 / 10', pct: '91%', color: 'from-emerald-500 to-emerald-400', scoreColor: 'text-emerald-400' }
      ],
      time: '13.8s (Zero Delay)',
      score: '8.8 / 10'
    },
    gs4: {
      tag: 'GS-4 Ethics & Case Study',
      meta: '250 Words • 20 Marks',
      prompt: '"Discuss ethical dilemmas faced by civil servants balancing tribal rehabilitation rights with infrastructure development."',
      bars: [
        { label: '1. Nolan 7 Principles & Empathy Test', score: '9.3 / 10', pct: '93%', color: 'from-emerald-500 to-emerald-400', scoreColor: 'text-emerald-400' },
        { label: '2. Stakeholder Matrix & FRA 2006 Rights', score: '9.0 / 10', pct: '90%', color: 'from-emerald-500 to-emerald-400', scoreColor: 'text-emerald-400' },
        { label: '3. 2nd ARC Administrative Code of Conduct', score: '9.4 / 10', pct: '94%', color: 'from-emerald-500 to-emerald-400', scoreColor: 'text-emerald-400' }
      ],
      time: '14.6s (Zero Delay)',
      score: '9.2 / 10'
    }
  };

  const activeQ = heroQuestions[activeHeroTab] || heroQuestions.gs2;

  return (
    <div className="space-y-16 reveal-on-scroll is-visible">
      {/* 2026 Editorial AI Benchmark Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 mesh-hero-bg rounded-3xl border border-slate-800/80 my-2 shadow-2xl bg-grid-pattern">
        {/* Ambient Radial Lights */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-gradient-to-b from-amber-500/20 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
          {/* Top Hero Split Grid: Left Headline & CTA | Right Live Evaluation Cockpit */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center text-left">
            {/* Left 7 Columns: Editorial Headline, Subtitle, CTAs, Navigators */}
            <div className="lg:col-span-7 space-y-6">
              {/* Top Live Audit Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel-2026 border border-amber-500/40 text-amber-300 text-xs font-bold shadow-lg shadow-amber-500/10">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>The Definite Civil Services Study Report</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-300 font-medium">2026 Comprehensive Audit</span>
              </div>

              {/* Majestic Hero Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight text-white leading-[1.12]">
                {t.heroHeadlinePre}{' '}
                <span className="animate-shimmer font-black drop-shadow-md">
                  {t.heroHeadlineHighlight}
                </span>{' '}
                {t.heroHeadlinePost}
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal">
                {t.heroSubtitle}
              </p>

              {/* Primary Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="https://upsczone.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/30 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
                >
                  <span>{t.joinTestSeriesBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://upsczone.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl glass-panel-2026 hover:bg-slate-800 border border-amber-500/40 text-amber-300 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
                >
                  <span>{t.enrollCoursesBtn}</span>
                </a>
              </div>

              {/* Quick Route Navigator Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => handleNavClick('traditional-coaching')}
                  className="px-3 py-1.5 rounded-xl glass-panel-2026 hover:border-amber-500/50 text-[11px] font-semibold text-slate-200 flex items-center gap-1.5 transition-all hover:scale-105"
                >
                  <Layers className="w-3 h-3 text-amber-400" />
                  <span>{t.navTraditional}</span>
                  <ChevronRight className="w-2.5 h-2.5 text-slate-400" />
                </button>

                <button
                  type="button"
                  onClick={() => handleNavClick('generic-ai')}
                  className="px-3 py-1.5 rounded-xl glass-panel-2026 hover:border-blue-500/50 text-[11px] font-semibold text-slate-200 flex items-center gap-1.5 transition-all hover:scale-105"
                >
                  <Cpu className="w-3 h-3 text-blue-400" />
                  <span>{t.navGenericAi}</span>
                  <ChevronRight className="w-2.5 h-2.5 text-slate-400" />
                </button>

                <button
                  type="button"
                  onClick={() => handleNavClick('ai-startups')}
                  className="px-3 py-1.5 rounded-xl glass-panel-2026 hover:border-purple-500/50 text-[11px] font-semibold text-slate-200 flex items-center gap-1.5 transition-all hover:scale-105"
                >
                  <Zap className="w-3 h-3 text-purple-400" />
                  <span>{t.navStartups}</span>
                  <ChevronRight className="w-2.5 h-2.5 text-slate-400" />
                </button>

                <button
                  type="button"
                  onClick={() => handleNavClick('pricing-roi')}
                  className="px-3 py-1.5 rounded-xl glass-panel-gold text-[11px] font-bold text-amber-300 flex items-center gap-1.5 transition-all hover:scale-105"
                >
                  <DollarSign className="w-3 h-3 text-amber-400" />
                  <span>{t.navPricing}</span>
                  <ChevronRight className="w-2.5 h-2.5 text-amber-400" />
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Live UPSC AI Evaluation Cockpit */}
            <div className="lg:col-span-5">
              <div className="glass-panel-gold rounded-3xl p-5 sm:p-6 border border-amber-500/40 shadow-2xl relative space-y-4">
                {/* Cockpit Status Bar with Syllabus Selector */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-amber-500/20 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono font-bold text-white tracking-wide">UPSC MAINS AI ENGINE</span>
                  </div>
                  {/* Interactive Syllabus Selector Pills */}
                  <div className="flex items-center gap-1 bg-slate-950/70 p-1 rounded-xl border border-amber-500/20">
                    <button
                      type="button"
                      onClick={() => setActiveHeroTab('gs2')}
                      className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all ${
                        activeHeroTab === 'gs2'
                          ? 'bg-amber-500 text-slate-950 shadow-xs'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      GS-2
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveHeroTab('gs3')}
                      className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all ${
                        activeHeroTab === 'gs3'
                          ? 'bg-amber-500 text-slate-950 shadow-xs'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      GS-3
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveHeroTab('gs4')}
                      className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all ${
                        activeHeroTab === 'gs4'
                          ? 'bg-amber-500 text-slate-950 shadow-xs'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      GS-4
                    </button>
                  </div>
                </div>

                {/* Mock Question Prompt Card */}
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-700/60 space-y-1.5 transition-all">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-amber-400 font-bold uppercase tracking-wider">{activeQ.tag}</span>
                    <span className="text-slate-400 font-mono">{activeQ.meta}</span>
                  </div>
                  <p className="text-xs text-slate-200 font-medium italic leading-relaxed">
                    {activeQ.prompt}
                  </p>
                </div>

                {/* Rubric Evaluation Bars */}
                <div className="space-y-2.5 text-xs">
                  {activeQ.bars.map((bar, bIdx) => (
                    <div key={bIdx} className="space-y-1">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-300 font-semibold">{bar.label}</span>
                        <span className={`${bar.scoreColor} font-bold font-mono`}>{bar.score}</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${bar.color} rounded-full transition-all duration-500`}
                          style={{ width: bar.pct }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Audit Verdict Banner */}
                <div className="pt-2 border-t border-amber-500/20 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Audited in {activeQ.time}</span>
                  </div>
                  <span className="text-slate-300 font-medium">100% UPSC Rubrics</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Stat Bento Capsules Ribbon */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="glass-panel-2026 rounded-2xl p-4 sm:p-5 text-center hover:border-amber-500/50 transition-all hover-lift relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto mb-2">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold text-amber-400 font-serif">{t.statTurnaround}</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">{t.statTurnaroundSub}</div>
              <div className="text-[10px] text-emerald-400 font-bold mt-1 bg-emerald-500/10 border border-emerald-500/20 py-0.5 px-2 rounded-full inline-block">
                {t.statTurnaroundComp}
              </div>
            </div>

            <div className="glass-panel-2026 rounded-2xl p-4 sm:p-5 text-center hover:border-amber-500/50 transition-all hover-lift relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto mb-2">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold text-amber-400 font-serif">{t.statRubric}</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">{t.statRubricSub}</div>
              <div className="text-[10px] text-emerald-400 font-bold mt-1 bg-emerald-500/10 border border-emerald-500/20 py-0.5 px-2 rounded-full inline-block">
                {t.statRubricComp}
              </div>
            </div>

            <div className="glass-panel-2026 rounded-2xl p-4 sm:p-5 text-center hover:border-amber-500/50 transition-all hover-lift relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-2">
                <DollarSign className="w-4 h-4" />
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold text-emerald-400 font-serif">{t.statSavings}</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">{t.statSavingsSub}</div>
              <div className="text-[10px] text-emerald-400 font-bold mt-1 bg-emerald-500/10 border border-emerald-500/20 py-0.5 px-2 rounded-full inline-block">
                {t.statSavingsComp}
              </div>
            </div>

            <div className="glass-panel-2026 rounded-2xl p-4 sm:p-5 text-center hover:border-amber-500/50 transition-all hover-lift relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto mb-2">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold text-amber-400 font-serif">{t.statMentor}</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">{t.statMentorSub}</div>
              <div className="text-[10px] text-emerald-400 font-bold mt-1 bg-emerald-500/10 border border-emerald-500/20 py-0.5 px-2 rounded-full inline-block">
                {t.statMentorComp}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autonomous AI IAS Agent Mission Section */}
      <section className="glass-panel-gold rounded-3xl p-6 sm:p-10 shadow-2xl hover-lift relative overflow-hidden bg-grid-pattern">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.aiAgentMissionBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">{t.aiAgentMissionTitle}</h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">{t.aiAgentMissionDesc}</p>
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="glass-panel-2026 p-3.5 rounded-xl border border-amber-500/20 text-slate-200 font-semibold flex items-center gap-2">
                <span className="text-base">🛡️</span>
                <span>{t.aiAgentMissionPillar1}</span>
              </div>
              <div className="glass-panel-2026 p-3.5 rounded-xl border border-amber-500/20 text-slate-200 font-semibold flex items-center gap-2">
                <span className="text-base">💡</span>
                <span>{t.aiAgentMissionPillar2}</span>
              </div>
              <div className="glass-panel-2026 p-3.5 rounded-xl border border-amber-500/20 text-slate-200 font-semibold flex items-center gap-2">
                <span className="text-base">🏛️</span>
                <span>{t.aiAgentMissionPillar3}</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 glass-panel-2026 border border-amber-500/40 p-6 rounded-2xl text-center min-w-[280px] space-y-3.5 shadow-xl">
            <div className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">Civil Services Portal</div>
            <div className="text-3xl font-extrabold text-white font-serif">UPSC ZONE</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {language === 'hi' ? 'सस्ती और गुणवत्तापूर्ण यूपीएससी तैयारी' : 'Empowering aspirants across every corner of India'}
            </p>
            <a
              href="https://upsczone.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <span>{t.joinTestSeriesBtn}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Full Real Data Guarantee */}
      <RealDataGuarantee compact={false} />

      {/* 3 Flawed Alternatives vs Ultimate Solution */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
            <span>Critical Industry Vulnerability Audit</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
            The Three Flawed Alternatives vs <span className="animate-shimmer font-black">The Ultimate Solution</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Why lakhs of serious aspirants are shifting from expensive classrooms and generic chatbots to UPSC ZONE AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Traditional Card */}
          <div className="glass-panel-danger rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-5 hover-lift transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-red-500/20">
                <span className="px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-black uppercase tracking-wider">
                  Traditional Offline
                </span>
                <span className="text-xs font-bold text-slate-300">Vajiram, Vision, Drishti</span>
              </div>
              <h3 className="text-xl font-bold text-white font-serif">The Old Rajinder Nagar Factory</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                400+ students packed into a basement hall. Fees exceed ₹2.2 Lakhs plus ₹20,000/month living expenses. Evaluators take 15 days to return a copy with 2 lines of generic notes.
              </p>
              <div className="space-y-2 pt-2 text-xs">
                <div className="flex items-center gap-2.5 text-red-300 bg-red-950/40 border border-red-500/20 px-3 py-2 rounded-xl">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="font-semibold">₹2.5L to ₹4.5L total annual expense</span>
                </div>
                <div className="flex items-center gap-2.5 text-red-300 bg-red-950/40 border border-red-500/20 px-3 py-2 rounded-xl">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="font-semibold">14 - 20 days delay in Mains copies</span>
                </div>
                <div className="flex items-center gap-2.5 text-red-300 bg-red-950/40 border border-red-500/20 px-3 py-2 rounded-xl">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="font-semibold">No personalized 1-on-1 daily guidance</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleNavClick('traditional-coaching')}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-xs font-bold text-white flex items-center justify-center gap-2 transition-all border border-red-500/30 hover:border-red-500/60 shadow-md"
            >
              <span>See Full Traditional Coaching Audit</span>
              <ArrowRight className="w-3.5 h-3.5 text-red-400" />
            </button>
          </div>

          {/* Generic AI Card */}
          <div className="glass-panel-blue rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-5 hover-lift transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-blue-500/20">
                <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-black uppercase tracking-wider">
                  Generic US Chatbots
                </span>
                <span className="text-xs font-bold text-slate-300">ChatGPT, Claude, Perplexity</span>
              </div>
              <h3 className="text-xl font-bold text-white font-serif">The Silicon Valley Generalist</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Trained on Western corporate data. Flattering tone ("Great job!") with zero understanding of UPSC Mains marking schemes, Intro-Body-WayForward rules, 2nd ARC or Indian Supreme Court rulings.
              </p>
              <div className="space-y-2 pt-2 text-xs">
                <div className="flex items-center gap-2.5 text-blue-200 bg-blue-950/40 border border-blue-500/20 px-3 py-2 rounded-xl">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="font-semibold">Hallucinates Indian legal &amp; constitutional articles</span>
                </div>
                <div className="flex items-center gap-2.5 text-blue-200 bg-blue-950/40 border border-blue-500/20 px-3 py-2 rounded-xl">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="font-semibold">Zero handwriting OCR for UPSC exam sheets</span>
                </div>
                <div className="flex items-center gap-2.5 text-blue-200 bg-blue-950/40 border border-blue-500/20 px-3 py-2 rounded-xl">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="font-semibold">No 30-year UPSC Prelims elimination logic</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleNavClick('generic-ai')}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-xs font-bold text-white flex items-center justify-center gap-2 transition-all border border-blue-500/30 hover:border-blue-500/60 shadow-md"
            >
              <span>See Generic AI Vulnerability Report</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
            </button>
          </div>

          {/* AI Startups Card */}
          <div className="glass-panel-purple rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-5 hover-lift transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <span className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-black uppercase tracking-wider">
                  New AI Startups
                </span>
                <span className="text-xs font-bold text-slate-300">SuperKalam, SudoLearn, PrepAI</span>
              </div>
              <h3 className="text-xl font-bold text-white font-serif">The Prompt-Wrapper Startups</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Built quickly on basic OpenAI APIs without deep pedagogical grounding. Enforce strict daily answer quotas, credit deductions, and slow queues during exam peaks.
              </p>
              <div className="space-y-2 pt-2 text-xs">
                <div className="flex items-center gap-2.5 text-purple-200 bg-purple-950/40 border border-purple-500/20 px-3 py-2 rounded-xl">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="font-semibold">Costly credit exhaustion (₹12k - ₹18k/yr)</span>
                </div>
                <div className="flex items-center gap-2.5 text-purple-200 bg-purple-950/40 border border-purple-500/20 px-3 py-2 rounded-xl">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="font-semibold">Shallow prompt loops, lacks diagram evaluation</span>
                </div>
                <div className="flex items-center gap-2.5 text-purple-200 bg-purple-950/40 border border-purple-500/20 px-3 py-2 rounded-xl">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="font-semibold">No full GS-4 Ethics case study frameworks</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleNavClick('ai-startups')}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-xs font-bold text-white flex items-center justify-center gap-2 transition-all border border-purple-500/30 hover:border-purple-500/60 shadow-md"
            >
              <span>See Startup Comparison Report</span>
              <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
            </button>
          </div>
        </div>

        {/* The Ultimate Solution Ribbon Connecting the 3 Alternatives */}
        <div className="glass-panel-gold rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border border-amber-500/50 shadow-2xl relative overflow-hidden">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>The Superior Alternative</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-serif text-white">
              Why Risk Your Attempt? Switch to UPSC ZONE AI
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              Combine the rigor of Delhi's best pedagogy with the instantaneous speed of state-of-the-art AI. No 2-week delays, no US chatbot hallucinations, and no monthly credit extortion.
            </p>
          </div>
          <div className="shrink-0 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => handleNavClick('battle-matrix')}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/25 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <Swords className="w-4 h-4" />
              <span>Full Head-to-Head Battle Matrix</span>
            </button>
            <a
              href="https://upsczone.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl glass-panel-2026 hover:bg-slate-800 text-amber-300 border border-amber-500/40 font-bold text-xs sm:text-sm transition-all hover:scale-105"
            >
              <span>{t.joinTestSeriesBtn}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6 Reasons Why UPSC ZONE AI is Proven Best — 2026 Bento Grid */}
      <section className="glass-panel-gold rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 hover-lift relative overflow-hidden bg-grid-pattern">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-amber-500/20 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
              <Award className="w-4 h-4 text-amber-400" />
              <span>The Gold Standard Across India</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
              Why UPSC ZONE AI is Proven Best <span className="animate-shimmer font-black">Everytime, Everywhere</span>
            </h2>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleNavClick('battle-matrix')}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs sm:text-sm font-black shadow-lg shadow-amber-500/25 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <Swords className="w-4 h-4" />
              <span>Launch Battle Matrix</span>
            </button>
          </div>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {/* Bento Card 1: 15-Second Answer Evaluation (Hero Bento - Spans 2 Cols on LG) */}
          <div className="lg:col-span-2 glass-panel-2026 rounded-3xl p-6 sm:p-8 space-y-4 border border-amber-500/40 relative overflow-hidden hover-lift group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-black text-sm">
                  01
                </div>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Instant 24x7 Micro-Evaluation
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                ⚡ 99.8% Faster
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white font-serif">15-Second Answer Evaluation</h4>
            <p className="text-sm text-slate-200 leading-relaxed font-normal">
              Never wait 2 weeks again. Write an answer at 2 AM, snap a photo or type, and receive a comprehensive 10-point UPSC rubric critique in 15 seconds.
            </p>
            {/* Live Telemetry Preview Capsule */}
            <div className="pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-slate-300 font-mono">Sample GS-2 Federalism &amp; Inter-State Council Copy</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-bold self-end sm:self-auto">
                  <span>Audited Score: 9.0 / 15 Marks</span>
                  <span className="text-slate-400 font-normal">• 12.4s Turnaround</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: 100% UPSC Rubric Alignment */}
          <div className="glass-panel-2026 rounded-3xl p-6 sm:p-7 space-y-3.5 hover-lift flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black text-sm">
                  02
                </div>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Full Paper Syllabus
                </div>
              </div>
              <h4 className="text-lg font-bold text-white font-serif">100% UPSC Rubric Alignment</h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                Evaluates introduction hooks, multi-dimensional body arguments (PESTEL/Historical/Constitutional), diagrams, and balanced pragmatic way forwards.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">Intro Hook</span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">PESTEL Body</span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">2nd ARC Way Forward</span>
            </div>
          </div>

          {/* Bento Card 3: 30-Year Prelims PYQ Traps */}
          <div className="glass-panel-2026 rounded-3xl p-6 sm:p-7 space-y-3.5 hover-lift flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black text-sm">
                  03
                </div>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  1995-2024 Prelims Engine
                </div>
              </div>
              <h4 className="text-lg font-bold text-white font-serif">30-Year Prelims PYQ Traps</h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                Every single Prelims question from 1995 to 2024 mapped to elimination tactics, statement pair logic, and official UPSC answer key rationality.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">1995-2024 PYQs</span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">Pair Logic</span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">Trap Elimination</span>
            </div>
          </div>

          {/* Bento Card 4: Daily PIB & Hindu Synthesis */}
          <div className="glass-panel-2026 rounded-3xl p-6 sm:p-7 space-y-3.5 hover-lift flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black text-sm">
                  04
                </div>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Automated Syllabus Tagging
                </div>
              </div>
              <h4 className="text-lg font-bold text-white font-serif">Daily PIB &amp; Hindu Synthesis</h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                Automated curation of daily news filtered strictly by GS 1-4 syllabus headers with instant Prelims MCQs and Mains practice questions.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">The Hindu</span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">PIB Releases</span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">GS 1-4 Tagged</span>
            </div>
          </div>

          {/* Bento Card 5: GS-4 Ethics & Case Study Engine */}
          <div className="glass-panel-2026 rounded-3xl p-6 sm:p-7 space-y-3.5 hover-lift flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black text-sm">
                  05
                </div>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Ethical Frameworks
                </div>
              </div>
              <h4 className="text-lg font-bold text-white font-serif">GS-4 Ethics &amp; Case Study Engine</h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                Pre-built frameworks for dilemmas: Nolan principles, 2nd ARC ethical infrastructure, stakeholder matrix, and actionable administrative choices.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">Nolan Principles</span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">Stakeholder Matrix</span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">Dilemma Resolver</span>
            </div>
          </div>

          {/* Bento Card 6: Democratic ₹4,999 Pricing */}
          <div className="glass-panel-gold rounded-3xl p-6 sm:p-7 space-y-3.5 hover-lift border border-amber-500/50 flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-black text-sm">
                  06
                </div>
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Flat Annual Access
                </div>
              </div>
              <h4 className="text-lg font-bold text-white font-serif">Democratic ₹4,999 Pricing</h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                High-quality UPSC preparation shouldn’t require a loan. Get everything—Mains, Prelims, Mentor, CSAT—at less than the cost of a 1-month Delhi PG room.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-amber-500/20">
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium">Flat ₹4,999/yr</span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium">Unlimited Tests</span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium">Zero Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Crucial Pillars Comparison Table — Executive 2026 Edition */}
      <section className="glass-panel-2026 rounded-3xl p-6 sm:p-8 space-y-6 border border-amber-500/30 shadow-2xl relative overflow-hidden bg-grid-pattern">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Exhaustive Multi-Dimensional Comparison</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
              The 10 Crucial Pillars of Civil Services Preparation
            </h2>
          </div>
          <div className="text-xs text-amber-400 font-semibold bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20">
            ← Scroll horizontally to view full audit columns →
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-700/60 shadow-2xl">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-950 border-b border-slate-700 text-white">
                <th className="py-4 px-4 sm:px-6 font-bold min-w-[220px] sticky-first-col">
                  Evaluation Pillar
                </th>
                <th className="py-4 px-4 sm:px-6 font-extrabold text-amber-300 min-w-[240px] table-winner-col">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>UPSC ZONE AI (Winner)</span>
                    <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] uppercase font-mono">
                      10/10 PASS
                    </span>
                  </div>
                </th>
                <th className="py-4 px-4 sm:px-6 font-semibold min-w-[200px] text-slate-200">Traditional Delhi Coaching</th>
                <th className="py-4 px-4 sm:px-6 font-semibold min-w-[200px] text-slate-200">Generic AI (ChatGPT / Claude)</th>
                <th className="py-4 px-4 sm:px-6 font-semibold min-w-[200px] text-slate-200">New AI Startups</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {qe.map((row, idx) => (
                <tr key={idx} className="hover:bg-amber-500/[0.03] transition-colors group">
                  <td className="py-4 px-4 sm:px-6 sticky-first-col">
                    <div className="font-bold text-white text-sm">{row.metric}</div>
                    <div className="text-[11px] text-amber-400/90 font-mono mt-0.5">{row.category}</div>
                  </td>
                  <td className="py-4 px-4 sm:px-6 table-winner-col font-medium text-amber-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-extrabold text-amber-300 text-sm">{row.upscZoneAi}</span>
                    </div>
                    <div className="text-[11px] text-slate-200 mt-1 font-normal leading-tight pl-6">{row.verdict}</div>
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-200">{row.traditionalCoachings}</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-200">{row.genericAiApps}</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-200">{row.aiStartups}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Real Aspirant Study Benchmarks: 1-Year Audit */}
      <section className="glass-panel-2026 rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-700/60 shadow-2xl relative overflow-hidden bg-grid-pattern hover-lift">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Empirical Learning Yield</span>
          </div>
          <h3 className="text-xl sm:text-3xl font-extrabold font-serif text-white tracking-tight">
            Real Aspirant Study Benchmarks: 1-Year Audit
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            What happens to an aspirant's preparation velocity when switching to UPSC ZONE AI?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Je.map((item, idx) => (
            <div key={idx} className="glass-panel-2026 border border-slate-700/70 rounded-2xl p-5 space-y-3 flex flex-col justify-between hover-lift group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">{item.metric}</div>
                <div className="text-xl sm:text-2xl font-extrabold text-amber-400 font-serif mt-2">{item.upscZoneAi}</div>
                <div className="text-xs text-red-400 line-through mt-1 bg-red-950/40 border border-red-500/20 px-2 py-0.5 rounded-md inline-block">
                  {item.traditionalCoaching}
                </div>
              </div>
              <div className="pt-2 border-t border-slate-800 text-xs text-emerald-400 font-bold flex items-center gap-1">
                <span>⚡ {item.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Data Metrics Preview */}
      <section className="glass-panel-2026 rounded-3xl p-6 sm:p-8 space-y-6 border border-emerald-500/30 shadow-2xl relative overflow-hidden bg-grid-pattern hover-lift">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Real Performance Data &amp; Empirical Superiority</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold font-serif text-white tracking-tight">
              Why UPSC ZONE AI is the Best Choice: Concrete Metrics
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Measurable statistics on score improvement, turnaround efficiency, and question elimination precision.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleNavClick('performance-metrics')}
            className="self-start sm:self-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 text-xs font-black shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95"
          >
            <span>View All Data Metrics</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Ze.slice(0, 3).map((item, idx) => (
            <div key={idx} className="glass-panel-2026 border border-slate-700/70 rounded-2xl p-6 space-y-4 flex flex-col justify-between hover-lift relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-amber-400 uppercase tracking-widest text-[11px]">{item.category}</span>
                  <span className="text-[10px] text-emerald-400 font-extrabold bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    Best Choice
                  </span>
                </div>
                <h4 className="text-base font-bold text-white font-serif">{item.metricName}</h4>
                <div className="text-3xl font-black text-amber-400 font-serif my-2.5">{item.upscZoneAiValue}</div>
                <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Traditional Offline:</span>
                    <span className="text-red-400 font-bold">{item.traditionalCoachingValue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Generic AI (ChatGPT):</span>
                    <span className="text-slate-200 font-medium">{item.genericAiValue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">AI Startups:</span>
                    <span className="text-purple-300 font-medium">{item.aiStartupsValue}</span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-emerald-400 font-bold pt-2.5 border-t border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{item.provenAdvantage}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="glass-panel-gold rounded-3xl p-6 sm:p-8 space-y-6 border border-amber-500/40 shadow-2xl relative overflow-hidden bg-grid-pattern hover-lift">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-amber-500/20">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <MessageSquareQuote className="w-3.5 h-3.5 text-amber-400" />
              <span>Real Aspirant Success Stories &amp; Comparisons</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold font-serif text-white tracking-tight">
              Aspirants Who Compared and Found UPSC ZONE AI to be the Best Choice
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              Hear directly from candidates who tried offline coachings, generic chatbots, and startups.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleNavClick('testimonials')}
            className="self-start sm:self-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black shadow-lg shadow-amber-500/25 transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95"
          >
            <span>Read All Success Stories</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Xe.slice(0, 3).map((item) => (
            <div key={item.id} className="glass-panel-2026 border border-amber-500/30 rounded-2xl p-6 space-y-4 flex flex-col justify-between hover-lift relative overflow-hidden group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-black text-sm shadow-md">
                      {item.avatarInitials}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{item.name}</div>
                      <div className="text-xs text-amber-400 font-medium">{item.badge}</div>
                    </div>
                  </div>
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="text-[11px] text-slate-300 bg-slate-950/80 px-2.5 py-1 rounded-lg border border-slate-700/60 font-mono">
                  {item.comparedAgainst}
                </div>
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  "{item.quote.slice(0, 160)}..."
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-1.5">
                <div className="text-xs font-bold text-amber-300">★ "{item.highlightPhrase}"</div>
                <div className="text-xs text-emerald-400 font-bold">Gain: {item.scoreImprovement}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA explore */}
      <section className="text-center py-8">
        <div className="max-w-xl mx-auto space-y-5">
          <h3 className="text-2xl font-bold font-serif text-white">Ready to explore specific competitors in detail?</h3>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => handleNavClick('traditional-coaching')}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black transition-all shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95"
            >
              Examine Traditional Coachings
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('pricing-roi')}
              className="px-5 py-3 rounded-2xl glass-panel-2026 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-bold transition-all hover:scale-105 active:scale-95"
            >
              Calculate Your ₹ Savings
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

