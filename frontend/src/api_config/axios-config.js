// src/axios-config.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8001/api', // Adjust base URL as needed
  timeout: 5000, // Optional timeout configuration
  headers: {
    'Content-Type': 'application/json',
    // Add any additional headers here
  }
});

export default instance;
