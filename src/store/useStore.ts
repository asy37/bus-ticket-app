import { create } from 'zustand';

import { storageHandler } from '@/lib/handler/storageHandler';

interface AuthStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export const useStore = create<AuthStore>((set) => ({
  isAuthenticated: !!storageHandler.get('user'),
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
}));
