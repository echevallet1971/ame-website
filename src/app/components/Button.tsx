import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'light';
  className?: string;
}

export default function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 button-text rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl";
  
  const variantStyles = {
    // Primary CTA using brand palette
    primary: "text-copy-inverse bg-action-primary hover:bg-action-hover",
    // Outlined button - secondary actions
    secondary: "text-ink-primary border border-line-default hover:bg-surface-soft",
    // Light button - for dark backgrounds
    light: "text-action-primary bg-surface-base hover:bg-surface-soft border border-line-default"
  };

  return (
    <Link 
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
