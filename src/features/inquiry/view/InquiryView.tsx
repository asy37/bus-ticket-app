'use client';
import React from 'react';

import { Card } from '@/components/ui/card';
import { Trip } from '@/lib/types/inquiry';
import { useInquiryStore } from '@/store/useStore';

import { Seats } from '../components/Seats';
import { TripInfo } from '../components/TripInfo';

export const InquiryView = () => {
  const { tripsStore } = useInquiryStore();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 p-10">
      {tripsStore.map((trip: Trip) => {
        const fullSeat = trip.availableSeats.map((seat) => seat.seatNumber);

        return (
          <Card className="flex w-full items-center justify-center" key={trip.id}>
            <TripInfo trip={trip} />
            <Seats fullSeat={fullSeat} seats={trip.availableSeats} />
          </Card>
        );
      })}
    </div>
  );
};
