import Link from 'next/link';
import Button from '../components/Button';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
      <div className="text-center px-4 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-normal text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-xl text-gray-300 mb-4">
          We're putting the finishing touches on this page.
        </p>
        <p className="text-lg text-gray-400 mb-8">
          In the meantime, head back home to learn how Ask My Envoy can give you your time back.
        </p>
        <Button href="/">
          Return Home
        </Button>
      </div>
    </div>
  );
}
