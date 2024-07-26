import { ImPlus } from 'react-icons/im';

const FeaturesItem = ({ title, subtitle }) => {
  return (
    <li className="flex gap-4 max-h-9 items-center">
      <span className="font-medium text-[28px] text-primary">{title} +</span>
      <p className="font-normal text-sm text-primary text-opacity-70 max-w-[96px]">{subtitle}</p>
    </li>
  );
};

export default FeaturesItem;
