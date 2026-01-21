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
    <div className="flex flex-col md:flex-row gap-8 items-start relative">
      {/* Timeline Box */}
      <div 
        className={`flex-shrink-0 w-32 h-32 rounded-lg flex flex-col items-center justify-center relative z-10 transition-transform duration-200 hover:scale-105
          ${isCurrentPhase 
            ? 'bg-brand-royal-blue-dark text-white shadow-lg' 
            : 'bg-white border-2 border-brand-royal-blue-dark'
          }`}
      >
        <span className={`text-sm ${isCurrentPhase ? 'text-gray-300' : 'text-gray-600'}`}>
          {period}
        </span>
        <span className={`text-2xl font-normal ${isCurrentPhase ? 'text-white' : 'text-brand-royal-blue-dark'}`}>
          {phase}
        </span>
      </div>

      {/* Content - Add top padding to center with box */}
      <div className="flex-1 md:pt-4">
        <h3 className={`text-2xl font-normal mb-3 ${isCurrentPhase ? 'text-brand-gold' : 'text-brand-royal-blue-dark'}`}>
          {title}
        </h3>
        <p className="text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
