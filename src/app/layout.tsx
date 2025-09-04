'use client';
import React from 'react';
import type { Metadata } from 'next';
import { useRouter } from 'next/navigation';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Header } from '@/components/header';
import { useStore } from '@/store/useStore';

import '../styles/globals.css';

// export const metadata: Metadata = {
//   title: 'Bus Ticket App',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  const navigate = useRouter();
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate.push('/login');
    } else {
      navigate.push('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <html lang="en">
      <body className="relative min-h-screen min-w-full">
        <QueryClientProvider client={queryClient}>
          <Header />
          <div className="flex items-center justify-center p-10"> {children}</div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
