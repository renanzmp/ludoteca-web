import axios from 'axios';

const API = axios.create({
  baseURL: 'https://ludoteca-api-ly90.onrender.com',
});

// Intercetor para anexar o Token JWT automaticamente em cada requisição
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;