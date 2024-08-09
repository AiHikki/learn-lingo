import React from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { motion } from 'framer-motion';

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-16">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
      >
        <HiMagnifyingGlass size={60} color="#121417" />
      </motion.div>
      <div className="text-2xl font-bold mb-4 mt-4 text-orange-300">No Data Found</div>
      <p className="text-primary font-normal text-base">
        Try adjusting your filters or check back later.
      </p>
    </div>
  );
};

export default EmptyState;
