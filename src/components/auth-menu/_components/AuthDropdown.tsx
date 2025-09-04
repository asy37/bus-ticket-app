'use client';
import { useRouter } from 'next/navigation';

import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { LogInIcon } from 'lucide-react';

import { useStore } from '@/store/useStore';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu';

export const AuthDropdown = () => {
  const { setIsAuthenticated } = useStore();

  const navigate = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);

    navigate.push('/login');
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" className="size-10 rounded-full" />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleLogout}>
          <LogInIcon />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
