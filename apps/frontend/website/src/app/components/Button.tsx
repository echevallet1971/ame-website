import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-normal rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl";
  
  const variantStyles = {
    primary: "text-white bg-black hover:bg-gray-800",
    secondary: "text-black border border-gray-300 hover:bg-gray-50"
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
