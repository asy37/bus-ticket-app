'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Label } from '@/components/ui/label';
import { Payment } from '@/lib/types/payment/types';

import { CreditCard } from '../components/CreditCard';
import { PaymentForm } from '../components/PaymentForm';
import { PaymentSchema } from '../components/paymentSchema';
import { SuccessModal } from '../components/SuccessModal';

export const PaymentView = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [cardNumber, setCardNumber] = React.useState('0000 0000 0000 0000');
  const [cardDate, setCardDate] = React.useState('12/12');
  const [cardName, setCardName] = React.useState('Name Surname');
  const [cardCvv, setCardCvv] = React.useState('123');

  const methods = useForm<Payment>({
    mode: 'onSubmit',
    resolver: zodResolver(PaymentSchema),
    defaultValues: {
      cardNumber: '',
      cardDate: '',
      cardName: '',
      cardCvv: '',
    },
  });

  React.useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if (open) {
      setLoading(true);
      timeoutId = setTimeout(() => {
        setLoading(false);
      }, 3000);
    } else {
      setLoading(false);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [open]);

  return (
    <div className="mt-10 flex min-h-full w-full flex-col items-center justify-center gap-10 overflow-hidden">
      <Label className="text-4xl">Credit Card Information</Label>
      <div className="flex gap-10">
        <CreditCard
          cardNumber={cardNumber}
          cardDate={cardDate}
          cardName={cardName}
          cardCvv={cardCvv}
        />
        <PaymentForm
          setOpen={setOpen}
          methods={methods}
          setCardNumber={setCardNumber}
          setCardDate={setCardDate}
          setCardName={setCardName}
          setCardCvv={setCardCvv}
        />
      </div>
      <SuccessModal open={open} setOpen={setOpen} loading={loading} />
    </div>
  );
};
