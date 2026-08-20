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
    <footer className="w-full bg-white border-t border-brand-border">
      <div className="container">
        <div className="px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Company Info */}
            <div className="col-span-1 max-w-sm">
              <div className="mb-4">
                <Image
                  src="/logo/ask-my-envoy-logo.png"
                  alt="Ask My Envoy"
                  width={375}
                  height={170}
                  className="h-10 w-auto"
                />
              </div>
            </div>

            {/* Legal */}
            <div className="md:justify-self-end">
              <h4 className="text-sm font-semibold text-brand-royal-blue-dark mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#" 
                    onClick={handleContactClick}
                    className="text-sm text-brand-gray hover:text-brand-royal-blue-dark transition-colors cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-brand-gray hover:text-brand-royal-blue-dark transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-brand-gray hover:text-brand-royal-blue-dark transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-brand-border">
            <p className="text-sm text-brand-gray text-center">
              © {currentYear} Ask My Envoy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
