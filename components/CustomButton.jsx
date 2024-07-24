import clsx from 'clsx';

const CustomButton = ({ otherStyles, handleClick, isLoading }) => {
  return (
    <button
      onClick={handleClick}
      className={clsx(
        'bg-orange-300 h-[60px] rounded-xl font-bold text-primary text-lg hover:bg-orange-200',
        isLoading && 'opacity-70',
        otherStyles
      )}
      disabled={isLoading}
    >
      {children}
    </button>
  );
};

export default CustomButton;
