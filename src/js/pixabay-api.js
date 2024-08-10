import axios from 'axios';

const API_KEY = '45237903-940e6dd06b8edc671dac0e6f2';
const BASE_URL = 'https://pixabay.com/api/';
const perPage = 15;

export const fetchImages = async (query, page = 1, per_page = perPage) => {
  try {
    const params = {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page,
    };
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
