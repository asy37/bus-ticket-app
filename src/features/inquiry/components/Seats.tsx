import React from 'react';

import { twMerge } from 'tailwind-merge';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useTripDetail } from '@/store/useStore';

import { genderColor, seatLeftArray, seatRightArray } from '../utils';

type SeatProps = {
  fullSeat: number[];
  seats: {
    gender: string;
    seatNumber: number;
  }[];
};
export const Seats: React.FC<SeatProps> = ({ fullSeat, seats }) => {
  const addSeatToStore = useTripDetail((state) => state.addSeat);
  const { tripDetail, seatWarning } = useTripDetail();
  const selectedSeats = tripDetail.selectedSeats;

  React.useEffect(() => {
    if (seatWarning) {
      return alert();
    }
  }, [seatWarning]);

  return (
    <div className="w-2/5">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Choose a Ticket</AccordionTrigger>
          <AccordionContent className="h-full w-full rounded-2xl border-2 border-gray-500 p-2">
            <div className="flex items-center gap-10">
              <Label className="flex h-20 w-12 items-center justify-center rounded border-2 border-black text-center">
                Door
              </Label>
              <div className="grid grid-flow-col grid-rows-2 gap-2">
                {seatRightArray.map((seat) => {
                  const currentSeats = seats.find((s) => s.seatNumber === seat.seatNumber);
                  const genderColorClass = genderColor(currentSeats?.gender);
                  const disabled = fullSeat.includes(seat.seatNumber);

                  return (
                    <div key={seat.id}>
                      <Button
                        disabled={disabled}
                        onClick={() => addSeatToStore(seat.seatNumber)}
                        className={twMerge(
                          'w-12',
                          genderColorClass,
                          selectedSeats.includes(seat.seatNumber) && 'bg-yellow-500'
                        )}
                      >
                        {seat.seatNumber}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="h-12 w-full bg-white" />
            <div className="flex items-center gap-10">
              <Label className="flex h-20 w-12 items-center justify-center rounded border-2 border-black text-center">
                Driver
              </Label>
              <div className="grid grid-flow-col grid-rows-2 gap-2">
                {seatLeftArray.map((seat) => {
                  const currentSeats = seats.find((s) => s.seatNumber === seat.seatNumber);
                  const genderColorClass = genderColor(currentSeats?.gender);
                  const disabled = fullSeat.includes(seat.seatNumber);
                  return (
                    <div key={seat.id}>
                      <Button
                        disabled={disabled}
                        onClick={() => addSeatToStore(seat.seatNumber)}
                        className={twMerge(
                          'w-12',
                          genderColorClass,
                          selectedSeats.includes(seat.seatNumber) && 'bg-yellow-500'
                        )}
                      >
                        {seat.seatNumber}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
