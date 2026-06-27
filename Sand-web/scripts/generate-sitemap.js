import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { sitemapDomain, sitemapRoutes } from '../src/seo/sitemap-routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '../public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function urlNode(route) {
  return `  <url>
    <loc>${escapeXml(route.loc)}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${Number(route.priority).toFixed(2)}</priority>
  </url>`;
}

function sitemapXml(routes) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(urlNode).join('\n')}
</urlset>
`;
}

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(sitemapPath, sitemapXml(sitemapRoutes), 'utf8');
console.log(`Generated sitemap.xml with ${sitemapRoutes.length} URLs (${sitemapDomain}).`);
