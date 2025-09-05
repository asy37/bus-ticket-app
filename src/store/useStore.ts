import { create } from 'zustand';

import { InquiryType } from '@/lib/types/inquiry';

interface AuthStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export const useStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
}));

type InquiryStore = {
  trips: InquiryType[];
  setTrips: (trips: InquiryType[]) => void;
};

export const useInquiryStore = create<InquiryStore>((set) => ({
  trips: [],
  setTrips: (trips) => set({ trips }),
}));
