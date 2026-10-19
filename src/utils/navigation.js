import benchmarkDataRaw from '../data/benchmarkData.json';
import translationsRaw from '../data/translations.json';
import routesMetaRaw from '../data/routesMeta.json';

export const benchmarkData = benchmarkDataRaw;
export const translations = translationsRaw;
export const routesMeta = routesMetaRaw;

export const ROUTE_PATH_MAP = {
  overview: '',
  'traditional-coaching': 'traditional-coaching',
  'generic-ai': 'generic-ai',
  'ai-startups': 'ai-startups',
  'pricing-roi': 'pricing',
  'battle-matrix': 'battle-matrix',
  'mains-eval-demo': 'mains-evaluation-demo',
  'savings-calculator': 'savings-calculator',
  'performance-metrics': 'performance-metrics',
  testimonials: 'testimonials'
};

export const PATH_TO_PAGE_MAP = {
  '': 'overview',
  'traditional-coaching': 'traditional-coaching',
  'generic-ai': 'generic-ai',
  'ai-startups': 'ai-startups',
  pricing: 'pricing-roi',
  'pricing-roi': 'pricing-roi',
  'battle-matrix': 'battle-matrix',
  'mains-evaluation-demo': 'mains-eval-demo',
  'mains-eval-demo': 'mains-eval-demo',
  'savings-calculator': 'savings-calculator',
  'performance-metrics': 'performance-metrics',
  testimonials: 'testimonials'
};

export function getPageUrl(pageId, language = 'en') {
  const pathSegment = ROUTE_PATH_MAP[pageId];
  return pathSegment ? `/${language}/${pathSegment}` : `/${language}`;
}

export function parseUrlPath(pathname) {
  const clean = (pathname || '').replace(/^\/+|\/+$/g, '');
  if (!clean) {
    return { page: 'overview', language: 'en' };
  }
  const parts = clean.split('/');
  let language = 'en';
  let rest = '';
  if (parts[0] === 'hi' || parts[0] === 'en') {
    language = parts[0];
    rest = parts.slice(1).join('/');
  } else {
    rest = clean;
  }
  const page = PATH_TO_PAGE_MAP[rest] || 'overview';
  return { page, language };
}

export function updatePageSeo(pageId, language = 'en') {
  const meta = routesMeta[pageId] || routesMeta.overview;
  const title = language === 'hi' ? meta.titleHi : meta.titleEn;
  const description = language === 'hi' ? meta.descriptionHi : meta.descriptionEn;
  const canonicalUrl = `https://review.upsczone.in${getPageUrl(pageId, language)}`;

  document.title = title;

  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.setAttribute('content', description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);

  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (!ogUrl) {
    ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    document.head.appendChild(ogUrl);
  }
  ogUrl.setAttribute('content', canonicalUrl);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', canonicalUrl);
}

export function getIndianStandardTimeTheme() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istTime = new Date(utc + 19800000); // +5:30 IST
  const hours = istTime.getHours();
  const minutes = istTime.getMinutes();
  const totalMinutes = hours * 60 + minutes;
  // Day between 6:00 AM (360 min) and 6:30 PM (1110 min)
  return totalMinutes >= 360 && totalMinutes < 1110 ? 'light' : 'dark';
}
