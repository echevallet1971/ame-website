'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LoginButton from './LoginButton';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="w-full bg-surface-base border-b border-line-default sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/ask-my-envoy-logo.png"
                alt="Ask My Envoy"
                width={375}
                height={170}
                className="h-14 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/how-it-works" 
              className="nav-text text-copy-primary hover:text-ink-primary transition-colors"
            >
              How it works
            </Link>
            <Link 
              href="/trust-and-control" 
              className="nav-text text-copy-primary hover:text-ink-primary transition-colors"
            >
              Trust &amp; Control
            </Link>
            <Link 
              href="/pricing" 
              className="nav-text text-copy-primary hover:text-ink-primary transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="/getting-started" 
              className="nav-text text-copy-primary hover:text-ink-primary transition-colors"
            >
              Getting started
            </Link>
            <Link 
              href="/about" 
              className="nav-text text-copy-primary hover:text-ink-primary transition-colors"
            >
              About
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <LoginButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-copy-primary hover:text-ink-primary"
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
          <div className="md:hidden border-t border-line-default">
            <div className="px-4 py-4 stack-tight">
              <Link 
                href="/how-it-works" 
                className="block nav-text text-copy-primary hover:text-ink-primary"
                onClick={closeMobileMenu}
              >
                How it works
              </Link>
              <Link 
                href="/trust-and-control" 
                className="block nav-text text-copy-primary hover:text-ink-primary"
                onClick={closeMobileMenu}
              >
                Trust &amp; Control
              </Link>
              <Link 
                href="/pricing" 
                className="block nav-text text-copy-primary hover:text-ink-primary"
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
              <Link 
                href="/getting-started" 
                className="block nav-text text-copy-primary hover:text-ink-primary"
                onClick={closeMobileMenu}
              >
                Getting started
              </Link>
              <Link 
                href="/about" 
                className="block nav-text text-copy-primary hover:text-ink-primary"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <div className="pt-3 border-t border-line-default">
                <LoginButton 
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
