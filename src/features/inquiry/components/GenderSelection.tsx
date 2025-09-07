import React from 'react';

import { twMerge } from 'tailwind-merge';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useTripDetail } from '@/store/useStore';

type GenderSelectionProps = {
  seat: number;
  disabled?: boolean;
  genderColorClass?: string;
};

export const GenderSelection: React.FC<GenderSelectionProps> = ({
  seat,
  disabled = false,
  genderColorClass,
}) => {
  const { tripDetail, addSeat, removeSeat, selectedLimit } = useTripDetail();
  const selectedSeat = tripDetail.selectedSeats.find((s) => s.seatNumber === seat);

  React.useEffect(() => {
    if (selectedLimit) {
      return alert('çal');
    }
  }, [selectedLimit]);

  const handleSelect = (seat: number, gender: 'male' | 'female') => {
    const selectedSeat = tripDetail.selectedSeats.find((s) => s.seatNumber === seat);

    if (selectedSeat?.gender === gender) {
      removeSeat(seat);
    } else {
      addSeat(seat, gender);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          disabled={disabled}
          className={twMerge(
            'w-12',
            genderColorClass,
            selectedSeat && (selectedSeat.gender === 'male' ? 'bg-blue-500' : 'bg-pink-500')
          )}
        >
          {seat}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-fit gap-2 p-2">
        <Button
          className={twMerge(
            'rounded-md px-3 py-1',
            selectedSeat?.gender === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          )}
          onClick={() => handleSelect(seat, 'male')}
        >
          Male
        </Button>
        <Button
          className={twMerge(
            'rounded-md px-3 py-1',
            selectedSeat?.gender === 'female' ? 'bg-pink-500 text-white' : 'bg-gray-200'
          )}
          onClick={() => handleSelect(seat, 'female')}
        >
          Female
        </Button>
      </PopoverContent>
    </Popover>
  );
};
