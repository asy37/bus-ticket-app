'use client';
import { Card, CardHeader } from '@/components/ui/card';
import { useTripDetail } from '@/store/useStore';

export const TripDetailsView = () => {
  const { tripDetail } = useTripDetail();
  console.log(tripDetail);

  return (
    <Card>
      <CardHeader>he</CardHeader>
    </Card>
  );
};
