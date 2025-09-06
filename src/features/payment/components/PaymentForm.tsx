import React from 'react';
import { Form, FormProvider, UseFormReturn } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { formatCardDate, formatCardNumber } from '../utils';
import { Payment } from '../view/PaymentView';

type PaymentFormProps = {
  setOpen: (open: boolean) => void;
  methods: UseFormReturn<Payment>;
  setCardNumber: (value: string) => void;
  setCardDate: (value: string) => void;
  setCardName: (value: string) => void;
  setCardCvv: (value: string) => void;
};
export const PaymentForm: React.FC<PaymentFormProps> = ({
  setOpen,
  methods,
  setCardNumber,
  setCardDate,
  setCardName,
  setCardCvv,
}) => {
  const handlePay = (data: any) => {
    console.log(data);

    setOpen(true);
  };
  return (
    <FormProvider {...methods}>
      <Form className="space-y-4">
        <FormField
          name="cardNumber"
          control={methods.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Card Number</FormLabel>
              <FormControl>
                <Input
                  maxLength={16}
                  className="w-48 px-4"
                  placeholder="0000 0000 0000 0000"
                  onChange={(e) => {
                    const rawValue = e.target.value.replace(/\D/g, '');
                    field.onChange(rawValue);
                    setCardNumber(formatCardNumber(e.target.value));
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="cardDate"
          control={methods.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Card Date</FormLabel>
              <FormControl>
                <Input
                  maxLength={4}
                  className="w-48 px-4"
                  placeholder="12/12"
                  onChange={(e) => {
                    const rawValue = e.target.value.replace(/\D/g, '').slice(0, 4);
                    field.onChange(rawValue);
                    setCardDate(formatCardDate(e.target.value));
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="cardName"
          control={methods.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Card Name</FormLabel>
              <FormControl>
                <Input
                  className="w-48 px-4"
                  placeholder="Name Surname"
                  onChange={(e) => {
                    field.onChange(e);
                    setCardName(e.target.value);
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="cardCvv"
          control={methods.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Card Cvv</FormLabel>
              <FormControl>
                <Input
                  maxLength={3}
                  type="password"
                  className="w-48 px-4"
                  placeholder="cvv"
                  onChange={(e) => {
                    field.onChange(e);
                    setCardCvv('*'.repeat(e.target.value.length));
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" onClick={methods.handleSubmit(handlePay)}>
          Pay
        </Button>
      </Form>
    </FormProvider>
  );
};
