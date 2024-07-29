const RegistrationButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-primary h-12 px-10 rounded-xl font-bold text-white text-base hover:opacity-80 transition-opacity"
    >
      Registration
    </button>
  );
};

export default RegistrationButton;
