import { useMutation, useQuery } from '@tanstack/react-query';

import { endpoint } from '@/lib/api/endpoints/endpoints';
import { apiService } from '@/lib/api/services/apiServices';
import { ApiError } from '@/lib/types/api/types';
import { CityType } from '@/lib/types/cities';
import { InquiryType } from '@/lib/types/inquiry';
import { useInquiryStore } from '@/store/useStore';

export const useHome = () => {
  const { setTrips } = useInquiryStore();
  const usePostInquiry = () => {
    return useMutation({
      mutationFn: async (data: InquiryType) => {
        const response = await apiService.post(endpoint.inquiry, data);

        if (response.data?.success === false) {
          throw new Error(response.data?.message || 'Login failed');
        }
        return response;
      },
      onSuccess: (response) => {
        setTrips(response.data);
      },
      onError: (error: ApiError) => {
        console.error('Login error:', error.response?.data || error.message);
      },
    });
  };

  const useGetCities = () => {
    return useQuery<CityType[]>({
      queryKey: ['cities'],
      queryFn: async (): Promise<CityType[]> => {
        const response = await apiService.get<CityType[]>(endpoint.cities);
        return response;
      },
    });
  };
  return { usePostInquiry, useGetCities };
};
