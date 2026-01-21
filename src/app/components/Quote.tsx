interface QuoteProps {
  quote: string;
  author: string;
  className?: string;
}

export default function Quote({ quote, author, className = '' }: QuoteProps) {
  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      <div className="relative pl-6 py-8">
        {/* Left border accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-royal-blue via-brand-teal to-brand-mint rounded-full"></div>
        
        {/* Quote content */}
        <div className="space-y-4">
          <p className="text-lg md:text-xl italic text-gray-700 leading-relaxed">
            "{quote}"
          </p>
          <p className="text-base text-gray-500">
            {author}
          </p>
        </div>
      </div>
    </div>
  );
}
