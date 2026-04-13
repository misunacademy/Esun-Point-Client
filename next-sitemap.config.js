/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    generateRobotsTxt: true, // We manage robots.txt manually in public/
    sitemapSize: 5000,
    changefreq: 'weekly',
    priority: 0.7,
    // Exclude private, protected and irrelevant routes from the sitemap
    exclude: [
        '/dashboard',
        '/dashboard/*',
        '/checkout',
        '/payment',
        '/api/*',
        '/robots.txt',
        '/sitemap.xml',
        '/sitemap-*.xml',
    ],
    // Override priorities for specific routes
    transform: async (config, path) => {
        // Homepage gets highest priority
        if (path === '/') {
            return { loc: path, changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() };
        }
        // Key conversion pages
        if (path === '/courses') {
            return { loc: path, changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() };
        }
        // About page
        if (path === '/about') {
            return { loc: path, changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() };
        }
        // Feedback / social proof
        if (path === '/feedback') {
            return { loc: path, changefreq: 'weekly', priority: 0.7, lastmod: new Date().toISOString() };
        }
        // Legal pages — low priority, rarely change
        if (['/privacy-policy', '/refund-policy', '/terms-and-conditions'].includes(path)) {
            return { loc: path, changefreq: 'yearly', priority: 0.3, lastmod: new Date().toISOString() };
        }
        // Default
        return { loc: path, changefreq: config.changefreq, priority: config.priority, lastmod: new Date().toISOString() };
    },
};

