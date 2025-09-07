import React from 'react';
import { useRouter } from 'next/navigation';

import { MoveRightIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Trip } from '@/lib/types/inquiry';
import { useTripDetail } from '@/store/useStore';

type TripInfoProps = {
  trip: Trip;
};
export const TripInfo: React.FC<TripInfoProps> = ({ trip }) => {
  const navigate = useRouter();
  const { tripDetail } = useTripDetail();
  const addInfoToStore = useTripDetail((state) => state.setTripDetail);

  const selectedSeats = tripDetail.selectedSeats;
  const disabled = selectedSeats.length <= 0;

  const handleInfo = (info: Trip, seat: boolean) => {
    if (seat) {
      return alert();
    }
    return (addInfoToStore({ tripInfo: info, selectedSeats }), navigate.push('/trips-details'));
  };

  return (
    <CardContent className="flex w-full flex-row items-center justify-between">
      <div>
        <CardTitle className="border-b border-b-gray-200 text-2xl">Time</CardTitle>
        <CardDescription className="text-center text-xl">{trip.time}</CardDescription>
      </div>
      <div className="grid grid-cols-3">
        <div className="w-fit shrink-0 p-4">
          <CardTitle className="border-b border-b-gray-200 text-2xl">From</CardTitle>
          <CardDescription className="text-center text-xl">{trip.from.name}</CardDescription>
        </div>
        <div className="flex w-fit shrink-0 items-center p-4 text-center">
          <MoveRightIcon />
        </div>
        <div className="w-fit shrink-0 p-4">
          <CardTitle className="border-b border-b-gray-200 text-2xl">To</CardTitle>
          <CardDescription className="text-center text-xl">{trip.to.name}</CardDescription>
        </div>
      </div>
      <div>
        <CardTitle className="border-b border-b-gray-200 text-2xl">Price</CardTitle>
        <CardDescription className="text-center text-xl">{trip.price}₺</CardDescription>
      </div>
      <div className="flex items-center">
        <Button variant="outline" className="text-lg" onClick={() => handleInfo(trip, disabled)}>
          Buy
        </Button>
      </div>
    </CardContent>
  );
};
