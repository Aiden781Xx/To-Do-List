import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="w-full h-full object-cover"
          alt="Pottery Hero"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Handcrafted Pottery</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Discover our collection of unique, handmade pottery pieces that bring artistry to your everyday life.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-100 transition-colors">
            <span>Shop Now</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}