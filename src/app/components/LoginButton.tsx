'use client';

import { getPlatformUrl } from '@/lib/platform-config';

interface LoginButtonProps {
  className?: string;
  onClick?: () => void;
}

export default function LoginButton({ className = '', onClick }: LoginButtonProps) {
  const handleClick = async () => {
    onClick?.();
    try {
      // Open platform signin in new tab (consistent with other platform links)
      const platformSigninUrl = await getPlatformUrl('signin');
      window.open(platformSigninUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to get platform URL:', error);
      // Fallback or error handling
      alert('Unable to connect to platform. Please try again.');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`text-base font-normal text-gray-600 hover:text-brand-royal-blue-dark transition-colors ${className}`}
    >
      Sign in
    </button>
  );
}
