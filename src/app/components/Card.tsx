interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div 
      className={`bg-surface-base border border-line-default rounded-lg p-8 
        transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer
        ${className}`}
    >
      {children}
    </div>
  );
}
