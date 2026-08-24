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
    // Gradient button - main CTAs (matching dark section aesthetic)
    primary: "text-white bg-gradient-to-br from-blue-900 via-brand-royal-blue to-blue-900 hover:from-blue-800 hover:via-blue-700 hover:to-blue-800",
    // Outlined button - secondary actions
    secondary: "text-brand-royal-blue-dark border border-gray-300 hover:bg-gray-50",
    // Light button - for dark backgrounds
    light: "text-brand-royal-blue bg-white hover:bg-gray-50 border border-brand-teal"
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
