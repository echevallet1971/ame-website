import { explanationPages } from '@/lib/explanation-pages';
import type { ReferenceArticleConfig } from '@/lib/reference-article';

export const referenceArticle = {
  metaTitle: 'Meeting Coordination vs Meeting Scheduling: What’s the Difference?',
  headline: 'Meeting coordination vs meeting scheduling: what’s the difference?',
  description:
    'Meeting coordination is the workflow that turns the intention to meet into a confirmed meeting. Meeting scheduling is its final step, not the whole workflow.',
  canonical: explanationPages.meetingCoordination.en.url,
  datePublished: '2026-09-02',
  dateModified: '2026-09-23',
  language: 'en',
  hreflang: { page: 'meetingCoordination', locale: 'en' },
} satisfies ReferenceArticleConfig;
