import { useMutation } from '@tanstack/react-query';

import { endpoint } from '@/lib/api/endpoints/endpoints';
import { apiService } from '@/lib/api/services/apiServices';
import { Trip } from '@/lib/types/inquiry';

export const useTrip = () => {
  return useMutation({
    mutationFn: async (data: Trip) => {
      const response = await apiService.post(endpoint.trip, data);

      if (response.data?.success === false) {
        throw new Error(response.data?.message || 'Login failed');
      }
      return response;
    },
  });
};
