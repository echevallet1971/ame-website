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
      ? 'px-8 py-4 button-text'
      : size === 'small'
        ? 'px-0 py-0 text-sm font-semibold'
        : 'px-6 py-2 text-base font-semibold';

  const baseStyles = 'inline-flex items-center justify-center rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl';

  const variantStyles = {
    primary: 'text-copy-inverse bg-action-primary hover:bg-action-hover',
    secondary: 'text-ink-primary border border-line-default hover:bg-surface-soft',
    text: 'text-copy-primary hover:text-ink-primary',
    light: 'text-action-primary bg-surface-base hover:bg-surface-soft border border-line-default',
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
