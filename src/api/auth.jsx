import axios from 'axios';
import API_URL from '../config';

export const login = async (credentials) => {
  return await axios.post(`${API_URL}/api/auth/login`, credentials);
};

export const signup = async (userData) => {
  return await axios.post(`${API_URL}/api/auth/signup`, userData);
};

export const getProfile = async (token) => {
  return await axios.get(`${API_URL}/api/auth/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
