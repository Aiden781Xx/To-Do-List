import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: 'Ceramic Vase',
    price: 89.99,
    description: 'Handcrafted ceramic vase with unique glazing',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80',
    rating: 4.8,
    reviews: 124,
    category: 'Vases'
  },
  // Add more products here
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <div className="flex items-center mb-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">${product.price}</span>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}