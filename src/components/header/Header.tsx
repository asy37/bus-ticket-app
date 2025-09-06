import React from 'react';
import Image from 'next/image';

import { NAV_LINKS } from '@/lib/constants/navLinks';

import { AuthMenu } from '../auth-menu/AuthMenu';
import { NavMenu } from '../nav-menu';

export const Header = () => {
  return (
    <header className="transation-colors sticky top-0 z-50 grid w-full grid-cols-3 border-b bg-white p-2 duration-300">
      <div className="flex items-center justify-center">
        <Image src="/logo/bus.png" alt="Logo" width={80} height={80} />
      </div>
      <div className="flex items-center justify-center">
        <NavMenu data={NAV_LINKS} />
      </div>
      <div className="flex items-center justify-center">
        <AuthMenu />
      </div>
    </header>
  );
};
