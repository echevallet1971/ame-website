import type { Metadata } from 'next';
import {
  buildExplanationPageAlternates,
  type BilingualExplanationPageKey,
} from '@/lib/explanation-pages';

const SITE_URL = 'https://askmyenvoy.com';
const DEFAULT_OG_IMAGE = '/og-card.png';
const PUBLISHER_NAME = 'Ask My Envoy';
const PUBLISHER_LOGO_URL = `${SITE_URL}/og-card.png`;

export type ReferenceArticleLanguage = 'en' | 'fr';

export type ReferenceArticleConfig = {
  metaTitle: string;
  headline: string;
  description: string;
  canonical: string;
  datePublished: string;
  dateModified: string;
  language: ReferenceArticleLanguage;
  image?: string;
  imageAlt?: string;
  hreflang?: {
    page: BilingualExplanationPageKey;
    locale: ReferenceArticleLanguage;
  };
};

function absoluteImageUrl(imagePath: string): string {
  return imagePath.startsWith('http') ? imagePath : `${SITE_URL}${imagePath}`;
}

function openGraphLocale(language: ReferenceArticleLanguage): string {
  return language === 'fr' ? 'fr_FR' : 'en_US';
}

function schemaLanguage(language: ReferenceArticleLanguage): string {
  return language === 'fr' ? 'fr-FR' : 'en-US';
}

export function buildReferenceArticleMetadata(
  config: ReferenceArticleConfig,
): Metadata {
  const imagePath = config.image ?? DEFAULT_OG_IMAGE;
  const imageAlt = config.imageAlt ?? `${PUBLISHER_NAME} - ${config.metaTitle}`;
  const ogLocale = openGraphLocale(config.language);

  const alternates = config.hreflang
    ? buildExplanationPageAlternates(config.hreflang.page, config.hreflang.locale)
    : { canonical: config.canonical };

  return {
    title: config.metaTitle,
    description: config.description,
    alternates,
    openGraph: {
      type: 'article',
      url: config.canonical,
      title: config.metaTitle,
      description: config.description,
      locale: ogLocale,
      ...(config.hreflang
        ? { alternateLocale: [config.hreflang.locale === 'fr' ? 'en_US' : 'fr_FR'] }
        : {}),
      images: [
        {
          url: imagePath,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.metaTitle,
      description: config.description,
      images: [imagePath],
    },
    robots: 'index, follow',
  };
}

export function buildReferenceArticleJsonLd(config: ReferenceArticleConfig) {
  const imagePath = config.image ?? DEFAULT_OG_IMAGE;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.headline,
    description: config.description,
    datePublished: config.datePublished,
    dateModified: config.dateModified,
    inLanguage: schemaLanguage(config.language),
    author: {
      '@type': 'Organization',
      name: PUBLISHER_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: PUBLISHER_NAME,
      logo: {
        '@type': 'ImageObject',
        url: PUBLISHER_LOGO_URL,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': config.canonical,
    },
    image: absoluteImageUrl(imagePath),
  };
}

type ReferenceArticleJsonLdProps = {
  config: ReferenceArticleConfig;
};

export function ReferenceArticleJsonLd({ config }: ReferenceArticleJsonLdProps) {
  const jsonLd = buildReferenceArticleJsonLd(config);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
