import { useMutation } from '@tanstack/react-query';

import { endpoint } from '@/lib/api/endpoints/endpoints';
import { apiService } from '@/lib/api/services/apiServices';
import { LoginType } from '@/lib/types/login';

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: LoginType) => {
      console.log('Login data:', data);

      return apiService.post(endpoint.login, data);
    },
  });
};
