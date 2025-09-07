'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Trip } from '@/lib/types/inquiry';
import { useInquiryStore } from '@/store/useStore';

import { Seats } from '../components/Seats';
import { TripInfo } from '../components/TripInfo';

export const TripDetailsView = () => {
  const navigate = useRouter();
  const { tripsStore } = useInquiryStore();
  if (tripsStore.length === 0) {
    return (
      <div className="flex min-h-[700px] w-full flex-col items-center justify-center gap-2">
        <Label> No bus trips matching your search criteria were found.Please go home page.</Label>
        <Button onClick={() => navigate.push('/')}>Go Home</Button>
      </div>
    );
  }

  return (
    <div className="flex h-full min-w-full flex-col items-center justify-center gap-10 p-10">
      {tripsStore.map((trip: Trip) => {
        const fullSeat = trip.fullSeats.map((seat) => seat.seatNumber);

        return (
          <Card className="flex w-full items-center justify-center" key={trip.id}>
            <TripInfo trip={trip} />
            <Seats trip={trip} fullSeat={fullSeat} seats={trip.fullSeats} />
          </Card>
        );
      })}
    </div>
  );
};
