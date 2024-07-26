const FormField = ({ placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className="w-full border border-primary border-opacity-10 rounded-xl text-primary placeholder:text-opacity-70 font-normal text-base"
    />
  );
};

export default FormField;
