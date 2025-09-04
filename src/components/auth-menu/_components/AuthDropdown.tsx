'use client';
import { useRouter } from 'next/navigation';

import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { LogInIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu';

export const AuthDropdown = () => {
  const navigate = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => navigate.push('/login')}>
          <LogInIcon />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
