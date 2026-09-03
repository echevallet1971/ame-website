import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import ClsProbe from './components/ClsProbe';
import { getWebsiteVersionLabel } from '@/lib/system-version';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://askmyenvoy.com'),
  title: {
    default: 'Ask My Envoy | AI Scheduling Assistant',
    template: '%s | Ask My Envoy'
  },
  description: 'Intelligent meeting scheduling assistant powered by AI. Let your AI envoy handle your calendar.',
  keywords: ['AI scheduling', 'meeting assistant', 'calendar management', 'automated scheduling'],
  authors: [{ name: 'Ask My Envoy' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://askmyenvoy.com',
  },
  openGraph: {
    type: 'website',
    siteName: 'Ask My Envoy',
    images: [
      {
        url: '/og-card.png',
        width: 1200,
        height: 630,
        alt: 'Ask My Envoy - AI meeting coordination'
      }
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-card.png'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const versionLabel = await getWebsiteVersionLabel();

  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>
        <ClsProbe />
        <Header />
        <main>
          {children}
        </main>
        <Footer versionLabel={versionLabel} />
      </body>
    </html>
  );
}
