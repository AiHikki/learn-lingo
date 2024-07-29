import CustomButton from './CustomButton';
import FormField from './FormField';

const RegistrationModal = () => {
  return (
    <div className="p-16 rounded-[30px]">
      {/* Add close icon */}
      <div className="mb-10">
        <span className="text-primary font-medium text-[40px] mb-5">Registration</span>
        <p className="text-primary text-opacity-80 text-base font-normal">
          Thank you for your interest in our platform! In order to register, we need some
          information. Please provide us with the following information.
        </p>
      </div>

      <form>
        <FormField placeholder="Name" />
        <FormField placeholder="Email" />
        <FormField placeholder="Password" />

        <CustomButton type="submit" otherStyles="w-full">
          Sign Up
        </CustomButton>
      </form>
    </div>
  );
};

export default RegistrationModal;
