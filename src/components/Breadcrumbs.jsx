import React from 'react';
import { Home, ChevronRight } from 'lucide-react';
import { getPageUrl } from '../utils/navigation';

export const Breadcrumbs = ({ pageName, language, onNavigate }) => {
  const homeUrl = getPageUrl('overview', language);

  return (
    <nav aria-label="Breadcrumb" className="pb-3 text-xs flex items-center gap-1.5 text-slate-400">
      <a
        href={homeUrl}
        onClick={(e) => {
          e.preventDefault();
          onNavigate('overview');
        }}
        className="hover:text-amber-400 transition-colors flex items-center gap-1"
      >
        <Home className="w-3.5 h-3.5" />
        <span>{language === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}</span>
      </a>
      <ChevronRight className="w-3 h-3 text-slate-400" />
      <span className="text-amber-400 font-semibold truncate max-w-[240px] sm:max-w-none">{pageName}</span>
    </nav>
  );
};
