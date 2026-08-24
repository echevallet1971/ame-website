import Link from 'next/link';
import Button from './components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-soft">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-ink-primary mb-4">404</h1>
        <h2 className="section-subheading text-copy-primary mb-4">Page Not Found</h2>
        <p className="text-body text-copy-primary mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Button href="/">
          Return Home
        </Button>
      </div>
    </div>
  );
}
 