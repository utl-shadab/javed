// src/pages/sitemap.xml.ts
import type { GetServerSideProps } from 'next';
import { BASE_URL } from '../src/config/seo'; 

// This page itself never renders anything
const Sitemap = () => null;
export default Sitemap;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const staticPaths = [
    '/',               
    '/about',           
    '/about/network',
    '/about/philosophy',
    '/contact',
    '/insight',
    '/services',
    '/team',           
  ];

  // 2. If you have dynamic content (e.g. blog posts), fetch their slugs here
  // const posts = await fetchPostsFromCMSOrDB();
  // const dynamicPaths = posts.map((post) => `/insight/${post.slug}`);

  const allPaths = staticPaths; // [...staticPaths, ...dynamicPaths];

  const urls = allPaths
    .map((path) => {
      return `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.7'}</priority>
  </url>`;
    })
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
