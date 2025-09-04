'use client';
import React from 'react';

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { NavLinkTypes } from '@/lib/types/nav-menu/navLinkTypes';

type NavMenuProps = {
  data: NavLinkTypes;
};
export const NavMenu: React.FC<NavMenuProps> = ({ data }) => {
  return (
    <NavigationMenu className="w-full">
      <NavigationMenuList>
        {data.map((item) => (
          <NavigationMenuLink
            key={item.href}
            href={item.href}
            className="text-primary transation-colors p-2 duration-300 hover:scale-105"
          >
            {item.title}
          </NavigationMenuLink>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
