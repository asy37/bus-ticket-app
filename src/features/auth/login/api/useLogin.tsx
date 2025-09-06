import { useMutation } from '@tanstack/react-query';

import { endpoint } from '@/lib/api/endpoints/endpoints';
import { apiService } from '@/lib/api/services/apiServices';
import { storageHandler } from '@/lib/handler/storageHandler';
import { LoginType } from '@/lib/types/login';
import { useStore } from '@/store/useStore';

export const useLogin = () => {
  const { setIsAuthenticated } = useStore();
  return useMutation({
    mutationFn: async (data: LoginType) => {
      const response = await apiService.post(endpoint.login, data);
      if (response.data?.success === false) {
        throw new Error(response.data?.message || 'Login failed');
      }
      return response;
    },
    onSuccess: (response) => {
      storageHandler.post('user', response.data);
      setIsAuthenticated(true);
    },
    onError: (error: any) => {
      console.error('Login error:', error.response?.data || error.message);
    },
  });
};
