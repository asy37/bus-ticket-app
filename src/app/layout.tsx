'use client';
import type { Metadata } from 'next';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Header } from '@/components/header';

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

  return (
    <html lang="en">
      <body className="relative min-h-screen min-w-full">
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
