import Image from 'next/image';
import { FiBookOpen, FiHeart } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import TeacherInfo from './TeacherInfo';
import ProficiencyLevel from './ProficiencyLevel';
import { useState } from 'react';
import Reviews from './Reviews';
import CustomButton from './CustomButton';

const TeacherCard = ({
  teacher: {
    name,
    surname,
    languages,
    lesson_info,
    levels,
    rating,
    reviews,
    price_per_hour,
    lessons_done,
    avatar_url,
    conditions,
    experience,
  },
}) => {
  const [readMore, setReadMore] = useState(false);

  const openModal = () => {
    // Add open modal logic
  };

  return (
    <li className="flex gap-12 bg-white p-6 max-w-[1184px] rounded-3xl">
      <div className="w-[120px] h-[120px] border-[3px] border-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
        <Image
          src={avatar_url}
          width={96}
          height={96}
          quality={100}
          alt="A picture of the teacher"
          loading="lazy"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <div className="flex justify-between items-start mb-8 w-[968px]">
          <div className="flex flex-col gap-2">
            <span className="text-secondary font-medium text-base">Languages</span>
            <span className="text-primary font-medium text-2xl">
              {name} {surname}
            </span>
          </div>

          <div className="flex items-center gap-16">
            <ul className="flex items-center gap-8">
              <li className="flex items-center gap-2">
                <FiBookOpen size={16} color="#121417" />
                <span className="teacher_info">Lessons online</span>
              </li>
              <li>
                <span>Lessons done: {lessons_done}</span>
              </li>
              <li className="flex items-center gap-2">
                <FaStar color="#FFC531" size={16} />
                <span className="teacher_info">Rating: {rating}</span>
              </li>
              <li>
                <span className="teacher_info">
                  Price/1 hour: <span className="text-green-300">{price_per_hour}$</span>
                </span>
              </li>
            </ul>
            <div>
              <button className="flex items-center justify-center">
                <FiHeart size={26} color="#121417" />
              </button>
            </div>
          </div>
        </div>

        <ul className="flex flex-col gap-2 mb-4">
          <TeacherInfo
            title="Speaks"
            desc={languages.join(', ')}
            descStyles="underline underline-offset-2 decoration-1"
          />
          <TeacherInfo title="Lesson Info" desc={lesson_info} />
          <TeacherInfo title="Conditions" desc={conditions.join(' ')} />
        </ul>

        {!readMore && (
          <button
            onClick={() => setReadMore(true)}
            className="text-primary font-medium text-base underline underline-offset-2 decoration-1 mb-8 w-[78px]"
          >
            Read more
          </button>
        )}

        {readMore && (
          <>
            <p className="text-primary font-normal text-base mb-8">{experience}</p>

            {reviews.length > 0 && <Reviews reviews={reviews} containerStyles="mb-8" />}
          </>
        )}

        <ul className="flex gap-2">
          {levels.map((level, i) => (
            <ProficiencyLevel level={level} key={i} />
          ))}
        </ul>

        {readMore && (
          <CustomButton handleClick={openModal} otherStyles="w-[232px] mt-8">
            Book trial lesson
          </CustomButton>
        )}
      </div>
    </li>
  );
};

export default TeacherCard;
