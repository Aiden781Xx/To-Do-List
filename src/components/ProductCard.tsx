import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../store/useStore';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button
            onClick={() => onViewDetails(product)}
            className="bg-white text-gray-800 p-2 rounded-full mx-2 hover:bg-blue-500 hover:text-white transition-colors"
          >
            <Eye size={20} />
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-white text-gray-800 p-2 rounded-full mx-2 hover:bg-blue-500 hover:text-white transition-colors"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-blue-600 font-medium">${product.price}</span>
          <span className="text-sm text-gray-500">{product.category}</span>
        </div>
      </div>
    </motion.div>
  );
}