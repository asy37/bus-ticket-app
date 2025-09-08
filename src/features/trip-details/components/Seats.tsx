import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Label } from '@/components/ui/label';
import { Trip } from '@/lib/types/inquiry';
import { useTripDetail } from '@/store/useStore';

import { genderColor, seatLeftArray, seatRightArray } from '../utils';

import { GenderSelection } from './GenderSelection';

type SeatProps = {
  trip: Trip;
  fullSeat: number[];
  seats: {
    gender: string;
    seatNumber: number;
  }[];
};
export const Seats: React.FC<SeatProps> = ({ fullSeat, seats, trip }) => {
  const { tripDetail } = useTripDetail();
  const addInfoToStore = useTripDetail((state) => state.setTripDetail);

  const handleAddStore = (info: Trip) => {
    const currentTripDetail = tripDetail[info.id] || { tripInfo: info, selectedSeats: [] };
    addInfoToStore({
      tripInfo: info,
      selectedSeats: currentTripDetail.selectedSeats,
    });
  };
  return (
    <div className="w-full lg:w-2/5">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger onClick={() => handleAddStore(trip)}>Choose a Ticket</AccordionTrigger>
          <AccordionContent>
            <div className="h-full w-full overflow-auto rounded-2xl border-2 border-gray-500 p-2">
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
                        <GenderSelection
                          tripId={trip.id}
                          seat={seat.seatNumber}
                          disabled={disabled}
                          genderColorClass={genderColorClass}
                        />
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
                        <GenderSelection
                          tripId={trip.id}
                          seat={seat.seatNumber}
                          disabled={disabled}
                          genderColorClass={genderColorClass}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
