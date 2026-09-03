'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getPlatformUrl } from '@/lib/platform-config';

type FooterProps = {
  versionLabel: string;
};

export default function Footer({ versionLabel }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleContactClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const platformContactUrl = await getPlatformUrl('contact');
      window.open(platformContactUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to get contact URL:', error);
      alert('Unable to connect to platform. Please try again.');
    }
  };

  return (
    <footer className="w-full bg-surface-base border-t border-line-default shadow-[0_-1px_6px_rgba(15,23,42,0.05)]">
      <div className="container">
        <div className="py-5 md:py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="stack-xs text-center md:text-left">
              <Image
                src="/logo/ask-my-envoy-logo.png"
                alt="Ask My Envoy"
                width={375}
                height={170}
                className="h-8 w-auto mx-auto md:mx-0"
              />
              <p className="text-meta text-action-primary">AI meeting coordination without the back-and-forth.</p>
            </div>

            <div className="flex flex-col gap-1 items-center md:items-end text-center md:text-right">
              <a
                href="#"
                onClick={handleContactClick}
                className="block text-meta text-action-primary hover:text-ink-primary transition-colors cursor-pointer"
              >
                Contact
              </a>
              <Link href="/privacy" className="block text-meta text-action-primary hover:text-ink-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-meta text-action-primary hover:text-ink-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-3 pt-3 border-t border-line-default">
            <p className="text-xs text-ink-primary/70 text-center">
              © {currentYear} Ask My Envoy. All rights reserved. {versionLabel}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
