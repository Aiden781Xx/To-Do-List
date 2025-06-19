import React from 'react';
import { motion } from 'framer-motion';

interface StoryProps {
  username: string;
  avatar: string;
  hasStory: boolean;
}

export default function Story({ username, avatar, hasStory }: StoryProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center"
    >
      <div className={`p-1 rounded-full ${hasStory ? 'bg-gradient-to-tr from-yellow-400 to-pink-600' : 'bg-gray-200'}`}>
        <div className="bg-white p-0.5 rounded-full">
          <img 
            src={avatar} 
            alt={username} 
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
      </div>
      <p className="text-xs mt-1 truncate w-16 text-center">{username}</p>
    </motion.div>
  );
}