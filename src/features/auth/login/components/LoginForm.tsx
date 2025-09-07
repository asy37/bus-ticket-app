import React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LoginType } from '@/lib/types/login';

import { useLogin } from '../api/useLogin';

type LoginFormProps = {
  methods: UseFormReturn<LoginType>;
};

export const LoginForm: React.FC<LoginFormProps> = ({ methods }) => {
  const navigate = useRouter();
  const { mutateAsync: login } = useLogin();

  const onSubmit = async (data: LoginType) => {
    await login(data);
    navigate.push('/');
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <FormProvider {...methods}>
        <form className="space-y-8" onSubmit={methods.handleSubmit(onSubmit)}>
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
          <Button type="submit">Gönder</Button>
        </form>
      </FormProvider>
    </>
  );
};
