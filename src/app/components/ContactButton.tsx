'use client';

import { getPlatformUrl } from '@/lib/platform-config';

interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'text' | 'light';
  size?: 'default' | 'large' | 'small';
  children?: React.ReactNode;
}

export default function ContactButton({
  className = '',
  onClick,
  variant = 'primary',
  size = 'default',
  children,
}: ContactButtonProps) {
  const handleClick = async () => {
    onClick?.();
    try {
      const platformContactUrl = await getPlatformUrl('contact');
      window.open(platformContactUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to get contact URL:', error);
      alert('Unable to connect to platform. Please try again.');
    }
  };

  const sizeStyles =
    size === 'large'
      ? 'px-8 py-4 text-lg'
      : size === 'small'
        ? 'px-0 py-0 text-sm'
        : 'px-6 py-2 text-base';

  const baseStyles = 'inline-flex items-center justify-center font-normal rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl';

  const variantStyles = {
    primary: 'text-white bg-gradient-to-br from-blue-900 via-brand-royal-blue to-blue-900 hover:from-blue-800 hover:via-blue-700 hover:to-blue-800',
    secondary: 'text-brand-royal-blue-dark border border-gray-300 hover:bg-gray-50',
    text: 'text-gray-600 hover:text-brand-royal-blue-dark',
    light: 'text-brand-royal-blue bg-white hover:bg-gray-50 border border-brand-teal',
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles[variant]} ${className}`}
    >
      {children || 'Contact us'}
    </button>
  );
}
