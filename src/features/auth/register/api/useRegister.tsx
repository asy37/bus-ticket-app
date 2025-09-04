import { useMutation } from '@tanstack/react-query';

import { endpoint } from '@/lib/api/endpoints/endpoints';
import { apiService } from '@/lib/api/services/apiServices';

export const useRegister = () => {
  return useMutation({
    mutationFn: async (data) => {
      return apiService.post(endpoint.register, data);
    },
  });
};
