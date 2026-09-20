const BASE_URL = 'https://askmyenvoy.com';

export const explanationPages = {
  meetingCoordination: {
    en: {
      path: '/meeting-coordination',
      url: `${BASE_URL}/meeting-coordination`,
    },
    fr: {
      path: '/fr/coordination-reunions',
      url: `${BASE_URL}/fr/coordination-reunions`,
    },
  },
  costOfMeetingCoordination: {
    en: {
      path: '/cost-of-meeting-coordination',
      url: `${BASE_URL}/cost-of-meeting-coordination`,
    },
    fr: {
      path: '/fr/cout-coordination-reunions',
      url: `${BASE_URL}/fr/cout-coordination-reunions`,
    },
  },
  bookingLinksVsMeetingCoordination: {
    en: {
      path: '/booking-links-vs-meeting-coordination',
      url: `${BASE_URL}/booking-links-vs-meeting-coordination`,
    },
  },
} as const;

export type BilingualExplanationPageKey = 'meetingCoordination' | 'costOfMeetingCoordination';

export const explanationPagePaths = [
  explanationPages.meetingCoordination.en.path,
  explanationPages.meetingCoordination.fr.path,
  explanationPages.costOfMeetingCoordination.en.path,
  explanationPages.costOfMeetingCoordination.fr.path,
  explanationPages.bookingLinksVsMeetingCoordination.en.path,
] as const;

export function buildExplanationPageAlternates(
  page: BilingualExplanationPageKey,
  locale: 'en' | 'fr',
) {
  const urls = explanationPages[page];

  return {
    canonical: locale === 'en' ? urls.en.url : urls.fr.url,
    languages: {
      en: urls.en.url,
      fr: urls.fr.url,
      'x-default': urls.en.url,
    },
  };
}

export function buildExplanationPageOpenGraph(
  locale: 'en' | 'fr',
  title: string,
  description: string,
) {
  return {
    title: `${title} | Ask My Envoy`,
    description,
    locale: locale === 'fr' ? 'fr_FR' : 'en_US',
    alternateLocale: locale === 'fr' ? ['en_US'] : ['fr_FR'],
  };
}
