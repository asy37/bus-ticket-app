'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Separator } from '@/components/ui/separator';
import { RegisterType } from '@/lib/types/register';

import { RegisterForm } from '../_components/RegisterForm';
import { registerSchema } from '../_components/registerSchema';
export const RegisterView = () => {
  const methods = useForm<RegisterType>({
    mode: 'onSubmit',
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      gender: '',
      birthdate: '',
    },
  });

  return (
    <div className="border-secondary space-y-2 rounded border p-4">
      <h1 className="text-center text-2xl font-bold">Kayıt Ol</h1>
      <Separator />
      <RegisterForm methods={methods} />
    </div>
  );
};
