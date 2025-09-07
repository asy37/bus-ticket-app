import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { twMerge } from 'tailwind-merge';

import { Button } from '@/components/ui/button';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useTripDetail } from '@/store/useStore';

import { seatSchema } from './seatSchema';

type SeatFormProps = {
  tripId: number;
  seat: number;
  handlePopoverClick: (clickedSeat: number) => { disableMale: boolean; disableFemale: boolean };
};
export type SeatType = {
  gender: 'male' | 'female';
  travellerName: string;
};
export const SeatForm: React.FC<SeatFormProps> = ({ tripId, seat, handlePopoverClick }) => {
  const { tripDetail, addSeat, removeSeat } = useTripDetail();

  const methods = useForm<SeatType>({
    mode: 'onSubmit',
    resolver: zodResolver(seatSchema),
    defaultValues: {
      gender: 'male',
      travellerName: '',
    },
  });

  const onSubmit = (data: SeatType) => {
    addSeat(tripId, seat, data.gender, data.travellerName);
  };

  const handleSelect = (seatNumber: number, gender: 'male' | 'female') => {
    const selectedSeat = (tripDetail[tripId]?.selectedSeats || []).find(
      (s) => s.seatNumber === seatNumber
    );

    if (selectedSeat?.gender === gender) {
      // Same gender clicked again → remove seat
      removeSeat(tripId, seatNumber);
      methods.reset(); // reset form values
    } else {
      // Different or new gender → update form value
      methods.setValue('gender', gender);
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="flex" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-between">
          <FormItem>
            <FormControl>
              <Button
                type="button"
                disabled={handlePopoverClick(seat).disableMale}
                onClick={() => handleSelect(seat, 'male')}
                className={twMerge(
                  'rounded-md px-3 py-1',
                  methods.getValues('gender') === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-600',
                  handlePopoverClick(seat).disableMale && 'cursor-not-allowed bg-gray-200'
                )}
              >
                Male
              </Button>
            </FormControl>
          </FormItem>
          <FormItem>
            <FormControl>
              <Button
                type="button"
                disabled={handlePopoverClick(seat).disableFemale}
                onClick={() => handleSelect(seat, 'female')}
                className={twMerge(
                  'rounded-md px-3 py-1',
                  methods.getValues('gender') === 'female'
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-600',
                  handlePopoverClick(seat).disableFemale && 'cursor-not-allowed bg-gray-200'
                )}
              >
                Female
              </Button>
            </FormControl>
          </FormItem>
        </div>
        <FormItem>
          <FormControl>
            <Input placeholder="Traveller Name" {...methods.register('travellerName')} />
          </FormControl>
        </FormItem>
        <Button type="submit">Ok</Button>
      </form>
    </FormProvider>
  );
};
