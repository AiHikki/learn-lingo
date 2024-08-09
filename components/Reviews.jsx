import clsx from 'clsx';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const Reviews = ({ reviews, containerStyles }) => {
  return (
    <ul className={clsx('flex flex-col gap-8', containerStyles)}>
      {reviews.map(({ comment, reviewer_rating, reviewer_name, avatar_url }, i) => (
        <li key={i}>
          <div className="flex items-center gap-3 mb-4">
            <div>
              {avatar_url ? (
                <Image
                  src={avatar_url}
                  width={44}
                  height={44}
                  loading="lazy"
                  alt="Reviewer avatar"
                />
              ) : (
                <div className="w-11 h-11 rounded-full flex justify-center items-center bg-orange-300 bg-opacity-20">
                  <span className="font-medium text-xl text-orange-300">{reviewer_name[0]}</span>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-secondary font-medium text-base">{reviewer_name}</span>
              <div className="flex gap-2 items-center">
                <FaStar size={16} color="#FFC531" />
                <span className="text-primary font-medium text-sm">{reviewer_rating}</span>
              </div>
            </div>
          </div>
          <p className="text-primary font-medium text-base">{comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
