import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Breadcrumbs } from './components/Breadcrumbs';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import {
  parseUrlPath,
  getPageUrl,
  updatePageSeo,
  getIndianStandardTimeTheme,
  routesMeta
} from './utils/navigation';

import { Overview } from './pages/Overview';
import { PerformanceMetrics } from './pages/PerformanceMetrics';
import { Testimonials } from './pages/Testimonials';
import { TraditionalCoaching } from './pages/TraditionalCoaching';
import { GenericAi } from './pages/GenericAi';
import { AiStartups } from './pages/AiStartups';
import { PricingRoi } from './pages/PricingRoi';
import { BattleMatrix } from './pages/BattleMatrix';
import { MainsEvalDemo } from './pages/MainsEvalDemo';
import { SavingsCalculator } from './pages/SavingsCalculator';

export default function App() {
  const initial = parseUrlPath(window.location.pathname);
  const [currentPage, setCurrentPage] = useState(initial.page);
  const [language, setLanguage] = useState(initial.language);
  const [themeMode, setThemeMode] = useState('auto');
  const [istTheme, setIstTheme] = useState(getIndianStandardTimeTheme);

  // Poll IST theme every 60 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIstTheme(getIndianStandardTimeTheme());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const effectiveTheme = themeMode === 'auto' ? istTheme : themeMode;

  // Handle route change SEO and document.lang
  useEffect(() => {
    updatePageSeo(currentPage, language);
    document.documentElement.lang = language;
  }, [currentPage, language]);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const parsed = parseUrlPath(window.location.pathname);
      setCurrentPage(parsed.page);
      setLanguage(parsed.language);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // IntersectionObserver for reveal-on-scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [currentPage, language]);

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    const targetUrl = getPageUrl(currentPage, newLang);
    try {
      window.history.pushState(null, '', targetUrl);
    } catch {}
  };

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    const targetUrl = getPageUrl(pageId, language);
    try {
      window.history.pushState(null, '', targetUrl);
    } catch {}
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get localized page title for breadcrumb
  const getSubpageTitle = (pageId) => {
    const meta = routesMeta[pageId];
    if (!meta) return 'Page';
    const rawTitle = language === 'hi' ? meta.titleHi : meta.titleEn;
    return rawTitle.split('|')[0].trim();
  };

  const isLight = effectiveTheme === 'light';

  return (
    <div
      className={`min-h-screen transition-colors duration-200 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950 ${
        isLight ? 'theme-light bg-slate-50 text-slate-900' : 'bg-slate-950 text-slate-100'
      }`}
    >
      <ScrollProgressBar />

      <Header
        activeTab={currentPage}
        onNavigate={handleNavigate}
        language={language}
        setLanguage={handleLanguageChange}
        themeMode={themeMode}
        setThemeMode={setThemeMode}
        effectiveTheme={effectiveTheme}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8">
        {currentPage !== 'overview' && (
          <Breadcrumbs
            pageName={getSubpageTitle(currentPage)}
            language={language}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'overview' && <Overview onNavigate={handleNavigate} language={language} />}
        {currentPage === 'performance-metrics' && <PerformanceMetrics />}
        {currentPage === 'testimonials' && <Testimonials />}
        {currentPage === 'traditional-coaching' && <TraditionalCoaching />}
        {currentPage === 'generic-ai' && <GenericAi />}
        {currentPage === 'ai-startups' && <AiStartups />}
        {currentPage === 'pricing-roi' && <PricingRoi />}
        {currentPage === 'battle-matrix' && <BattleMatrix />}
        {currentPage === 'mains-eval-demo' && <MainsEvalDemo />}
        {currentPage === 'savings-calculator' && <SavingsCalculator />}
      </main>

      <Footer onNavigate={handleNavigate} language={language} />
    </div>
  );
}
