import { LuLogIn } from 'react-icons/lu';

const LoginButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className="flex items-center gap-2">
      <LuLogIn color="#F4C550" size={20} />
      <span className="text-primary font-bold text-base">Log In</span>
    </button>
  );
};

export default LoginButton;
