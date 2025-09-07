'use client';
import { useSearchParams } from 'next/navigation';

import { MoveRightIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { useTripDetail } from '@/store/useStore';

export const MyTripView = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const { tripDetail } = useTripDetail();
  const trip = tripDetail[id ?? 0]?.tripInfo;
  console.log(trip);
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 p-10">
      <Card className="flex w-full items-center justify-center">
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
            <Button variant="outline" className="text-lg">
              Buy
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
