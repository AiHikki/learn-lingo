import Modal from 'react-modal';
import { IoClose } from 'react-icons/io5';
import SignUpForm from './SignUpForm';

const SignUpModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          border: 'none',
          borderRadius: 30,
          padding: 64,
          width: 566,
          height: 'fit-content',
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
      <div className="mb-10">
        <h2 className="text-primary font-medium text-[40px] mb-5">Registration</h2>

        <p className="text-primary text-opacity-80 text-base font-normal">
          Thank you for your interest in our platform! In order to register, we need some
          information. Please provide us with the following information.
        </p>
      </div>

      <SignUpForm closeModal={closeModal} />
    </Modal>
  );
};

export default SignUpModal;
