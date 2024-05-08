// src/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://3.66.122.244:3001',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api

