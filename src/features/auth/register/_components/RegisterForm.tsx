import React from 'react';
import { Form, FormProvider, UseFormReturn } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/date-picker';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RegisterType } from '@/lib/types/register';

import { useRegister } from '../api/useRegister';

type RegisterFormProps = {
  methods: UseFormReturn<RegisterType>;
};
export const RegisterForm: React.FC<RegisterFormProps> = ({ methods }) => {
  const { mutateAsync: register } = useRegister();
  const navigate = useRouter();
  const onSubmit = async (data: RegisterType) => {
    try {
      await register(data);
      toast.success('Register is successfully!');
      navigate.push('/login');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Something is went wrong!');
    }
  };

  return (
    <FormProvider {...methods}>
      <Form className="w-full space-y-8">
        <FormField
          control={methods.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>{' '}
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="surname"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Surname</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>{' '}
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>{' '}
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="password"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>{' '}
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="gender"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="erkek">Man</SelectItem>
                    <SelectItem value="kadın">Woman</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>{' '}
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="birthdate"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Birth Date</FormLabel>
              <FormControl>
                <DatePicker
                  value={field.value ? new Date(field.value) : undefined}
                  onChange={(date) => field.onChange(date ? date.toISOString() : '')}
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit" onClick={methods.handleSubmit(onSubmit)}>
          Register
        </Button>
      </Form>
    </FormProvider>
  );
};
