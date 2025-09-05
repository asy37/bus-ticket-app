'use client';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { BusIcon } from 'lucide-react';

import { InquiryType } from '@/lib/types/inquiry';

import { InquiryForm } from './InquiryForm';
import { inquirySchema } from './inquirySchema';

export const InquiryBox = () => {
  const methods = useForm<InquiryType>({
    mode: 'onSubmit',
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      from: '',
      to: '',
      departureDate: '',
    },
  });
  return (
    <div className="flex h-96 w-full flex-col items-center justify-center">
      <span className="flex items-end gap-4 pb-6 text-2xl font-bold">
        <h1 className="text-4xl">Lets Search Trip</h1>
        <BusIcon />
      </span>
      <InquiryForm methods={methods} />
    </div>
  );
};
