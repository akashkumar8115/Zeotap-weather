import axios from 'axios';

// Set the base URL for all Axios requests
const api = axios.create({
    baseURL: 'http://localhost:5002/api'
});

export default api;
