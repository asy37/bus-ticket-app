'use client';
import React from 'react';

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { NavLinkTypes } from '@/lib/types/navLinkTypes';

type NavMenuProps = {
  data: NavLinkTypes;
};
export const NavMenu: React.FC<NavMenuProps> = ({ data }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {data.map((item) => (
          <NavigationMenuLink key={item.href} href={item.href} className="p-2">
            {item.title}
          </NavigationMenuLink>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
