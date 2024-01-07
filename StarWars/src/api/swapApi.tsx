import axios from 'axios';
import { BASE_URL } from '../utils/constants.ts';

const getPaginatedPeoples = async (page: number = 1) => {
  try {
    return await axios.get(`${BASE_URL}/people/?page=${page}`)
      .then((res) => res.data.results)
  } catch (error) {
    console.log('Error in getPaginatedPeoples', error);
  }
};

// for better performance should be specific endpoint in backend,
// where we can get only count of pages, not all peoples
const getCountPagesPaginatedPeoples = async () => {
  try {
    return await axios.get(`${BASE_URL}/people`)
      .then((res) => res.data.count);
  } catch (error) {
    console.log('Error in getCountPagesPaginatedPeoples', error);
  }
}

export { getPaginatedPeoples, getCountPagesPaginatedPeoples };
