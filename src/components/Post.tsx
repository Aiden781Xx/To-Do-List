import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';

interface PostProps {
  username: string;
  location: string;
  image: string;
  likes: number;
  caption: string;
  avatar: string;
}

export default function Post({ username, location, image, likes, caption, avatar }: PostProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden"
    >
      <div className="p-4 flex items-center">
        <img 
          src={avatar} 
          alt={username} 
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="ml-3">
          <h3 className="font-semibold text-sm">{username}</h3>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>

      <div className="relative aspect-square">
        <img 
          src={image} 
          alt="Post" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div className="flex gap-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-700 hover:text-red-500 transition-colors"
            >
              <Heart size={24} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              <MessageCircle size={24} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-700 hover:text-green-500 transition-colors"
            >
              <Share2 size={24} />
            </motion.button>
          </div>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-700 hover:text-yellow-500 transition-colors"
          >
            <Bookmark size={24} />
          </motion.button>
        </div>

        <p className="font-semibold text-sm mb-1">{likes.toLocaleString()} likes</p>
        <p className="text-sm">
          <span className="font-semibold mr-2">{username}</span>
          {caption}
        </p>
      </div>
    </motion.div>
  );
}