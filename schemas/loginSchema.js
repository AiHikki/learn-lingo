import * as yup from 'yup';

const schema = yup
  .object({
    email: yup.string().email('Please enter a valid email').required('Please provide your email'),
    password: yup.string().required('Please enter your password'),
  })
  .required();

export default schema;
