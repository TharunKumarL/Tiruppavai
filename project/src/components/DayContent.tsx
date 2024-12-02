import React from 'react';
import { BookOpen, Calendar } from 'lucide-react';
import { TiruppavaiDay } from '../types';

interface DayContentProps {
  day: number;
  content: TiruppavaiDay | null;
}

const DayContent: React.FC<DayContentProps> = ({ day, content }) => {
  if (!content) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Content for Day {day} is not available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="border-b border-orange-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="h-6 w-6 text-orange-600" />
          <h2 className="text-2xl font-bold text-orange-800">
            Day {day} - {content.title}
          </h2>
        </div>
        <div className="flex items-center gap-2 text-orange-600">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">{content.date}</span>
        </div>
        {content.description && (
          <p className="mt-2 text-gray-600 italic">{content.description}</p>
        )}
      </div>

      
      <div className="space-y-6">
        <div className="bg-amber-50 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-orange-800 mb-4">పాశురం</h3>
          {content.verses.map((verse, index) => (
            <p key={index} className="text-lg leading-relaxed whitespace-pre-line">
              {verse}
            </p>
          ))}
        </div>

        <div className="bg-green-50 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-green-800 mb-4">తాత్పర్యం</h3>
          <p className="text-lg leading-relaxed whitespace-pre-line">
            {content.meaning}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DayContent;