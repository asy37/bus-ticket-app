import { cities } from '@/lib/api/mock-data/cities';

export type InquiryType = {
  from: string;
  to: string;
  departureDate: string;
};

export type Trip = {
  id: number;
  from: (typeof cities)[number];
  to: (typeof cities)[number];
  date: string;
  availableSeats: {
    seatNumber: number;
    gender: string;
  }[];
  price: number;
  time: string;
};
