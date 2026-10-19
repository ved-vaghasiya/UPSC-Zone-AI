import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { translations, getPageUrl } from '../utils/navigation';

export const Footer = ({ onNavigate, language = 'en' }) => {
  const t = translations[language];

  const handleNavClick = (e, pageId) => {
    e.preventDefault();
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs">
      {/* Official Concluding Finding Callout */}
      <div className="bg-gradient-to-r from-amber-950/60 via-slate-900 to-amber-950/60 border-b border-amber-500/20 py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{language === 'hi' ? 'आधिकारिक अंतिम निष्कर्ष' : 'Official Concluding Finding'}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white tracking-tight">
            {language === 'hi' ? (
              <>
                यह तुलना उपलब्ध कराए गए वास्तविक डेटा पर आधारित है, डमी पर नहीं। <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 font-extrabold">
                  UPSC ZONE AI हर बार, हर जगह सर्वश्रेष्ठ है।
                </span>
              </>
            ) : (
              <>
                This comparison is based on provided real data, not dummy estimates. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 font-extrabold">
                  UPSC ZONE AI is best everytime, everywhere.
                </span>
              </>
            )}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {language === 'hi'
              ? 'कोचिंग फीस रसीदों, 15-दिन की कॉपियों की देरी, विस्तृत सिलेबस रूब्रिक और वास्तविक छात्रों के अनुभवों से प्रमाणित।'
              : 'Verified across institutional fee cards, 15-day evaluation delay audits, syllabus coverage rubrics, and real civil services aspirant feedback across India.'}
          </p>
          <div className="pt-2">
            <a
              href="https://upsczone.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all hover:scale-105"
            >
              <span>{language === 'hi' ? 'UPSC ZONE पर टेस्ट सीरीज़ व कोर्स शुरू करें' : 'Explore Courses & Test Series on UPSC ZONE'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Directory Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-serif font-black text-slate-950 text-sm">
                UZ
              </div>
              <span className="font-serif font-bold text-white text-base">UPSC ZONE AI</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              {language === 'hi'
                ? 'सिविल सेवा अभ्यर्थियों के लिए 15-सेकंड तत्काल मेन्स मूल्यांकन, 30-वर्षीय प्रीलिम्स PYQ एलिमिनेशन इंजन और 24/7 समर्पित IAS मेंटर।'
                : 'Empowering civil services aspirants with instant 15-second Mains evaluation, 30-year Prelims PYQ trap analytics, and 24/7 dedicated IAS mentorship.'}
            </p>
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Real Audited Data • UPSC ZONE</span>
            </div>
          </div>

          {/* Comparison Hub Column */}
          <div className="space-y-2">
            <h4 className="text-white font-bold font-serif text-xs uppercase tracking-wider">
              {language === 'hi' ? 'तुलना हब' : 'Comparison Hub'}
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a href={getPageUrl('overview', language)} onClick={(e) => handleNavClick(e, 'overview')} className="hover:text-amber-400 transition-colors">
                  {t.navOverview}
                </a>
              </li>
              <li>
                <a href={getPageUrl('performance-metrics', language)} onClick={(e) => handleNavClick(e, 'performance-metrics')} className="hover:text-amber-400 transition-colors">
                  {t.navMetrics}
                </a>
              </li>
              <li>
                <a href={getPageUrl('testimonials', language)} onClick={(e) => handleNavClick(e, 'testimonials')} className="hover:text-amber-400 transition-colors">
                  {t.navTestimonials}
                </a>
              </li>
              <li>
                <a href={getPageUrl('traditional-coaching', language)} onClick={(e) => handleNavClick(e, 'traditional-coaching')} className="hover:text-amber-400 transition-colors">
                  {t.navTraditional}
                </a>
              </li>
              <li>
                <a href={getPageUrl('generic-ai', language)} onClick={(e) => handleNavClick(e, 'generic-ai')} className="hover:text-amber-400 transition-colors">
                  {t.navGenericAi}
                </a>
              </li>
              <li>
                <a href={getPageUrl('ai-startups', language)} onClick={(e) => handleNavClick(e, 'ai-startups')} className="hover:text-amber-400 transition-colors">
                  {t.navStartups}
                </a>
              </li>
            </ul>
          </div>

          {/* Aspirant Tools Column */}
          <div className="space-y-2">
            <h4 className="text-white font-bold font-serif text-xs uppercase tracking-wider">
              {language === 'hi' ? 'अभ्यर्थी टूल्स' : 'Aspirant Tools'}
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a href={getPageUrl('battle-matrix', language)} onClick={(e) => handleNavClick(e, 'battle-matrix')} className="hover:text-amber-400 transition-colors">
                  {t.navBattle}
                </a>
              </li>
              <li>
                <a href={getPageUrl('mains-eval-demo', language)} onClick={(e) => handleNavClick(e, 'mains-eval-demo')} className="hover:text-amber-400 transition-colors">
                  {t.navDemo}
                </a>
              </li>
              <li>
                <a href={getPageUrl('pricing-roi', language)} onClick={(e) => handleNavClick(e, 'pricing-roi')} className="hover:text-amber-400 transition-colors">
                  {t.navPricing}
                </a>
              </li>
              <li>
                <a href={getPageUrl('savings-calculator', language)} onClick={(e) => handleNavClick(e, 'savings-calculator')} className="hover:text-amber-400 transition-colors">
                  {t.navCalculator}
                </a>
              </li>
              <li>
                <a href="https://upsczone.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors font-semibold text-amber-300">
                  <span>Official Portal: UPSC ZONE</span>
                </a>
              </li>
              <li className="pt-1 border-t border-slate-900">
                <a href="https://review.upsczone.in/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors text-amber-400/90 font-medium flex items-center gap-1">
                  <span>{language === 'hi' ? '🗺️ XML साइटमैप (Google Index)' : '🗺️ XML Sitemap (Google Index)'}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Methodology & SEO Column */}
          <div className="space-y-2">
            <h4 className="text-white font-bold font-serif text-xs uppercase tracking-wider">
              {language === 'hi' ? 'ऑडिट पद्धति व SEO' : 'Methodology & Search Index'}
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {language === 'hi'
                ? 'मापदंड 2025-2026 की वास्तविक कोचिंग फीस रसीदों, ओल्ड राजिंदर नगर व मुखर्जी नगर के टेस्ट कॉपियों के टर्नअराउंड समय और जीएस 1-4 प्रश्नपत्रों पर आधारित हैं।'
                : 'Comparison parameters are collected from official coaching fee receipts (2025-2026 session), verified turn-around times of test copies in Old Rajinder Nagar and Mukherjee Nagar, and empirical prompt testing on standard GS 1-4 papers.'}
            </p>
            <div className="pt-2 flex flex-col gap-1 text-[11px]">
              <div className="text-slate-300">
                <span className="text-slate-400">Sitemap URL:</span>{' '}
                <a href="https://review.upsczone.in/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 font-mono text-[10px] break-all underline decoration-amber-500/40">
                  https://review.upsczone.in/sitemap.xml
                </a>
              </div>
              <div className="text-slate-400 text-[10px]">
                Comparison Hub: review.upsczone.in • Official Platform: UPSC ZONE
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} UPSC ZONE AI • review.upsczone.in. {t.title} — Everytime & Everywhere.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px]">
            <a href="https://review.upsczone.in/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">
              XML Sitemap
            </a>
            <span className="text-slate-500">•</span>
            <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors">
              robots.txt
            </a>
            <span className="text-slate-500">•</span>
            <a href="/llm.txt" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors">
              llm.txt
            </a>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400 font-medium">
              {language === 'hi' ? 'Google Indexing Enabled' : 'Google Indexing Active'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
