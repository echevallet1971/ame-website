import type { MetadataRoute } from 'next';

const BASE_URL = 'https://askmyenvoy.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/how-it-works',
    '/trust-and-control',
    '/pricing',
    '/getting-started',
    '/about',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
