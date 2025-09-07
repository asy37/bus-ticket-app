import { useMutation } from '@tanstack/react-query';

import { endpoint } from '@/lib/api/endpoints/endpoints';
import { apiService } from '@/lib/api/services/apiServices';
import { Payment } from '@/lib/types/payment/types';

export const usePayment = () => {
  return useMutation({
    mutationFn: async (data: Payment) => {
      const response = await apiService.post(endpoint.pay, data);

      if (response.data?.success === false) {
        throw new Error(response.data?.message || 'Login failed');
      }
      return response;
    },
  });
};
