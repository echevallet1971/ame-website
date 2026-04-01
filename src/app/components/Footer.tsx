'use client';

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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-brand-royal-blue-dark mb-4">Envoy</h3>
              <p className="text-sm text-brand-gray">
                AI-powered scheduling made simple
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-sm font-semibold text-brand-royal-blue-dark mb-4">Product</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/coming-soon" className="text-sm text-brand-gray hover:text-brand-royal-blue-dark transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-sm text-brand-gray hover:text-brand-royal-blue-dark transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon" className="text-sm text-brand-gray hover:text-brand-royal-blue-dark transition-colors">
                    How it works
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-brand-royal-blue-dark mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-brand-gray hover:text-brand-royal-blue-dark transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={handleContactClick}
                    className="text-sm text-brand-gray hover:text-brand-royal-blue-dark transition-colors cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-brand-royal-blue-dark mb-4">Legal</h4>
              <ul className="space-y-3">
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
