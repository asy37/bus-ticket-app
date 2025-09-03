import Image from 'next/image';

import { NAV_LINKS } from '@/lib/constants/navLinks';

import { AuthMenu } from '../auth-menu/AuthMenu';
import { NavMenu } from '../nav-menu';

export const Header = () => {
  return (
    <header className="transation-colors sticky top-0 z-50 flex w-full items-center justify-around border-b bg-white p-2 duration-300">
      <Image src="/bus.png" alt="Logo" width={80} height={80} />
      <NavMenu data={NAV_LINKS} />
      <AuthMenu />
    </header>
  );
};
