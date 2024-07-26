import Image from 'next/image';
import { FiBookOpen, FiHeart } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

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
  return (
    <li className="flex gap-12 bg-white p-6">
      <div className="w-[120px] h-[120px] border-[3px] border-orange-100 rounded-full flex items-center justify-center">
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
      <div>
        <div className="flex justify-between items-start">
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

        <ul></ul>
      </div>
    </li>
  );
};

export default TeacherCard;
