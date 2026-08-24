import Link from 'next/link';
import Button from './components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-brand-royal-blue-dark mb-4">404</h1>
        <h2 className="section-subheading text-brand-gray mb-4">Page Not Found</h2>
        <p className="text-body text-brand-gray mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Button href="/">
          Return Home
        </Button>
      </div>
    </div>
  );
}
 