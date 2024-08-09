import { IoMdHeart } from 'react-icons/io';
import { IoMdHeartEmpty } from 'react-icons/io';
import { motion } from 'framer-motion';

const AddToFavoritesButton = ({ handleClick, isFavorite }) => {
  return (
    <button onClick={handleClick} className="flex items-center justify-center">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isFavorite ? 1 : 0.7 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        {isFavorite ? (
          <motion.div
            initial={{ color: '#F4C550' }}
            animate={{ color: isFavorite ? '#F4C550' : '#121417' }}
            transition={{ duration: 0.3 }}
          >
            <IoMdHeart size={26} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ color: '#121417' }}
            animate={{ color: isFavorite ? '#F4C550' : '#121417' }}
            transition={{ duration: 0.3 }}
          >
            <IoMdHeartEmpty size={26} />
          </motion.div>
        )}
      </motion.div>
    </button>
  );
};

export default AddToFavoritesButton;
