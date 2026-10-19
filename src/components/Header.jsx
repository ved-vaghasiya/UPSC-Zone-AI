import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  TrendingUp,
  MessageSquareQuote,
  Layers,
  Cpu,
  Zap,
  DollarSign,
  Swords,
  FileCheck,
  Calculator,
  Clock,
  Sun,
  Moon,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { translations } from '../utils/navigation';
import { getPageUrl } from '../utils/navigation';

export const Header = ({
  activeTab,
  onNavigate,
  language,
  setLanguage,
  themeMode,
  setThemeMode,
  effectiveTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const navItems = [
    { id: 'overview', label: t.navOverview, shortLabel: language === 'hi' ? 'अवलोकन' : 'Overview', icon: <Award className="w-4 h-4 shrink-0" /> },
    { id: 'performance-metrics', label: t.navMetrics, shortLabel: language === 'hi' ? 'डेटा मेट्रिक्स' : 'Metrics', icon: <TrendingUp className="w-4 h-4 shrink-0" />, badge: '+38M' },
    { id: 'testimonials', label: t.navTestimonials, shortLabel: language === 'hi' ? 'समीक्षाएं' : 'Reviews', icon: <MessageSquareQuote className="w-4 h-4 shrink-0" />, badge: 'Students' },
    { id: 'traditional-coaching', label: t.navTraditional, shortLabel: language === 'hi' ? 'पारंपरिक कोचिंग' : 'vs Offline', icon: <Layers className="w-4 h-4 shrink-0" /> },
    { id: 'generic-ai', label: t.navGenericAi, shortLabel: language === 'hi' ? 'सामान्य AI' : 'vs ChatGPT', icon: <Cpu className="w-4 h-4 shrink-0" /> },
    { id: 'ai-startups', label: t.navStartups, shortLabel: language === 'hi' ? 'AI स्टार्टअप्स' : 'vs Startups', icon: <Zap className="w-4 h-4 shrink-0" /> },
    { id: 'pricing-roi', label: t.navPricing, shortLabel: language === 'hi' ? 'फीस व ROI' : 'Pricing', icon: <DollarSign className="w-4 h-4 shrink-0" />, badge: '98%' },
    { id: 'battle-matrix', label: t.navBattle, shortLabel: language === 'hi' ? 'बैटल' : 'Battle', icon: <Swords className="w-4 h-4 shrink-0" /> },
    { id: 'mains-eval-demo', label: t.navDemo, shortLabel: language === 'hi' ? 'मेन्स डेमो' : 'Mains Demo', icon: <FileCheck className="w-4 h-4 shrink-0" /> },
    { id: 'savings-calculator', label: t.navCalculator, shortLabel: language === 'hi' ? 'कैलकुलेटर' : 'Calculator', icon: <Calculator className="w-4 h-4 shrink-0" /> }
  ];

  const toggleTheme = () => {
    setThemeMode(themeMode === 'auto' ? 'light' : themeMode === 'light' ? 'dark' : 'auto');
  };

  const handleNavClick = (e, pageId) => {
    e.preventDefault();
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  const isLight = effectiveTheme === 'light';

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md transition-colors shadow-lg ${isLight ? 'bg-white/95 border-b border-slate-200/90' : 'bg-slate-950/95 border-b border-slate-800/80 shadow-slate-950/50'}`}>
      {/* Top Market Audit Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 px-2 sm:px-4 py-1 text-[10px] sm:text-xs font-bold text-center flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 tracking-wide shadow-inner">
        <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950 shrink-0" />
        <span className="truncate max-w-[280px] sm:max-w-none">{t.officialAuditBadge}</span>
        <span className="bg-slate-950 text-amber-400 px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider">
          {t.rank1Badge}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Main Header Bar */}
        <div className="flex items-center justify-between h-14 sm:h-18 gap-2 sm:gap-6">
          {/* Logo & Identity */}
          <a
            href={getPageUrl('overview', language)}
            onClick={(e) => handleNavClick(e, 'overview')}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group min-w-0 shrink"
          >
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 p-0.5 shadow-md sm:shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[6px] sm:rounded-[10px] flex items-center justify-center">
                <span className="font-serif font-black text-amber-400 text-xs sm:text-lg">UZ</span>
              </div>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className={`text-sm sm:text-xl font-bold tracking-tight font-serif whitespace-nowrap ${isLight ? 'text-slate-950' : 'text-white'}`}>
                  UPSC ZONE AI
                </span>
                <span className="hidden sm:inline-flex bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/40 text-[9px] sm:text-[10px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                  Gold Standard
                </span>
              </div>
              <p className={`hidden md:block text-[11px] sm:text-xs font-medium truncate max-w-xs lg:max-w-md ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {t.tagline}
              </p>
            </div>
          </a>

          {/* Controls: Language + Theme + CTA + Mobile Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Language Switcher */}
            <div className={`flex items-center border rounded-lg sm:rounded-xl p-0.5 text-[11px] sm:text-xs font-bold ${isLight ? 'bg-slate-100 border-slate-300' : 'bg-slate-900 border-slate-800'}`}>
              <a
                href={getPageUrl(activeTab, 'en')}
                onClick={(e) => { e.preventDefault(); setLanguage('en'); }}
                className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg transition-all ${language === 'en' ? 'bg-amber-500 text-slate-950 font-bold shadow-sm' : isLight ? 'text-slate-600 hover:text-slate-950' : 'text-slate-400 hover:text-slate-200'}`}
                title="Switch to English (/en)"
              >
                EN
              </a>
              <a
                href={getPageUrl(activeTab, 'hi')}
                onClick={(e) => { e.preventDefault(); setLanguage('hi'); }}
                className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg transition-all ${language === 'hi' ? 'bg-amber-500 text-slate-950 font-bold shadow-sm' : isLight ? 'text-slate-600 hover:text-slate-950' : 'text-slate-400 hover:text-slate-200'}`}
                title="हिन्दी माध्यम में बदलें (/hi)"
              >
                हिन्दी
              </a>
            </div>

            {/* Theme Toggle (Auto IST, Light, Dark) */}
            <button
              onClick={toggleTheme}
              className={`p-1.5 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl border flex items-center gap-1.5 text-xs font-semibold transition-all ${isLight ? 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200' : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'}`}
              title={`Theme: ${themeMode.toUpperCase()} (IST Auto: ${effectiveTheme})`}
              aria-label="Toggle theme"
            >
              {themeMode === 'auto' ? (
                <>
                  <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="hidden md:inline text-[11px]">IST Auto ({effectiveTheme === 'light' ? 'Day' : 'Night'})</span>
                </>
              ) : themeMode === 'light' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="hidden md:inline text-[11px]">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="hidden md:inline text-[11px]">Dark</span>
                </>
              )}
            </button>

            {/* Primary CTA Button */}
            <a
              href="https://upsczone.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/20 transition-all items-center hover:scale-[1.02] active:scale-95 whitespace-nowrap"
            >
              <span>UPSC ZONE</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-1.5 sm:p-2 rounded-lg sm:rounded-xl border transition-colors ${isLight ? 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200' : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'}`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-500" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Primary Desktop Navigation Bar */}
        <nav aria-label="Desktop primary navigation" className={`hidden lg:flex items-center justify-between gap-1 py-2 border-t ${isLight ? 'border-slate-200' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between w-full gap-1 xl:gap-1.5 flex-nowrap overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const url = getPageUrl(item.id, language);
              return (
                <a
                  key={item.id}
                  href={url}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-[11px] xl:text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25 scale-[1.02]'
                      : isLight
                      ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-transparent'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/80 border border-transparent'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && !isActive && (
                    <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${isLight ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}`}>
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </nav>

        {/* Mobile Quick Scroll Links */}
        <nav aria-label="Mobile quick links" className={`flex lg:hidden overflow-x-auto py-2 border-t gap-1.5 no-scrollbar scroll-smooth px-0.5 ${isLight ? 'border-slate-200 bg-slate-50/50' : 'border-slate-800/60 bg-slate-950/40'}`}>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const url = getPageUrl(item.id, language);
            return (
              <a
                key={item.id}
                href={url}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 min-h-[34px] ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm shadow-amber-500/20 scale-[1.02]'
                    : isLight
                    ? 'bg-white text-slate-700 hover:text-slate-950 border border-slate-200 shadow-xs'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {item.icon}
                <span>{item.shortLabel}</span>
                {item.badge && !isActive && (
                  <span className={`text-[8px] px-1 py-0.1 rounded-full font-bold ${isLight ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}`}>
                    {item.badge}
                  </span>
                )}
              </a>
            );
          })}
          <a
            href="https://upsczone.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap bg-amber-500/15 text-amber-500 border border-amber-500/30 hover:bg-amber-500 hover:text-slate-950 transition-colors shrink-0 flex items-center gap-1"
          >
            <span>UPSC ZONE</span>
          </a>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto animate-in fade-in duration-200 ${isLight ? 'bg-white border-slate-200 shadow-2xl' : 'bg-slate-950 border-slate-800 shadow-2xl'}`}>
          <a
            href="https://upsczone.in"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs flex items-center justify-center shadow-md shadow-amber-500/20"
          >
            <span>UPSC ZONE Official Portal</span>
          </a>
          <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider px-2 pt-2">
            {language === 'hi' ? 'सभी तुलना पृष्ठ (Pages)' : 'Individual Comparison Pages'}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const url = getPageUrl(item.id, language);
              return (
                <a
                  key={item.id}
                  href={url}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                      : isLight
                      ? 'text-slate-800 hover:bg-slate-100 border border-slate-200'
                      : 'text-slate-300 hover:bg-slate-900 border border-slate-800/80'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {item.badge && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${isActive ? 'bg-slate-950 text-amber-400' : 'bg-slate-800 text-amber-300'}`}>
                        {item.badge}
                      </span>
                    )}
                    <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                  </div>
                </a>
              );
            })}
          </div>
          <div className={`mt-3 pt-3 border-t flex items-center justify-between text-[11px] px-2 ${isLight ? 'border-slate-200 text-slate-500' : 'border-slate-800 text-slate-400'}`}>
            <a href="https://review.upsczone.in/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline font-semibold">
              XML Sitemap
            </a>
            <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="hover:underline">
              robots.txt
            </a>
            <a href="/llm.txt" target="_blank" rel="noopener noreferrer" className="hover:underline">
              llm.txt
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
