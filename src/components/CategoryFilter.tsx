import React from 'react';
import { Hash } from 'lucide-react';

const categories = ['All', 'Technology', 'Entertainment', 'Sports', 'Business', 'Science'];

export default function CategoryFilter({ selected, onSelect }: {
  selected: string;
  onSelect: (category: string) => void;
}) {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-2">
      <Hash size={20} className="text-blue-600" />
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            selected === category
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}