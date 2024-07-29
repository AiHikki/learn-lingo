import clsx from 'clsx';

const TeacherInfo = ({ title, desc, descStyles }) => {
  return (
    <li className="flex gap-1 font-medium text-base">
      <span className="text-secondary">{title}: </span>
      <p className={clsx('text-primary', descStyles)}>
        {desc}
      </p>
    </li>
  );
};

export default TeacherInfo;
