'use client';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { usePathname, useRouter } from 'next/navigation';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Header } from '@/components/header';
import { storageHandler } from '@/lib/handler/storageHandler';
import { useStore } from '@/store/useStore';

import '../styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  const navigate = useRouter();
  const pathname = usePathname();
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  // RootLayout.tsx

  React.useEffect(() => {
    const user = storageHandler.get('user');
    if (user) {
      useStore.getState().setIsAuthenticated(true);
    } else if (isAuthenticated && (pathname === '/login' || pathname === '/register')) {
      navigate.push('/');
    } else if (!isAuthenticated && pathname !== '/login' && pathname !== '/register') {
      navigate.push('/login');
    }
  }, [isAuthenticated, navigate, pathname]);

  return (
    <html lang="en">
      <body className="relative min-h-screen min-w-full">
        <QueryClientProvider client={queryClient}>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Header />
          <div className="flex w-full">{children}</div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
