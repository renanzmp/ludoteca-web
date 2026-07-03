// frontend/src/services/api.js
import axios from 'axios';

const api = axios.create({
    // URL base do nosso backend Django
    baseURL: 'http://127.0.0.1:8000/api', 
});

export default api;