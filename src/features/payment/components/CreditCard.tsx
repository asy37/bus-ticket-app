import React from 'react';

import { Label } from '@radix-ui/react-dropdown-menu';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
type CreditCardProps = {
  cardNumber: string;
  cardDate: string;
  cardName: string;
  cardCvv: string;
};
export const CreditCard: React.FC<CreditCardProps> = ({
  cardNumber,
  cardDate,
  cardName,
  cardCvv,
}) => {
  return (
    <Card className="h-52 w-96">
      <CardHeader>
        <CardTitle>Credit Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Label>{cardNumber}</Label>
        <Label> {cardDate} </Label>
        <Label> {cardName} </Label>
        <Label> {cardCvv} </Label>
      </CardContent>
    </Card>
  );
};
