import type { MetadataRoute } from 'next';

const BASE_URL = 'https://askmyenvoy.com';

const pages: Array<{ path: string; lastModified: string }> = [
  { path: '/', lastModified: '2026-09-16' },
  { path: '/how-it-works', lastModified: '2026-09-03' },
  { path: '/trust-and-control', lastModified: '2026-09-03' },
  { path: '/pricing', lastModified: '2026-09-16' },
  { path: '/getting-started', lastModified: '2026-09-03' },
  { path: '/about', lastModified: '2026-09-03' },
  { path: '/milestones', lastModified: '2026-09-03' },
  { path: '/meeting-coordination', lastModified: '2026-09-14' },
  { path: '/cost-of-meeting-coordination', lastModified: '2026-09-14' },
  { path: '/booking-links-vs-meeting-coordination', lastModified: '2026-09-21' },
  { path: '/fr/coordination-reunions', lastModified: '2026-09-14' },
  { path: '/fr/cout-coordination-reunions', lastModified: '2026-09-14' },
  { path: '/privacy', lastModified: '2026-08-30' },
  { path: '/terms', lastModified: '2026-08-30' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, lastModified }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(lastModified),
  }));
}
