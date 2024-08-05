import Modal from 'react-modal';
import LoginForm from './LoginForm';
import { IoClose } from 'react-icons/io5';

const LoginModal = ({ isOpen, closeModal }) => {
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
        <h2 className="text-primary font-medium text-[40px] mb-5">Log In</h2>

        <p className="text-primary text-opacity-80 text-base font-normal">
          Welcome back! Please enter your credentials to access your account and continue your
          search for an teacher.
        </p>
      </div>

      <LoginForm closeModal={closeModal} />
    </Modal>
  );
};

export default LoginModal;
