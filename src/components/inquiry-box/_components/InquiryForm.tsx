'use client';
import React from 'react';
import { Form, FormProvider, UseFormReturn } from 'react-hook-form';

import { InquiryType } from '@/lib/types/inquiry';

import { Button } from '../../ui/button';
import { DatePicker } from '../../ui/date-picker';
import { FormControl, FormField, FormItem, FormLabel } from '../../ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

type InquiryFormProps = {
  methods: UseFormReturn<InquiryType>;
};
export const InquiryForm: React.FC<InquiryFormProps> = ({ methods }) => {
  const onSubmit = async (data: InquiryType) => {
    await console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <Form className="mx-auto flex h-64 w-2/3 items-center justify-center gap-2 rounded border bg-gray-100 p-10 shadow-md">
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
                    <SelectItem value="istanbul">Istanbul</SelectItem>
                    <SelectItem value="ankara">Ankara</SelectItem>
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
                    <SelectItem value="istanbul">Istanbul</SelectItem>
                    <SelectItem value="ankara">Ankara</SelectItem>
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
                  onChange={(date) => field.onChange(date ? date.toISOString() : '')}
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
