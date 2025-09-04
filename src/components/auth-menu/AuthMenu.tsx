import React from 'react';

import { useStore } from '@/store/useStore';

import { AuthButtons } from './_components/AuthButtons';
import { AuthDropdown } from './_components/AuthDropdown';

export const AuthMenu = () => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return isAuthenticated ? <AuthDropdown /> : <AuthButtons />;
};
