import { explanationPages } from '@/lib/explanation-pages';
import type { ReferenceArticleConfig } from '@/lib/reference-article';

export const referenceArticle = {
  metaTitle: 'What Is Meeting Coordination?',
  headline: 'What meeting coordination actually means',
  description:
    "Meeting coordination is the work required to turn everyone's availability and constraints into a time that works, especially across organizations. See how Ask My Envoy handles it.",
  canonical: explanationPages.meetingCoordination.en.url,
  datePublished: '2026-09-02',
  dateModified: '2026-09-03',
  language: 'en',
  hreflang: { page: 'meetingCoordination', locale: 'en' },
} satisfies ReferenceArticleConfig;
