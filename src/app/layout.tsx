import type { Metadata } from 'next';

import { Header } from '@/components/header';

import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Bus Ticket App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen min-w-full">
        <Header />
        {children}
      </body>
    </html>
  );
}
