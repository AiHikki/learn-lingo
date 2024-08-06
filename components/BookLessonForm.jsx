import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomButton from './CustomButton';
import schema from 'schemas/bookLessonSchema';
import { IoMdRadioButtonOn } from 'react-icons/io';

const BookLessonForm = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log(data);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="mb-10">
        <legend className="text-primary font-medium text-2xl mb-5">
          What is your main reason for learning this language?
        </legend>

        <div className="flex flex-col gap-4">
          <label className="flex gap-2 items-center">
            <input
              className="hidden peer"
              type="radio"
              {...register('reason')}
              value="Career and business"
              defaultChecked
            />
            <IoMdRadioButtonOn
              className="text-primary text-opacity-20 peer-checked:text-orange-300"
              size={24}
            />
            <p className="font-normal text-base text-primary">Career and business</p>
          </label>

          <label className="flex gap-2 items-center">
            <input
              className="hidden peer"
              type="radio"
              {...register('reason')}
              value="Lesson for kids"
            />
            <IoMdRadioButtonOn className="radio_btn" size={24} />
            <p className="font-normal text-base text-primary">Lesson for kids</p>
          </label>

          <label className="flex gap-2 items-center">
            <input
              className="hidden peer"
              type="radio"
              {...register('reason')}
              value="Living abroad"
            />
            <IoMdRadioButtonOn className="radio_btn" size={24} />
            <p className="font-normal text-base text-primary">Living abroad</p>
          </label>

          <label className="flex gap-2 items-center">
            <input
              className="hidden peer"
              type="radio"
              {...register('reason')}
              value="Exams and coursework"
            />
            <IoMdRadioButtonOn className="radio_btn" size={24} />
            <p className="font-normal text-base text-primary">Exams and coursework</p>
          </label>

          <label className="flex gap-2 items-center">
            <input
              className="hidden peer"
              type="radio"
              {...register('reason')}
              value="Culture, travel or hobby"
            />
            <IoMdRadioButtonOn className="radio_btn" size={24} />
            <p className="font-normal text-base text-primary">Culture, travel or hobby</p>
          </label>
        </div>
      </fieldset>

      <div className="flex flex-col gap-[18px] mb-10">
        <div className="relative">
          <input className="form_input" placeholder="Full Name" {...register('name')} />
          <p className="form_error">{errors.name?.message}</p>
        </div>

        <div className="relative">
          <input className="form_input" placeholder="Email" {...register('email')} />
          <p className="form_error">{errors.email?.message}</p>
        </div>

        <div className="relative">
          <input className="form_input" placeholder="Phone number" {...register('phone')} />
          <p className="form_error">{errors.phone?.message}</p>
        </div>
      </div>

      <CustomButton type="submit" otherStyles="w-full">
        Book
      </CustomButton>
    </form>
  );
};

export default BookLessonForm;
