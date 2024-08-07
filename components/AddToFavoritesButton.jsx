import { IoMdHeart } from 'react-icons/io';
import { IoMdHeartEmpty } from 'react-icons/io';

const AddToFavoritesButton = ({ handleClick, isFavorite }) => {
  return (
    <button onClick={handleClick} className="flex items-center justify-center">
      {isFavorite ? (
        <IoMdHeart size={26} color="#F4C550" />
      ) : (
        <IoMdHeartEmpty size={26} color="#121417" />
      )}
    </button>
  );
};

export default AddToFavoritesButton;
