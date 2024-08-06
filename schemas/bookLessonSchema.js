import * as yup from 'yup';

const schema = yup
  .object({
    name: yup
      .string()
      .min(2, 'Please provide your name')
      .max(50, 'Please provide your name')
      .required('Please provide your name'),
    email: yup.string().email('Please enter a valid email').required('Please provide your email'),
    phone: yup.string().required('Please provide your phone number'),
    reason: yup.string().required('Please choose one of the following options'),
  })
  .required();

export default schema;
