'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Separator } from '@/components/ui/separator';
import { LoginType } from '@/lib/types/login';

import { LoginForm } from '../_components/LoginForm';
import { loginSchema } from '../_components/loginSchema';

export const LoginView = () => {
  const methods = useForm<LoginType>({
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <div className="border-secondary space-y-2 rounded border p-4">
      <h1 className="text-center text-2xl font-bold">Giriş Yap</h1>
      <Separator />
      <LoginForm methods={methods} />
    </div>
  );
};
