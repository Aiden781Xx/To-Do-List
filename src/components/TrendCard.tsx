import React from 'react';
import { TrendingUp, Users, Globe2, ArrowUpRight } from 'lucide-react';

interface TrendCardProps {
  title: string;
  category: string;
  searches: string;
  growth: string;
  image: string;
}

export default function TrendCard({ title, category, searches, growth, image }: TrendCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 flex gap-4">
      <img 
        src={image} 
        alt={title} 
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-1">
          <Globe2 size={16} />
          {category}
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <div className="flex gap-4">
          <div className="flex items-center gap-1 text-gray-600">
            <Users size={16} />
            <span className="text-sm">{searches}</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-600">
            <TrendingUp size={16} />
            <span className="text-sm">{growth}</span>
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}