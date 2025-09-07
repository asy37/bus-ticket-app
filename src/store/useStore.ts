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
      name: 'inquiry-storage',
    }
  )
);

type TripDetail = {
  tripInfo: Trip | null;
  selectedSeats: { seatNumber: number; gender: 'male' | 'female'; travellerName: string }[];
};

type TripDetailStore = {
  selectedLimit: boolean;
  tripDetail: Record<number, TripDetail>;
  addSeat: (
    tripId: number,
    seatNumber: number,
    gender: 'male' | 'female',
    travellerName: string
  ) => void;
  removeSeat: (tripId: number, seatNumber: number) => void;
  setTripDetail: (detail: TripDetail) => void;
};

export const useTripDetail = create<TripDetailStore>((set, get) => ({
  tripDetail: {},
  selectedLimit: false,

  setTripDetail: (detail) => {
    const id = detail.tripInfo?.id;
    if (!id) return;
    set((state) => ({
      tripDetail: { ...state.tripDetail, [id]: detail },
    }));
  },

  addSeat: (tripId, seatNumber, gender, travellerName) => {
    const state = get();
    const tripDetail = state.tripDetail[tripId] || { tripInfo: null, selectedSeats: [] };
    const seats = [...tripDetail.selectedSeats];
    const existingIndex = seats.findIndex((s) => s.seatNumber === seatNumber);

    if (seats.length >= 5 && existingIndex === -1) {
      set({ selectedLimit: true });
      return;
    }

    if (existingIndex !== -1) {
      seats[existingIndex] = { seatNumber, gender, travellerName };
    } else {
      seats.push({ seatNumber, gender, travellerName });
    }

    set((state) => ({
      tripDetail: {
        ...state.tripDetail,
        [tripId]: { ...tripDetail, selectedSeats: seats },
      },
      selectedLimit: false,
    }));
  },

  removeSeat: (tripId: number, seatNumber: number) => {
    const state = get();
    const tripDetail = state.tripDetail[tripId];
    if (!tripDetail) return;

    set((state) => ({
      tripDetail: {
        ...state.tripDetail,
        [tripId]: {
          ...tripDetail,
          selectedSeats: tripDetail.selectedSeats.filter((s) => s.seatNumber !== seatNumber),
        },
      },
      selectedLimit: false,
    }));
  },
}));
