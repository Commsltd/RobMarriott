import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://rob-marriott-portfolio.vercel.app'; // Replace with actual domain if different
const OUT_PATH = path.join(__dirname, '../public/sitemap.xml');
const INSIGHTS_PATH = path.join(__dirname, '../src/data/insights.ts');

const STATIC_ROUTES = [
    '/',
    '/capabilities',
    '/diagnostic',
    '/insights',
    '/privacy',
    '/terms'
];

function extractSlugs() {
    try {
        const content = fs.readFileSync(INSIGHTS_PATH, 'utf8');
        const regex = /slug:\s*['"]([^'"]+)['"]/g;
        const slugs = [];
        let match;
        while ((match = regex.exec(content)) !== null) {
            slugs.push(match[1]);
        }
        return slugs;
    } catch (e) {
        console.error('Error reading insights.ts:', e);
        return [];
    }
}

function generateSitemap() {
    const today = new Date().toISOString().split('T')[0];
    const slugs = extractSlugs();

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Static Routes
    STATIC_ROUTES.forEach(route => {
        xml += '  <url>\n';
        xml += `    <loc>${DOMAIN}${route}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += '    <changefreq>weekly</changefreq>\n';
        xml += `    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n`;
        xml += '  </url>\n';
    });

    // Dynamic Routes (Insights)
    slugs.forEach(slug => {
        xml += '  <url>\n';
        xml += `    <loc>${DOMAIN}/insights/${slug}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += '    <changefreq>monthly</changefreq>\n';
        xml += '    <priority>0.7</priority>\n';
        xml += '  </url>\n';
    });

    xml += '</urlset>';

    fs.writeFileSync(OUT_PATH, xml);
    console.log(`Sitemap generated with ${STATIC_ROUTES.length + slugs.length} URLs at ${OUT_PATH}`);
}

generateSitemap();
