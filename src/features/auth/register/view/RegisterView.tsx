'use client';

import React from 'react';
import { Form, FormProvider, useForm } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type RegisterViewProps = {};
export const RegisterView: React.FC<RegisterViewProps> = ({}) => {
  const form = useForm();
  return (
    <div>
      <FormProvider {...form}>
        <Form>
          <FormField
            control={form.control}
            name="register"
            render={() => (
              <FormItem>
                <FormLabel>Register</FormLabel>
                <FormControl>
                  <Input />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription> <FormMessage />
              </FormItem>
            )}
          />
        </Form>
      </FormProvider>
    </div>
  );
};
