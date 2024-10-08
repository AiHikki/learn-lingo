import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomButton from './CustomButton';
import schema from 'schemas/signUpSchema';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
import { register as signUp } from 'actions/register';
import { signIn } from 'next-auth/react';

const SignUpForm = ({ closeModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    const res = await signUp(data);
    if (res?.error) {
      alert(res.error);
    } else {
      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (res?.error) {
        alert(res.error);
        closeModal();
      }
    }
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-[18px] mb-10">
        <div className="relative">
          <input className="form_input" placeholder="Name" {...register('name')} />
          <p className="form_error">{errors.name?.message}</p>
        </div>

        <div className="relative">
          <input className="form_input" placeholder="Email" {...register('email')} />
          <p className="form_error">{errors.email?.message}</p>
        </div>

        <div className="relative">
          <input
            className="form_input"
            placeholder="Password"
            {...register('password')}
            type={showPassword ? 'text' : 'password'}
            autoComplete="off"
          />
          <p className="form_error">{errors.password?.message}</p>
          <button
            className="absolute top-[50%] translate-y-[-50%] right-[18px]"
            onClick={() => setShowPassword(prev => !prev)}
            type="button"
          >
            {showPassword ? (
              <FiEyeOff size={20} color="#121417" />
            ) : (
              <FiEye size={20} color="#121417" />
            )}
          </button>
        </div>
      </div>

      <CustomButton type="submit" otherStyles="w-full">
        Sign Up
      </CustomButton>
    </form>
  );
};

export default SignUpForm;
