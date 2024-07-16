import axios from 'axios';
import API_URL from '../config';

export const getItems = async () => {
  return await axios.get(`${API_URL}/items`);
};

export const getItem = async (id) => {
  return await axios.get(`${API_URL}/items/${id}`);
};

export const createItem = async (itemData) => {
  return await axios.post(`${API_URL}/items`, itemData);
};

export const updateItem = async (id, itemData) => {
  return await axios.put(`${API_URL}/items/${id}`, itemData);
};

export const deleteItem = async (id) => {
  return await axios.delete(`${API_URL}/items/${id}`);
};
