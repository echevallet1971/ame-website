'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-brand-border sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16 px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-normal text-black">
                Envoy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/product" 
              className="text-base font-normal text-brand-gray hover:text-black transition-colors"
            >
              Product
            </Link>
            <Link 
              href="/pricing" 
              className="text-base font-normal text-brand-gray hover:text-black transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="/how-it-works" 
              className="text-base font-normal text-brand-gray hover:text-black transition-colors"
            >
              How it works
            </Link>
            <Link 
              href="/about" 
              className="text-base font-normal text-brand-gray hover:text-black transition-colors"
            >
              About
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-base font-normal text-brand-gray hover:text-black transition-colors"
            >
              Log in
            </Link>
            <Link 
              href="#" 
              className="inline-flex items-center px-6 py-2 text-base font-normal text-white bg-black rounded-md hover:bg-gray-800 transition-colors"
            >
              Start free trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-brand-gray hover:text-black"
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
          <div className="md:hidden border-t border-brand-border">
            <div className="px-4 py-4 space-y-3">
              <Link 
                href="/product" 
                className="block text-base font-normal text-brand-gray hover:text-black"
              >
                Product
              </Link>
              <Link 
                href="/pricing" 
                className="block text-base font-normal text-brand-gray hover:text-black"
              >
                Pricing
              </Link>
              <Link 
                href="/how-it-works" 
                className="block text-base font-normal text-brand-gray hover:text-black"
              >
                How it works
              </Link>
              <Link 
                href="/about" 
                className="block text-base font-normal text-brand-gray hover:text-black"
              >
                About
              </Link>
              <Link 
                href="/login" 
                className="block text-base font-normal text-brand-gray hover:text-black pt-3 border-t border-brand-border"
              >
                Log in
              </Link>
              <Link 
                href="#" 
                className="block text-center px-6 py-2 text-base font-normal text-white bg-black rounded-md hover:bg-gray-800"
              >
                Start free trial
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
