'use client';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { usePathname, useRouter } from 'next/navigation';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Header } from '@/components/header';
import { Loading } from '@/components/loading/Loading';
import { storageHandler } from '@/lib/handler/storageHandler';
import { useStore } from '@/store/useStore';

import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  const navigate = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const user = storageHandler.get('user');

    if (user) {
      useStore.getState().setIsAuthenticated(true);

      if (pathname === '/login' || pathname === '/register') {
        navigate.push('/home');
      }
    } else {
      useStore.getState().setIsAuthenticated(false);

      if (pathname !== '/login' && pathname !== '/register') {
        navigate.push('/login');
      }
    }

    // yönlendirme işlemlerinden sonra loading biter
    setLoading(false);
  }, [pathname, navigate]);

  return (
    <html lang="en">
      <body className="relative min-h-screen min-w-full">
        <QueryClientProvider client={queryClient}>
          <ToastContainer position="top-right" autoClose={3000} />
          <Header />
          <div className="flex w-full">{loading ? <Loading /> : children}</div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
