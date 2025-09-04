'use client';

import React from 'react';
import { Form, FormProvider, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { useRegister } from '../api/useRegister';

type RegisterViewProps = {};
export const RegisterView: React.FC<RegisterViewProps> = ({}) => {
  const { mutateAsync: register } = useRegister();
  const methods = useForm({
    mode: 'onSubmit',
  });
  const onSubmit = async (data: any) => {
    await register(data);
  };
  return (
    <div className="mx-auto mt-10 max-w-md">
      <FormProvider {...methods}>
        <Form className="space-y-8">
          <FormField
            control={methods.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ad</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="surname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Soyad</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={methods.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cinsiyet</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="birthdate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Doğum Tarihi</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
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
