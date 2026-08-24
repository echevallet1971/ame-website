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
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-action-primary to-action-hover rounded-full"></div>
        
        {/* Quote content */}
        <div className="stack-sm">
          <p className="text-lead italic text-copy-primary">
            "{quote}"
          </p>
          <p className="text-meta text-copy-muted">
            {author}
          </p>
        </div>
      </div>
    </div>
  );
}
