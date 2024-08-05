import * as yup from 'yup';

const schema = yup
  .object({
    name: yup
      .string()
      .min(2, 'Please provide your name')
      .max(50, 'Please provide your name')
      .required('Please provide your name'),
    email: yup.string().email('Please enter a valid email').required('Please provide your email'),
    password: yup.string().min(8).required('Please enter your password'),
  })
  .required();

export default schema;
