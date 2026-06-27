// 站点级 SEO 配置：canonical、OG、Twitter、sitemap 都从这里读取域名与默认信息。
export const siteConfig = {
  domain: 'sandraidersofsophie.com',
  fullDomain: 'https://sandraidersofsophie.com',
  siteName: 'SAND: Raiders of Sophie Guide',
  shortName: 'SAND Guide',
  language: 'en',
  locale: 'en_US',
  author: 'SAND Guide Editorial',
  defaultOgImage: '/images/logo.svg',
  defaultOgImageAlt: 'SAND: Raiders of Sophie Guide logo',
  defaultLastmod: '2026-06-26',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large',
  contactEmail: 'wyong@sandraidersofsophie.com'
};

export function cleanPath(path = '/') {
  const raw = String(path || '/').trim();
  if (!raw || raw === '/') return '/';
  const withoutDomain = raw.replace(/^https?:\/\/[^/]+/i, '');
  const withSlash = withoutDomain.startsWith('/') ? withoutDomain : `/${withoutDomain}`;
  return withSlash.replace(/\/{2,}/g, '/').replace(/\/+$/, '') || '/';
}

export function absoluteUrl(path = '/') {
  const raw = String(path || '/').trim();
  if (/^https?:\/\//i.test(raw)) return raw;

  const [pathname, hash] = cleanPath(raw).split('#');
  return `${siteConfig.fullDomain}${pathname}${hash ? `#${hash}` : ''}`;
}
