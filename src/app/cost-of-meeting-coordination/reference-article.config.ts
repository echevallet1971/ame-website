import { explanationPages } from '@/lib/explanation-pages';
import type { ReferenceArticleConfig } from '@/lib/reference-article';

export const referenceArticle = {
  metaTitle: 'The Hidden Cost of Meeting Coordination',
  headline: 'The hidden cost of meeting coordination',
  description:
    'Meeting coordination looks simple because the work is fragmented across people and time. See how calendar checks, interruptions and delays create hidden costs.',
  canonical: explanationPages.costOfMeetingCoordination.en.url,
  datePublished: '2026-09-03',
  dateModified: '2026-09-03',
  language: 'en',
  hreflang: { page: 'costOfMeetingCoordination', locale: 'en' },
} satisfies ReferenceArticleConfig;
