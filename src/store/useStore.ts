import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Trip } from '@/lib/types/inquiry';

interface AuthStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export const useStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
}));

type InquiryStore = {
  tripsStore: Trip[];
  setTrips: (tripsStore: Trip[]) => void;
};

export const useInquiryStore = create<InquiryStore>()(
  persist(
    (set) => ({
      tripsStore: [],
      setTrips: (tripsStore) => set({ tripsStore }),
    }),
    {
      name: 'inquiry-storage', // localStorage key
    }
  )
);

type TripDetail = {
  tripInfo: Trip | null;
  selectedSeats: { seatNumber: number; gender: 'male' | 'female' }[];
};

type TripDetailStore = {
  selectedLimit: boolean;
  tripDetail: TripDetail;
  addSeat: (seatNumber: number, gender: 'male' | 'female') => void;
  removeSeat: (seatNumber: number) => void;
  setTripDetail: (detail: TripDetail) => void;
};

export const useTripDetail = create<TripDetailStore>((set, get) => ({
  tripDetail: {
    tripInfo: null,
    selectedSeats: [],
  },
  selectedLimit: false,
  setTripDetail: (detail) => set({ tripDetail: detail }),

  addSeat: (seatNumber, gender) => {
    const state = get();
    const seats = [...state.tripDetail.selectedSeats];
    const existingIndex = seats.findIndex((s) => s.seatNumber === seatNumber);

    if (seats.length >= 5 && existingIndex === -1) {
      set({ selectedLimit: true });
      return;
    }
    if (existingIndex !== -1) {
      seats[existingIndex] = { seatNumber, gender };
    } else {
      seats.push({ seatNumber, gender });
    }

    set({
      tripDetail: { ...state.tripDetail, selectedSeats: seats },
      selectedLimit: false,
    });
  },

  removeSeat: (seatNumber) => {
    const state = get();
    set({
      tripDetail: {
        ...state.tripDetail,
        selectedSeats: state.tripDetail.selectedSeats.filter((s) => s.seatNumber !== seatNumber),
      },
      selectedLimit: false,
    });
  },
}));
