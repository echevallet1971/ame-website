interface TimelineItemProps {
  period: string;
  phase: string;
  title: string;
  description: string;
  isCurrentPhase?: boolean;
}

export default function TimelineItem({ 
  period, 
  phase, 
  title, 
  description, 
  isCurrentPhase = false 
}: TimelineItemProps) {
  return (
    <div className="split-timeline relative">
      {/* Timeline Box */}
      <div 
        className={`flex-shrink-0 w-32 h-32 rounded-lg flex flex-col items-center justify-center relative z-10 transition-transform duration-200 hover:scale-105
          ${isCurrentPhase 
            ? 'bg-ink-primary text-copy-inverse shadow-lg' 
            : 'bg-surface-base border-2 border-ink-primary'
          }`}
      >
        <span className={`text-sm ${isCurrentPhase ? 'text-copy-muted' : 'text-copy-primary'}`}>
          {period}
        </span>
        <span className={`text-2xl font-semibold ${isCurrentPhase ? 'text-copy-inverse' : 'text-ink-primary'}`}>
          {phase}
        </span>
      </div>

      {/* Content - Add top padding to center with box */}
      <div className="flex-1 md:pt-4">
        <h3 className={`item-heading mb-3 ${isCurrentPhase ? 'text-emphasis-primary' : 'text-ink-primary'}`}>
          {title}
        </h3>
        <p className="text-body text-copy-primary">
          {description}
        </p>
      </div>
    </div>
  );
}
