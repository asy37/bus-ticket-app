import React from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import { MoveRightIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Trip } from '@/lib/types/inquiry';
import { useTripDetail } from '@/store/useStore';

import { useTrip } from '../api/useTrip';

type TripInfoProps = {
  trip: Trip;
};
export const TripInfo: React.FC<TripInfoProps> = ({ trip }) => {
  const { mutateAsync: tripRequest } = useTrip();
  const navigate = useRouter();
  const { tripDetail } = useTripDetail();
  const addInfoToStore = useTripDetail((state) => state.setTripDetail);

  const selectedSeats = tripDetail[trip.id]?.selectedSeats ?? [];
  const disabled = selectedSeats.length <= 0;

  const handleInfo = async (info: Trip, seat: boolean) => {
    await tripRequest(info);
    if (seat) {
      return toast.error('Fill in the missing fields');
    }
    return (addInfoToStore({ tripInfo: info, selectedSeats }), navigate.push(`/payment`));
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
