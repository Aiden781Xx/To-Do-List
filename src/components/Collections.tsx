import React from 'react';
import { Star } from 'lucide-react';

const collections = [
  {
    id: 1,
    name: 'Modern Minimalist',
    description: 'Clean lines and simple forms define this contemporary collection.',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=80',
    items: 12,
    rating: 4.9
  },
  {
    id: 2,
    name: 'Rustic Charm',
    description: 'Earthy tones and organic textures for a natural aesthetic.',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80',
    items: 8,
    rating: 4.8
  },
  {
    id: 3,
    name: 'Luxury Gold',
    description: 'Elegant pieces featuring metallic accents and refined details.',
    image: 'https://images.unsplash.com/photo-1705789640170-5ef7c2f1c3ac?w=800&q=80',
    items: 15,
    rating: 5.0
  }
];

export default function Collections() {
  return (
    <div className="pt-20 min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4">Our Collections</h1>
        <p className="text-xl text-gray-600 mb-12">Explore our curated selections of premium pottery</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                  {collection.items} pieces
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                <p className="text-gray-600 mb-4">{collection.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-medium">{collection.rating}</span>
                  </div>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}