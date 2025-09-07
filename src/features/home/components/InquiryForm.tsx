'use client';
import React from 'react';
import { Form, FormProvider, UseFormReturn } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { CityType } from '@/lib/types/cities';
import { InquiryType } from '@/lib/types/inquiry';

import { Button } from '../../../components/ui/button';
import { DatePicker } from '../../../components/ui/date-picker';
import { FormControl, FormField, FormItem, FormLabel } from '../../../components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select';
import { useHome } from '../api/useHome';

type InquiryFormProps = {
  methods: UseFormReturn<InquiryType>;
};
export const InquiryForm: React.FC<InquiryFormProps> = ({ methods }) => {
  const navigate = useRouter();
  const { useGetCities, usePostInquiry } = useHome();
  const { mutateAsync: cusePostInquiry } = usePostInquiry();
  const { data: citiesRaw } = useGetCities();

  const cities: CityType[] = React.useMemo(() => citiesRaw || [], [citiesRaw]);

  const onSubmit = async (data: InquiryType) => {
    await cusePostInquiry(data);
    navigate.push('/trips-details');
  };
  return (
    <FormProvider {...methods}>
      <Form className="mx-auto flex h-fit w-2/3 flex-col items-center justify-center gap-4 rounded border bg-gray-100 p-10 shadow-md lg:flex-row">
        <FormField
          control={methods.control}
          name="from"
          render={({ field }) => (
            <FormItem>
              <FormLabel>From</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-[180px] bg-white">
                    <SelectValue placeholder="Select a departure" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities?.map((city) => {
                      return (
                        <SelectItem key={city.id} value={city.name}>
                          {city.name}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="to"
          render={({ field }) => (
            <FormItem>
              <FormLabel>To</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-[180px] bg-white">
                    <SelectValue placeholder="Select a destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities?.map((city) => {
                      return (
                        <SelectItem key={city.id} value={city.name}>
                          {city.name}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="departureDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Departure Date</FormLabel>
              <FormControl>
                <DatePicker
                  value={field.value ? new Date(field.value) : undefined}
                  onChange={(date) => {
                    if (!date) {
                      field.onChange('');
                      return;
                    }
                    const day = String(date.getDate()).padStart(2, '0');
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const year = date.getFullYear();
                    field.onChange(`${day}.${month}.${year}`);
                  }}
                  className="w-[180px]"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          onClick={methods.handleSubmit(onSubmit)}
          variant="outline"
          className="mt-5"
        >
          Search
        </Button>
      </Form>
    </FormProvider>
  );
};
