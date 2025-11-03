/** @type {import('next-sitemap').IConfig} */
const nextSitemap = {
  siteUrl: 'https://azeezabass.vercel.app', 
  generateRobotsTxt: true,         
  exclude: ['/admin', '/api/*'], 
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',                        
        disallow: ['/admin', '/api/*'],  
      },
    ],
    additionalSitemaps: [
      'https://azeezabass.vercel.app/sitemap.xml',
    ],
  },
};

export default nextSitemap;
