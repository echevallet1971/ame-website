import type { Metadata } from 'next';
import Button from '../components/Button';

export const metadata: Metadata = {
  title: 'Coming soon',
  robots: 'noindex, follow',
};

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ink-primary via-action-hover to-ink-primary">
      <div className="text-center px-4 max-w-2xl">
        <h1 className="hero-heading text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lead text-copy-inverse/80 mb-4">
          We're putting the finishing touches on this page.
        </p>
        <p className="text-body text-copy-inverse/70 mb-8">
          In the meantime, head back home to learn how Ask My Envoy can give you your time back.
        </p>
        <Button href="/">
          Return Home
        </Button>
      </div>
    </div>
  );
}
