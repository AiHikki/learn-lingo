import CustomButton from './CustomButton';
import FormField from './FormField';

const LoginModal = () => {
  return (
    <div className="p-16 rounded-[30px]">
      {/* Add close icon */}
      <div className="mb-10">
        <span className="text-primary font-medium text-[40px] mb-5">Log In</span>
        <p className="text-primary text-opacity-80 text-base font-normal">
          Welcome back! Please enter your credentials to access your account and continue your
          search for an teacher.
        </p>
      </div>

      <form>
        <FormField placeholder="Email" />
        <FormField placeholder="Password" />

        <CustomButton type="submit" otherStyles="w-full">
          Log In
        </CustomButton>
      </form>
    </div>
  );
};

export default LoginModal;
