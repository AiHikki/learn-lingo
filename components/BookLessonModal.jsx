import Modal from 'react-modal';
import { IoClose } from 'react-icons/io5';
import BookLessonForm from './BookLessonForm';
import Image from 'next/image';
import useBodyScroll from 'hooks/useBodyScroll';

const BookLessonModal = ({ isOpen, closeModal, teacherAvatar, teacherName }) => {
  useBodyScroll(isOpen);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          border: 'none',
          borderRadius: 30,
          padding: 64,
          width: 600,
          maxHeight: '80vh',
          height: '100%',
          overflowY: 'auto',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
      closeTimeoutMS={250}
    >
      <button className="absolute top-7 right-7" onClick={closeModal}>
        <IoClose size={32} color="#121417" />
      </button>
      <div className="mb-5">
        <h2 className="text-primary font-medium text-[40px] mb-5 leading-[48px]">
          Book trial lesson
        </h2>

        <p className="text-primary text-opacity-80 text-base font-normal leading-[22px]">
          Our experienced tutor will assess your current language level, discuss your learning
          goals, and tailor the lesson to your specific needs.
        </p>
      </div>

      <div className="flex gap-[14px] mb-10 items-center">
        <Image
          className="rounded-full"
          src={teacherAvatar}
          width={44}
          height={44}
          alt="Teacher avatar"
        />
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-secondary">Your teacher</span>
          <span className="text-primary font-medium text-base">{teacherName}</span>
        </div>
      </div>

      <BookLessonForm closeModal={closeModal} />
    </Modal>
  );
};

export default BookLessonModal;
