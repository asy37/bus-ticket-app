import React from 'react';

import { twMerge } from 'tailwind-merge';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useTripDetail } from '@/store/useStore';

type GenderSelectionProps = {
  seat: number;
  disabled?: boolean;
  genderColorClass?: string;
  tripId: number;
};

export const GenderSelection: React.FC<GenderSelectionProps> = ({
  seat,
  disabled = false,
  genderColorClass,
  tripId,
}) => {
  const { tripDetail, addSeat, removeSeat, selectedLimit } = useTripDetail();
  const selectedSeat = (tripDetail[tripId]?.selectedSeats || []).find((s) => s.seatNumber === seat);
  const [travellerName, setTravellerName] = React.useState('');

  React.useEffect(() => {
    if (selectedLimit) {
      return alert('Seçilebilecek maksimum koltuk sayısına ulaşıldı.');
    }
  }, [selectedLimit]);

  const handleSelect = (seat: number, gender: 'male' | 'female', name: string) => {
    const selectedSeat = (tripDetail[tripId]?.selectedSeats || []).find(
      (s) => s.seatNumber === seat
    );

    if (selectedSeat?.gender === gender) {
      removeSeat(tripId, seat);
    } else {
      addSeat(tripId, seat, gender, name);
    }
  };

  const handlePopoverClick = (clickedSeat: number) => {
    const adjacentSeatNumber = clickedSeat % 2 === 1 ? clickedSeat + 1 : clickedSeat - 1;

    // Daha önce seçilmiş veya dolu koltuklar
    const allOccupiedSeats = [
      ...(tripDetail[tripId]?.selectedSeats || []),
      ...(tripDetail[tripId]?.tripInfo?.fullSeats ?? []),
    ];
    const adjacentSeat = allOccupiedSeats.find((s) => s.seatNumber === adjacentSeatNumber);

    const disableMale = adjacentSeat?.gender === 'female';
    const disableFemale = adjacentSeat?.gender === 'male';

    return { disableMale, disableFemale };
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
      <PopoverContent className="flex w-fit flex-col gap-2 p-2">
        <Input
          placeholder="Traveller Name"
          value={travellerName}
          onChange={(e) => setTravellerName(e.target.value)}
        />
        <div className="flex justify-between">
          <Button
            disabled={handlePopoverClick(seat).disableMale}
            onClick={() => handleSelect(seat, 'male', travellerName)}
            className={twMerge(
              'rounded-md px-3 py-1',
              selectedSeat?.gender === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-600',
              handlePopoverClick(seat).disableMale && 'cursor-not-allowed bg-gray-200'
            )}
          >
            Male
          </Button>
          <Button
            disabled={handlePopoverClick(seat).disableFemale}
            onClick={() => handleSelect(seat, 'female', travellerName)}
            className={twMerge(
              'rounded-md px-3 py-1',
              selectedSeat?.gender === 'female' ? 'bg-pink-500 text-white' : 'bg-gray-600',
              handlePopoverClick(seat).disableFemale && 'cursor-not-allowed bg-gray-200'
            )}
          >
            Female
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
