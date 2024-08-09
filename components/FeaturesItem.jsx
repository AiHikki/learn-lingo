const FeaturesItem = ({ title, subtitle }) => {
  return (
    <div className="flex gap-4 max-h-9 items-center">
      <span className="font-medium text-[28px] text-primary">{title} +</span>
      <p className="font-normal text-sm text-primary text-opacity-70 max-w-[96px]">{subtitle}</p>
    </div>
  );
};

export default FeaturesItem;
