import CustomButton from './CustomButton';
import FormField from './FormField';

const BookLessonModal = ({ teacher: { name, surname, avatar_url } }) => {
  return (
    <div className="p-16 rounded-[30px]">
      {/* Add close icon */}
      <div className="mb-10">
        <span className="text-primary font-medium text-[40px] mb-5">Book trial lesson</span>
        <p className="text-primary text-opacity-80 text-base font-normal">
          Our experienced tutor will assess your current language level, discuss your learning
          goals, and tailor the lesson to your specific needs.
        </p>
      </div>

      <div></div>

      <form>
        <FormField placeholder="Full Name" />
        <FormField placeholder="Email" />
        <FormField placeholder="Phone number" />

        <CustomButton type="submit" otherStyles="w-full">
          Book
        </CustomButton>
      </form>
    </div>
  );
};

export default BookLessonModal;
