import axios from 'axios';

export const fetchTeachers = async (params = {}) => {
  try {
    const { data } = await axios.get('/api/teachers', {
      params,
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};
