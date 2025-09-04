import { Instance } from './instance';

const post = async <T>(endpoint: string, data: T) => {
  const response = await Instance.base.post(endpoint, data);
  return response.data;
};

const get = async <T>(endpoint: string) => {
  const response = await Instance.base.get<T>(endpoint);
  return response.data;
};

const put = async <T>(endpoint: string, data: T) => {
  const response = await Instance.base.put(endpoint, data);
  return response.data;
};

const del = async (endpoint: string) => {
  const response = await Instance.base.delete(endpoint);
  return response.data;
};

export const apiService = {
  post,
  get,
  put,
  del,
};
