'use client';
import { useStore } from '@/store/useStore';

import Login from './(auth)/login/page';
import Home from './home/page';

export default function App() {
  const { isAuthenticated } = useStore();

  return (
    <div className="flex h-full w-full flex-col">{isAuthenticated ? <Home /> : <Login />}</div>
  );
}
