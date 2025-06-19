import React from 'react';
import { Clock } from 'lucide-react';

const timeRanges = ['Past 24 hours', 'Past Week', 'Past Month', 'Past Year'];

export default function TimeFilter({ selected, onSelect }: { 
  selected: string;
  onSelect: (range: string) => void;
}) {
  return (
    <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm p-1">
      <Clock size={16} className="text-gray-500 ml-2" />
      {timeRanges.map((range) => (
        <button
          key={range}
          onClick={() => onSelect(range)}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
            selected === range
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {range}
        </button>
      ))}
    </div>
  );
}