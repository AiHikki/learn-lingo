import axios from 'axios';

export const fetchTeachers = async () => {
  try {
    const { data } = await axios.get('/api/teachers');

    return data;
  } catch (error) {
    console.error(error);
  }
};
