import React from 'react';
import { Form, FormProvider, UseFormReturn } from 'react-hook-form';
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
  const { mutateAsync: login, isSuccess } = useLogin();

  const onSubmit = async (data: LoginType) => {
    await login(data);
    if (isSuccess) {
      navigate.push('/');
    }
  };
  return (
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
  );
};
