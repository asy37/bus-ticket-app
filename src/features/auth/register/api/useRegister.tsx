import { useMutation } from '@tanstack/react-query';

import { endpoint } from '@/lib/api/endpoints/endpoints';
import { apiService } from '@/lib/api/services/apiServices';
import { RegisterType } from '@/lib/types/register';

export const useRegister = () => {
  return useMutation({
    mutationFn: async (data: RegisterType) => {
      return apiService.post(endpoint.register, data);
    },
  });
};
