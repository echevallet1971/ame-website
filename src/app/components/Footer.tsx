'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getPlatformUrl } from '@/lib/platform-config';

export default function Footer() {
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
    <footer className="w-full bg-surface-base border-t border-line-default">
      <div className="container">
        <div className="py-12">
          <div className="grid-footer">
            {/* Company Info */}
            <div className="col-span-1 max-w-sm">
              <div className="mb-4">
                <Image
                  src="/logo/ask-my-envoy-logo.png"
                  alt="Ask My Envoy"
                  width={375}
                  height={170}
                  className="h-12 w-auto"
                />
              </div>
            </div>

            {/* Legal */}
            <div className="md:justify-self-end">
              <h4 className="text-meta font-semibold text-ink-primary mb-4">Legal</h4>
              <ul className="stack-xs">
                <li>
                  <a 
                    href="#" 
                    onClick={handleContactClick}
                    className="text-meta text-copy-primary hover:text-ink-primary transition-colors cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <Link href="/privacy" className="text-meta text-copy-primary hover:text-ink-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-meta text-copy-primary hover:text-ink-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-line-default">
            <p className="text-meta text-copy-primary text-center">
              © {currentYear} Ask My Envoy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
