import { toast } from 'react-toastify';

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
      const response = await apiService.post(endpoint.login, {
        email: data.email,
        password: data.password,
      });
      return response;
    },
    onSuccess: (response) => {
      storageHandler.post('user', response.data);
      setIsAuthenticated(true);

      toast.success('Login Success!');
    },
    onError: (error: any) => {
      const message =
        error.response?.data?.message || error.message || 'Giriş sırasında bir hata oluştu';
      toast.error(message);
    },
  });
};
