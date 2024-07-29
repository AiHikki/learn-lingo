import clsx from 'clsx';

const ProficiencyLevel = ({ level, selected }) => {
  return (
    <li
      className={clsx(
        'py-2 px-3 border border-primary border-opacity-20 rounded-full',
        selected && 'bg-orange-300 border-orange-300'
      )}
    >
      <span className="text-primary font-medium text-sm">#{level}</span>
    </li>
  );
};

export default ProficiencyLevel;
