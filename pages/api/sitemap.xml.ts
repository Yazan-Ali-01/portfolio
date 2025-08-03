import { NextApiRequest, NextApiResponse } from 'next';

// Define your base URL - replace with your actual domain
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.com';

// Define all your static pages
const staticPages = [
  {
    url: '/',
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: '1.0'
  },
  {
    url: '/privacy-policy',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: '0.5'
  },
  {
    url: '/squiz-matrix/privacy-policy',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: '0.3'
  },
  {
    url: '/typing',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    url: '/userdatapuller',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '0.7'
  }
];

function generateSitemapXML(pages: typeof staticPages): string {
  const urlElements = pages
    .map(page => {
      return `
    <url>
      <loc>${BASE_URL}${page.url}</loc>
      <lastmod>${page.lastmod}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlElements}
</urlset>`;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const sitemap = generateSitemapXML(staticPages);
    
    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
    res.status(200).send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).json({ error: 'Failed to generate sitemap' });
  }
} 