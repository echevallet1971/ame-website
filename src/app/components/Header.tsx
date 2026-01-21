'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16 px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-brand-royal-blue-dark">
                Envoy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/product" 
              className="text-base font-normal text-gray-600 hover:text-brand-royal-blue-dark transition-colors"
            >
              Product
            </Link>
            <Link 
              href="/pricing" 
              className="text-base font-normal text-gray-600 hover:text-brand-royal-blue-dark transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="/how-it-works" 
              className="text-base font-normal text-gray-600 hover:text-brand-royal-blue-dark transition-colors"
            >
              How it works
            </Link>
            <Link 
              href="/about" 
              className="text-base font-normal text-gray-600 hover:text-brand-royal-blue-dark transition-colors"
            >
              About
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-base font-normal text-gray-600 hover:text-brand-royal-blue-dark transition-colors"
            >
              Log in
            </Link>
            <Button href="#" className="!px-6 !py-2 !text-base">
              Start free trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-brand-royal-blue-dark"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <Link 
                href="/product" 
                className="block text-base font-normal text-gray-600 hover:text-brand-royal-blue-dark"
              >
                Product
              </Link>
              <Link 
                href="/pricing" 
                className="block text-base font-normal text-gray-600 hover:text-brand-royal-blue-dark"
              >
                Pricing
              </Link>
              <Link 
                href="/how-it-works" 
                className="block text-base font-normal text-gray-600 hover:text-brand-royal-blue-dark"
              >
                How it works
              </Link>
              <Link 
                href="/about" 
                className="block text-base font-normal text-gray-600 hover:text-brand-royal-blue-dark"
              >
                About
              </Link>
              <Link 
                href="/login" 
                className="block text-base font-normal text-gray-600 hover:text-brand-royal-blue-dark pt-3 border-t border-gray-200"
              >
                Log in
              </Link>
              <Button href="#" className="w-full !px-6 !py-2 !text-base text-center">
                Start free trial
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
