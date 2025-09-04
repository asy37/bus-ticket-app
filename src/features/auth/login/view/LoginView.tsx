'use client';

import React from 'react';
import { Form, FormProvider, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { useLogin } from '../api/useLogin';

export const LoginView = () => {
  const { mutateAsync: login } = useLogin();
  const methods = useForm({
    mode: 'onSubmit',
  });
  const onSubmit = async (data: any) => {
    await login(data);
  };
  return (
    <div className="mx-auto mt-10 max-w-md">
      <FormProvider {...methods}>
        <Form className="space-y-8">
          <FormField
            control={methods.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parola</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" onClick={methods.handleSubmit(onSubmit)}>
            Gönder
          </Button>
        </Form>
      </FormProvider>
    </div>
  );
};
