'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TooltipLink({ children, text }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}&nbsp;

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50"
            style={{ maxWidth: '400px', width: '400px' }}
          >
            <div className="bg-gray-800 text-white text-sm px-3 py-3 rounded-lg shadow-lg relative">
              {text}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 
                              border-l-6 border-l-transparent border-r-6 border-r-transparent 
                              border-t-6 border-t-gray-800"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
