import axios from 'axios';

const base = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const Instance = {
  base,
};
