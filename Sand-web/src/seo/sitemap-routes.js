import { guidesList } from '../data/guides.js';
import { ammunition } from '../data/wiki/ammunition.js';
import { weapons } from '../data/wiki/weapons.js';
import { absoluteUrl, cleanPath, siteConfig } from './site-config.js';

export const sitemapStaticRoutes = [
  { path: '/', name: 'home', lastmod: '2026-06-27', priority: 1, changefreq: 'weekly' },
  { path: '/getting-started', name: 'getting-started', lastmod: '2026-06-25', priority: 0.92, changefreq: 'weekly' },
  { path: '/wiki', name: 'wiki', lastmod: '2026-06-26', priority: 0.95, changefreq: 'weekly' },
  { path: '/wiki/weapons', name: 'wiki-weapons', lastmod: '2026-06-26', priority: 0.9, changefreq: 'weekly' },
  { path: '/wiki/ammunition', name: 'wiki-ammunition', lastmod: '2026-06-26', priority: 0.88, changefreq: 'weekly' },
  { path: '/wiki/resources', name: 'wiki-resources', lastmod: '2026-06-26', priority: 0.86, changefreq: 'weekly' },
  { path: '/database', name: 'database', lastmod: '2026-06-26', priority: 0.9, changefreq: 'weekly' },
  { path: '/guides', name: 'guides', lastmod: '2026-06-26', priority: 0.9, changefreq: 'weekly' },
  { path: '/map-locations', name: 'map-locations', lastmod: '2026-06-26', priority: 0.9, changefreq: 'weekly' },
  { path: '/search', name: 'search', lastmod: '2026-06-27', priority: 0.72, changefreq: 'weekly' },
  { path: '/legal/privacy-policy', name: 'legal-privacy', lastmod: '2026-06-27', priority: 0.35, changefreq: 'yearly' },
  { path: '/legal/terms-of-service', name: 'legal-terms', lastmod: '2026-06-27', priority: 0.35, changefreq: 'yearly' },
  { path: '/legal/copyright', name: 'legal-copyright', lastmod: '2026-06-27', priority: 0.35, changefreq: 'yearly' },
  { path: '/legal/about-us', name: 'legal-about', lastmod: '2026-06-27', priority: 0.45, changefreq: 'yearly' },
  { path: '/legal/contact-us', name: 'legal-contact', lastmod: '2026-06-27', priority: 0.45, changefreq: 'yearly' }
];

function normalizeDate(raw) {
  const value = raw == null ? '' : String(raw).trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(value)) return value.slice(0, 10);

  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? siteConfig.defaultLastmod : new Date(parsed).toISOString().slice(0, 10);
}

function route(path, name, options = {}) {
  return {
    path: cleanPath(path),
    name,
    loc: absoluteUrl(path),
    lastmod: normalizeDate(options.lastmod),
    changefreq: options.changefreq || 'monthly',
    priority: options.priority ?? 0.7
  };
}

const weaponRoutes = weapons.map((weapon) =>
  route(`/wiki/weapons/${weapon.addressBar}`, `weapon-${weapon.addressBar}`, {
    lastmod: weapon.publishDate,
    changefreq: 'monthly',
    priority: 0.72
  })
);

const ammunitionRoutes = ammunition.map((ammo) =>
  route(`/wiki/ammunition/${ammo.addressBar}`, `ammunition-${ammo.addressBar}`, {
    lastmod: ammo.publishDate,
    changefreq: 'monthly',
    priority: 0.7
  })
);

const guideRoutes = guidesList
  .filter((guide) => guide.isPublished !== false && guide.addressBar)
  .map((guide) =>
    route(guide.addressBar, `guide-${cleanPath(guide.addressBar).split('/').pop()}`, {
      lastmod: guide.publishDate,
      changefreq: 'monthly',
      priority: 0.78
    })
  );

const staticRoutes = sitemapStaticRoutes.map((item) => route(item.path, item.name, item));
const uniqueRoutes = new Map();

for (const item of [...staticRoutes, ...weaponRoutes, ...ammunitionRoutes, ...guideRoutes]) {
  uniqueRoutes.set(item.path, item);
}

export const sitemapRoutes = [...uniqueRoutes.values()];
export const sitemapDomain = siteConfig.fullDomain;
