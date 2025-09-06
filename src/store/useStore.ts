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
  selectedSeats: number[];
};

type TripDetailStore = {
  tripDetail: TripDetail;
  setTripDetail: (detail: TripDetail) => void;
  addSeat: (seatNumber: number) => void;
  removeSeat: (seatNumber: number) => void;
  seatWarning: boolean;
};

export const useTripDetail = create<TripDetailStore>((set, get) => ({
  tripDetail: {
    tripInfo: null,
    selectedSeats: [],
  },
  seatWarning: false,
  setTripDetail: (detail) => set({ tripDetail: detail }),
  addSeat: (seatNumber) => {
    const { tripDetail } = get();
    const isSelected = tripDetail.selectedSeats.includes(seatNumber);

    // Koltuk zaten seçilmişse çıkart
    if (isSelected) {
      set({
        tripDetail: {
          ...tripDetail,
          selectedSeats: tripDetail.selectedSeats.filter((s) => s !== seatNumber),
        },
        seatWarning: false,
      });
      return;
    }

    // 5 koltuktan fazlasını seçmeye izin verme
    if (tripDetail.selectedSeats.length >= 5) {
      set({ seatWarning: true });
      return;
    }

    set({
      tripDetail: {
        ...tripDetail,
        selectedSeats: [...tripDetail.selectedSeats, seatNumber],
      },
      seatWarning: false,
    });
  },
  removeSeat: (seatNumber) =>
    set((state) => ({
      tripDetail: {
        ...state.tripDetail,
        selectedSeats: state.tripDetail.selectedSeats.filter((s) => s !== seatNumber),
      },
      seatWarning: state.tripDetail.selectedSeats.length - 1 >= 5,
    })),
}));
