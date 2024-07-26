import clsx from 'clsx';

const RegistrationButton = () => {
  return (
    <button
      className={clsx(
        'bg-primary h-12 px-10 rounded-xl font-bold text-white text-base hover:opacity-80 transition-opacity'
        // isLoading && 'opacity-70'
      )}
      // disabled={isLoading}
    >
      Registration
    </button>
  );
};

export default RegistrationButton;
