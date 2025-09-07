import React from 'react';
import Image from 'next/image';

import { AuthMenu } from '../auth-menu/AuthMenu';

export const Header = () => {
  return (
    <header className="transation-colors sticky top-0 z-50 flex w-full items-center justify-between border-b bg-white p-2 px-20 duration-300">
      <div className="flex items-center justify-center">
        <Image src="/logo/bus.png" alt="Logo" width={80} height={80} />
      </div>

      <div className="flex items-center justify-end">
        <AuthMenu />
      </div>
    </header>
  );
};
