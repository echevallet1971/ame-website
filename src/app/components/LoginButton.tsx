'use client';

import { getPlatformUrl } from '@/lib/platform-config';

interface LoginButtonProps {
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'text' | 'light';
  size?: 'default' | 'large';
  children?: React.ReactNode;
}

export default function LoginButton({ 
  className = '', 
  onClick, 
  variant = 'primary', 
  size = 'default',
  children 
}: LoginButtonProps) {
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

  const sizeStyles = size === 'large' 
    ? "px-8 py-4 button-text"
    : "px-6 py-2 text-base font-semibold";

  const baseStyles = "inline-flex items-center justify-center rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl";
  
  const variantStyles = {
    primary: "text-copy-inverse bg-action-primary hover:bg-action-hover",
    secondary: "text-ink-primary border border-line-default hover:bg-surface-soft",
    text: "text-copy-primary hover:text-ink-primary",
    light: "text-action-primary bg-surface-base hover:bg-surface-soft border border-line-default"
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles[variant]} ${className}`}
    >
      {children || 'Sign In'}
    </button>
  );
}
