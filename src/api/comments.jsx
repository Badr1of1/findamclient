import axios from 'axios';
import API_URL from '../config';

export const getComments = async (itemId) => {
  return await axios.get(`${API_URL}items/${itemId}/comments`);
};

export const addComment = async (itemId, commentData) => {
  return await axios.post(`${API_URL}items/${itemId}/comments`, commentData);
};


