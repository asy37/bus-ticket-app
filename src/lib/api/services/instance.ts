import axios from 'axios';

const CLIENT_API_URL = 'http://localhost:3000';

const base = axios.create({
  baseURL: CLIENT_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const Instance = {
  base,
};
