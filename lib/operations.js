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

export const fetchFavoriteTeachers = async (params = {}) => {
  try {
    const { data } = await axios.get('/api/favorites', {
      params,
    });

    console.log(data, '----OP---');

    return data;
  } catch (error) {
    console.error(error);
  }
};
